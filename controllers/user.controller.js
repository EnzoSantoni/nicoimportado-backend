const User = require('../models/user.model');


function getUsers(req, res) {
    res.send('GET Users desde controlador')

}

async function postUsers(req, res) {


    try {
        if(req.user?.role !== "ADMIN_ROLE") {

            req.body.role = "CLIENT_ROLE";
        }
        console.log(req.user)
        const user = new User(req.body);
        const newUser = await user.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send("Error al cargar el usuario")
        console.log(error)
    }
}

function deleteUsers(req, res) {
    res.send('DELETE Users desde controlador')
}





module.exports = {
    getUsers,
    postUsers,
    deleteUsers
}