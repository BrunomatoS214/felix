function Limpar() {
    document.getElementById("xPontoA").value = "";
    document.getElementById("xPontoB").value = "";
    document.getElementById("yPontoA").value = "";
    document.getElementById("yPontoB").value = "";
    document.getElementById("display").value = "";
}

function calculardistanica(){
    var xA = Number(document.getElementById("xPontoA").value); 
    var xB = Number(document.getElementById("xPontoB").value);
    var yA = Number(document.getElementById("yPontoA").value); 
    var yB = Number(document.getElementById("yPontoB").value);
    
    var primeiraparte = Math.pow((xB - xA), 2);
    var Segundaparte = Math.pow((yB - yA) ,2);
    var soma = primeiraparte + Segundaparte;
    var resultado = Math.sqrt(soma);
    document.getElementById("display").value = resultado.toFixed(2);
}

function calcularPontomedio() {
    var xA = Number(document.getElementById("xPontoA").value); 
    var xB = Number(document.getElementById("xPontoB").value);
    var yA = Number(document.getElementById("yPontoA").value); 
    var yB = Number(document.getElementById("yPontoB").value);

    var primeiraparte = (xA + xB) /2;
    var Segundaparte = (yA + yB) /2;

    document.getElementById("display").value = `PM = (${primeiraparte},${Segundaparte})`;
    document.getElementById("display").value = `PM = (${primeiraparte},${Segundaparte})`;


    ``
}
function calcularcoeficiente() {
    var xA = Number(document.getElementById("xPontoA").value); 
    var xB = Number(document.getElementById("xPontoB").value);
    var yA = Number(document.getElementById("yPontoA").value); 
    var yB = Number(document.getElementById("yPontoB").value);

    var parteSuperior = yA - yB
    var parteInferior = xA - xB
    var m = parteSuperior / parteInferior

    document.getElementById("display").value = `m = ${m}`;
}

function calcularEquaçãodareta() {
    var xA = Number(document.getElementById("xPontoA").value); 
    var xB = Number(document.getElementById("xPontoB").value);
    var yA = Number(document.getElementById("yPontoA").value); 
    var yB = Number(document.getElementById("yPontoB").value);

    var mat = [
        [xA, xB, 1, xA],
        [yA, yB, 1, yA]

    ]

    var n1 = ((-1 * mat[0][1]) * mat[1][0]);
    var x1 = ((-1 * mat[0][2]) * mat[1][1]);
    var y1 = ((-1 * mat[0][3]) * mat[1][2]);

    var n2 = mat[0][0] * mat[1][1];
    var x2 = mat[0][1] * mat[1][2];
    var y2 = mat[0][2] * mat[1][3];

    var somaX = x1 + x2;
    var somaY = y1 + y2;
    var somaN = n1 + n2;

    somaX = (somaX > 0 ? `+${somaX}`: somaX);
    somaY = (somaY > 0 ? `+${somaY}`: somaY);
    somaN = (somaN > 0 ? `+${somaN}`: somaN);

    document.getElementById("display").value = `${somaX}x ${somaY}y ${somaN} = 0`
}