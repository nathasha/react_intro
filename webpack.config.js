const path = require('path');//Get npm module 'path'
const PATHS = {
    //Join the  base path with app/dist to get the full pathname
    app: path.join(__dirname, 'app'), //path: react_intro/app
    dist: path.join(__dirname,'dist') //path: react_intro/dist
};

module.exports={
    entry:PATHS.app+'/main.js',
    output : {
        filename: 'bundle.js',
        path: PATHS.dist
    },

    //Will allow to refer 'jsx' files without the extension.
    // . is required
    //use '' to allow imports without the extension
    resolve : {
        extensions : ['', '.js', 'jsx']
    },


    module : {
        //Add 'babel-loader' declaration
        //for single loader , use 'loader : {}'
        //For multiple, use 'loaders : [{},{}]'

        loader: {
            test : /\.js$/, // Matches both .js and .jsx

            include: PATHS.app,
            exclude:[],
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015','react']
            },
            loader : "babel"
        }
    }
}
;