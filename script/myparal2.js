function myparal2(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let d = document.getElementById("d").value;
    let T2 = a*b*(Math.sin(d));
    document.getElementById("paral2").innerHTML = "T= " + T2 + " 'a' és 'b' oldalhosszak és az általuk bezárt 'δ' szög alapján";}