$().ready(function() {



var token = '';
var status = '';

$("#app").load("./Inicio.html").show();

//INICIO
$("#inicio_padel").on("click", function() {
    $("#app")
        .load("./Inicio.html")
        .show();
});

//INICIO
$("#inicio").on("click", function() {
    $("#app")
        .load("./Inicio.html")
        .show();
});

//SERVICIOS
$("#servicios").on("click", function() {
    $("#app")
        .load("./Servicios.html")
        .show();
});

//CANCHAS SINTETICAS
$("#canchas_sinteticas").on("click", function() {
    $("#app")
        .load("./CanchasSinteticas.html")
        .show();
});

//RESERVAR
$("#reservar").on("click", function() {
    $("#app")
        .load("./Reservar.html")
        .show();
});

//LOGIN
$("#loggin").on("click", function() {
    $("#app")
        .load("./Loggin.html")
        .show();
});

//REGISTRAR
$("#registrar").on("click", function() {
    $("#app")
        .load("./Registrar.html")
        .show();
});

$("#logout").on("click", function() {
    $("#app").load("./Inicio.html").show();
    $('#registrar').css('display','block');
    $('#loggin').css('display','block');
    $('#logout').css('display','none');
});

}); // end ready

function generaToken(){
    var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;
    var url = "http://fenw.etsisi.upm.es.:1723/users/login/?username="+username+"&password="+password;
    token =httpGet(url);
    if(status == 200){
        console.log('token: '+ token);
        localStorage.setItem("token", token);
        $("#app").load("./Inicio.html").show();

        document.getElementById("registrar").style.display = "none";
        document.getElementById("loggin").style.display = "none";
        document.getElementById("logout").style.display = "block";
    }else{
        document.getElementById("registrar").style.display = "block";
        document.getElementById("loggin").style.display = "block";
        document.getElementById("logout").style.display = "none";
        document.getElementById('mostrarError').style.display = "block";
        localStorage.setItem("token", '');
    }
}

//function httpGet(url,key){
function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    status=xmlHttp.status;
    return xmlHttp.responseText;
}

window.onload = function ()
    {
        document.getElementById("logout").style.display = "none";
    }




