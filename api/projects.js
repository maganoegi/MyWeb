



const express = require('express');
const dataMethods = require('./dataMethods');
const fs = require('fs');

const router = express.Router();

/*---------------------------------------------------------------------*/
/*-------------------------- Collection management ------------------- */
/*---------------------------------------------------------------------*/
router.get('/', (req, res, next) => {

    fs.readFile("./data/final.json", (err, data) => {
        if (err) throw err;
        var projects = JSON.parse(data);
    
        res.status(200).send(projects);
    });

});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Handling POST request to /api/projects"
    });
});

/*---------------------------------------------------------------------*/
/* Collection resource management ( svplatonov.com/api/projects/xxxx ) */
/*---------------------------------------------------------------------*/
router.get('/:xxxx', (req, res, next) => {
    // id: 188440179 for blockchain project from github
    var id = req.params.xxxx;

    fs.readFile("./data/final.json", (err, data) => {
        if (err) throw err;
        var projects = JSON.parse(data);
    
        var project = projects.filter(function(i) {
            return i.id == id;
        });

        res.status(200).send(project);
    });
});

router.patch('/:xxxx', (req, res, next) => {
    const id = req.params.xxxx;
    res.status(200).json({
        message: ("Updating resource " + id + " through PATCH request")
    });
});

router.delete('/:xxxx', (req, res, next) => {
    const id = req.params.xxxx;
    res.status(200).json({
        message: ("deleting resource " + id + " through DELETE request")
    });
});

module.exports = router;