const path = require("path")

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    app.get("/mynews", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/saved.html"))
    })

    app.get("/subscribe", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"))
    })
}