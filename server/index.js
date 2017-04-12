const express = require('express');
const compression = require('compression');
const webpack = require('webpack');
const webpackDevMiddleware = require ('webpack-dev-middleware');
const webpackHotMiddleware = require ('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const app = express();
const CodexLoader = require('./codex-loader');
const codexLoader = new CodexLoader();
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}))

app.use(compression());

app.get('/api/games', (req, res) => {
    res.send({
        status:"success",
        data: [
            {id: "mtg", title:"Magic: The Gathering"},
            {id: "magewars", title:"Mage Wars"}
        ]
    })
})

app.get('/api/:gameId/codex', (req, res) => {
    const gameId = req.params.gameId;
    const contentHash = req.query.contentHash;
    const data = codexLoader.get(gameId, contentHash);
    res.send({status:"success", data});
})

codexLoader.initiate((err) => {
    if(err){
        console.error("Error when initiating CodexLoader");
        console.error(err);
    }
    else {
        app.listen(3000, () => {
            console.log("Server running...");
        })
    }
})