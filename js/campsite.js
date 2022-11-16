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
    details.innerHTML += `${data[0].campground}`;
    console.log(data[0])
}

displayDetails()