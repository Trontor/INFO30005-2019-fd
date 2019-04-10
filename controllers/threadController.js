const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Thread = require("../models/Thread");

const createThread = (req, res) => {
    const thread = new Thread({
        "title": req.body.title,
        "content": req.body.content,
        "author": req.body.author
    });
    thread.save((err, newThread) => {
        if (!err) {
            res.send(newThread);
        } else {
            res.sendStatus(400);
        }
    });
};

const findThreadByTitle = (req, res) => {
    const threadTitle = req.params.title;
    Thread.find({title:threadTitle}, (err, thread) => {
        if (!err) {
            res.send(thread);
        } else {
            res.sendStatus(404).json({title: "Cannot find thread."});
        }
    });
};

// return the threads from this author
const findThreadsByAuthor = (req, res) => {
    const author = req.params.author;
    var threadList = [];
    Thread.find({author: author}, (err, threads) => {
        if (!err) {
            res.send(threads);
        } else {
            res.status(400).send({
                success: 'false',
                message: 'Cannot fetch threads'
            });
        }
    });
};

// update thread with a new post
// input is threadId, reply author and content
const updateThread = (req, res) => {
    const reply = {
        "author": req.body.author,
        "datePosted": new Date(),
        "content": req.body.content
    };
    Thread.find({_id: req.body.id}, (err, threads) => {
        if (!err) {
            threads.map(thread => {
                thread.replies.push(reply);
            });
            res.json({status: 'success'});
        } else {
            res.status(400).send({
                success: 'false',
                message: 'Update thread failed'
            });
        }
    });
};

const deleteThread = (req, res) => {
    const id = req.body.id;
    if (!id) {
        res.status(400).send({
            success: 'false',
            message: 'Cannot delete thread'
        });
    } else {
        res.remove(id, (err, obj) => {
            if (!err) {
                res.status(200).send({
                    success: 'true',
                    message: 'Thread deleted'
                });
            } else {
                res.sendStatus(400);
            }
        });
    }
};

module.exports.createThread = createThread;
module.exports.findThreadByTitle = findThreadByTitle;
module.exports.findThreadsByAuthor = findThreadsByAuthor;
module.exports.updateThread = updateThread;
module.exports.deleteThread = deleteThread;