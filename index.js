app.post('/signup', function(req, res, next) {
    queries.findUserIfExists().where({
        email: req.body.email
    }).first()
    .then(function(user) {
        if(user){
            res.render(user)
        }
        else{
            bcrypt.hash(req.body.password, 10).then(function(hash){
                req.body.password = hash;
                console.log(req.body);
                queries.userTable(req.body)
                .then(function() {
                    res.send('new user')
                })
            })
        }
    })
})

app.post('/login', function(req, res, next){
     queries.findUserIfExists().where({
        email: req.body.email
        }).first()
        .then(function(user) {
            if(user){
                bcrypt.compare(req.body.password, user.password).then(function(data){
                    if(data){
                        req.session.id =req.body.idres.send('logged in!')
                    }
                })
            }
        })
})