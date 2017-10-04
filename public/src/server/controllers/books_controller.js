let books = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        req.body.id = id;
        id++
        var newBook = Object.assign( {}, req.body)
        books.push(newBook)
        res.status(200).send(books)
    },
    read:(req, res) => {
        res.status(200).send(books)
    },
    update:(req, res) => {
        books.map(e => {
            if (+req.params.id === e.id) {
                e = Object.assign(e, req.body)
            }
            return e
        })
        res.status(200).send(books)
    },
    delete: (req, res) => {
        books = books.filter(e => {
            return e.id !== +req.params.id
        })
        res.status(200).send(books)
    }
}