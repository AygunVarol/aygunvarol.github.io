---
permalink: /
title: "Aygün Varol"
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
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.95;
  margin-bottom: 1rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  display: block;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
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

.btn-secondary {
  background: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.3);
}

.section {
  margin: 3rem 0;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #667eea;
  display: inline-block;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  transition: all 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #2c3e50;
}

.card-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
}

.card-link:hover {
  text-decoration: underline;
}

.research-interests {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.interests-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.interest-tag {
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 2px solid #667eea;
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
}

.news-item {
  padding: 1rem;
  border-left: 3px solid #667eea;
  margin-bottom: 1rem;
  background: #f8f9fa;
  border-radius: 0 8px 8px 0;
}

.news-date {
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
}

.featured-podcasts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.contact-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 3rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.social-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  background: rgba(255,255,255,0.2);
  border-radius: 8px;
  transition: all 0.3s;
}

.social-link:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 1.5rem;
  }
  .hero-stats {
    gap: 1rem;
  }
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="hero-section">
  <h1 class="hero-title">Aygün Varol, M.Sc.</h1>
  <p class="hero-subtitle">Doctoral Researcher | AI-Driven Smart Environments | IoT & Privacy</p>
  <p>Department of Computing Sciences, Tampere University, Finland</p>
  
  <div class="hero-stats">
    <div class="stat-item">
      <span class="stat-number">3rd</span>
      <span class="stat-label">Year PhD</span>
    </div>
    <div class="stat-item">
      <span class="stat-number">IoT</span>
      <span class="stat-label">Sensor Networks</span>
    </div>
    <div class="stat-item">
      <span class="stat-number">AI</span>
      <span class="stat-label">Smart Spaces</span>
    </div>
    <div class="stat-item">
      <span class="stat-number">15+</span>
      <span class="stat-label">AI Podcasts</span>
    </div>
  </div>
  
  <div class="cta-buttons">
    <a href="/files/Aygun_CV.pdf" class="btn btn-primary">📄 Download CV</a>
    <a href="/files/Aygun_Poster.pdf" class="btn btn-secondary">🎯 Research Poster</a>
    <a href="/publications/" class="btn btn-secondary">📚 Publications</a>
    <a href="mailto:aygun.varol@tuni.fi" class="btn btn-secondary">✉️ Contact Me</a>
  </div>
</div>

## Research Focus

<div class="research-interests">
  <p style="line-height: 1.8;">I develop <strong>AI-driven smart indoor environments</strong> that improve health and comfort while ensuring privacy and sustainability through IoT sensor networks. My work bridges the gap between cutting-edge AI technologies and practical applications in everyday living and working spaces.</p>
  
  <div class="interests-list">
    <span class="interest-tag">🏠 Smart Spaces</span>
    <span class="interest-tag">🌐 IoT Networks</span>
    <span class="interest-tag">🤖 AI Agents</span>
    <span class="interest-tag">🔒 Privacy-Aware Systems</span>
    <span class="interest-tag">🌱 Sustainability</span>
    <span class="interest-tag">🧠 Transformer Networks</span>
    <span class="interest-tag">💬 Large Language Models</span>
    <span class="interest-tag">⚠️ AI Risk Assessment</span>
  </div>
</div>

## Current Research Projects

<div class="cards-grid">
  <div class="card">
    <div class="card-title">🔬 EVIL-AI Project</div>
    <div class="card-description">
      Investigating negative effects of AI and exploring mitigation strategies. Examining potential risks of autonomous AI agents in smart spaces and developing frameworks for responsible AI deployment.
    </div>
    <a href="#" class="card-link">Learn more →</a>
  </div>
  
  <div class="card">
    <div class="card-title">🏢 Smart Indoor Environments</div>
    <div class="card-description">
      Developing privacy-preserving IoT sensor networks that optimize indoor air quality, temperature, and lighting while minimizing energy consumption and protecting user privacy.
    </div>
    <a href="#" class="card-link">View project →</a>
  </div>
  
  <div class="card">
    <div class="card-title">🧠 AI-Enhanced IoT Systems</div>
    <div class="card-description">
      Applying transformer networks and LLMs to enhance smart space functionalities, enabling natural language interaction and intelligent automation in building management.
    </div>
    <a href="#" class="card-link">Explore research →</a>
  </div>
</div>

## Recent Updates

<div class="section">
  <div class="news-item">
    <span class="news-date">November 2024</span>
    <p><strong>New AI Podcast Series:</strong> Launched series exploring cutting-edge AI topics including MCP, AI agents, and future of programming.</p>
  </div>
  
  <div class="news-item">
    <span class="news-date">2024</span>
    <p><strong>PhD Progress:</strong> Currently in 3rd year of doctoral studies at Tampere University, working on privacy-aware smart environments.</p>
  </div>
  
  <div class="news-item">
    <span class="news-date">Ongoing</span>
    <p><strong>EVIL-AI Research:</strong> Active researcher investigating AI risks and mitigation strategies with Augmentative Technology Group.</p>
  </div>
</div>

## Featured AI Podcasts

Exploring the intersection of AI, technology, and society through conversations and analysis.

<div class="featured-podcasts">
  <div>
    <h4>🔧 Code Execution with MCP</h4>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/4ucsWRNhysfPHltzHyGfyA?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
  
  <div>
    <h4>🧬 AI as a New Digital Species</h4>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/4OEt03x2Zh5ChcB2zjvOin?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
  
  <div>
    <h4>🔮 Future of Programming and AI</h4>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/6y1aMwLs9RU9LF9j9zZVHg?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
</div>

<div style="text-align: center; margin-top: 1.5rem;">
  <a href="/podcasts/" class="btn btn-primary">🎙️ View All Podcasts</a>
</div>

## Ask My AI Assistant

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
    "Hi! I can answer questions about Aygün's research, IoT sensors, privacy-aware smart spaces, and related AI work. What would you like to know?"
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

## Academic Background

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 12px; line-height: 1.8;">

**Current Position:** Doctoral Researcher (3rd year), Department of Computing Sciences, Tampere University

**Supervision Team:**
- **Main Supervisor:** Associate Professor Johanna Virkki (Tampere University)
- **Co-Supervisor:** Dr. Naser Hossein Motlagh (University of Helsinki)
- **Co-Supervisor:** Dr. Mirka Leino (Satakunta University of Applied Sciences)

**Affiliation:** Augmentative Technology Group, Tampere University

**Education:**
- **D.Sc. (ongoing)** - Computing Sciences, Tampere University, Finland
- **M.Sc.** - Electrical and Electronics Engineering, Isparta University of Applied Sciences, Turkey
  - Focus: Analog Circuit Design
  - Supervisors: Prof. Abdülkadir Çakır, Assoc. Prof. Fırat Yücel
- **B.Sc.** - Electrical and Electronics Engineering, Manisa Celal Bayar University, Turkey
  - Focus: Industrial Automation
  - Supervisor: Prof. Sezai Taşkın

</div>

<div class="contact-section">
  <h2 style="margin-top: 0;">Let's Connect</h2>
  <p>Interested in collaboration, discussing research, or learning more about my work?</p>
  
  <div class="social-links">
    <a href="mailto:aygun.varol@tuni.fi" class="social-link">📧 Email</a>
    <a href="/files/Aygun_CV.pdf" class="social-link">📄 CV</a>
    <a href="#" class="social-link">🎓 Google Scholar</a>
    <a href="#" class="social-link">🔬 ResearchGate</a>
    <a href="#" class="social-link">💼 LinkedIn</a>
    <a href="#" class="social-link">🐙 GitHub</a>
  </div>
</div>