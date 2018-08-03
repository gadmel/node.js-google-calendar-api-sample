const mongoose = require('mongoose')

module.exports = app => {

    app.use(function (err, req, res, next) {
        if (err.isJoi) {
            err.isJoi = undefined
            err._object = undefined
            return res.status(422).json(err)
        }
        else return next(err)
    });

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        const err = new Error('Not Found');
        err.status = 404;
        err.message = 'No route was found'
        return next(err);
    });


    // error handler
    app.use(function (err, req, res, next) {

        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);

        return res.json(err.message);
    });


}