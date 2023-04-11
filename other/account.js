
let width = 400;   
let height = 0;     

let streaming = false;

let video = null;
let canvas = null;
let photo = null;
let startbutton = null;
let capturebutton = null;

video = document.getElementById('video');
canvas = document.getElementById('canvas');
photo = document.getElementById('photo');
startbutton = document.getElementById('startbutton');
capturebutton = document.getElementById('capturebutton');

document.getElementById("camera-widget").style.display = "none";


startbutton.addEventListener('click', function () {
    document.getElementById("camera-widget-wrapper").style.display = "block";
    document.getElementById("camera-widget").style.display = "block";
    document.getElementById("canvas").style.display = "none";
   startCamera();
});

function startCamera() {

    playVideo();

    video.addEventListener('canplay', function (ev) {
        if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width);

            if (isNaN(height)) {
                height = width / (4 / 3);
            }

            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
    }, false);

    

    clearphoto();
}

capturebutton.addEventListener('click', function (ev) {
    takepicture();
    document.getElementById("save").classList.remove("disabled");
    ev.preventDefault();
}, false);

function playVideo() {
    document.getElementById("camera").style.display = "block";

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function (err) {
            console.log("An error occurred: " + err);
        });
}


function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
}


function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    } else {
        clearphoto();
    }

    stopCamera();
    document.getElementById("retake").style.display = "block";
    document.getElementById("output").style.display = "block";
    document.getElementById("camera").style.display = "none";
    document.getElementById("canvas").style.display = "block";
}


function stopCamera() {
    const tracks = video.srcObject.getTracks();
    tracks.forEach(track => track.stop());
}

function resetWidgetControls() {

    document.getElementById("retake").style.display = "none";
    document.getElementById("output").style.display = "none";
    document.getElementById("camera").style.display = "block";
    document.getElementById("canvas").style.display = "none";

    
    document.getElementById("save").classList.add("disabled");
}

cancel.addEventListener('click', function () {
    
    document.getElementById("camera-widget-wrapper").style.display = "none";
    stopCamera();
    clearphoto();
    // resetWidgetControls();
});

retake.addEventListener('click', function () {
    playVideo();
    resetWidgetControls();
});

save.addEventListener('click', function () {

    let capturedImg = document.getElementById("photo").src;

    fetch(capturedImg)
        .then(res => res.blob())
        .then(blob => uploadImage(blob))
        .then(() => {
            document.getElementById("camera-widget-wrapper").style.display = "none";
            resetWidgetControls();
        })
        .catch(error => {
            console.log(error);
        });

    resetWidgetControls();
});


const uploadImage = (file) => {
  
    console.log(file);
    
}
