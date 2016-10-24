/**
 * Default action, if none is specified: clock
 * Each action maps to lib/api/<action>.js
 *
 * Structure of the program is this: 
 * This file is the entry point, and does two things: 
 * It's a CLI interface, and a main coordinator. 
 *
 * There are subcommande, or actions, and each action can have
 * options. If no action is specified, "clock" is the default. 
 * 
 * Clock simply gets the time in a meaningful way. 
 * All subcommands reside as modules in /lib/api.
 * 
 * The program is simple at first, but aims to be extensible. 
 * In the basic form, it has a clock, which logs the time and writes it to a file, 
 * but the goal is to create a modular and easily understandable structure.
 *
 * Disallow shorthande to beign with - The simplest behavior,
 * To record the time and direction and log it to a file
 * Is the combination of three commands, somehting like
 * `node punch.js clock in | node punch.js log --json >> ./data/record.json
 *
 * We'll shorten that, either by a built-in system or with shell scripts, to
 * `punch in`
 *
 */ 

 /**
  Will need a dispatcher to pull in and run modules, then 
  print the result to the appropriate stream.
 */

let app = (function () {
  "use strict";

  let meta = require("./package.json");

  let dispatch = function (module) {
    return function (...args) {
      let result = module(...args);

      if (result instanceof Error) 
      {
        process.stderr.write(result.stack);
      } 
      else
      {
        if (typeof result == "object")
        {
          result = JSON.stringify(result);
        }
        process.stdout.write(result);
      } 
    };
  };

  return {
    version: meta.version,
    clock: dispatch(require("./lib/api/clock"))
  }; 

})();
 


let cli = require("commander");

cli.version(app.version);
cli.command("clock <direction>").action(app.clock);

cli.parse(process.argv);



