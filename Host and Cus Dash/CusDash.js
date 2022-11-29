$(document).ready(function () {

  //Jquery connection to backend starts
  let userid = sessionStorage.getItem('userid');

  let moreInfo = () => {
    $('.eventItem').click(function (e) {
      e.preventDefault();
      console.log('clicked')

    });
  }

  let listitem = (single)=> {
    return `
      <tr id='${single.id}'>
        <td>${single.firstName}</td>
        <td>${single.lastName}</td>
        <td>${single.email}</td>
        <td>${single.mobile}</td>
        <td>${single.plateNumber}</td>
        <td><button>Click</button></td>
      </tr>
    `
  }

  $.ajax({
    type: "GET",
    url: "http://localhost:8080/hosts/" + userid + "/trips",
    success: function (response) {
      $.each(response, function (indexInArray, valueOfElement) {
        
        console.log(valueOfElement)
        $('#cusDashTableBody').append(listitem(valueOfElement));

      });

    }
  });
  //Jquery connection to backend ends

});
