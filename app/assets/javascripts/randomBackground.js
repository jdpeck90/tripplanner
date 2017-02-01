console.log('randomizeBackground is connected')

var randomizeBackground= function(){
    var images = ["balloon.jpg","balloon.jpg","beach.jpg","kayak.jpg"]
    console.log(images,'images')
        $('#body').css({'background-image': 'image_url(' + images[Math.floor(Math.random() * images.length)] + ')'});
           console.log('after body post')
};
randomizeBackground()
console.log('background posted')
