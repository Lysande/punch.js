module.exports = function (data, opts) {
  "use strict";

  try {
    return require(opts.template)(data);
  }
  catch (e) 
  {
    return new Error("Could not create log statement");
  }
};
