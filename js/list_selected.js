(function(){

	window.href   = window.location.href;
	window.$title = $("#master_header h1");

	if(href.indexOf("?") > 0){
		var title = href.split("?")[1].split("=")[1].replace(/_/g, " ");
		$title.html(decodeURIComponent(title));
	} else {
		$title.html("Lista");
	}

})();