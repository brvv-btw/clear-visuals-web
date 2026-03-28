const javaScript = document.getElementById("javaScriptRunning");
const cssRunning = document.getElementById("cssRunning");

javaScript.onload = function(){
    console.log(`JavaScript has connected...`)
}
javaScript.onerror = function(){
    console.log(`JavaScript has failed to connect...`)
}

if(document.styleSheets.length > 0){
    console.log(`CSS has connected...`)
}
else{
    console.log(`CSS has failed to connect...`)
}