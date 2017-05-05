var router = require('express').Router();
// var Student = require('./models').Student
var db = require("../db")
var Student = db.model('student')

router.get('/', (req, res, next) => {
    Student.findAll({})
        .then(array => {
            res.send(array);
            next();
        }).catch(next)
})

router.get('/:id',(req, res, next) => {
    Student.findById(req.params.id)
    .then(student => {
        res.send(student)
        next();
    }).catch(next)
})

router.post('/newstudent', (req, res, next) => {
    Student.create(req.body)
        .then(student => res.json(student))
        .catch(next)
})

router.put('/:id/editstudent', (req, res, next) => {
    Student.findById(req.params.id)
        .then(student => {
            console.log('req.params.id', req.params.id)
            return student.update(req.body);
        })
        .then(student => {
            res.json(student)
            next()
        })
        .catch(next)
})

router.delete('/:id',(req, res, next) => {
    Student.destroy({ where: { id: req.params.id } })
        .then(student => {
            res.sendStatus(204);
        }).catch(next)
})

module.exports = router;
