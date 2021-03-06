
// Variabili Utili

var cont = 0; // contatore utile alla funzione presentazione()

var indovina = document.querySelector("#indovina");
var pres = document.querySelector("#pres");
var env = document.querySelector("#env");
var link = document.querySelector("#link2ind");
var letterN = document.querySelector("#letterN");
//var start = document.querySelector("#start");

var rand = [];
var rev_rand = [];

// popolamento array (per costruzione colori)
for(let i = 0; i<=255; i++) {
    rand[i] = i;
    rev_rand[i] = 255 - i;
}

var rand2 = rand;

// Array contenente elementi utili a presentazione
var lp = [
    "Benvenuto nella pagina dell'applicazione IndoviNumero!!!",
    "In questa pagina puoi provare ad indovinare un numero che vada da 1 a 1000...",
    "Quante probabilità hai di indovinare? ... ",
    "E che ne so! ...",
    "Una su un milione? ",
    "Una su un miliardo? ",
    "Una su un Ipermegalone?"
];

// Array contenente elementi utili a presentazione
var lt = [500,4500,5500,4500,3500,3500,3500];

// Cambia colore alla lettera N
cc_interval = setInterval(changeColor, 399);
//timeoutCCF = setTimeout(changeColorFaded,130);

// LISTENER 
link.addEventListener("click",presentazione);
//start.addEventListener("click",indovina);


// FUNZIONI
function presentazione(event) {

    alert("Inizio presentazione");

    p = document.createElement("p");
    p.className = "pres";
    p.innerHTML = lp[0];
    pres.appendChild(p);

    intervalP = setInterval(insert_p , 500) // intervallo presentazione

    function insert_p() {
        cont++;
        

        if(cont > lp.length) {
            setTimeout(stop_ip, 500);
        }
        else {
            pres.removeChild(pres.childNodes[0]);
            p.innerHTML = lp[cont];
            pres.appendChild(p);
        }
    }

    function stop_ip() {
        clearInterval(intervalP);
        //pres.removeChild(pres.childNodes[0]);
        alert("Fine operazioni");
        insert_b();
    }

    

} // fine presentazione()


function insert_b() {
    pb = document.createElement("p");
    pb.innerHTML = "<p>Clicca sul pulsante per iniziare!</p>";
    b = document.createElement("button");
    b.innerHTML = '<button type="button" >Inizia</button>';
    b.className = "button_start";
    b.setAttribute("id", "start");
    env.appendChild(pb);
    env.appendChild(b);
    
}


function indovina(event) {
    alert("entrato in indovina()");
}

function verifica() {
    alert("entrato in verifica()");
}

// cambia colore alla lettera N del titolo
function changeColor() {

// Genero tre numeri random di valore compreso tra 1 e 256
var r = Math.round(Math.random()*256);
var g = Math.round(Math.random()*256);
var b = Math.round(Math.random()*256);
// Costruisco un colore RGB utilizzando i 3 numeri creati sopra 

colore_rgb = "rgb(" + r + "," + g + ", " + b + ")";

// Applico il colore al tag span id->letterN
letterN.style.color = colore_rgb;
}

// cambia colore alla lettera N del titolo
function changeColorFaded() {

    temp = 330;
    cont1 = 0;
    cont2 = 125;
    cont3 = 254;

    function cycler(cont) {
        if(cont >= 255) 
            op = 'decr';
        else
            op = 'incr';

        switch(op) {
            case 'decr':
                cont--;
            break;
            case 'incr':
                cont++;
            break;
        }
        return cont;
    }

    var r = cycler(cont1);
    var g = cycler(cont2);
    var b = cycler(cont3);
    // Costruisco un colore RGB utilizzando i 3 numeri creati sopra 
    
    colore_rgb = "rgb(" + r + "," + g + ", " + b + ")";
    
    // Applico il colore al tag span id->letterN
    letterN.style.color = colore_rgb;
    }

    /*
    function show(id) {
        document.getElementById(id).style.display=”block”;
    }
        
    function hide(id) {
        document.getElementById(id).style.display=”none”;
    }
    */

