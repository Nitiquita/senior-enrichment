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
    Student.findById({
        where: {
            id: req.params.id
        }
    }).then(student=> {
        res.send(student)
    }).next()
})

router.put('/:id', (req, res, next) => {
    Student.findById(req.params.id)
        .then(student => {
            return student.update(req.body);
        })
        .then(student => {
            res.json(student)
        })
        .next()
})

router.delete('/:id',(req, res, next) => {
    Student.destroy({ where: { id: req.params.id } })
        .then(student => {
            res.sendStatus(204);
        }).next();
})

module.exports = router;
