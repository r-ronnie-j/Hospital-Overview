let uploadPhoto= document.querySelector('#upload-photo');
let uploadedPhoto = document.querySelector('#uploaded-photo');
uploadPhoto.addEventListener('change',(event)=>{
    uploadedPhoto.src= URL.createObjectURL(event.target.files[0]);
})