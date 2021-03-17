const newsRoutes = require('./news');
const siteRoutes = require('./site');
const courseRoutes = require('./courses');
const meRoutes = require('./me');


function route(app) {
    app.use('/me', meRoutes);
    app.use('/courses', courseRoutes);

    app.use('/news', newsRoutes);

    app.use('/', siteRoutes);
}

module.exports = route;