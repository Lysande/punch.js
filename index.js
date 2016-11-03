module.exports = (function () {
  "use strict";

  return {
    ROOT:  require("fs").realpathSync("./"),
    version:  require("./package.json").version,
    punch: require("./lib/punch"),
    log: require("./lib/log")
  }; 
})();