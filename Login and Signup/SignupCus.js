// Form email validation starts
let errorMessage = document.getElementById("errorMessage");

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

let name_pattern = /^[A-Za-z-]+$/;
let email_pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
let phone_pattern = /^[0-9]+$/;

let validate = () => {
  if (!document.forms.fname.value.match(name_pattern)) {
    errorMessage1.className = "active"; 
    errorMessage1.focus();

    return false;
  } 
  else{
    errorMessage1.className = "input-error"; 
    errorMessage1.focus();
  }
  if (!document.forms.lname.value.match(name_pattern)) {
    errorMessage2.className = "active"; 
    errorMessage2.focus();

    return false;
  } 
  else{
    errorMessage2.className = "input-error"; 
    errorMessage2.focus();
  }
  if (
    document.forms.email.value === "" ||
    !document.forms.email.value.match(email_pattern)
  ) {
    errorMessage3.className = "active"; 
    errorMessage3.focus();

    return false;
  }
  else{
    errorMessage3.className = "input-error"; 
    errorMessage3.focus();
  }
  if (!document.forms.phone.value.match(phone_pattern)) {
    errorMessage4.className = "active"; 
    errorMessage4.focus();

    return false;
  }
  else{
    errorMessage4.className = "input-error"; 
    errorMessage4.focus();
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
// const fname = form.getElementById("fname");
// const lName = form.getElementById("lname");
// let mail = form.getElementById("email");
// let phone = form.getElementById("phone");
// const dob = form.getElementById("dob");
// const ISWid = form.getElementById("ISWid");
// const password = form.getElementById("password");
// const confirmPassword = form.getElementById("confrimPAssword");

// function handleForm() {
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData);
//     console.log(data);
  // }
  // Backend form handling ends