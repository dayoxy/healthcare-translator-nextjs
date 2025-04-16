# 🌍 Healthcare Translator Web App (Next.js + OpenAI)

This is a real-time multilingual healthcare translator web app built with **Next.js** and powered by **OpenAI GPT-3.5**. It allows seamless voice-based conversations between patients and healthcare providers across language barriers.

Live demo: [🌐 Launch App](https://healthcare-translator-nextjs.vercel.app)

---

## 🚀 Features

- 🎙️ **Voice-to-Text Input**: Uses browser's Web Speech API for live voice capture
- 🌐 **Real-Time Translation**: Translates medical dialogue using OpenAI Chat API
- 🔊 **Audio Playback**: Outputs translated text using browser-based speech synthesis
- 📱 **Mobile-First Design**: Fully responsive and optimized for mobile & desktop
- 🛡️ **Secure API Integration**: Uses `.env.local` to protect API key

---

## 🧠 Tech Stack

- **Frontend**: Next.js, React
- **Backend**: API Routes in Next.js
- **AI Engine**: OpenAI GPT-3.5 (via `/api/translate`)
- **Voice Input**: Web Speech API
- **Audio Output**: Browser's `SpeechSynthesisUtterance`

---

## 🛠️ Local Setup

1. Clone the repository:
```bash
git clone https://github.com/dayoxy/healthcare-translator-nextjs.git
cd healthcare-translator-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Add your OpenAI key to `.env.local`:
```
OPENAI_API_KEY=your-key-here
```

4. Run the app:
```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📦 Deploy

The app is deployed using [Vercel](https://vercel.com/). You can easily deploy your own version by linking this repo and adding your environment variable.

---

## 🧑‍💻 Author

Built by **Adedayo Oguntonade**  
🔗 [LinkedIn](https://linkedin.com/in/AdedayoOguntonade)  
💻 [GitHub](https://github.com/dayoxy)

---

## 📜 License

MIT License — free to use with attribution.
