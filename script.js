/* 
const firstfield=document.getElementById("type");
  firstfield.addEventListener("change",(e)=>{
      if(firstfield.value=="top"){
          document.getElementById("otherTop").classList.remove("hidden");
}
})
 */
var theTopImages = new Array('imgs/top-shirt-black.jpg','imgs/top-shirt-red.jpg', 'imgs/top-shirt-black2.jpg','imgs/top-tshirt-black.jpg','imgs/top-shirt-white.jpg' )
var theBottomImages = new Array('imgs/bottom-skirt-black.jpg','imgs/bottom-pants-black.jpg','imgs/bottom-shorts-blue.jpg','imgs/bottom-joggers-black.jpg')
var theShoesImages = new Array('imgs/shoes-boots-brown.jpg','imgs/shoes-sneakers-pink.jpg')
var theTopImagesBlack = new Array('imgs/top-shirt-black.jpg', 'imgs/top-shirt-black2.jpg','imgs/top-tshirt-black.jpg')
var theBottomImagesBlack = new Array('imgs/bottom-skirt-black.jpg','imgs/bottom-pants-black.jpg','imgs/bottom-joggers-black.jpg')
var theBottomImagesSkirt = new Array('imgs/bottom-skirt-black.jpg')


var index = 0;

function makeImage() {
   var img = document.createElement('img')
   //img.src = theTopImages[index];
   document.getElementById('displayTops').appendChild(img);
}

function nextImage(){
   var img = document.getElementById('displayTops').getElementsByTagName('img')[0]
   index++;
   index = index % theTopImages.length; 
   img.src = theTopImages[index];
}

function makeImage2() {
    var img = document.createElement('img')
    //img.src = theTopImages[index];
    document.getElementById('displayBottoms').appendChild(img);
 }
 
 function nextImage2(){
    var img = document.getElementById('displayBottoms').getElementsByTagName('img')[0]
    index++;
    index = index % theBottomImages.length; 
    img.src = theBottomImages[index];
 }

 function makeImage3() {
    var img = document.createElement('img')
    //img.src = theTopImages[index];
    document.getElementById('displayShoes').appendChild(img);
 }
 
 function nextImage3(){
    var img = document.getElementById('displayShoes').getElementsByTagName('img')[0]
    index++;
    index = index % theShoesImages.length; 
    img.src = theShoesImages[index];
 }
 
function generate(yes) {
     var randomNum1 = Math.floor(Math.random() * theTopImages.length);
     document.getElementById("myPicture").src = theTopImages[randomNum1]; 
     console.log(theTopImages[randomNum1]);

     var randomNum2 = Math.floor(Math.random() * theBottomImages.length);
     document.getElementById("myPicture2").src = theBottomImages[randomNum2]; 
     console.log(theBottomImages[randomNum2]);

     var randomNum3 = Math.floor(Math.random() * theShoesImages.length);
     document.getElementById("myPicture3").src = theShoesImages[randomNum3]; 
     console.log(theTopImages[randomNum3]);

    }


function filterSelection(color) {
    if (color == "black" || "emo"){
        console.log("black")
        var randomNum1 = Math.floor(Math.random() * theTopImagesBlack.length);
        document.getElementById("myPicture").src = theTopImagesBlack[randomNum1]; 
     console.log(theTopImagesBlack[randomNum1]);

        var randomNum2 = Math.floor(Math.random() * theBottomImagesBlack.length);
     document.getElementById("myPicture2").src = theBottomImagesBlack[randomNum2]; 
     console.log(theBottomImagesBlack[randomNum2]);

        var randomNum3 = Math.floor(Math.random() * theShoesImages.length);
     document.getElementById("myPicture3").src = theShoesImages[randomNum3]; 
     console.log(theShoesImages[randomNum3]);
    }

    if (color == "black" || "emo"){
        var randomNum1 = Math.floor(Math.random() * theTopImagesBlack.length);
        document.getElementById("myPicture").src = theTopImagesBlack[randomNum1]; 
     console.log(theTopImages[randomNum1]);

        var randomNum2 = Math.floor(Math.random() * theBottomImagesSkirt.length);
     document.getElementById("myPicture2").src = theBottomImagesSkirt[randomNum2]; 
     console.log(theBottomImagesSkirt[randomNum2]);

        var randomNum3 = Math.floor(Math.random() * theShoesImages.length);
     document.getElementById("myPicture3").src = theShoesImages[randomNum3]; 
     console.log(theShoesImages[randomNum3]);
    }
}