import OpenAI from "openai";
import fs from "fs";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ================= Step 1 : Upload File =================

async function uploadFile() {
  try {
    console.log("Uploading file...");

    const file = await openai.files.create({
      file: fs.createReadStream("ITI Rules.jsonl"),
      purpose: "fine-tune",
    });

    console.log(`File uploaded successfully.`);
    console.log(`File ID: ${file.id}`);

    return file.id;
  } catch (error) {
    console.error("Upload Error:", error);
    process.exit(1);
  }
}

// ================= Step 2 : Create Fine-Tuning Job =================

async function createFineTuningJob(fileID) {
  try {
    console.log("Creating fine-tuning job...");

    const job = await openai.fineTuning.jobs.create({
      training_file: fileID,
      model: "gpt-4o-mini-2024-07-18",
    });

    console.log(`Job created successfully.`);
    console.log(`Job ID: ${job.id}`);

    return job.id;
  } catch (error) {
    console.error("Job Creation Error:", error);
    process.exit(1);
  }
}

// ================= Step 3 : Track Job Status =================

async function trackJobStatus(jobID) {
  let status = "queued";

  while (status !== "succeeded" && status !== "failed") {
    await new Promise((resolve) => setTimeout(resolve, 30000));

    const job = await openai.fineTuning.jobs.retrieve(jobID);

    status = job.status;

    console.log(`[${new Date().toLocaleTimeString()}] Status: ${status}`);

    if (status === "succeeded") {
      console.log("\nFine-Tuning Completed Successfully!");
      console.log(`Fine-Tuned Model: ${job.fine_tuned_model}`);

      return job.fine_tuned_model;
    }

    if (status === "failed") {
      console.log("Fine-Tuning Failed");
      console.log(job.error);
      process.exit(1);
    }
  }
}

// ================= Step 4 : Test Model =================

async function testModel(modelName) {
  try {
    const completion = await openai.chat.completions.create({
      model: modelName,
      messages: [
        {
          role: "developer",
          content:
            "You are an ITI Administrative Assistant. Only answer questions about ITI attendance rules and point deductions.",
        },
        {
          role: "user",
          content:
            "Hey, I'm a bit behind schedule and just walked into the lab. Since this is my first time being late, am I going to lose any points or get a warning?",
        },
      ],
    });

    console.log("\nAssistant Response:");
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Chat Completion Error:", error);
  }
}

// ================= Main =================

async function main() {
  const fileID = await uploadFile();

  const jobID = await createFineTuningJob(fileID);

  const fineTunedModel = await trackJobStatus(jobID);

  await testModel(fineTunedModel);
}

main();
