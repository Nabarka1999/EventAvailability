let allEvents=[
  {
      id: 1,
      name: "Birthday",
      seats: 10,
      iamge:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
      id: 2,
      name: "Buffet Breakfast",
      seats: 6,
      iamge:
          "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
      id: 3,
      name: "Movie",
      seats: 3,
      iamge:
          "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
      id: 4,
      name: "Buffet Lunch",
      seats: 0,
      iamge:
          "https://plus.unsplash.com/premium_photo-1672242676674-f4349cc6470e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
      id: 5,
      name: "Buffet Dnner",
      seats: 20,
      iamge:
          "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


let content= "";

allEvents.forEach((event)=>{
  event=`<div class="event" style="background-image:url('${event.iamge}')">
        <h3>${event.name}</h3>
        <p>Seats left: ${event.seats}</p>
        <h4>Available</h4>
        <button id=${event.id}>Book Now</button>
      </div>`;
      content+=event;
});

document.getElementById("allEvents").innerHTML = content;

let allButtons= document.querySelectorAll("button");

allButtons.forEach((button)=> {
  button.addEventListener("click",()=> checkAvailability(button));
});

function checkAvailability(button){
  let buttonID= button.id;
  let totalseats= allEvents[buttonID - 1].seats;
  document.querySelectorAll("h4")[buttonID - 1].style.display="block";
  if (totalseats == 0){
    document.querySelectorAll("h4")[buttonID - 1].innerText="Not Available";
  } else {
    document.querySelectorAll("h4")[buttonID - 1].innerTex="Available";
  }
}