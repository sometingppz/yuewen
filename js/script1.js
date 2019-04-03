function click(){
	var $=function(o){
		if(typeof(o)=="string")
		    return document.getElementById(o);
		return o;
	}
	
	var btns[0]=document.getElementById("btn1");
	var btns[1]=document.getElementById("btn2");

	for(var i=0;i<2;i++){
		(function(j){
			btns[j].onmouseover=function(){
				for(var n=0;n<2;n++){
					btns[n].className="normal";
				}
				btns[j].className="hover";
			}
		})(i);
	}
	
}
window.onload=function(){
	click();
}
