const fs = require('fs');
const request = require('request');

const gitPath = "./data/hub.json";
const finalPath = "./data/final.json";
const customPath = "./data/custom.json";

function FetchGit() {
    var promise = new Promise(function(resolve, reject) {

        var options = {
            uri: 'https://api.github.com/users/maganoegi/repos',
            pathname: '/',
            json: true,
            method: "GET",
            headers: {
                'User-Agent': 'maganoegi'
            }
        };
        
        request(options, (err, res, body) => {
            if(err) { return console.log(err); }
            var allProjects = [];
            
            for(var i = 0; i < body.length; i++) {
                allProjects.push({
                    "source" : "github",
                    "id" : body[i].id,
                    "name" : body[i].name,
                    "url" : body[i].url,
                    "description" : body[i].description,
                    "language" : body[i].language
                });
            }
            allProjects = JSON.stringify(allProjects);
            // 100MB Max! After - DB
            fs.writeFile(gitPath, allProjects, (err) => {
                if (err) throw err;
            }); 
            resolve(1);
        });
    });
    return promise;
}

function filesDoExist() {
    var promise = new Promise(function(resolve, reject) {
        fs.exists(gitPath, function(exists) {
            if(!exists) {
                FetchGit();
            }
            fs.exists(customPath, function(exists) {
                if(!exists) {
                    fs.writeFileSync(customPath, "[]");
                }
                resolve(1);
            });
        });
    });
    return promise;
}


function Merge() {
    var promise = new Promise(function(resolve, reject) {

        fs.readFile(gitPath, (err, GIT_data) => {
            if (err) throw err;
            var git = JSON.parse(GIT_data);
            
            fs.readFile(customPath, (err, CUSTOM_data) => {
                if (err) throw err;
                var custom = JSON.parse(CUSTOM_data);
                var final = JSON.stringify(custom.concat(git));
                
                fs.writeFile(finalPath, final, (err) => {
                    if (err) throw err;
                });
            });
        });
    });
    return promise;
}

function Add_2_Custom(source, id, name, url, description, language) {
    var promise = new Promise(function(resolve, reject) {
        if (!fs.existsSync(customPath)) { 
            fs.writeFileSync(customPath, "[]");
        } 

        var customFile = fs.readFileSync(customPath);
        var FileAsArray = JSON.parse(customFile);
        FileAsArray.push({
            "source" : source,
            "id" : id,
            "name" : name,
            "url" : url,
            "description" : description,
            "language" : language
        });
        var FileAsJson = JSON.stringify(FileAsArray);
        fs.writeFileSync(customPath, FileAsJson);
    });
    return promise;
}

Add_2_Custom("source", "id", "name", "url", "description", "language");

exports.filesDoExist = filesDoExist;
exports.FetchGit = FetchGit;
exports.Add_2_Custom = Add_2_Custom;
exports.Merge = Merge;