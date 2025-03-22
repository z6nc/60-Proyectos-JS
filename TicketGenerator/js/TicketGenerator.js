// Variables globales 
const $ = (selector) => document.querySelector(selector)
let getImageUser = $("#AvatarUser"); // get images for user
const userNameValor = $("#fullNameUser").value ; 
let  urlImgPreview = " "; // alojamineto para url imagen 

    
      getImageUser.addEventListener("change", function (event) {
        const InsertPreviewImage = $("#preview");
        const file = event.target.files[0]; // Obtener el archivo seleccionado
        if (file) {
          const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);  // convertidor KB a MB
          if(fileSizeMB >= 5) {
              alert("El archivo es demasiado grande (máximo 5MB).");
              return;
          } 
          const fileURL = URL.createObjectURL(file);
          InsertPreviewImage.src = fileURL;
          urlImgPreview = fileURL
        }
        
    });



    document.querySelector("#formulario").addEventListener("submit", function(event) {
      event.preventDefault(); 
      SendForm();
      confetti();
    });
  

    function SendForm() {
     const userNameValor = $("#fullNameUser").value ; 
     const userGithub  = $("#githubUser").value
      AsignarTicket(userNameValor , userGithub)
      resetformulario()
    }


    function AsignarTicket(nameUser , githubUser) {
      const  getUserName = $(".userName"); // input donde se asignará el valor
      const getUserGithub = $(".userGithub");
      const numberTicket  = $(".numberTicket");
      const getPhotoUser  = $(".userImg");
      const preview = $("#preview");

      if (getUserName && getUserGithub && numberTicket && getPhotoUser && preview) {
        getUserName.textContent = nameUser;
        getUserGithub.textContent = githubUser;
        numberTicket.textContent = `#${randonNumberTicket()}`;
        getPhotoUser.src = urlImgPreview;
        preview.src = "./asset/icon-upload.svg"

      } else {
        console.error("No se encontró el elemento .userName");
      }
    }
 
    function resetformulario (){
      $("#formulario").reset();
    }
    function randonNumberTicket(){
      return Math.floor(Math.random() * 40000) +1 ;
    }