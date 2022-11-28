//Jquery connection to backend starts
$(document).ready(function () {

    let userid = sessionStorage.getItem('userid');
    console.log(response)

    let listitem = (single)=>{
        `<li class="eventItem" id='${single.id}'>
        <div class="event-list-lower">
          <div class="list-heading">
            <div id="line">
              <div class="event-details">
                <p class="title" id="eventName">${single.host}</p>
                <p class="type" id="location">${single.address.city}</p>
              </div>
            </div>
            <div id="three">
              <div style="color:black">0/0</div>
              <div>${single.cost}</div>
              <div id="eventType" style="color:black">${single.eventType}</div>
            </div>
          </div>
          <div class="more-container">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div class="con-dropdown">
            <ul>
              <li id="${single.eventID}" class="edit">Edit</li>
              <li id="${single.eventID}" class="delete">Delete</li>
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
            $('#table').append(
               );
            
        });
    }
});

});
//Jquery connection to backend ends