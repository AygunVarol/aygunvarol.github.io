---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
description: "Doctoral Researcher at Tampere University working on AI-driven smart indoor environments, IoT sensor networks, and privacy-aware AI agents."
---

Doctoral Researcher, Department of Computing Sciences, Tampere University, Finland

I develop AI-driven smart indoor environments that improve health and comfort while ensuring privacy and sustainability through IoT sensor networks.

📧 [aygun.varol@tuni.fi](mailto:aygun.varol@tuni.fi) [📄 CV](https://aygunvarol.github.io/files/Aygun_CV.pdf){: .btn .btn--primary } [🎯 DSc Poster](https://aygunvarol.github.io/files/Aygun_Poster.pdf){: .btn .btn--outline }

## Research Interests

<div align="justify">
In my research, I aim to find an optimal integration of Internet of Things (IoT) sensor networks in indoor environments and develop smart systems that efficiently collect and process data in order to create comfortable, healthy, and sustainable living and working spaces. I am also interested in the applications of AI models such as transformer networks and Large Language Models (LLMs) to enhance smart space functionalities. In parallel with the use of AI, I investigate the potential risks of deploying autonomous AI agents in smart spaces and how to mitigate them.<br><br></div>

## AI Assistant
> Try asking:
> - “How do you use IoT sensors in your research?”
> - “What is the EVIL-AI project about?”
> - “How do you address privacy in smart homes?”
<div id="ai-agent"></div>
<script>
(() => {
{% if site.chatbot %}
  const config = {{ site.chatbot | jsonify }};
{% else %}
  const config = {};
{% endif %}
  const ENDPOINT = (config.endpoint || "").trim();
  const PLACEHOLDER = config.placeholder || "Ask about my research, IoT sensors, privacy, and AI agents.";

  const root = document.getElementById("ai-agent");
  if (!root) return;

  const html = `
  <style>
    .av-chat{max-width:720px;margin:1rem 0;padding:1rem;border:1px solid #ddd;border-radius:12px;font:16px/1.5 system-ui,-apple-system,Segoe UI,Roboto}
    .av-msgs{max-height:420px;overflow:auto;padding-bottom:0.5rem}
    .av-row{display:flex;gap:.5rem;margin:.5rem 0}
    .av-row.user{justify-content:flex-end}
    .av-bubble{padding:.6rem .8rem;border-radius:12px;max-width:85%}
    .av-row.user .av-bubble{background:#eef5ff}
    .av-row.assistant .av-bubble{background:#f6f6f6}
    .av-form{display:flex;gap:.5rem;margin-top:.5rem}
    .av-input{flex:1;padding:.6rem .8rem;border:1px solid #ccc;border-radius:10px}
    .av-btn{padding:.6rem .9rem;border:0;border-radius:10px;background:#111;color:#fff;cursor:pointer}
    .av-btn:disabled{opacity:.6;cursor:not-allowed}
  </style>
  <div class="av-chat" role="region" aria-label="AI chat agent">
    <div id="av-msgs" class="av-msgs" aria-live="polite"></div>
    <form id="av-form" class="av-form">
      <input id="av-input" class="av-input" type="text" autocomplete="off" />
      <button class="av-btn" type="submit">Ask</button>
    </form>
  </div>`;

  root.innerHTML = html;

  const msgsEl = document.getElementById("av-msgs");
  const form = document.getElementById("av-form");
  const input = document.getElementById("av-input");
  const button = form.querySelector("button");

  input.placeholder = PLACEHOLDER;

  const history = [];

  const escapeHtml = (value = "") =>
    value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const format = (value = "") =>
    escapeHtml(value).replace(/\n\n+/g, "<br><br>").replace(/\n/g, "<br>");

  function add(role, content) {
    const row = document.createElement("div");
    row.className = `av-row ${role}`;
    row.innerHTML = `<div class="av-bubble">${format(content)}</div>`;
    msgsEl.appendChild(row);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return row;
  }

  if (!ENDPOINT) {
    add(
      "assistant",
      "The AI assistant is offline right now. Deploy the Cloudflare Worker and set `site.chatbot.endpoint` in `_config.yml` to enable it."
    );
    input.disabled = true;
    button.disabled = true;
    form.setAttribute("aria-disabled", "true");
    return;
  }

  add(
    "assistant",
    "Hi! I can answer questions about Aygün's research, IoT sensors, privacy-aware smart spaces, and related AI work."
  );

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const content = input.value.trim();
    if (!content) return;

    input.value = "";
    add("user", content);
    history.push({ role: "user", content });

    const thinking = add("assistant", "…");
    button.disabled = true;
    input.disabled = true;

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const payload = await response.json();
      if (payload.error) throw new Error(payload.error);

      const reply = (payload.reply || "").trim();
      if (!reply) throw new Error("Empty reply from the assistant.");

      history.push({ role: "assistant", content: reply });
      thinking.querySelector(".av-bubble").innerHTML = format(reply);
    } catch (error) {
      thinking.querySelector(".av-bubble").textContent = `Error: ${error.message}`;
    } finally {
      button.disabled = false;
      input.disabled = false;
      input.focus();
    }
  });
})();
</script>

## Bio

<div align="justify">
I am in my third year of D.Sc. studies at Tampere University. I have three supervisors for my doctoral research: Associate Professor Johanna Virkki (my main supervisor at Tampere University), Dr. Naser Hossein Motlagh (a co-supervisor at the University of Helsinki), and Dr. Mirka Leino (a co-supervisor at Satakunta University of Applied Sciences). I am affiliated with the Augmentative Technology Group and take part as a researcher in the EVIL-AI project, which investigates the negative effects of AI and explores strategies for mitigation.<br><br>
  
Prior to my position at Tampere University, I was research assistant at Isparta University of Applied Sciences where I also earned my M.Sc. in Electrical and Electronics Engineering. During my master’s studies, I focused on analog circuit design under the supervision of Prof. Abdülkadir Çakır (my main supervisor) and Assoc. Prof. Fırat Yücel (my co-supervisor at Akdeniz University). I earned my B.Sc. in Electrical and Electronics Engineering from Manisa Celal Bayar University. My research was on industrial automation under the guidance of Prof. Sezai Taşkın.</div>

## My Latest AI Podcasts

_For more, please visit the Productivity page._

Code Execution with MCP
------
<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/4ucsWRNhysfPHltzHyGfyA?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

AI as a New Digital Species
------
<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/4OEt03x2Zh5ChcB2zjvOin?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

Why AI is a Ghost?
------
<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/15DNYC5Rmw7GoeMCNejLmF?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
