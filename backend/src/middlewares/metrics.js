const {
  httpRequestsTotal,
  httpRequestDurationSeconds,
} = require('../config/metrics');

function metricsMiddleware(req, res, next) {
  const start = process.hrtime();

  res.on('finish', () => {
    const route = req.route
      ? `${req.baseUrl}${req.route.path}`
      : req.baseUrl || req.path;

    const labels = {
      method: req.method,
      route,
      status_code: res.statusCode,
    };

    httpRequestsTotal.inc(labels);

    const [seconds, nanoseconds] = process.hrtime(start);
    const durationInSeconds = seconds + nanoseconds / 1e9;
    httpRequestDurationSeconds.observe(labels, durationInSeconds);
  });

  next();
}

module.exports = metricsMiddleware;
