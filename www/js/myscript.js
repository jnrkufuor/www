(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    var pictureSource;
    var destinationType;
    function onDeviceReady(){
        pictureSource= navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
    }
    document.getElementById("capturePhoto").onclick= function() {
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
            quality: 50,
            destinationType : destinationType.DATA_URL

        });
    };
    function onPhototDataSuccess(imageData)
    {
        var smallImage = document.getElementById('smallImage');
        smallImage.style.display ='block';
        smallImage.src = "data:image/jpeg;base64," + imageData;
    }
    
})();