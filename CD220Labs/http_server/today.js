module.exports.getDate = function getDate() {
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    return new Date(aestTime);
}
