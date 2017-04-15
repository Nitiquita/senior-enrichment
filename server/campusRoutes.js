var router = require('express').Router();
var Campus = require('../db/models').Campus;
// var Campus = require("../db/models/campus")
// var Campus = db.model('campus')

router.get('/', (req, res, next) => {
    console.log(Campus)
    Campus.findAll({})
        .then(array => {
            res.json(array)
            next()
        }).catch((err) => {
            //error handling here 
            next()
        })
        next()

})

router.get('/:id', (req, res, next) => {
    Campus.findById({
        where: {
            id: req.params.id
        }
    }).then(campus => {
        res.send(campus)
        next()
    }).catch((err) => {
        //error handling here 
        next()
    })
})


router.post('/', (req, res, next) => {
    Campus.create(req.body)
        .then(campus => {
            res.send(campus)
        }).next()
})


router.put('/:id', (req, res, next) => {
    Campus.findById(req.params.id)
        .then(campus => {
            return book.update(req.body);
        })
        .then(campus => {
            res.json(campus)
        }).next()
})



router.delete('/:id', (req, res, next) => {
    Campus.destroy({ where: { id: req.params.id } })
        .then(campus => {
            res.sendStatus(204);
        }).next();
})





module.exports = router;

