//Model
let kaffometer = 2;
const img = [ 
    'https://www.toramo.games/img/battery0.png', 
    'https://www.toramo.games/img/battery25.png', 
    'https://www.toramo.games/img/battery50.png', 
    'https://www.toramo.games/img/battery75.png', 
    'https://www.toramo.games/img/battery100.png' ];
// let bananometer = 25;
const img2 = [
    'https://www.nicepng.com/png/detail/227-2271477_garfield-characters-logo-vector-happy-garfield.png',
    'https://murphysmesshall.files.wordpress.com/2017/10/cf3fbb9b8c9baa8fafcccdc551545cf4-monday-face-garfield-pictures.jpg',
    'https://www.mezzacotta.net/garfield/comics/2143.png',
    'https://c4.wallpaperflare.com/wallpaper/138/546/498/technology-programming-coder-garfield-wallpaper-preview.jpg',
    
]

//View
updateView();

function updateView() {
    document.getElementById('app').innerHTML =  /*HTML*/ ` 
    <h1>NEED COFFEE</h1>
    <div id="imgContainer">
        <img id="img1" src="${img2[3]}">
    </div>
    
    <div id="kaffe">
        <!--img src=" ${img[0]} "-->
    </div>

    <button onclick="KaffeRefill()">Give coffee</button>
    
    `;
}


//Controller
// if (kaffometer = 25)
// return document.getElementById('kaffe').innerHTML = img
// 
// index = 1;

// Tor var her (forslag til gradvis minking av kaffometer):
setInterval(function(){
    kaffometer--;
    if (kaffometer <= 0) {
        kaffometer = 0; // alert("Game over");
    }
}, 10000); // 10 sek

 showKaffometer(3);
 function showKaffometer(index) {
    // document.getElementById('kaffe').innerHTML =  img[index];
    if (index = 0){
        document.createElement(img[index]);
        // document.getElementById('kaffe') = "${img[0]}";
     }
     else if (index = 1){
        document.createElement(img[index]);
        // document.getElementById('kaffe') = "${img[1]}";
     }
     else if (index = 2){
        document.createElement(img[index]);
        // document.getElementById('kaffe') = "${img[2]}";
     }
     else if (index = 3){
        document.createElement(img[index]);
        // document.getElementById('kaffe') ="${img[3]}";
     }
     else
        document.createElement(img[index]);
        // document.getElementById('kaffe') = "${img[4]}";
       
     } 

     function kaffeRefill() {
    //    document.getElementById('kaffe').innerHTML = 
          kaffometer++ ;
          if (kaffometer <= 4) {
            kaffometer = 4;
        }
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
       
        // function coffeeDrain()