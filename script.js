const chat = document.getElementById("chat");

async function send() {
  const input = document.getElementById("input");
  const msg = input.value.trim();
  if (!msg) return;

  chat.innerHTML += `<div class="message user">You: ${msg}</div>`;
  input.value = "";

  const res = await fetch("https://sipra-js-backend.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });

  const data = await res.json();
  chat.innerHTML += `<div class="message bot">Sipra: ${data.reply}</div>`;
  chat.scrollTop = chat.scrollHeight;
}
