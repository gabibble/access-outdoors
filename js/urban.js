let ssid = "SKIabroHnNfQ69Ft";

let urbanObj = [
  {
    id: "uw001",
    name: "placeholder walk",
    neighborhood: "cool neighborhood",
    city: "cool city",
    state: "cool state",
    link: "a link",
    photo: "urban-ph.jpg",
  },
  {
    id: "uw002",
    name: "placeholder walk",
    neighborhood: "cool neighborhood",
    city: "cool city",
    state: "cool state",
    link: "a link",
    photo: "urban-ph.jpg",
  },
];

async function getData() {
  let response = await fetch(`https://api.apispreadsheets.com/data/${ssid}/`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let data = await response.json();
  console.log(data.data);
  return data.data;
}

async function displayCards() {
    let data = urbanObj;
//   let data = await getData();
  let cards = document.querySelector("#cards");
  data.map((element) => {
    cards.innerHTML += `     
      <div class="col-md-4 col-sm-6 mb-4">
            <div class="card" >
              <img src="./images/${element.photo}" class="card-img-top card-image" alt="...">
              <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <h6>${element.neighborhood}</h6>
                <p class="card-text">${element.city}, ${element.state}</p>
                <a href="/urbanwalk.html?ssid=${ssid}&id=${element.id}" class="btn btn-primary" id=${element.id}>Learn More</a>
              </div>
            </div>
          </div>`;
  });
}

displayCards();
