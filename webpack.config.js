const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output: {
        filename:"bundle.js",
        path: path.join(__dirname, 'dist')
    }
}
//Run the script using this command 
// node_modules/.bin/webpack
//On windows remote scripts are not given access to run therefore on the terminal typr the follwoing command
//set-executionpolicy remotesigned
//On unix OS just type sudo