const path=require("path");
const HtmlWepbackPlugin=require("html-webpack-plugin");

module.exports={
    entry:{
        app:[
            "./src/app/index.js"
        ]
    },
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"js/app.bundle.js"
    },
    devServer:{
      port:4000  
    },
    plugins:[
        new HtmlWepbackPlugin({
            template:"./src/index.html",
            minify:{
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
              } 
        })
    ]
};