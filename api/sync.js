

const dataMethods = require('./dataMethods');

dataMethods.filesDoExist()
.then(_ => dataMethods.FetchGit())
.then(_ => dataMethods.Merge());





