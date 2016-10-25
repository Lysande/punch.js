module.exports = function (direction) {
	"use strict";
  
  let directions = 
	{
		IN: "in",
		OUT: "out"
	};

  let error = `Unknown direction '${direction}'`;

  direction = direction.toUpperCase();
  direction = directions[direction];

  if (typeof direction == "undefined")
  {
    return new Error(error);
  }

  return {
    time: Date.now() / 1000, 
    direction
  }
};
