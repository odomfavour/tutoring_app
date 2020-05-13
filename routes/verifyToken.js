const jwt = require('jsonwebtoken');
const User = require('../models/user')

const ROLE = {
    ADMIN: 'admin',
    TUTOR: 'tutor',
    STUDENT: 'student'
}

function authUser (req, res, next) {
    const token = req.header('auth');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next()
    } catch (err) {
        res.status(400).send('Invalid Token')
    }
}

function authRole(role) {
    return (req, res, next) => {
        
        try {
        console.log(req.user);
        console.log(role);
        console.log(req.user.role);
       
            if (req.user.role !== role) {
                res.status(401);
                return res.send({
                    data: false,
                    message: "Not allowed",
                });
            }
            next();
        } catch (err) {
            next(err)
        }
    
    }
}

function authOtherRole(adminrole, otherrole) {
    return (req, res, next) => {
        
        try {
        console.log(req.user);
        console.log(adminrole);
        // console.log(req.user.role);
       
            if (req.user.role !== adminrole || req.user.role !== otherrole ) {
                res.status(401);
                return res.send({
                    data: false,
                    message: "Not allowed",
                });
            }
            next();
        } catch (err) {
            next(err)
        }
    
    }
}

module.exports = {
    authUser,
    authRole,
    authOtherRole,
    ROLE: ROLE
}