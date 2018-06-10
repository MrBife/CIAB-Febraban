(function(){
	"use strict";

	window.$btn_entrar = $("#btn_entrar");
	window.$lb_login   = $("#lb_login");

	$.fn.extend({
	    animateCss: function (animationName, callback) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	            if(callback){ callback(this) };
	        });
	        return this;
	    }
	});

})();