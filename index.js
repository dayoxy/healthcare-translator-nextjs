import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [originalText, setOriginalText] = useState('...');
  const [translatedText, setTranslatedText] = useState('...');
  const [targetLang, setTargetLang] = useState('es');

  let recognition;
  if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      setOriginalText(transcript);
      translateText(transcript);
    };
  }

  const startListening = () => {
    if (recognition) recognition.start();
  }

  const speakTranslation = () => {
    const utterance = new SpeechSynthesisUtterance(translatedText);
    speechSynthesis.speak(utterance);
  }

  const translateText = async (text) => {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, targetLang })
    });

    const data = await response.json();
    setTranslatedText(data.translation);
  }

  return (
    <div className="container">
      <Head>
        <title>Healthcare Translator</title>
      </Head>
      <h1>Healthcare Translation Assistant</h1>
      <div className="language-selectors">
        <label>To:</label>
        <select value={targetLang} onChange={e => setTargetLang(e.target.value)}>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="ha">Hausa</option>
          <option value="yo">Yoruba</option>
        </select>
      </div>
      <button onClick={startListening}>Start Speaking</button>
      <div className="transcript">
        <h3>Original:</h3>
        <p>{originalText}</p>
      </div>
      <div className="translation">
        <h3>Translated:</h3>
        <p>{translatedText}</p>
      </div>
      <button onClick={speakTranslation}>Speak</button>
      <style jsx>{`
        .container { max-width: 600px; margin: auto; padding: 20px; font-family: Arial; }
        button { padding: 10px 20px; margin: 10px 0; font-size: 16px; }
        .transcript, .translation {
          background: #fff; padding: 15px; border-radius: 5px; margin-top: 10px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .language-selectors { margin-bottom: 15px; }
      `}</style>
    </div>
  )
}
