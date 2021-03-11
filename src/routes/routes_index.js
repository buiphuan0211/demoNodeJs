const newsRoutes = require('./news');
const siteRoutes = require('./site');
const courseRoutes = require('./courses');

function route(app) {
    app.use('/courses', courseRoutes);

    app.use('/news', newsRoutes);

    app.use('/', siteRoutes);
}

module.exports = route;
