 function previewFiles(event) {
   console.log(event);
   document.querySelector(".img").innerText = event.target.files;
 }           