function uploadVideo() {
    const form = document.getElementById('upload-form');
    const fileInput = document.querySelector('input[type="file"]');
    const files = fileInput.files;
    const formData = new FormData();
    
    for (let i = 0; i < files.length; i++) {
      formData.append('video[]', files[i]);
    }
    
    fetch('/your-api-endpoint', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      console.log(response);
      alert('Videos uploaded successfully!');
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while uploading the videos.');
    });
  }
  
