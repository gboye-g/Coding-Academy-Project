 //js code to appear user dropdown options

 const dropdown = document.querySelector(".dropdown"),
 user = document.querySelector(".user-dropdown");

 user.addEventListener("click", ()=>{
   dropdown.classList.toggle("active");
 })
