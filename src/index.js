//
let nome = "eduardo";
let nivel =10000;

let ranking;

if (nivel <1000) {
    ranking="ferro";
}else if (nivel<=2000) {
    ranking ="bronze"; 
}else if (nivel<=5000){
    ranking ="prata";
}else if (nivel<=7000){
    ranking ="ouro";
}else if (nivel<=8000){
    ranking ="platina";
}else if (nivel<=9000){
    ranking ="ascendente";
}else
{ (nivel>=10000)
    ranking ="radiante"
    console.log ("o temido "+(nome)+" esta no nivel: "+(nivel)+"chegou no "+(ranking)+
    "o maior ranking que se pode chegar");
    ;
}
        
 



