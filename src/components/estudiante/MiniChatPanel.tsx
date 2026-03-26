"use client";

import { useState } from "react";

const initialMessages = [
  { sender: "Docente", text: "Recuerden revisar la actividad de esta semana." },
  { sender: "Estudiante", text: "Profesor, ¿la entrega es individual?" },
];

export default function MiniChatPanel() {
  const [messages, setMessages] = useState(initialMessages);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "Estudiante", text: text.trim() },
    ]);
    setText("");
  };

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Chat académico</h2>
      <p className="mt-1 text-sm text-slate-600">
        Canal básico de comunicación entre docente y estudiante.
      </p>

      <div className="mt-5 space-y-3 rounded-2xl bg-slate-50 p-4">
        {messages.map((msg, index) => (
          <div
            key={`${msg.sender}-${index}`}
            className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
              msg.sender === "Docente"
                ? "bg-blue-100 text-blue-900"
                : "ml-auto bg-emerald-100 text-emerald-900"
            }`}
          >
            <p className="mb-1 text-xs font-semibold opacity-70">{msg.sender}</p>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
        />
        <button
          type="button"
          onClick={sendMessage}
          className="rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-3 font-semibold text-white"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}