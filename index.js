const FILE_NAME = 'Index.js';
const bodyParser = require('body-parser');
const compression = require('compression');
require('dotenv').config();
const express = require('express');
const logger = require('./logger/index')(FILE_NAME);
const { errorResponse } = require('./lib/common/Util')

require('./database/models/mainDb/associations');
require('./database/index');


const app = express();
app.use(compression());
app.use(bodyParser.json());

app.use('/ats/',require('./src/routes/index'));

app.get('/', async (req, res) => {
    res
      .status(200)
      .json({
        message: 'Backend Is working'
      });
})
app.use(errorResponse);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    logger.info(`Zimyo ATS is live on port ${PORT}`);
})
