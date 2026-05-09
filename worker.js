export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Preserve pathname and query parameters
    const targetUrl = 'https://mwask-anicove.hf.space/' + url.pathname.slice(1) + url.search;
    
    // Use 302 temporary redirect with proper headers
    return new Response(null, {
      status: 302,
      headers: {
        'Location': targetUrl,
        'Cache-Control': 'no-cache'
      }
    });
  },
}
