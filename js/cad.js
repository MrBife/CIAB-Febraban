//Firebase
(function() {
    
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBSBoHN_2ZbvjftJITIIC0VhQciJgJsJ1A",
        authDomain: "confiado-8d16d.firebaseapp.com",
        databaseURL: "https://confiado-8d16d.firebaseio.com",
        projectId: "confiado-8d16d",
        storageBucket: "confiado-8d16d.appspot.com",
        messagingSenderId: "1059395801034"
    };
    firebase.initializeApp(config);
    var firestore = firebase.firestore();
    var provider = new firebase.auth.FacebookAuthProvider();

    var storeUser = firestore.collection("User");

	storeUser.get().then(function(querySnapshot) {
		window.allUsers = [];
		querySnapshot.forEach(function(doc) {
			var data = doc.data()
			allUsers.push(data);
			//doc.data()  -- dentro do parentes para pegar somente os dados internos (sem id)
        });
        

    //Get Elements
    window.storeUser = firestore.collection("User");

    window.email_in = $('#txt_login');
    window.password_in = $('#txt_senha');

    window.name_up = $('#cad_nome');
    window.email_up = $('#cad_email');
    window.password_up = $('#cad_senha');

    window.signIn = $('#btn_login');
    window.signUp = $('#btn_cadastro');

    //Add SingIn Event
    var login = document.getElementById('btn_login');

    signIn.on('click', function(e) {

        e.preventDefault();

        const email = window.email_in.val();
        const pass = window.password_in.val();

        const auth = firebase.auth();

        //Sign In
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        promise.catch(e => alert(e.message));
    });

    //Add SingUp Event
    var cadastro = document.getElementById('btn_cadastro');

    signUp.on('click', e => {

        e.preventDefault();

        const email = window.email_up.val();
        const pass = window.password_up.val();
        const name = window.name_up.val();

        const auth = firebase.auth();

        //Store at Firestore and Firebase
        storeUser.add({
            emailUser: email,
            nomeUser: name,
            senhaUser: pass
        }).then(function(){
            auth.createUserWithEmailAndPassword(
                email,
                pass
            ).then(function() {
                console.log("Gravado com sucesso!");
            }).catch(function (error) {
                alert(error);
            });
        }).catch(function(error){
            alert(error);
        });
    });

    //Facebook Login
    var loginFace = document.getElementById('loginFace');
    loginFace.onclick = fblogin;

    async function fblogin(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        var user = result.user;

        window.name = user.displayName;
        window.email = user.email;

        const getUser = allUsers.filter(function (n) {
            return n.emailUser === email;
        });

        if (getUser.length == 0) {
            storeUser.add({
                emailUser: email,
                nomeUser: name
            }).catch(function(error){
                alert(error);
            });
        }else{
            console.log("Bem vindo")
        }

      }).catch(function(error) {
        // Handle Errors here.
        console.log(error)
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }

    //Facebook Login Cel
    // var loginFaceCel = document.getElementById('loginFaceCel');
    // loginFaceCel.onclick = fbloginCel;

    // function fbloginCel(){
    // firebase.auth().getRedirectResult().then(function(result) {
    //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //     var token = result.credential.accessToken;
    //     var user = result.user;

    //     window.name = user.displayName;
    //     window.email = user.email;

    //     const getUser = allUsers.filter(function (n) {
    //         return n.emailUser === email;
    //     });

    //     if (getUser.length == 0) {
    //         storeUser.add({
    //             emailUser: email,
    //             nomeUser: name
    //         }).catch(function(error){
    //             alert(error);
    //         });
    //     }else{
    //         console.log("Bem vindo")
    //     }

    //   }).catch(function(error) {
    //     // Handle Errors here.
    //     console.log(error)
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;
    //     // ...
    //   });
    // }

    // Add a Realtime Listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            window.email = firebaseUser.email;
            setTimeout(_=>{
                location.href = "app/list.html?name=" + encodeURI(name);
              }, 2000);
		}else {
			console.log('not logged in');
		}
        });

});

}());