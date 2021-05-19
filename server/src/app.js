/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

app.get('/status', (req, res) => {
    res.send({
        message: 'RLTrainer BACKEND'
    })
})

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Listening on port ` + port))
