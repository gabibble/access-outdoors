const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const ssid = urlParams.get("ssid");

let campSite = [
  {
    id: "cg001",
    campground: "French Pete",
    site: "Site 2",
    area: "Willamette National Forest",
    city: "Blue River",
    state: "Oregon",
    link: "https://www.recreation.gov/camping/campgrounds/234730",
    photo: "camp-ph.jpg",
    type: "Multi-site, Multi-fee",
    reservable: "Yes",
    parking:
      "Fits 2-3 Cars. Slight incline from road to parking spot, more flat closest to camping area.",
    entry:
      "Large Rocks between parking spots and camping area. 4 ft between rocks at largest, flattest opening ",
    bathroomDistance: "225 ft from parking area to bathroom door ",
    picnicTable:
      "Room for wheelchair seating at both ends of each picnic table ",
    surface:
      "Firm, dusty dirt and pine needles. Road and parking spot are thin layer of compacted gravel with loose rocks on top.",
    siteFeatures: "View of river. Next to Camp Host.",
    extraFeatures: "",
  },
];

async function getData() {
  let response = await fetch(
    `https://api.apispreadsheets.com/data/${ssid}/?query=select * from ${ssid} where id='${id}'`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let data = await response.json();
  console.log(data.data);
  return data.data;
}

async function displayDetails() {
  let data = campSite;
//   let data = await getData();
  let details = document.querySelector("#details");
    details.innerHTML = `       <div class="col-md-6 p-4">
            <h2 class="display-4">${data[0].campground}</h2>
            <h3 class="display-6">${data[0].site}</h3>
            <h5>Near ${data[0].city}, ${data[0].state} &nbsp|&nbsp ${data[0].area}</h5>
            <a href="${data[0].link}">website</a>
            <br><br>
     
            <h3 class="display-6">Accessibility Details</h3>
            <h5>Campsite Type</h5>
            <p>${data[0].type}</p>
            <h5>Reservable</h5>
            <p>${data[0].reservable}</p>
            <h5>Entry</h5>
            <p>${data[0].entry}</p>
            <h5>Distance to bathroom</h5>
            <p>${data[0].bathroomDistance}</p>
            <h5>Picnic Table</h5>
            <p>${data[0].picnicTable}</p>
            <h5>Surface</h5>
            <p>${data[0].surface}</p>
            <h5>Site Features</h5>
            <p>${data[0].siteFeatures}</p>
            <p>${data[0].extraFeatures}</p>
          </div>
                  <div class="col-md-6 p-4">
            <img src="/images/${data[0].photo}" class="img-fluid" alt="${data[0].campground}" />
          </div>`;
    console.log(data[0])
}

displayDetails()