const User = require("./user.model")
const jwt = require("json-web-token");


exports.addUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        const token = jwt.sign({_id: user._i}, process.env.SECRET);
        res.status(200).send({user: user.username, token});
    } catch (error) {
        console.log(error)
    }
}

exports.login = async (req, res) => {
    try {
        const token = jwt.sign({ _id: req.user._id}, process.env.SECRET);
        res.status(200).send({user: req.user.username}, token)
    } catch (error) {
        console.log(error)
    }
}