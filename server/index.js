const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/v1/test', async (req, res) => {
    res.status(200).json("this is test");
})

app.listen(port, () => {
    console.log(`we are ready on port ${port}`)
});