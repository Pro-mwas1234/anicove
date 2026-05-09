export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const targetUrl = (env.TARGET_URL || 'https://mwask-anicove.hf.space/') + url.pathname.slice(1) + url.search;
    return Response.redirect(targetUrl, 302);
  },
}
