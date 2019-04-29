// DEFAULT COOKIE FUNCTIONS



function setCookie(cookieName, posetilac, expires) {

    var days = new Date();

    days.setTime(days.getTime() + expires * 24 * 60 * 60 * 1000);

    days.toUTCString();

    document.cookie = cookieName + "=" + posetilac + "; expires = " + days + "; path=/";

}



function newCookie(cookieName, posetilac) {

    // var cookieName = prompt('Koji cookie zelite da sacuvate?');

    // var cookieValue = prompt('Sta zelite da upisete u cookie ' + cookieName + '?');

    // var expires = prompt('Koliko dana da se sacuva cookie?');

    var expires = 10;

    setCookie(cookieName, posetilac, expires);

}



function deleteCookie() {

    var cookieName = prompt('Koji cookie zelite da obrisete?');

    var cookieValue = "";

    var expires = -1;

    setCookie(cookieName, cookieValue, expires);

}



function getCookie(cookieName) {

    // var cookieName = prompt('Unesite cookie ciju vrednost trazite');

    var cookie = decodeURIComponent(document.cookie);

    

    var allCookies = cookie.split(';');

    

    for (let i = 0; i < allCookies.length; i++) {

        if (allCookies[i].charAt(0) == " ") {

            allCookies[i] = allCookies[i].substring(1);

        }

        var cookieContent = allCookies[i].split('=');

        

        if (cookieContent[0] === cookieName) {

            

            return cookieContent[1];

        }

        

    }

    return false;

    

}



// -----------------------------



window.onload = function () {
//ako kuki postoji da primeni vrednosti iz kukija umesto da ceka da ih korisnik unese pri reload
    var name = getCookie("imePosetioca");
    var bgcolor = getCookie('bojaPozadine');
    var fontColor = getCookie('slova');

    if (name !== false) {

        document.querySelector('h1 span').innerHTML = name;

    }

    if (bgcolor !== false) {

        document.body.style.backgroundColor = bgcolor;

    }

    if (fontColor !== false) {

        document.querySelector('h1').style.color = fontColor;

    }

}



function setName() {

    var posetilac = document.getElementById('ime').value; // mina

    document.querySelector('h1 span').innerHTML = posetilac;

    document.getElementById('ime').value = "";

    newCookie("imePosetioca", posetilac);

}



function setBgCol() {

    var pozadina = document.getElementById('bg').value; //red, blue

    document.body.style.backgroundColor = pozadina;

    document.getElementById('bg').value = "";

    newCookie("bojaPozadine", pozadina );
}



function setTextCol () {

    var bojaSlova = document.getElementById('text').value;

    document.querySelector('h1').style.color = bojaSlova;

    document.getElementById('text').value = "";
    newCookie("slova", bojaSlova );
} 

// function setBgColor () {

//     var poz = document.querySelector("input[name='pozadina']:checked").value;

//     //pozadina();

//     document.body.style.backgroundColor = `${poz}`;

//     newCookie("pozadina", `${poz}` );
// } 


function setAll() {
    setName();
    setBgCol();
    setTextCol();
    // setBgColor();

}

function pozadina () {
//name za radio batone more da bude isti 
let checkedRadios = document.querySelectorAll("input[name='pozadina']");

for (var i = 0; i < checkedRadios.length; i++) {
        //osluskuje onclick dogadjaje
        checkedRadios[i].addEventListener("click", function() {
        //selektuje cekirani radio
        let test = document.querySelector("input[name='pozadina']:checked");

        if (test.value == "boja") {
            let boja = prompt("unesi hash boje");
            if(/^#?([0-9a-f]{3}){1,2}$/i.test(boja)) {
                document.body.style.backgroundColor = `${boja}`;
            }
            else {
                alert("loš unos")
            }
        }
        else {
            let pozadina = prompt("unesi url slike");
            if (/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(pozadina)) {
                document.body.style.background = `url("${pozadina}") no-repeat`;
            }
            else {
                alert("loš unos")
            }
        }

    })
}
}

pozadina();