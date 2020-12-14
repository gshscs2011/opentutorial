'use strict'

let coworkers = {
    "pro":"kbs",
    "desinger":"lee"
};

let h2 = document.querySelector('h2');
document.write( "Pro :" + coworkers.pro );
coworkers.showAll = function (){
    for(let key in this){
        document.write(key + ' : ' + this[key] + '<br>');
    }
}
coworkers.showAll();