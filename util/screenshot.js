const Pageres = require('pageres');

module.exports.takeScreenshots = async (param) => {
    await new Pageres({ delay: 5, launchOptions: {"waitUntil" : "networkidle0"}, filename: `${param['page_name']}-<%= size %>_<%= url %>` }, )
        .src(param['url'], param['view_ports'])
        .dest(`${param['screenshots_dir']}/${param['time_stamp']}/${param['env']}`)
        .run();
}
