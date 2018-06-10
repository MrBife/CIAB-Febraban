(function(){
    var firestore = firebase.firestore();
	var storage = firebase.storage();
    var storeComanda = firestore.collection("Comanda");

    storeComanda.get().then(function(querySnapshot) {
		var allComandas = [];
		querySnapshot.forEach(function(doc) {
			var data = doc.data()
			allComandas.push(data);
			//doc.data()  -- dentro do parentes para pegar somente os dados internos (sem id)
		});

    function listToHTML(list){

        var html = "";

        list.forEach(function(item) {
            html += '<a href="list.html?title=' + item + '" class="box col col_full">' + item + '</a> ';
        });

        return html;
    }

    // Get the input box
    var textInput = document.getElementById('id_comanda');

    // Init a timeout variable to be used below
    var timeout = null;

    // Listen for keystroke events
    textInput.onkeyup = function (e) {
        clearTimeout(timeout);

        timeout = setTimeout(function () {

            var getComanda = allComandas.filter(function (n) {
                return n.num == textInput.value;
            });

            window.coBebidas = getComanda[0].bebidas;
            window.coPratos = getComanda[0].pratos;
            window.coSobremesas = getComanda[0].sobremesas;


            //Bebidas
            if (textInput.length != 0) {
                console.log("bebidas")
            } else {
                document.getElementById("calendario").innerHTML = 
                '<h2>Oi</h2>'
                ;
            }

            //Bebidas
            if (coBebidas.length == 0) {
                console.log("bebidas")
            } else {
                document.getElementById("bebidasList").innerHTML = '<h2>Depósitos aceitos!</h2>';
            }

            // BEBIDAS
            var htmlBebidas = listToHTML(window.coBebidas);
            document.getElementById("bebidasTable").innerHTML = htmlBebidas;

            //Pratos
            if (coPratos.length != 0) {
                document.getElementById("pratosList").innerHTML = '<h2>Depósitos não concluídos</h2>';
            }
            var htmlPrato = listToHTML(window.coPratos);
            document.getElementById("pratosTable").innerHTML = htmlPrato;

            //Sobremesas
            if (coSobremesas.length != 0) {
                document.getElementById("sobremesasList").innerHTML = '<h2>Recusado pelo banco</h2>';
            }
            var htmlSobremesa = listToHTML(window.coPratos);
            document.getElementById("sobremesasTable").innerHTML = htmlSobremesa;
            
        }, 2000);
    };

});

})();