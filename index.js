const express = require('express');
const logger = require('./logger/index');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message: 'This is home page'})
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    logger.info(`Zimyo ATS is live on ${PORT}`);
})
