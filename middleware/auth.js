function isLoggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/auth/login');
    }
}

function isAdmin(req, res, next) {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.redirect('/auth/login');
    }
}

module.exports = {
    isLoggedIn,
    isAdmin,
};