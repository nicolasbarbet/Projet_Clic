var a = 0;
function clic(){
    a += 1;
    console.log(a);
    //var divis = getElementById("divis");
    divis.innerHTML = "<p>" + a + "</p>";
}

function raz(){
    a = 0;
    divis.innerHTML = "<p>" + a + "</p>";
}