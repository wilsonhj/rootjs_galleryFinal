/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	$( () => {
		$('#gallery').sortable();
		$('#gallery').disableSelection();
	});
	makeGallery(pictures);
	addModalCloseHandler();
}
function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section

	//create a loop to go through the images in the imageArray
	for (let img of pictures) {
		//create the elements needed for each picture, store the elements in variable
		let pic = $('<figure>').addClass("imageGallery col-xs-12 col-sm-6 col-md-4");
		pic.click(displayImage); // pic.on('click', displayImage);
		pic.css('background-image', `url(${img})` );
		
		let imgFile = img.slice(img.lastIndexOf('/')+1);
		let caption = $('<figcaption>').text(imgFile);
		pic.append(caption);
		pic.appendTo('#gallery'); // $('#gallery').append(pic);

	}
/*
		<figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-1.jpg);">
			<figcaption>js i</figcaption>
		</figure>
		*/
		//attach a click handler to the figure you create.  call the "displayImage" function.  
		//append the element to the #gallery section
	
	// side note: make sure to remove the hard coded html in the index.html when you are done!

}

function addModalCloseHandler(){
	$('#galleryModal img').click(() => $('#galleryModal').modal('hide'));
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	
}

function displayImage(){

	var targetElement = $(this);
	let background = targetElement.css("background-image");
	background = background.slice(background.lastIndexOf('/images')+1, -2);
	
	
	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method

	//change the modal-title text to the name you found above
	$('.modal-title').text(background);
	//change the src of the image in the modal to the url of the image that was clicked on
	$(".modal-body img").attr("src", background);
	$('#galleryModal').modal('show');
	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}





