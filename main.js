canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");




background_image="parkingLot.jpg"
rover_image="car2.png"

rover_width=75;
rover_height=100;

rover_x=5;
rover_y=225;
 
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadRover;
    rover_imgtag.src=rover_image;
   
}
function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
}
function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height)
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed)
    if(keyPressed=="37"){
         Left();
         console.log("left")
         
    }
    if(keyPressed=="38"){
        Up();
        console.log("up")

   }
if(keyPressed=="39"){
         Right();
         console.log("right")

    }
    if(keyPressed=="40"){
        Down();
        console.log("down")
   }

}
function Up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed,x= "+rover_x+",y= "+rover_y);
        uploadBackground();
        uploadRover();

    }
}
function Down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed,x= "+rover_x+",y= "+rover_y);
        uploadBackground();
        uploadRover();
        
    }
}
function Right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed,x= "+rover_x+",y= "+rover_y);
        uploadBackground();
        uploadRover();
        
    }
}
function Left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed,x= "+rover_x+",y= "+rover_y);
        uploadBackground();
        uploadRover();
        
    }
}