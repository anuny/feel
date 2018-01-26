var feel = function(options) {
	return new feel.fn.init(options);
};

feel.fn = feel.prototype = {
	//=import init.js
	//=import actions.js
};

feel.fn.init.prototype = feel.fn;
return feel; 
