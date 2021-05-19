/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const mongodb = require('mongodb');

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


async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:QCg5aoDqr6rkQJLSg8gnTXjYmP9E5nGoRBHXoEXXPrFhh9q3fXKeaJRnGfCKzNSzEtr8rn9PpLzMKzP6@rltrainer.kdkeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('rltrainer').collection('posts');
}

module.exports = router;