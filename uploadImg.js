//  function previewFiles(event) {
//    console.log(event);
//    document.querySelector(".img").src = event.target.files[0];
   
//  }           

// var file = document.getElementById('takePic').files[0]
//     var fr = new FileReader()
//     fr.readAsDataURL(file)
//     fr.onload = function(e) {
//       var img = document.querySelector(".img")
//       img.src = this.result
//     } 
  function previewFiles() {
    var reader = new FileReader();
    reader.onloadend = function() {
      document.getElementById('img').src = reader.result;
    }
    if (event.target.files[0]) {reader.readAsDataURL(event.target.files[0]);}
    }

  document.getElementById('takePic').onChange = previewFiles;