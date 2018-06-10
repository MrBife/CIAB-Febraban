(function(){
	"use strict";

	window.$tab      	   = $("#tabs .tab");
	window.$login    	   = $("#login");
	window.$cadastro 	   = $("#cadastro");
	window.$btn_cadastro   = $("#btn_cadastro");
	window.inv       	   = "invisible";
	window.active    	   = "active";

	window.$cad_nome	   = $("#cad_nome");
	window.$cad_email	   = $("#cad_email");
	window.$cad_senha	   = $("#cad_senha");
	window.$cad_conf_senha = $("#cad_conf_senha");
	window.$cad_nascimento = $("#cad_nascimento");
	window.$cad_sexo       = $("#cad_sexo");

	$tab.on("click", function(e){
		var tgt = $(e.target).attr("data-goto");

		if(tgt == "cadastro"){
			if($cadastro.hasClass(inv)){
				$tab.removeClass(active);
				$(this).addClass(active);
				$login.animateCss("fadeOutLeft", function(){
					$login.addClass(inv);
					$cadastro.removeClass(inv);
					$cadastro.animateCss("fadeInRight");
				});
			} else { return false }
		} else if(tgt == "login") {
			if($login.hasClass(inv)){
				$tab.removeClass(active);
				$(this).addClass(active);
				$cadastro.animateCss("fadeOutRight", function(){
					$cadastro.addClass(inv);
					$login.removeClass(inv);
					$login.animateCss("fadeInLeft");
				});
			} else { return false }
		}
	});

	$btn_cadastro.on("click", function(e){
		e.preventDefault();
		console.log($cad_nascimento.val());
		var data = $cad_nascimento.val();
		data = data.split("-")[2] + "/" + data.split("-")[1] + "/" + data.split("-")[0];
		console.log(data);
		if($cad_senha.val() == $cad_conf_senha.val()){

		} else {

		}
	});

})();