//IMport some funstions that ezist on nodejs which is the required() function thakes and argument string 'path
/**
 * Every Node developer has to use a package installed via npm. These installed packages are stored in node_modules directory.

In order to use them, you must require them in your JS file like

const express = require ('express');
The another important use is when you refactor your code to abstract some functionality or values.

Say, you have a lot of helper functions in your app.js which you want to place in a separate file, say helperFunctions.js . require is used to import all the helper functions in your current file.

The functions or values in the helperFunctions.js must be exported by using the global keyword exports.

helperFunctions.js and app.js are in the same directory.

helperFunctions.js contains:

exports.firstHelper = () => {
	return 'May the Force be with you!';
}
 
 */
const path = require('path');
//Module is an object of the ? which takes key entry and value the loacation of the main js file
//and ouput (here object) and joins the arrat path into a string. 
module.exports = {
    entry:'./src/index.js',
    output: {
        filename:"bundle.js",
        path: path.join(__dirname, 'dist')
    }
}
//__dir is a node.js function which is the current project folderand the second is the folder to save it into dist
//Run the script using this command 
// node_modules/.bin/webpack
//On windows remote scripts are not given access to run therefore on the terminal typr the follwoing command
//set-executionpolicy remotesigned
//On unix OS just type sudo
/****************************************************************************************************/
//For this part: every time we want to create a new bundle we wil have to create run the command node_modules/.bin/webpack  to solve this and let it tun automatically use the specify the build in the script object above
//Now just type: 'npm run build' in the terminal
//Add another project into the script and try now
/******************************** */
//To remove the warning type --node developement