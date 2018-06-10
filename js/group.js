(function(){
    
	// //Get Groups
	// var storageGroup = firestore.collection("User");

	// storeNumber.onSnapshot(function(querySnapshot) {
	// 	window.allNumber = [];

	// 	$("#tabela-Number").empty();

	// 	querySnapshot.forEach(function(doc) {
	// 		var data = doc.data()
	// 		data.id = doc.id;
	// 		window.allNumber.push(data);
	// 	});

	// 	//Put at table
	// 	var tabela = document.querySelector('#tabela-Number');
	// 	for (var i = 0; i < window.allNumber.length; i++) {
	// 		var TR = montaTR(window.allNumber[i]);
	// 		tabela.appendChild(TR);
	// 	}

	// 	function montaTR(Number){
	// 		var TR = document.createElement('tr');
	// 		TR.classList.add('Number');
	// 		TR.id = Number.id;
	// 		TR.appendChild(montaTD(Number.Criador,'info-criador'));
	// 		TR.appendChild(montaTD(Number.Number,'info-numb'));
	// 		TR.appendChild(montaTD(Number.Resultado,'info-resul'));
	// 		return TR;
	// 	}

	// 	function montaTD(dado, classe){
	// 		var td = document.createElement('td');
	// 		td.textContent = dado;
	// 		td.classList.add(classe);
	// 		return td;
	// 	}
	// });
})();