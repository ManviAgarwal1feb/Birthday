var canvas = new fabric.Canvas('my_canvas');
 var x= document.getElementById("myAudio");
var block_image_object=""
function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
     block_image_object=Img;
     block_image_object.scaleToWidth(1000);
     block_image_object.scaleToHeight(650);
     block_image_object.set({
         top:10,
        left:0
     })  ;
     canvas.add(block_image_object);
    });
	
	
}

function playSound(){
	x.play();

}
