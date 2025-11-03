# Personal website

This repository hosts the source for [aygunvarol.github.io](https://aygunvarol.github.io), a Jekyll site based on the Minimal Mistakes theme. It now includes a configurable AI assistant that answers questions about my research on smart indoor environments, IoT sensing, and trustworthy AI.

## Prerequisites
- Ruby 3.x with Bundler (for Jekyll)
- Node.js 18+ and npm (for asset builds and the chatbot worker)
- Git LFS is **not** required

## Local preview
1. Install Ruby gems once: `bundle install`
2. Install Node packages (optional but recommended): `npm install`
3. Start the site with live reload: `bundle exec jekyll serve --livereload`
4. Open <http://127.0.0.1:4000> in your browser

## Chatbot worker (Cloudflare)
The AI assistant runs on a small Cloudflare Worker located in `chatbot-worker/`.

1. Install Node dependencies if you have not already: `npm install`
2. Authenticate Wrangler (one time): `npx wrangler login`
3. Set your Groq API key securely: `npx wrangler secret put GROQ_API_KEY`
4. (Optional) Update `chatbot-worker/wrangler.toml` with a custom worker name or origin allowlist
5. Test locally: `npm run chatbot:dev`
6. Deploy: `npm run chatbot:deploy`
7. Copy the deployed URL (for example `https://<worker>.workers.dev/chat`) and set `site.chatbot.endpoint` in `_config.yml`

The worker expects these environment variables:
- `GROQ_API_KEY` *(secret)* — personal Groq API token
- `ALLOWED_ORIGINS` *(optional)* — comma separated list of allowed origins (defaults to GitHub Pages + localhost)
- `GROQ_MODEL` *(optional)* — override the model name (`llama-3.3-70b-versatile` by default)

## Repository layout highlights
- `_pages/` — content pages rendered by Jekyll (home, CV, talks, etc.)
- `assets/` — theme CSS/JS bundles
- `files/` — PDFs linked from the site
- `chatbot-worker/` — Cloudflare Worker that proxies chat requests to Groq

## Asset pipeline helpers
- `npm run build:js` — rebuild `assets/js/main.min.js` if you customise theme JavaScript
- `npm run watch:js` — watch for JS changes and rebuild automatically

## Housekeeping
Template demo content, obsolete notebooks, and unused collections were removed to keep the repository lean. Add new blog posts or collections by creating the relevant folders again if needed.

Feel free to open an issue or reach out if something looks off.
