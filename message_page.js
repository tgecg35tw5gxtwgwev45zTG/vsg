Webcam.attach( '#camera' )

camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
})

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ims8IOgnq/',modelLoaded);

