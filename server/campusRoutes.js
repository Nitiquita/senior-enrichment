var router = require('express').Router();
var Campus = require('../db/models').Campus;
// var Campus = require("../db/models/campus")
// var Campus = db.model('campus')

router.get('/', (req, res, next) => {
    Campus.findAll({})
        .then(array => {
            res.send(array)
            next() // you should NEVER call next AFTER sending a response -- KH
        }).catch((err) => {
            //error handling here 
            next() // error handling happens when you call next WITH an error. This is NOT error handling -- KH
        })
    next() // why are you calling next here? -- KH

})

router.get('/:id', (req, res, next) => {
    Campus.findById(req.params.id)
        .then(campus => {
            res.send(campus)
            next() // same comments as above -- KH
        }).catch((err) => {
            //error handling here 
            next()
        })
})


router.post('/newcampus', (req, res, next) => { // just post to `/` makes the most sense not `/newcampus` 
    Campus.create(req.body)
        .then(campus => res.json(campus)) // why is this different than the ones you have before? Consistency in code -- KH
        .catch(next) 
})

router.get('/newcampus/:name', (req, res, next) => { // I don't know where this is being called, but I'd like to talk about it -- KH
    console.log('req.params.name', req.params.name)
    if (!!req.params && !!req.params.name) {
        Campus.findOrCreate({ where: { name: req.params.name } })
            .then(campus => {
                res.send(campus)
                next() // same comments about next -- KH
            }).catch(error => {
                res.send(error) // use your error handling middleware and send an error status -- KH
            })
    } else {
        res.send(error)
        next()
    }
})


router.put('/:id', (req, res, next) => {
    Campus.findById(req.params.id)
        .then(campus => {
            return campus.update(req.body);
        })
        .then(campus => {
            res.json(campus)
        }).next() // This is not how promises work -- KH
})



router.delete('/:id', (req, res, next) => {
    Campus.destroy({ where: { id: req.params.id } })
        .then(campus => {
            res.sendStatus(204);
        }).catch(next);
})





module.exports = router;

