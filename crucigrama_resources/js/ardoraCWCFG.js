//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Bien heccho!"; messageTime=""; messageError="Vuelve a intentarlo."; messageErrorG="Vuelve a intentarlo."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3J1Y2lncmFtYQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Og","Og","Og","Rg","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","SQ","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Ug","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Uw","Og","Og","Og","Og","TA","Og"],["RQ","TQ","UA","VA","WQ","Og","Qw","Og","SQ","Og"],["Og","RQ","Og","Og","Og","Og","Tw","Og","Uw","Og"],["Og","TQ","Og","Og","TA","RQ","Tg","Rw","VA","SA"],["Og","Qg","Og","Og","SQ","Og","Uw","Og","QQ","Og"],["Og","RQ","Og","Og","Uw","Og","Og","Og","Og","Og"],["Og","Ug","RQ","Uw","VA","Og","Og","Og","Og","Og"]];
var x1=[1,5,2,4,9,2,7,5];
var y1=[5,7,10,1,4,5,5,7];
var x2=[5,10,5,4,9,2,7,5];
var y2=[5,7,10,5,8,10,8,10];
var imaCW=["","","","","","","",""];
var audioCW=["","","","","","","",""];
var defCW=["Constante especial con la que se puede escribir una lista vacia.","Función que determina la longitud de una lista.","Función que retorna el resto o la cola de una lista.","Función que retorna el primer elemento de una lista.","Conjunto de elementos que pueden ser del mismo o de diferentes tipos de datos.","Función que permite corroborar si un elemento pertenece a una lista determinada.","Operador que tiene dos campos (El primero y el resto).","Abreviación para la creacion de listas."];
var colNum=10;
var rowNum=10;
