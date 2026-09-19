const { Router } = require('express');
const categoryRoutes = require('./category.routes');
const productRoutes = require('./product.routes');
const customerRoutes = require('./customer.routes');
const orderRoutes = require('./order.routes');
const metricsMiddleware = require('../middlewares/metrics');
const { register } = require('../config/metrics');

const router = Router();

// Instrumenta todas as requisições que passam por este router
router.use(metricsMiddleware);

// Rota exposta para o Prometheus fazer o scrape das métricas
router.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.send(await register.metrics());
});

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/customers', customerRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
