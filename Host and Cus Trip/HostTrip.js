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
          let sourceLocations = ''
          let destinationLocations = ''
          let destinationCategory = ''


          $(".sourceLocationList").change(function (e) {
            e.preventDefault();
            console.log(e.target.id);
            let text = $(".sourceLocationList option:selected").text();
            console.log(text);
            sourceCategory = text;
          });

          $(".destinationLocationList").change(function (e) {
            e.preventDefault();
            console.log(e.target.id);
            let text = $(".destinationLocationList option:selected").text();
            console.log(text);
            destinationCategory = text;
          });

          $('#uploadTrip').click(function (e) { 
            e.preventDefault();

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

            // }
          });                
          });
                 //jQuery Connecting to backend ends
    