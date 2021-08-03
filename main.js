function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet", ModelLoad);
}

function draw(){
  image(video, 0, 0, 300, 300);
  classifier.classify(video, Result);
}

function ModelLoad(){
  console.log("Model Loaded :)");
}

function Result(error, result){
  if(error){
    console.error("error");
  }else{
    console.log(result);
    document.getElementById("object").innerHTML=result[0].label;
    document.getElementById("accuracy").innerHTML=floor(result[0].confidence*100)+"%";
  }
}