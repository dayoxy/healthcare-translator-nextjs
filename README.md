# Healthcare Translator Web App (Next.js Version)

## Overview
A real-time voice-based medical translation app using:
- Web Speech API (voice input)
- OpenAI (GPT-3.5 Turbo) for translation
- SpeechSynthesis (voice playback)
- Hosted with Next.js for serverless API support

## Setup
1. Create a `.env.local` file in the root:
```
OPENAI_API_KEY=your_openai_key_here
```

2. Install dependencies:
```
npm install
```

3. Run locally:
```
npm run dev
```

4. Deploy to Vercel and add `OPENAI_API_KEY` in project settings.
