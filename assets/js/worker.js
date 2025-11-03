// filename: worker.js
export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "*";
    const cors = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST")
      return new Response("Method Not Allowed", { status: 405, headers: cors });

    try {
      const { messages = [] } = await request.json();

      const sys = {
        role: "system",
        content:
          "You are Aygun Varol’s website assistant. Be concise, cite concrete facts when possible, and focus on AI-driven smart indoor environments, IoT sensors, privacy, sustainability, and the author’s research.",
      };

      const body = {
        model: "llama-3.3-70b-versatile",
        messages: [sys, ...messages],
        temperature: 0.2,
        // stream: true, // (enable later if you want token streaming)
      };

      const resp = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${env.GROQ_API_KEY}`,
          },
          body: JSON.stringify(body),
        }
      );

      if (!resp.ok) {
        const err = await resp.text();
        return new Response(JSON.stringify({ error: err }), {
          status: 500,
          headers: { ...cors, "Content-Type": "application/json" },
        });
      }

      const data = await resp.json();
      const reply = data.choices?.[0]?.message?.content ?? "";
      return new Response(JSON.stringify({ reply }), {
        headers: { ...cors, "Content-Type": "application/json" },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
  },
};
