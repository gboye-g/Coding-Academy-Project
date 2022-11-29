$(document).ready(function () {
  //jQuery Connecting to backend starts
            let obj = {}

            let sourceCategory = ''
            let destinationCategory = ''

          $(".sourceLocationList").change(function (e) {
            console.log(e.target.id);
            let text = $(".sourceLocationList option:selected").text();
            console.log(text);
            sourceCategory = text;
          });

          $(".destinationLocationList").change(function (e) {
            console.log(e.target.id);
            let text = $(".destinationLocationList option:selected").text();
            console.log(text);
            destinationCategory = text;
          });

            // Form validation starts
let validate = () => {
if (sourceCategory == destinationCategory) {
    errorMessage1.className = "active"; 
    errorMessage1.focus();
    
    return false;
  }
  else{
    errorMessage1.className = "input-error"; 
    errorMessage1.focus();
  }

  return true;
};
// Form validation ends


          $('#searchTrip').click(function (e) { 
            e.preventDefault();

            let ans = validate();
            console.log(ans)

            if(ans){

              obj.sourceLocations = sourceCategory;
              obj.destinationLocations = destinationCategory;

              console.log(obj)
              localStorage.setItem("pathParam", JSON.stringify(obj))
              window.location = "../Host and Cus Dash/CusDash.html"
          }

          });  
          
          });
                 //jQuery Connecting to backend ends
    