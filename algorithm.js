function calc(){

    var a = document.getElementById("a").value;
    var abx = document.getElementById("a");
    var b = document.getElementById("b").value;
    var bbx = document.getElementById("b");
    var c = document.getElementById("c").value;
    var cbx = document.getElementById("c");

    var output = document.getElementById("answer");

    var formula = document.getElementById("formula");
    var step1 = document.getElementById("step1");
    var step2 = document.getElementById("step2");
    var step3 = document.getElementById("step3");
    var fAns = document.getElementById("finalAnswer");

    if (a != "" && b != "" && c != ""){
        alert("Can only fill 2 inputs!");
        document.body.innerHTML = "";
        document.location.reload();
    }
    if (a == "" && b == "" || a == "" && c == "" || b == "" && c == "" || a == "" && b == "" && c == ""){
        alert("Needs at least 2 inputs");
        document.body.innerHTML = "";
        document.location.reload();
    }

    document.getElementById("stepsp").style.display = "block";
    if (a == ""){
        let x = Math.sqrt(c ** 2 - b ** 2);
        output.innerHTML = 'Given that B = '+b+' and C = '+c+',';
        formula.innerHTML = "aÂ² + bÂ² = cÂ²";
        step1.innerHTML = "aÂ² + "+b+"Â² = "+c+"Â²";
        step2.innerHTML = "aÂ² + "+(b ** 2)+" = "+(c ** 2);
        step3.innerHTML = "aÂ² = "+((c ** 2) - (b ** 2));
        fAns.innerHTML = "a = "+x;
        abx.value = x;
    }
    if (b == ""){
        let x  = Math.sqrt(c ** 2 - a ** 2);
        output.innerHTML = 'Given that A = '+a+' and C = '+c+',';
        formula.innerHTML = "aÂ² + bÂ² = cÂ²";
        step1.innerHTML = a+"Â² + bÂ² = "+c+"Â²";
        step2.innerHTML = (a ** 2)+" + bÂ² = "+ (c ** 2);
        step3.innerHTML = "bÂ² = "+((c ** 2) - (a ** 2));
        fAns.innerHTML = "b = "+x;
        bbx.value = x;
    }
    if (c == ""){
        let x = Math.sqrt(a ** 2 + b ** 2);
        output.innerHTML = 'Given that A = '+a+' and B = '+b+',';
        formula.innerHTML = "aÂ² + bÂ² = cÂ²";
        step1.innerHTML = a+"Â² + " + b+"Â² = cÂ²";
        step2.innerHTML = (a ** 2) + " + " + (b ** 2) + "= cÂ²";
        step3.innerHTML = ((a ** 2) + (b ** 2)) + " = cÂ²";
        fAns.innerHTML = "c = "+x;
        cbx.value = x;
    }
}
function isNumberKey(evt){
     var charCode = (evt.which) ? evt.which : event.keyCode;
     if (charCode > 31 && (charCode < 48 || charCode > 57))
         return false;
         return true;
}
