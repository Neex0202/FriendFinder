var path = require("path");


module.exports = fileRoutes();

var fileRoutes = function(app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });


// Might not be necessary
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    // If no matching route is found default to home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};
