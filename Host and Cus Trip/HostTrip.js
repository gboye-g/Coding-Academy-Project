$(document).ready(function () {
  let userid = sessionStorage.getItem('userid');

//Adding a time constraint to prevent past date entery starts
// const date = document.getElementById("time");
// const currentDatetime = new Date().toISOString().slice(0, 19)
// date.min = currentDatetime;
//Adding a time constraint to prevent past date entery ends

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
  

          $('#uploadTrip').click(function (e) { 
            // e.preventDefault();

            let ans = validate();
            console.log(ans)

            if(ans){

              obj.startTime = $('#time').val();
              obj.sourceLocations = sourceCategory;
              obj.destinationLocations = destinationCategory;
              obj.noOfSeats = $('#noOfSeats').val();

              console.log(obj)


              $.ajax({
                type: "POST",
                contentType: "application/json",
                url: `http://localhost:8080/hosts/${userid}/trips`,
                data:JSON.stringify(obj),
                success: function (response) {
                  
                  console.log('sent ' + obj )
                  window.location = "../Host and Cus Dash/HostDash.html"
                },
                // error:(error)=>{
                //     alert(error)
                // }
            });
          }
            // }
          });                
          });
                 //jQuery Connecting to backend ends
    