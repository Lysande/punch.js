// Needs format, output and template
/**
 Does not write to file - Log generates an output from 
 template and data, and returns it. 

 This removes a dependency (fs), 
 removes an implementation detail,
 and a redundancy. 
*/
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
