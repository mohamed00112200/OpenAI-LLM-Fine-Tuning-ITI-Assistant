# OpenAI LLM Fine-Tuning - ITI Assistant 🚀

A practical project demonstrating how to fine-tune an OpenAI GPT-4o-mini model to create a specialized AI assistant for ITI administrative rules.

The fine-tuned model is trained on custom JSONL data and designed to answer questions related to attendance policies, penalties, and point deduction rules.

---

## 📌 Project Overview

This project shows the complete fine-tuning workflow using OpenAI API:

1. Upload custom training dataset
2. Create a fine-tuning job
3. Monitor training progress
4. Test the fine-tuned model with real queries

The goal is to transform a general-purpose LLM into a domain-specific assistant.

---

## 🤖 Use Case

**ITI Administrative Assistant**

The fine-tuned model can answer questions about:

- Attendance rules
- Late arrival penalties
- Absence policies
- Point deductions
- Administrative regulations

---

## 🛠️ Technologies Used

- Node.js
- JavaScript / TypeScript
- OpenAI API
- GPT-4o-mini
- LLM Fine-Tuning
- Generative AI
- JSONL Training Dataset
- dotenv

---

## 🏗️ Workflow Architecture

```
Training Dataset (JSONL)
          |
          ↓
Upload File to OpenAI
          |
          ↓
Create Fine-Tuning Job
          |
          ↓
GPT-4o-mini Fine-Tuning
          |
          ↓
Fine-Tuned Model
          |
          ↓
AI Assistant Testing
```

---

## 📂 Project Structure

```
.
├── index.js
├── ITI Rules.jsonl
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Setup

Clone repository:

```bash
git clone https://github.com/yourusername/OpenAI-LLM-Fine-Tuning-ITI-Assistant.git
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
OPENAI_API_KEY=your_api_key
```

---

## 🚀 Run Project

Start fine-tuning process:

```bash
node index.js
```

The script will:

- Upload the dataset
- Create a fine-tuning job
- Track training status
- Return the fine-tuned model ID
- Test the AI assistant

---

## 📊 Example

### User:

```
I arrived late to the lab for the first time.
Will I lose points?
```

### AI Assistant:

```
According to ITI attendance rules...
```

---

## 🎯 Learning Outcomes

- Understanding LLM fine-tuning workflow
- Working with OpenAI Fine-Tuning API
- Preparing JSONL training data
- Building domain-specific AI assistants
- Integrating LLMs into applications

---

## 👨‍💻 Author

Mohamed Lotfy

Generative AI Engineer | Full-Stack Developer