// instantiate a custom express middleware function
const withAuth = (req, res, next) => {
    // check for the existence of a session property:
    if (!req.session.user_id) {
        // redirect the user
        res.redirect('/login');
    } else {
        // call the final function destination
        next();
    }
};

module.exports = withAuth;