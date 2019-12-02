
const http = require('http');

getGitHubData = function() {
    return new Promise( (resolve, reject) => {
        http.get("http://api.github.com/users/maganoegi/repos", (res) => {
            var body = "";

            res.on('data', function(chunk) {
                body += chunk;
            });

            res.on('end', function() {
                console.log(JSON.stringify(body));
                // resolve( JSON.parse(body) );
                resolve( body );
            });
        }).on('error', reject);
    }); 
}

module.exports.getGitHubData = getGitHubData;