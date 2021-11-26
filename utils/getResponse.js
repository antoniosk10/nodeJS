const checkRequestURL = require("./checkRequestURL");
const controller = require("../controller");

module.exports = (req, body) => {
    const id = req.url.split("/").filter(el => !!el)[1];
    return checkRequestURL(req.url) || controller[req.method](body, id);
};
