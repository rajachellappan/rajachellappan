var d = 06;
var m= 02;
var y = 1993;
var cd = new Date().getDay()+ 8;
var cm= new Date().getMonth()+1;
var cy = new Date().getFullYear();
var ad = parseInt(cd)-parseInt(d);
var am= parseInt(cm)-parseInt(m);
var ay = parseInt(cy)-parseInt(y);

if (am == 0 && ad > 0){
		document.write(ay);
}

else
		document.write(ay-1);
