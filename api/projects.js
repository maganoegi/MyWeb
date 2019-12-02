



const express = require('express');
const router = express.Router();
const http = require('http');
const dataServices = require('./dataservices');

/*---------------------------------------------------------------------*/
/*-------------------------- Collection management ------------------- */
/*---------------------------------------------------------------------*/
router.get('/', (req, res, next) => {
    dataServices.getGitHubData().then(function(data) {
        res.send(JSON.parse(data));
    }).catch(function(err) {
        // Error Handler needed
    });
    res.status(200);
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
    const id = req.params.xxxx;
    res.status(200).json({
        message: ("Reading resource " + id + " through GET request")
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