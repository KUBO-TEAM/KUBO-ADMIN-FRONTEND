buildImageDetectorCore('#YoloV4');
buildImageDetectorCore('#YoloV4Tiny');

function buildImageDetectorCore(parentId){
  const dropArea = document.querySelector(`${parentId} .image-box`),
  dragText = dropArea.querySelector(`${parentId} h6`),
  button = dropArea.querySelector(`${parentId} button`),
  input = dropArea.querySelector(`${parentId} input`);

  let file; 

  button.onclick = ()=>{
    input.click(); 
  }

  input.addEventListener("change", function(){
  
    file = this.files[0];
    $(`${parentId} .detected .image-box`).html(
      `
      <img src="assets/img/preloader.gif" width="100">
      <h6>Please wait our AI is processing your image...</h6>
      `
    );

    viewfile();

    var formdata = new FormData();
    formdata.append('image', file);
    
    $.ajax({
      type: 'post',
      url: `api/${$(input).data('model')}/detect`,
      data: formdata,
      contentType: false,
      processData: false,
      success: function (res) {
        console.log(res);
        $(`${parentId} .detected .image-box`).html(`<img src="${res.data.imageUrl}" alt="image" class="predicted-image"></img>`);

        $(`${parentId} #try-again-wrapper`).html(`
          <button id="detect-image-button" onclick="location.reload()">
              Try again!
          </button>
        `);
        
      }
    });


  });

  dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault();
    dragText.textContent = "Release to Upload File";
  });


  dropArea.addEventListener("dragleave", ()=>{
    dragText.textContent = "Drag & Drop to Upload File";
  }); 

  dropArea.addEventListener("drop", (event)=>{
    event.preventDefault(); 
    
    file = event.dataTransfer.files[0];
    viewfile(); 
  });



  function viewfile(){
    let fileType = file.type; 
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    if(validExtensions.includes(fileType)){ 
      let fileReader = new FileReader(); 
      fileReader.onload = ()=>{
        let fileURL = fileReader.result; 
        let imgTag = `<img src="${fileURL}" alt="image" class="raw-image">`;
        dropArea.innerHTML = imgTag; 
      }
      fileReader.readAsDataURL(file);
    }else{
      alert("This is not an Image File!");
      dragText.textContent = "Drag & Drop to Upload File";
    }
  }

}