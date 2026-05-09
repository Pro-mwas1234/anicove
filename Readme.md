# Anicove Redirect

A simple redirect website that automatically redirects visitors to `https://mwask-anicove.hf.space/`.

## Deployment on Cloudflare Pages

1. Create a new GitHub repository named `anicove-redirect`
2. Push the files to the repository
3. Go to [Cloudflare Pages](https://pages.cloudflare.com)
4. Click "Connect to Git"
5. Select your `anicove-redirect` repository
6. Build settings:
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
7. Click "Save and Deploy"
8. Configure your custom domain in Cloudflare

## Deployment on Cloudflare Workers

1. Install Wrangler: `npm install -g wrangler`
2. Authenticate: `wrangler login`
3. Deploy: `wrangler publish`
4. Configure your domain routes in Cloudflare dashboard

---

**Redirect Target**: https://mwask-anicove.hf.space/
