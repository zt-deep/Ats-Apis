const express = require('express');
const logger = require('./logger/index')('index.js');
require('./database/models/index');

const app = express();

app.get('/', async (req, res) => {
    // const data = await db.AppMenuMasterModel.findAll();
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
