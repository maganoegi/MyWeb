



const express = require('express');
const dataMethods = require('./dataMethods');
const fs = require('fs');

const router = express.Router();

/*---------------------------------------------------------------------*/
/*-------------------------- Collection management ------------------- */
/*---------------------------------------------------------------------*/
router.get('/', (req, res, next) => {

    dataMethods.GetData().then(data => res.status(200).send(data));
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
    dataMethods.GetData(id).then(data => res.status(200).send(data));
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