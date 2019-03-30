 function previewFiles(event) {
   console.log(event);
   document.querySelector(".img").innerHTML = event.target.files[0];
 }           