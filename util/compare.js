const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

module.exports.compareScreenshots = async ({ time_stamp, screenshots_dir }) => {
    console.log(time_stamp);
    console.log(screenshots_dir);
    fs.mkdirSync(`${screenshots_dir}/${time_stamp}/diff`, {recursive: true});
    try {
        const prod_screenshots = fs.readdirSync(`${screenshots_dir}/${time_stamp}/prod`);
        const stage_screenshots = fs.readdirSync(`${screenshots_dir}/${time_stamp}/stage`);
        console.log(prod_screenshots);
        console.log(stage_screenshots);

        // for (const prod_screenshot of prod_screenshots) {
        //     const file_name = prod_screenshot.split("_")[0];
        //     const img1 = PNG.sync.read(fs.readFileSync(`${screenshots_dir}/${time_stamp}/prod/${prod_screenshot}`));
        //     const img2 = PNG.sync.read(fs.readFileSync('img2.png'));
        //     const {width, height} = img1;
        //     const diff = new PNG({width, height});

        // }

        const img1 = PNG.sync.read(fs.readFileSync(`${screenshots_dir}/${time_stamp}/prod/homepage-1152x720-homebazaar.com.png`));
        const img2 = PNG.sync.read(fs.readFileSync(`${screenshots_dir}/${time_stamp}/stage/homepage-1152x720-nginx.yourhomekart.in.png`));
        const { width, height } = img1;
        const diff = new PNG({ width, height });
        const difference = pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});
        fs.writeFileSync(`${screenshots_dir}/${time_stamp}/diff/homepage-1152x720.png`, PNG.sync.write(diff));
        console.log(difference);
    } catch (error) {
        console.error(error);
    }

}