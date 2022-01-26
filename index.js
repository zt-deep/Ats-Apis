const FILE_NAME = 'Index.js';
const compression = require('compression');
const express = require('express');
const logger = require('./logger/index')(FILE_NAME);
require('./database/index');

const app = express();
app.use(compression());

app.get('/', async (req, res) => {
    res
      .status(200)
      .json({
        message: 'Backend Is working'
      });
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    logger.info(`Zimyo ATS is live on ${PORT}`);
})
