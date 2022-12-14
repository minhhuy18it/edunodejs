import express from "express";  

let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello world')
    });

    return app.use("/", router);
};

module.exports = initWebRouters;