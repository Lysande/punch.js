/**
 * Default action, if none is specified: clock
 * Each action maps to lib/api/<action>.js
 */ 
 "use strict";

const VERSION = "1.0.0";


let cli = require("commander");

cli
	.version(VERSION)
	.option("-i, --in")
	.option("-o, --out")
	.arguments("[action]")
	.action((action) => console.log(`Action ${action} is not yet supported`))

cli.parse(process.argv);

if (cli.in) 
{
	console.log("Punching in");
}

if (cli.out) 
{
	console.log("Punching out");
}

require("./lib/api/clock")

