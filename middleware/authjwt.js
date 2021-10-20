const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    let token = req.headers["access-token"];
    console.log(token);
    if (!token) return res.status(403).json({msg: 'You need to login to perform this task'});

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) return res.status(401).json({msg: 'Unauthorized, Invalid token'});
        
        req.user = decode.findUser;
    });

    next();
}

module.exports = verifyToken;