var router = require('express').Router();
// var Student = require('./models').Student
var db = require("../db")
var Student = db.model('student')

router.get('/', (req, res, next) => {
    Student.findAll({})
        .then(array => {
            res.send(array);
            next(); // same comments as in campusRoutes for use of next -- KH
        }).catch(next)
})

router.get('/:id',(req, res, next) => {
    Student.findById(req.params.id)
    .then(student => {
        res.send(student)
        next(); // same as above -- KH
    }).catch(next)
})

router.post('/newstudent', (req, res, next) => { // post to `/` makes more sense. Post *means* new and we are in the student router, so post to `/` in student router is saying new student
    Student.create(req.body)
        .then(student => res.json(student))
        .catch(next)
})

router.put('/:id/editstudent', (req, res, next) => { // put implicitly means 'edit' and we are once again still in the student router so this should just be `/:id` not `/:id/editstudent`
    Student.findById(req.params.id)
        .then(student => {
            console.log('req.params.id', req.params.id) // logs shouldn't end up in 'production'
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
