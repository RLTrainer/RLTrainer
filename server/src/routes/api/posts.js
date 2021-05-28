/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const mongodb = require('mongodb');
const config = require('../../config/config')

const router = express.Router();

//Get
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

//Add
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})

//Delete
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});


async function loadUsers() {
    const client = await mongodb.MongoClient.connect(config.db.uri, {
        useNewUrlParser: true
    });

    return client.db('rltrainer').collection('users');
}

module.exports = router;