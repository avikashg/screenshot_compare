const path = require('path');
const {compareScreenshots} = require('./util/compare');
const screenshots_dir = path.join(__dirname, '/screenshots');

(async()=>{
    const time_stamp = "1641371650";
    await compareScreenshots({screenshots_dir, time_stamp })
})();