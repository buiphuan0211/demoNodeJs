const newsRoutes = require('./news');
const siteRoutes = require('./site');
const courseRoutes = require('./courses');

function route(app) {
    app.use('/news', newsRoutes);

    app.use('/', siteRoutes);

    app.use('/courses',courseRoutes);
    
}

module.exports = route;
