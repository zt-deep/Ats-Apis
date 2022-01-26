const express = require('express');
const logger = require('./logger/index');
const db = require('./database/models/index');

db.sequelize.sync({ force: false }).then(() => {
  console.log('#droped the database and and re-synced.');
});



const app = express();

app.get('/', async (req, res) => {
    const data = await db.AppMenuMasterModel.findAll();
    res
      .status(200)
      .json({
        message: data
      });
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    logger.info(`Zimyo ATS is live on ${PORT}`);
})
