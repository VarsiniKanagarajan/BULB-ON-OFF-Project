
function change(){

    var imag=document.getElementById("bulb");
    if(imag.src.match("BULB.on.jfif"))
    {
        imag.src="./BULB.off.jfif";
    }
    else{
        imag.src="./BULB.on.jfif";
    }
} 