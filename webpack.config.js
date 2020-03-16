//IMport some funstions that exist on nodejs which is the required() function thakes and argument string 'path'
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
const htmlWebpackPlugin = require('html-webpack-plugin');
//Module is an object of the webpack which takes key entry and value the loacation of the main js file
//and ouput (here object) and joins the arrat path into a string.
/**
 * To add multiple entry points you will have to edit the entry key value and create an object with the [name] (any of your choice),
 * And the location of the entry point is the value of the property
 * The next thing is: we did here is not to create a single bundle file to use on all the pages but rather, two bundle files.
 * The [name] is the key of each of the entry points which was specified
 */
module.exports = {
    entry:{
       index: './src/index.js',
       about: './src/aboutus.js'
    },
    output: {
        filename:"[name].bundle.js",
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "common",
                    chunks: "all"
                }
            }
        }
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/template.html',//Create a template from the fle
            title: 'From Webpack template',
            //Note that the title will not change because the title is alredy in the template file... Tey removing it
            //To make it work add the code to the title
        })//Generate the default html file
    ],
    devServer : {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    }
}
//__dir is a node.js function which is the current project folder and the second is the folder to save it into dist
//Run the script using this command 
// node_modules/.bin/webpack
//On windows remote scripts are not given access to run therefore on the terminal typr the follwoing command
//set-executionpolicy remotesigned
//On unix OS just type sudo
//To run the code on windows run the command 'set-executionpolicy remotesigned'
/****************************************************************************************************/
//For this part: every time we want to create a new bundle we wil have to create run the command node_modules/.bin/webpack  to solve this and let it tun automatically use the specify the build in the script object above
//Now just type: 'npm run build' in the terminal
//Add another project into the script and try now
/******************************** */
//To remove the warning type --node developement
/**************************************************** */
//Add watc:"webpack --watch"
//Now run npm run watch ** watch is the name of the script
//Here you will not have to reload because this watch script will listen for all the changes.
/***************************************************************** */
/**
 * Adding babel and all the dependencies into the project
 * npm install --save-dev babel-core babel-loader (Loaders manipulat inputs to give and output)
 * 
 */
/****************** Html pugin configuration ********************* 
 * Now look at the dist folder,after installing and configuring the html plugin, run build will automatically create an index file (index.html)
In this file the common.bundle and index.bundle are created.
*/
/****Now lets configure the html file */