const javaScript = document.getElementById("javaScriptRunning");
const cssRunning = document.getElementById("cssRunning");

// This area prints the functioning of the JavaScript and CSS (pointless lol but is cool)

javaScript.onload = function(){
    console.log(`JavaScript has connected...`)
}
javaScript.onerror = function(){
    console.log(`JavaScript has failed to connect...`)
}

if(document.styleSheets.length > 0){
    console.log(`CSS has connected...`)
}
else if(document.styleSheets.length <= 0){
    console.log(`CSS has failed to connect...`)
}
else{
    console.log(`Failed to scan CSS...`)
}