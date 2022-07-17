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

/* theImages[0] = 'imgs/top-shirt-black.jpg'
theImages[1] = 'imgs/top-shirt-black.jpg'
theImages[3] = 'imgs/bottom-pants-black.jpg'
theImages[4] = 'imgs/top-shirt-red.jpg' */


function generate() {
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