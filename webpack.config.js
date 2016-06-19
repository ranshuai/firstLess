var path = require('path');
var Public_path = '/web/dist/';
/*------------------------------*/
var ROOT_PATH = path.resolve(__dirname);
var App_path = path.resolve(ROOT_PATH,'dev/home');
var Tem_parh = path.resolve(ROOT_PATH,'dev/home/templates');
var Css_path = path.resolve(ROOT_PATH,'dev/css');
var Less_path = path.resolve(ROOT_PATH,'dev/less');
var Build_path =  path.resolve(ROOT_PATH,'dist');
/*------------------------------*/
var HtmlWebpackPlugin= require('html-webpack-plugin');

/*------------------------------*/

var entry = {
    index:path.resolve(App_path,'home.js')
};
var output = {
    path:Build_path,
    filename:'js/[name].js',
    publicPath:Public_path
};
var plugins = [];

var pages = [{
    title:'Hello World App',
    template:path.resolve(Tem_parh,'index.html'), //页面入口
    filename:path.resolve(Build_path,'index.html') //页面出口
}];
pages.forEach(function(o){
    var template = o.template;
    var filename = o.filename;
    var params = {
        template:template,
        filename:filename,
        inject:true,
        minify:{
            removeComments:true
        }
    };
    plugins.push(new HtmlWebpackPlugin(params));
});



module.exports = {
    entry:entry,
    output:output,
    module:{
        loaders:[
            {
                test: /\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    plugins:plugins
};