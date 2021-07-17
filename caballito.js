var arre=new Array(4);
 for(i=0;i<arre.length;i++){
 	arre[i]=new Array(8);
 }

for(i=0;i<arre.length;i++){
   for(j=0;j<arre[i].length;j++){
   	 arre[i][j]=document.getElementById("" + ((i*8) + 1 + j) + "");
   }

}



function posicion(celdas){	
    var caballo=document.getElementById("2");
    caballo.style.backgroundColor="black";

}


function cambiar(x,y){
	for(i=0;i<arre.length;i++){
   for(j=0;j<arre[i].length;j++){
   	 arre[i][j].style.backgroundColor="black";
   }
}

	arre[x][y].style.backgroundColor="red";
   
    if((x + 2 < arre.length) && (y - 1 >= 0))
		arre[x+2][y-1].style.backgroundColor = "white";
	    
    

	if((x + 2 < arre.length) && (y + 1 < arre[x].length))
		arre[x+2][y+1].style.backgroundColor = "white";


	if((x + 1 < arre.length) && (y + 2 < arre[x].length))
		arre[x+1][y+2].style.backgroundColor = "white";

	if((x + 1 < arre.length) && (y - 2 >=0))
		arre[x+1][y-2].style.backgroundColor = "white";

	if((x - 1 >=0) && (y + 2 <arre[x].length))
		arre[x-1][y+2].style.backgroundColor = "white";

	if((x - 1 >=0) && (y -2 >=0))
		arre[x-1][y-2].style.backgroundColor = "white";

	if((x - 2 >=0) && (y + 1 <arre[x].length))
		arre[x-2][y+1].style.backgroundColor = "white";

	if((x - 2 >=0) && (y -1 >=0))
		arre[x-2][y-1].style.backgroundColor = "white";

color(celdas);
}
//celda.style.backgroundColor="blue";
//////document.getElementsById('td3').celda.style.backgroundColor="green";
//var x=new Array(4);






//var x=[[0,1,2,3],
 //      [4,5,6,7],
 //      [8,9,10,11],
 //      [12,13,14,15]];

 //      for(i=0;i<x.length;i++){
     //  x[i]=new Array(8);
 //    document.getElementsById('td3')celda.style.backgroundColor="green";
//       if(i=='1'){
 //          celda.style.backgroundColor="blue";
   
//       }        
//       }

//var celdas=document.getElementsByTagName('tr');
//for(var i=0;i(%)"2");

  


//var x=[[0,1,2,3,]
//       [4,5,6,7]
//       [8,9,10,11]
 //      [12,13,14,15]];
