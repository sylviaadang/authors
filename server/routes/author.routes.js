const AuthorController = require('../controllers/author.controller')

module.exports = app => {
    app.post('/api/authors', AuthorController.create)

    app.get('/api/authors', AuthorController.all)

    app.get('/api/authors/:id', AuthorController.one)

    app.put('/api/authors/:id', AuthorController.update)

    app.delete('/api/authors/:id', AuthorController.delete)
}
