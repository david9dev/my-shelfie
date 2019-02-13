const bcrypt = require('bcryptjs');
module.exports = {
    login: function(request, response)
    {
        const db = request.app.get('db');
        const {email, password} = request.body
        db.auth.get_user_by_email(email).then((user) =>
        {
            if(user[0])
            {
                const {hash_password} = user[0];
                if(bcrypt.compareSync(password, hash_password))
                {
                    delete user[0].hash_password;
                    request.session.user = user[0];
                    response.status(200).send(request.session.user);
                }
                else
                {
                    response.status(400).json('incorrect password');
                }
            }
            else
            {
                response.status(400).json('incorrect email');
            }
        })
    },
    register: function(request, response)
    {
        const db = request.app.get('db');
        const {firstname, lastname, email, password} = request.body
        // console.log(request.body);
        db.auth.get_user_by_email(email).then((user) =>
        {
            // console.log('get email',user);
            if(!user[0])
            {
               const salt = bcrypt.genSaltSync(10);
               const hash = bcrypt.hashSync(password, salt);
               db.auth.create_user({firstname, lastname, email, hash})
               .then((user) =>
               {
                //    console.log("created user",user)
                   request.session.user = user[0];
                   response.status(200).send(request.session.user)
               })
            }
            else
            {
                response.status(400).json('email is already being used');
            }
        })
    },
    logout: function(request, response)
    {
        request.session.destroy();
        response.sendStatus(200);
    }
};