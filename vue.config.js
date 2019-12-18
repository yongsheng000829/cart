let data  = require('./src/mock/mock');

module.exports = {
    lintOnSave: false,
    devServer: {
        before: (app) => {
            app.get('/getData', (req, res) => {
                res.send(data.list);
            })
        }
    }
}