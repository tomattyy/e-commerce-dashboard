const client = require('prom-client');

const register = new client.Registry();

// Coleta métricas padrão do processo/Node (CPU, memória, event loop, etc.)
client.collectDefaultMetrics({ register });

// Contador total de requisições HTTP
const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total de requisições HTTP recebidas pela API',
  labelNames: ['method', 'route', 'status_code'],
  registers: [register],
});

// Histograma do tempo de resposta das requisições HTTP (em segundos)
const httpRequestDurationSeconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duração das requisições HTTP em segundos',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.05, 0.1, 0.3, 0.5, 1, 1.5, 2, 5],
  registers: [register],
});

module.exports = {
  register,
  httpRequestsTotal,
  httpRequestDurationSeconds,
};
