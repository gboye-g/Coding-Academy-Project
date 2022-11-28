$(document).ready(function () {

 //Jquery connection to backend starts
  let userid = sessionStorage.getItem('userid');

  let moreInfo = ()=>{
    $('.eventItem').click(function (e) { 
      e.preventDefault();
      console.log('clicked')
      
    });
  }
  let listitem = (single)=>{
    return  `<li class="eventItem" id='${single.id}'>
      <div class="event-list-lower">
        <div class="list-heading">
          <div id="line">
            <div class="event-details">
              <p class="title" id="eventName">${single.request}</p>
              <p class="type" id="location">${single.startTime}</p>
            </div>
          </div>
          <div id="three">
            <div style="color:black">0/0</div>
            <div>${single.noOfSeats}</div>
            <div id="eventType" style="color:black"></div>
          </div>
        </div>
        <div class="more-container">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <button id="requestButton" class="requestButton"></button> 
        </div>
        <div class="con-dropdown">
          <ul>
            <li id="" class="edit">Edit</li>
            <li id="" class="delete">Delete</li>
          </ul>
        </div>
      </div>
    </li>`
  }
  
$.ajax({
  type: "GET",
  url: "http://localhost:8080/hosts/"+userid+"/trips",
  success: function (response) {
      $.each(response, function (indexInArray, valueOfElement) { 
        console.log(valueOfElement)
          $('#table').append(listitem(valueOfElement));
          
      });
      moreInfo();
  }
});
//Jquery connection to backend ends

});
