'use strict'

travles= [];

let images =[ 'img/hawaii.jpg' , 'img/itali.jpg' ,' img/london.jpg' ,'img/malaysia.jpg' ,'img/paris.jpg' , 'img/solvka.jpg']

function Travel (image ,places,trip ,transport){
    this.image = image ;
    this.places = places ;
    this.trip = trip ;
    this.transport = transport ;

travles.push(this);
}


let parent=document.getElementById('towSection') ;

let tittle = [ 'delete' , 'img', 'place', 'trip','transport' ]


table ( );
function table ( ){
let table =document.createElement ('table');
table.setAttribute( 'id' ,'traveltrip')
parent.appendChild (table);


let firstTr =document.createElement ('tr')
table.appendChild(firstTr);


for ( let i = 0 ; i <tittle.length ; i++){
    let th1 =document.createElement ('th');
firstTr.appendChild(th1);
th1.textContent =tittle[i]
}
}