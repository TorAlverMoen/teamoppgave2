//Model
let isGameActive = true;
let kaffometer = 4;
const images = [
    'https://www.toramo.games/img/battery0.png',
    'https://www.toramo.games/img/battery25.png',
    'https://www.toramo.games/img/battery50.png',
    'https://www.toramo.games/img/battery75.png',
    'https://www.toramo.games/img/battery100.png'];
const img2 = [
    'https://cdn.discordapp.com/attachments/1135484613872062464/1146725210725302352/Dead.png',
    'https://murphysmesshall.files.wordpress.com/2017/10/cf3fbb9b8c9baa8fafcccdc551545cf4-monday-face-garfield-pictures.jpg',
    'https://cdn.discordapp.com/attachments/1135484613872062464/1146728897405259796/What.png',
    'https://cdn.discordapp.com/attachments/1135484613872062464/1146727055166296184/Give_more.png',
    'https://www.nicepng.com/png/detail/227-2271477_garfield-characters-logo-vector-happy-garfield.png',
];

updateView();
const coffeeInterval = setInterval(coffeeDrain, 10000);
if (kaffometer < 0) {
    clearInterval(coffeeInterval);
}

//View
function updateView() {
    document.getElementById('app').innerHTML =  /*HTML*/ ` 
    <h1>NEED COFFEE</h1>
    <div id="display">
        <div id="imgContainer">
            <img id="img1" src="${img2[4]}">
        </div>
    
        <div id="kaffeContainer">
            <img id="kaffe" src=" ${images[4]} ">
        </div>
    </div>
    <button onclick="kaffeRefill()">Give coffee</button>
    
    `;
}


//Controller

function showKaffometer(index) {
    if (index >= 0 && index <= 4) {
        document.getElementById('kaffeContainer').innerHTML = /*HTML*/`<img id="kaffe" src=" ${images[index]} ">`;
        document.getElementById('imgContainer').innerHTML = /*HTML*/`<img id="img1" src=" ${img2[index]} ">`;
    }
}

function kaffeRefill() {
    if (kaffometer > 0) {
        kaffometer++;
        if (kaffometer >= 4) {
            kaffometer = 4;
        }
        showKaffometer(kaffometer);
    }
}

function coffeeDrain() {
    kaffometer--;
    updateView();
    showKaffometer(kaffometer);
    //console.log("Kaffometer: " + kaffometer);
    if (kaffometer == 0) {
        clearInterval(coffeeInterval);  // Stop the timer at "dead pus"
        //   alert ("Game over. Dead pus");
    }
}
