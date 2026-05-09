export default {
  async fetch(request) {
    const url = new URL(request.url);
    const targetUrl = 'https://mwask-anicove.hf.space/' + url.pathname.slice(1) + url.search;
    return Response.redirect(targetUrl, 302);
  },
}
