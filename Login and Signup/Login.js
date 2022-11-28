$(document).ready(function () {
 
// Form validation starts
let email = document.getElementById("email");
let password = document.getElementById("password");
let state =''

let email_pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

let validate = () => {
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
  if (document.forms.password.value === "") {
    return false;
  }

  return true;
};
// Form validation ends

//jQuery Connecting to backend starts
   let obj = {}    
let submitFunc = ()=>{
  let url = ''
  let redirect = ''

  if(state == 'host'){
    url = "http://localhost:8080/hosts/login"
    redirect = "../Host and Cus Trip/HostTrip.html";
  }else if(state == 'customer'){
    url = "http://localhost:8080/users/login"
    redirect = "../Host and Cus Trip/CusTrip.html";
  }else{
    return
  }

  let ans = validate();

  console.log(ans)
  if(ans){

    obj.email = $('#email').val();
    obj.password = $('#password').val();

    console.log(obj)

    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: url,
      data:JSON.stringify(obj),
      success: function (response) {
        
        console.log('sent ' + (response.id) )
          sessionStorage.setItem('userid', response.id)
          window.location = redirect

      },
      error:(error)=>{
          console.log('err    '+error.message)
          errorMessage6.className = "active"; 
      }
    });
  }
}
//jQuery Connecting to backend ends
  
 //js code to appear user dropdown options starts
 let toggle = document.getElementById("toggle"),
 hostToggle = document.querySelectorAll(".toggle-btn")[1];
 cusToggle = document.querySelectorAll(".toggle-btn")[0];

 hostToggle.addEventListener("click", ()=>{
   toggle.classList.add("active");
   state = 'host'
   console.log(state)
   submitFunc()
 })
 cusToggle.addEventListener("click", ()=>{
  toggle.classList.remove("active");
  state = 'customer'
  console.log(state)
  submitFunc()
})
//js code to appear user dropdown options ends

//js code to show/hide password and change icon starts
const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password");

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

                });
