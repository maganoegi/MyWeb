



const express = require('express');
const dataMethods = require('./dataMethods');
const fs = require('fs');

const router = express.Router();

/*---------------------------------------------------------------------*/
/*-------------------------- Collection management ------------------- */
/*---------------------------------------------------------------------*/
// Get all entries
router.get('/', (req, res, next) => {
    dataMethods.GetData().then(data => res.status(200).send(data));
});

// Insert a new entry
router.post('/', (req, res, next) => {
    id = req.body.id;
    source = req.body.source;
    name = req.body.name;
    url = req.body.url;
    description = req.body.description;
    language = req.body.description;

    if(!id || !source || !name || !url || !description || !language ) {
        res.status(406).json({ message: "Please provide all data." });
    } else {
        dataMethods.Add_2_Custom(source, id, name, url, description, language);
    }
});

/*---------------------------------------------------------------------*/
/* Collection resource management ( svplatonov.com/api/projects/xxxx ) */
/*---------------------------------------------------------------------*/
// Get a specific entry
router.get('/:xxxx', (req, res, next) => {
    // id: 188440179 for blockchain project from github
    var id = req.params.xxxx;
    dataMethods.GetData(id).then(data => res.status(200).send(data));
});

// Update a specific entry
router.patch('/:xxxx', (req, res, next) => {
    const id = req.params.xxxx;
    new_id = req.body.id;
    source = req.body.source;
    name = req.body.name;
    url = req.body.url;
    description = req.body.description;
    language = req.body.description;

    if(!new_id || !source || !name || !url || !description || !language ) {
        res.status(406).json({ message: "Please provide all data." });
    } else {
        dataMethods.UpdateEntryWithId(id, new_id, source, name, url, description, language);
    }
    res.status(200).json({
        message: ("Updating resource " + id + " through PATCH request")
    });

});

router.delete('/:xxxx', (req, res, next) => {
    const id = req.params.xxxx;
    dataMethods.DeleteEntry(id);
    res.status(200).json({
        message: ("deleting resource " + id + " through DELETE request")
    });
});

module.exports = router;