prediction_1=""
prediction_2=""
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("Result").innerHTML='<img id="capture_image"src="'+data_uri+'">';
});
}
console.log('ml5 version-',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vzdYNWBs_/model.json'modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');
}
function speak(){
    var synth=window.speachSynthesis;
    speak_data1="The First Predection is "+prediction_1;
    speak_data2="And the Second Predection is "+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}