const fs = require('fs');
module.exports = {
    getBookContent: function(request, response)
    {
        const db  = request.app.get('db');
        // db.seed.stock_library();
        db.books.get_book_by_id(1).then((book) =>
        {
            const {selflink, bookmark} = book[0];
            const stream = fs.createReadStream(selflink,{start:bookmark, end:bookmark + 999});
            stream.setEncoding('ascii');
            stream.on('readable', () => 
            {
                let data;
          
                while (data = stream.read()) 
                {
                    response.status(200).send(data);
                }
          });

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
    }
}