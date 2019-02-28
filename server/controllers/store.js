module.exports = {
    getAllBooks: function(request, response)
    {
        const db = request.app.get('db');
        db.store.get_all_books().then((books) =>
        {
            response.status(200).send(books);
        })
    }
};