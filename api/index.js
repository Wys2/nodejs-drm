const express = require("express");
const app = express()
const PORT = 8080
const licenseKey = require('nodejs-license-key');

app.use(express.json());

app.listen(
    PORT,
    () =>  console.log(`Started on http://localhost:${PORT}`)
)

app.get("/", (req, res) => {
    res.status(204).send()
});

app.get("/license", (req, res) => {
    res.send({
        "status": "ready",
        "validateCode": "200"
    })
});

app.get("/license/:id", (req, res) => {
    const { id } = req.params;
    res.status(400).send({
        "status": "Wrong Request",
        "givenCode": id,
        "errorCode": "400"
    })
});

app.post("/license/:product", (req, res) => {
    const { product } = req.params;
    const { key, userInfo, version, os } = req.body;

    var userLicense = {
        info: userInfo,
        prodCode: product,
        appVersion: version,
        osType: os
    };

    try{
        var license = licenseKey.validateLicense(userLicense, key);
        req.send(license)

    }catch(err){
        res.status(400).send(err);
    }
})
