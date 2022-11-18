
// Form email validation starts
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

let form = document.getElementById("signupCus");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = validate();

  if (isValid) console.log(event.target);
});
// Form email validation ends

const container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showHidePw"),
pwFields = document.querySelectorAll(".password");

      //js code to show/hide password and change icon starts
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
      //js code to show/hide password and change icon ends


// Backend form handling starts
const fname = form.getElementById(".fname");
const lName = form.getElementById(".lname");
let mail = form.getElementById("email");
const dob = form.getElementById("dob");
const ISWid = form.getElementById("ISWid");
const password = form.getElementById("password");
const confirmPassword = form.getElementById("confrimPAssword");

function handleForm() {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
  }
  // Backend form handling ends