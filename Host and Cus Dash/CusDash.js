$(document).ready(function () {
  //Jquery connection to backend starts
  let userid = sessionStorage.getItem('userid');

  let moreInfo = () => {
    $('.eventItem').click(function (e) {
      e.preventDefault();
      console.log('clicked')

    });
  }
  console.log(localStorage.getItem("res"), "displayed")

  let listitem = (single)=> {
    console.log(single,"eeee")
    return `
      <tr id=''>
        <td>${single?.phoneNumber}</td>
        <td>${single?.vehicleNo}</td>
        <td>${new Date(single?.startTime).toDateString()}</td>
        <td>${single?.lhostName}</td>
        <td>${single?.fhostName}</td>
      </tr>
    `
  }
  const obj = JSON.parse(localStorage.getItem("pathParam"));
  $.ajax({
    type: "GET",
    url: `http://localhost:8080/users/${userid}/trips/search/${obj.sourceLocations}/${obj.destinationLocations}`,
    success: function (response) {
      $.each(response, function (indexInArray, valueOfElement) {
        
        console.log(valueOfElement,"yyyy")
        $('#cusDashTablebody').append(listitem(valueOfElement));
        
      });

    }
  });
  //Jquery connection to backend ends

});
