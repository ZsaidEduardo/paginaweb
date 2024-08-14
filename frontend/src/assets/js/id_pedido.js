const span_pedido = document.querySelector(".id_pedido");

var abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var n_1 = (Math.floor(Math.random() * 9)).toString();
var n_2 = (Math.floor(Math.random() * 9)).toString();
var n_3 = (Math.floor(Math.random() * 9)).toString();

var l_1 = abecedario[(Math.floor(Math.random() * 25))]
var l_2 = abecedario[(Math.floor(Math.random() * 25))]
var l_3 = abecedario[(Math.floor(Math.random() * 25))]
var l_4 = abecedario[(Math.floor(Math.random() * 25))]
var l_5 = abecedario[(Math.floor(Math.random() * 25))]
var l_6 = abecedario[(Math.floor(Math.random() * 25))]

if(localStorage.getItem("idioma") == "espanol"){
    var id_pedido = "Id de Pedido: #" + n_1 + n_2 + n_3 + l_1 + l_2 + l_3 + l_4 + l_5 + l_6

}else{
    var id_pedido = "Order Id: #" + n_1 + n_2 + n_3 + l_1 + l_2 + l_3 + l_4 + l_5 + l_6

}   



span_pedido.innerHTML = id_pedido;