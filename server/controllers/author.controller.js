const Author = require("../models/authors.model")

module.exports = {

    create: (req,res) => {
        Author.create(req.body)
            .then (author => res.json(author))
            .catch (err => res.status(400).json(err))
    },

    all : (req, res) => {
        Author.find()
            .then(author => res.json(author))
            .catch(err => res.json(err))
    },

    one : (req, res) => {
        Author.findOne({ _id: req.params.id})
            .then(author => res.json(author))
            .catch(err => res.json(err))
    },

    update: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id}, req.body, {runValidators : true, new: true})
            .then(author => res.json(author))
            .catch (err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Author.findOneAndDelete( {_id: req.params.id})
            .then(res => res.json(res))
            .catch(err => res.json(err))
    }


}
