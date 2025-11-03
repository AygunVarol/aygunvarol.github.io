export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigins = (env.ALLOWED_ORIGINS || "*")
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);

    const allowAll = allowedOrigins.includes("*");
    const originAllowed = allowAll || (origin && allowedOrigins.includes(origin));
    const chosenOrigin = allowAll ? "*" : originAllowed ? origin : allowedOrigins[0] || "";

    const corsHeaders = {
      "Access-Control-Allow-Origin": chosenOrigin || "*",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
      Vary: "Origin",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (!originAllowed && !allowAll && allowedOrigins.length > 0) {
      return new Response("Forbidden", { status: 403, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
    }

    if (!env.GROQ_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing GROQ_API_KEY. Configure it before deploying." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    try {
      const payload = await request.json();
      const history = Array.isArray(payload?.messages) ? payload.messages : [];

const systemMessage = {
  role: "system",
  content: `You are Aygün Varol's website assistant. Aygün is male - always use he/him pronouns. Provide direct, concise answers about his research and background.

CORE INFO:
- Aygün Varol is a male doctoral researcher (use he/him pronouns)
- 3rd-year Doctoral Researcher, Tampere University, Finland
- Email: aygun.varol@tuni.fi
- Research: IoT sensor networks in smart indoor environments, AI/LLMs for smart spaces, sustainability, privacy
- Project: EVIL-AI (investigating AI risks and mitigation)
- Affiliation: Augmentative Technology Group

RESPONSE GUIDELINES:
- Keep answers brief and factual (2-3 sentences max)
- CRITICAL: ALWAYS use he/him pronouns when referring to Aygün Varol
- State information directly without hedging or speculation
- If you don't know something specific, say 'I don't have that information' and suggest contacting him directly
- Never apologize excessively or repeat information
- Use his email address when asked for contact info
- For current activities, acknowledge you only have static website information

EXAMPLES:
Q: Who is Aygün?
A: Aygün Varol is a doctoral researcher at Tampere University. He researches IoT sensor networks for smart indoor environments and AI applications in smart spaces.

Q: What is his email?
A: aygun.varol@tuni.fi

Q: What are his research interests?
A: He researches IoT sensor networks for smart indoor environments, AI applications in smart spaces, and privacy/sustainability concerns. He's also investigating risks of autonomous AI agents through the EVIL-AI project.`
};

      const body = {
        model: env.GROQ_MODEL || "qwen/qwen3-32b",
        messages: [systemMessage, ...history],
        temperature: 0.2,
      };

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.GROQ_API_KEY}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errText = await response.text();
        return new Response(JSON.stringify({ error: errText || response.statusText }), {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content?.trim();

      if (!reply) {
        return new Response(
          JSON.stringify({ error: "The language model returned an empty response." }),
          {
            status: 502,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      return new Response(JSON.stringify({ reply }), {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message || "Unknown error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};






