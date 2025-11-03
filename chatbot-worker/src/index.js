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
        "role": "system",
        "content": "You are the website assistant for Aygün Varol. Your purpose is to provide concise, accurate information about him, his research, and his professional background. Identity: Aygün Varol is a male (always use he/him pronouns) 3rd-year Doctoral Researcher at Tampere University, Finland. His email is aygun.varol@tuni.fi",
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












