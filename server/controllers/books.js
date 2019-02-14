const fs = require('fs');
module.exports = {
    getBookContent: function(request, response)
    {
        const {id} = request.params;
        const db  = request.app.get('db');
        // db.seed.stock_library();
        db.books.get_book_by_id(id).then((book) =>
        {
            const {selflink, bookmark} = book[0];
            const stream = fs.createReadStream(selflink, {start:bookmark, end:bookmark + 999});
            stream.setEncoding('ascii');
            let data;
            stream.on('data', (chunck) => 
            {
                data = chunck;
            })

            stream.on('end', () =>
            {
                response.status(200).send({data,bookmark});
                stream.destroy();
            })

        })
    },
    updateBookmark: function(request, response)
    {
        const {mark, id} = request.body;
        const db = request.app.get('db');
        db.books.update_bookmark({mark, id}).then(() =>
        {
            response.sendStatus(200);
        });
    },
    getBookById: function(request, response)
    {
        const {id} = request.params;
        const db = request.app.get('db');
        db.books.get_book_by_id(id).then((book) =>
        {
            response.status(200).send(book[0]);
        })
    }
}