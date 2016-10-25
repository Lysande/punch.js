// Needs format, output and template

module.exports = function (data, opts) {
  "use strict";
  
  let fs = require("fs");

  // let template = require(opts.template);

  require(opts.template);
  let format = opts.format.toLowerCase();
  let output = opts.output;

  // let loggers = 
  // {
  //   csv: function (data, output) 
  //   {
  //     let csv = template(data);

  //     try 
  //     {
  //       fs.appendFileSync(output, csv)
  //     }
  //     catch (e) 
  //     {
  //       return e;
  //     }
  //     finally
  //     {
  //       return csv;
  //     }
  //   }
  // };

  // if (loggers.hasOwnProperty(format)) 
  // {
  //   return loggers[format](opts.data, opts.output);
  // }
  // return new Error("Please specify a log format");
  return "lol";
};
