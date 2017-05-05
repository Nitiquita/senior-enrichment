var router = require('express').Router();
var Campus = require('../db/models').Campus;
// var Campus = require("../db/models/campus")
// var Campus = db.model('campus')

router.get('/', (req, res, next) => {
    Campus.findAll({})
        .then(array => {
            res.send(array)
            next()
        }).catch((err) => {
            //error handling here 
            next()
        })
    next()

})

router.get('/:id', (req, res, next) => {
    Campus.findById(req.params.id)
        .then(campus => {
            res.send(campus)
            next()
        }).catch((err) => {
            //error handling here 
            next()
        })
})


router.post('/newcampus', (req, res, next) => {
    Campus.create(req.body)
        .then(campus => res.json(campus))
        .catch(next)
})

router.get('/newcampus/:name', (req, res, next) => {
    console.log('req.params.name', req.params.name)
    if (!!req.params && !!req.params.name) {
        Campus.findOrCreate({ where: { name: req.params.name } })
            .then(campus => {
                res.send(campus)
                next()
            }).catch(error => {
                res.send(error)
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
        }).next()
})



router.delete('/:id', (req, res, next) => {
    Campus.destroy({ where: { id: req.params.id } })
        .then(campus => {
            res.sendStatus(204);
        }).catch(next);
})





module.exports = router;

