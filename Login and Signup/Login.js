 //js code to appear user dropdown options

 let toggle = document.getElementById("toggle"),
 hostToggle = document.querySelectorAll(".toggle-btn")[1];
 cusToggle = document.querySelectorAll(".toggle-btn")[0];

 hostToggle.addEventListener("click", ()=>{
   toggle.classList.add("active");
 })
 cusToggle.addEventListener("click", ()=>{
  toggle.classList.remove("active");
})


let email = document.getElementById("email"),
    errorMessage = document.getElementById("errorMessage");

let email_pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

let validate = () => { 
  if (
    document.forms.email.value === "" ||
    !document.forms.email.value.match(email_pattern)
  ) {
    errorMessage.className = "active"; 
    errorMessage.focus();

    return false;
  }
  
  return true;
};

let form = document.getElementById("login");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = validate();

  if (isValid) console.log(event.target);
});


const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password");

      //js code to show/hide password and change icon
      pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type === "password"){
                    pwField.type = "text";
               
                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye")
                    })
               
                } else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash")
                    })

                }
            })
        })
      })

      //js code to appear signup and login form
      signUp.addEventListener("click", ()=>{
        container.classList.add("active");
      })
      logIn.addEventListener("click", ()=>{
        container.classList.remove("active");
      })
