const passport = require('passport');

module.exports = (req, res, next) => {
    passport.authenticate('jwt', function(err, user, info) {
        if (err) return next(err);

        if (!user) return res.status(401).json({message: "Unauthorized"});

        req.user = user.userId;

        next();

    })(req, res, next);
};