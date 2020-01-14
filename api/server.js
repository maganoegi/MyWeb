




/*-----------------------------------------*/
/*----- Constants Initialization ----------*/
/*-----------------------------------------*/
const http = require('http');
const express = require('express');
const app = express();


/*-----------------------------------------*/
/*-------- Routes Branching ---------------*/
/*-----------------------------------------*/
const projectRoute = require('./projects');


/*-----------------------------------------*/
/*---------- Express Middleware setup -----*/
/*-----------------------------------------*/
app.use('/api/projects', projectRoute);
app.use(express.json({
    inflate: true,
    limit: '100kb',
    reviver: null,
    strict: true,
    type: 'application/json',
    verify: undefined
  }));
  
app.use(express.urlencoded({extended: false}));


/*-----------------------------------------*/
/*-------------- Server Launcher ----------*/
/*-----------------------------------------*/
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
    var border = "========================================================================";
    console.log("\n " + border + "\n    " + "🌎" + ' svplatonov.com/api server is running at http://localhost:' + port + "\n " + border);
});
