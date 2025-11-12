---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
}

.hero-title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.1rem;
  opacity: 0.95;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-color: #a964d6ff;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 2.5rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #667eea;
  display: inline-block;
}

.research-interests-box {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  border-left: 4px solid #667eea;
}

.bio-box {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  line-height: 1.8;
}

.podcast-section {
  margin: 2rem 0;
}

.podcast-item {
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s;
}

.podcast-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.podcast-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 1.5rem;
  }
  .cta-buttons {
    flex-direction: column;
  }
}
</style>

<div class="hero-section">
  <h1 class="hero-title">Doctoral Researcher, Department of Computing Sciences, Tampere University, Finland</h1>
  <p class="hero-subtitle">I develop AI-driven smart indoor environments that improve health and comfort while ensuring privacy and sustainability through IoT sensor networks.</p>
  <p style="margin-top: 1rem; font-size: 1rem;">📧 E-mail: aygun.varol@tuni.fi</p>
  
  <div class="cta-buttons">
    <a href="https://aygunvarol.github.io/files/Aygun_CV.pdf" class="btn btn-primary">📄 My CV</a>
    <a href="https://aygunvarol.github.io/files/Aygun_Poster.pdf" class="btn btn-primary">🎯 My DSc Poster</a>
  </div>
</div>

<h2 class="section-title">Research Interests</h2>

<div class="research-interests-box">
  <div align="justify">
In my research, I aim to find an optimal integration of Internet of Things (IoT) sensor networks in indoor environments and develop smart systems that efficiently collect and process data in order to create comfortable, healthy, and sustainable living and working spaces. I am also interested in the applications of AI models such as transformer networks and Large Language Models (LLMs) to enhance smart space functionalities. Of course, with utilization of AI, I investigate potential risks of utilizing autonomous AI agents in smart spaces.
  </div>
</div>

<h2 class="section-title">AI Assistant</h2>

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
    .av-chat{max-width:720px;margin:1rem auto;padding:1.5rem;border:2px solid #667eea;border-radius:12px;font:16px/1.5 system-ui,-apple-system,Segoe UI,Roboto;background:#f8f9fa}
    .av-msgs{max-height:420px;overflow:auto;padding-bottom:0.5rem}
    .av-row{display:flex;gap:.5rem;margin:.5rem 0}
    .av-row.user{justify-content:flex-end}
    .av-bubble{padding:.8rem 1rem;border-radius:12px;max-width:85%;box-shadow:0 2px 8px rgba(0,0,0,0.1)}
    .av-row.user .av-bubble{background:#667eea;color:white}
    .av-row.assistant .av-bubble{background:white}
    .av-form{display:flex;gap:.5rem;margin-top:1rem}
    .av-input{flex:1;padding:.8rem 1rem;border:2px solid #667eea;border-radius:10px;font-size:1rem}
    .av-btn{padding:.8rem 1.5rem;border:0;border-radius:10px;background:#667eea;color:#fff;cursor:pointer;font-weight:600;transition:all 0.3s}
    .av-btn:hover{background:#5568d3;transform:translateY(-2px)}
    .av-btn:disabled{opacity:.6;cursor:not-allowed;transform:none}
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

<h2 class="section-title">Bio</h2>

<div class="bio-box">
  <div align="justify">
I am in my third year in my D.Sc. at Tampere University. I have three supervisors for my doctoral research: Associate Professor Johanna Virkki (my main supervisor at Tampere University), Dr. Naser Hossein Motlagh (a co-supervisor at the University of Helsinki), and Dr. Mirka Leino (a co-supervisor at Satakunta University of Applied Sciences). I am affiliated with the Augmentative Technology Group and take part as a researcher in the EVIL-AI project, which investigates the negative effects of AI and explores strategies for mitigation.<br><br>
  
Prior to my position at Tampere University, I was research assistant at Isparta University of Applied Sciences where I also earned my M.Sc. in Electrical and Electronics Engineering. During my master's studies, I focused on analog circuit design under the supervision of Prof. Abdülkadir Çakır (my main supervisor) and Assoc. Prof. Fırat Yücel (my co-supervisor at Akdeniz University). I earned my B.Sc. in Electrical and Electronics Engineering from Manisa Celal Bayar University. My research was on industrial automation under the guidance of Prof. Sezai Taşkın.
  </div>
</div>

<h2 class="section-title">My Latest AI Podcasts</h2>

<p style="margin-bottom: 1.5rem;">For more please visit the Productivity page.</p>

<div class="podcast-section">
  <div class="podcast-item">
    <div class="podcast-title">Code Execution with MCP</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/4ucsWRNhysfPHltzHyGfyA?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">AI as a New Digital Species</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/4OEt03x2Zh5ChcB2zjvOin?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">Why AI is a Ghost?</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/15DNYC5Rmw7GoeMCNejLmF?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">DNA of AI</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/5toyY9VxQJJXuJCJcsNBkl?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">SuperMemory MCP</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/6GUsglf3PhPcIQfTA2DfIH?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">AI Application Spending</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/01eYM2ibFQnfYzKu4QfQFc?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">Efficient Context Engineering for AI Agents</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/0PPdA8fxVXDc8F1dvx2qTY?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">Building AI Life Co-Pilot</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/04tSqbPEUdN1Jipiwm5NOG?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">Future of Programming and AI</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/6y1aMwLs9RU9LF9j9zZVHg?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">Responsible and Secure AI Agents</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/0kh4oSfBgofrAxNUlQ4qFK?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">Managing People and AI</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/6AUUTCtt8rxlCuVORTE0bc?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">Nano Banana</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/6vAEqvbDVP3BORscZ77pVa?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">GPT Realtime</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/0dboYv34OyEKXoEI1Sp7QM?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="podcast-item">
    <div class="podcast-title">RAG is Dead</div>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/3YqDoiqVPhRIKJsMkl8VxB?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
</div>
