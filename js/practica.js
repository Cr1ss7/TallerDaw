var total = 0;
var cant = 1;
var factura = document.getElementById("factura");




function iniciar(){
    var check = document.getElementById("combos")
    var checkBox = document.getElementById("check");

    var ensa = document.getElementById("ensa");
    var papas = document.getElementById("papas");
    var polloG = document.getElementById("polloG");
    var polloM = document.getElementById("polloM");
    var polloP = document.getElementById("polloP");
    var bebidaG = document.getElementById("bebidaG");
    var bebidaM= document.getElementById("bebidaM");
    var bebidaP = document.getElementById("bebidaP");
    var cafe= document.getElementById("cafe");
    var postre = document.getElementById("postre");

    if(check.addEventListener){
        check.addEventListener("click",main,false);
    }
    if(document.getElementById("addDes").addEventListener){
        document.getElementById("addDes").addEventListener("click", mostrarTxt, false)
    } 
    
    ensa.addEventListener("change", validarEnsa, false);
    papas.addEventListener("change", validarPapas, false);
    polloG.addEventListener("change", validarPolloG, false);
    polloM.addEventListener("change", validarPolloM, false);
    polloP.addEventListener("change", validarPolloP, false);
    bebidaG.addEventListener("change", validarBebidaG, false);
    bebidaM.addEventListener("change", validarBebidaM, false);
    bebidaP.addEventListener("change", validarBebidaP, false);
    cafe.addEventListener("change", validarCafe, false);
    postre.addEventListener("change", validarPostre, false);

    function validarEnsa(){
        document.getElementById("canEnsa").readOnly = false;
        document.getElementById("canEnsa").value = 1;
        }
    function validarPapas(){
        document.getElementById("canPapas").readOnly = false;
        document.getElementById("canPapas").value = 1;
        }
    function validarPolloG(){
        document.getElementById("canPolloG").readOnly = false;
        document.getElementById("canPolloG").value = 1;
        }
    function validarPolloM(){
        document.getElementById("canPolloM").readOnly = false;
        document.getElementById("canPolloM").value = 1;
        }
    function validarPolloP(){
        document.getElementById("canPolloP").readOnly = false;
        document.getElementById("canPolloP").value = 1;
        }
    function validarBebidaG(){
        document.getElementById("canBebidaG").readOnly = false;
        document.getElementById("canBebidaG").value = 1;
        }
    function validarBebidaM(){
       document.getElementById("canBebidaM").readOnly = false;
       document.getElementById("canBebidaM").value = 1;
        }
    function validarBebidaP(){
       document.getElementById("canBebidaP").readOnly = false;
       document.getElementById("canBebidaP").value = 1;
        }
    function validarCafe(){
       document.getElementById("canCafe").readOnly = false;
       document.getElementById("canCafe").value = 1;
        }
    function validarPostre(){
       document.getElementById("canPostre").readOnly = false;
       document.getElementById("canPostre").value = 1;
        }
    };
    

   /* if(checkBox.addEventListener){
        checkBox.addEventListener("click",main2, false)
    }*/


class combo{
    constructor(form){
        this.combo = form.combos.options[combos.selectedIndex].value;
        this.ensalada = form.ensa.value*form.canEnsa.value;
        this.papas = form.papas.value*form.canPapas.value;
        this.polloG = form.polloG.value*form.canPolloG.value;
        this.polloM= form.polloM.value*form.canPolloM.value;
        this.polloP= form.polloP.value*form.canPolloP.value;
        this.bebidaG= form.bebidaG.value*form.canBebidaG.value;
        this.bebidaM= form.bebidaM.value*form.canBebidaM.value;
        this.bebidaP= form.bebidaP.value*form.canBebidaP.value;
        this.cafe= form.cafe.value*form.canCafe.value;
        this.postre= form.postre.value*form.canPostre.value;
        this.total = 1
    }

    sumar(){
        var imp = document.getElementById('total');
        total =this.combo;
        imp.innerHTML = '<p>' + total * cant+ '</p>';
    }

    total(){
        this.total = this.combo+this.ensalada+this.papas+this.polloG+this.polloM+this.polloP+this.bebidaG+this.bebidaM+this.bebidaP+this.cafe+this.postre;
    }

    imprimir(){
        factura.innerHTML = "Total: "+this.total+"<br>"+this.combo+"<br>"+this.ensalada+"<br>"+this.papas+"<br>"+this.polloG+"<br>"+this.polloM+"<br>"+this.polloP+"<br>"+this.bebidaG+"<br>"+this.bebidaM+"<br>"+this.bebidaP+"<br>"+this.cafe+"<br>"+this.postre+"<br>"+this.bebidaM+"<br>"+this.bebidaM+"<br>"
    }
     
}

function main(){
    var precioCombo = document.getElementById("combos");
    var opc = precioCombo.options[precioCombo.selectedIndex].value;
    var combos = new combo(document.formulario);
    combos.sumar();
    if(document.getElementById("factu").addEventListener){
        document.getElementById("factu").addEventListener("click", combos.total(), false);
    }
}

function productos(){
    
    
}

function validar_sierra(value)
{
    cant = value;
    multi(cant);
    console.log(value);
}

function mostrarTxt(){
    document.getElementById("descrip").style.visibility = "visible";
}


function multi(valo){
    var imp = document.getElementById('total');
    imp.innerHTML = '<p>' + total * valo+ '</p>';
}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
    }
    else if(window.attachEvent){
    window.attachEvent("onload", iniciar)
    }
