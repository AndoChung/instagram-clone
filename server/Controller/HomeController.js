module.exports = {
    get: (req, res) => {
        console.log("I love glo");
        return res.send({message: "hello world function activated"});
    }
}