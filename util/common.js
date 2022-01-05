
module.exports.getTimeStamp = async () => {
    return Math.round(new Date().getTime() / 1000).toString();
}


