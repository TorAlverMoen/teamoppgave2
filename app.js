//Model
let kaffometer = 4;
const images = [ 
    'https://www.toramo.games/img/battery0.png', 
    'https://www.toramo.games/img/battery25.png', 
    'https://www.toramo.games/img/battery50.png', 
    'https://www.toramo.games/img/battery75.png', 
    'https://www.toramo.games/img/battery100.png' ];
// let bananometer = 25;
const img2 = [
    'https://cdn.discordapp.com/attachments/1135484613872062464/1146725210725302352/Dead.png',
    'https://murphysmesshall.files.wordpress.com/2017/10/cf3fbb9b8c9baa8fafcccdc551545cf4-monday-face-garfield-pictures.jpg',
    'https://cdn.discordapp.com/attachments/1135484613872062464/1146728897405259796/What.png',
    'https://cdn.discordapp.com/attachments/1135484613872062464/1146727055166296184/Give_more.png',
    'https://www.nicepng.com/png/detail/227-2271477_garfield-characters-logo-vector-happy-garfield.png',
];

//View
updateView();
startCoffeeDrain();

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
// if (kaffometer = 25)
// return document.getElementById('kaffe').innerHTML = img
// 
// index = 1;

// Tor var her (forslag til gradvis minking av kaffometer):
// setInterval(function(){
//     kaffometer--;
//     if (kaffometer <= 0) {
//         kaffometer = 0; // alert("Game over");
//     }
// }, 10000); // 10 sek

 //showKaffometer(0);
 function showKaffometer(index) {
    if (index >=0 && index <=4) {
        document.getElementById('kaffeContainer').innerHTML = /*HTML*/`<img id="kaffe" src=" ${images[index]} ">`;
        document.getElementById('imgContainer').innerHTML = /*HTML*/`<img id="img1" src=" ${img2[index]} ">`;
    }
    // if (index == 0){
    //     document.getElementById('kaffe') = "${img[0]}";
    //  }
    //  else if (index == 1){
    //     document.getElementById('kaffe') = "${img[1]}";
    //  }
    //  else if (index == 2){
    //     document.getElementById('kaffe') = "${img[2]}";
    //  }
    //  else if (index == 3){
    //     document.getElementById('kaffe') ="${img[3]}";
    //  }
    //  else
    //     document.getElementById('kaffe') = "${img[4]}";
       
     } 

     function kaffeRefill() {
    //    document.getElementById('kaffe').innerHTML = 
    if (kaffometer >= 4) {
        kaffometer = 4;
    }
    showKaffometer(kaffometer);
    kaffometer++ ;
     }
     
      // function coffeeDrain()
      //  setTimeout();
     //   const coffeeDrain = setInterval(function, 50000)
        
    function coffeeDrain() {
        showKaffometer(kaffometer);
        kaffometer--;
        console.log("Kaffometer: " + kaffometer);
        if (kaffometer == 0) {
            // dead pus
         //   alert ("Game over. Dead pus");
        }
    }
    
    function startCoffeeDrain() {
    setInterval(coffeeDrain(), 1000);
    updateView();
    }

     /* 
     function autoTrafficLight() {
            color1();
            setTimeout(color2, 1000);
            setTimeout(color3, 2000);
            setTimeout(autoTrafficLight, 3000)
        }
        autoTrafficLight(); 
        */
       
        