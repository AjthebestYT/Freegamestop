const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // Forward the request to the target server (e.g., http://example.com)
  proxy.web(req, res, { target: 'http://example.com' });
});

server.listen(8080, () => {
  console.log('Proxy server running on http://localhost:8080');
});
