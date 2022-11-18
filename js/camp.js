let campObj = [
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
  {
    id: "cg002",
    campground: "French Pete",
    site: "Site 5",
    area: "Willamette National Forest",
    city: "Blue River",
    state: "Oregon",
    link: "https://www.recreation.gov/camping/campgrounds/234730",
    photo: "camp-ph.jpg",
    type: "Multi-site, Multi-fee",
    reservable: "Yes",
    parking: "Fits 2 cars. Pretty flat ",
    entry:
      "Large Rocks between parking spots and camping area. 3 ft between rocks. 5 ft, 5 inches between rock and and tree to enter campsite from parking spot",
    bathroomDistance:
      "About 120 ft from parking spot to bathroom door using road.",
    picnicTable: "Room for wheelchair seating at both ends of one picnic table",
    surface:
      "Firm, dusty dirt and pine needles. Road and parking spot are thin layer of compacted gravel with loose rocks on top.",
    siteFeatures:
      "Mostly flat, but slight incline to back of camping area.  Has a shorter path to bathroom, but fallen tree currently blocking path. ",
    extraFeatures: "",
  },
  {
    id: "cg003",
    campground: "French Pete",
    site: "Site 12",
    area: "Willamette National Forest",
    city: "Blue River",
    state: "Oregon",
    link: "https://www.recreation.gov/camping/campgrounds/234730",
    photo: "camp-ph.jpg",
    type: "Multi-Site, Multi-fee",
    reservable: "First Come First Serve",
    parking: "2-3 cars parked next to each other. Mostly flat",
    entry:
      "Large Rocks between parking spots and camping area. 4 ft, 2 inches as largest gap to pass between rocks.",
    bathroomDistance:
      "Across road from bathrooms. About 50 ft from parking spot to bathroom door. 5 ft as largest gap pass between rocks to bathroom. 2 inch lip from gravel to concrete in front of bathroom door.",
    picnicTable:
      "Room for a wheelchair to pull up to both ends of each picnic table. Second picnic table has more grass and pine cones around it.",
    surface:
      "Firm, dusty dirt and pine needles. Road and parking spot are thin layer of compacted gravel with loose rocks on top.",
    siteFeatures:
      "Can see river from second picnic table. Flat around fire pit",
    extraFeatures: "",
  },
  {
    id: "cg004",
    campground: "Blue Bay Campground ",
    site: "Site 9",
    area: "Deschutes National Forest",
    city: "Sisters",
    state: "Oregon",
    link: "https://www.recreation.gov/camping/campgrounds/232787",
    photo: "camp-ph.jpg",
    type: "Standard ",
    reservable: "Yes",
    parking: "Flat, paved parking area 1-2 cars wide. 2 cars deep.",
    entry: "Pretty level transition from asphalt to dirt",
    bathroomDistance:
      "Paved from parking area to bathroom. 40 ft from end of driveway to bathroom door.",
    picnicTable: "Room for wheelchair on at least one side of picnic table.",
    surface: "Flat, compact dirt and pine needles ",
    siteFeatures: "",
    extraFeatures:
      "Campground road is all paved, but hilly. Boat ramp access to water. Additional wheelchair accessible bathroom closer to campground entrance with a compact dirt, pine needle mixture between paved road and concrete bathroom entrance. ~1.5-2 inch lip from dirt to concrete entrance.",
  },
  {
    id: "cg005",
    campground: "Cougar Crossing Campground ",
    site: "Site 8",
    area: "Willamette National Forest",
    city: "Blue River",
    state: "Oregon",
    link: "https://www.recreation.gov/camping/campgrounds/122491",
    photo: "camp-ph.jpg",
    type: "Standard ",
    reservable: "First Come First Served",
    parking: "Flat, room for 1 car only",
    entry: "",
    bathroomDistance: "",
    picnicTable: "",
    surface: "",
    siteFeatures: "",
    extraFeatures: "",
  },
];

let ssid = "rcDnjf1njC9ePP8L";

async function getData() {
  let response = await fetch(
    `https://api.apispreadsheets.com/data/${ssid}/`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let data = await response.json();
  console.log(data.data);
  return data.data;
}

async function displayCards() {


  let data = campObj;
  // let data = await getData();
  let cards = document.querySelector("#cards");
  data.map((element) => {
    cards.innerHTML += `     
      <div class="col-md-4 col-sm-6 mb-4">
            <div class="card" >
              <img src="./images/${element.photo}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${element.campground}</h5>
                <h6>${element.site}</h6>
                <p class="card-text">${element.city}, ${element.state}</p>
                <a href="/campsite.html?ssid=${ssid}&id=${element.id}" class="btn btn-primary" id=${element.id}>Learn More</a>
              </div>
            </div>
          </div>`;

  });
}

displayCards();

// import { csv } from "csvtojson";

// const csvFile =
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vT_YiiWVkpImTfQXTLGLnZIJet7NNv9VCtHuZV5bXlPZv8UyaCD7IOWcRPE-kCFmSwvYjVCwCLrkE5x/pub?output=csv";

// console.log(csvFile)
// function csvJSON(csv) {
//   var lines = csv.split("\n");
//   var result = [];
//   var headers = lines[0].split(",");
//   for (var i = 1; i < lines.length; i++) {
//     var obj = {};
//     var currentline = lines[i].split(",");
//     for (var j = 0; j < headers.length; j++) {
//       obj[headers[j]] = currentline[j];
//     }
//     result.push(obj);
//   }
//   //return result; //JavaScript object
//   return JSON.stringify(result); //JSON
// }

// console.log(csvJSON(csvFile))

// csv()
//   .fromFile(csvFilePath)
//   .then((jsonObj) => {
//     console.log(jsonObj);
//     /**
//      * [
//      * 	{a:"1", b:"2", c:"3"},
//      * 	{a:"4", b:"5". c:"6"}
//      * ]
//      */
//   });

// import { generateJsonFileFromCsv } from "convert-csv-to-json";

// let fileInputName = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT_YiiWVkpImTfQXTLGLnZIJet7NNv9VCtHuZV5bXlPZv8UyaCD7IOWcRPE-kCFmSwvYjVCwCLrkE5x/pub?output=csv";
// let fileOutputName = "myOutputFile.json";

// generateJsonFileFromCsv(fileInputName, fileOutputName);

// console.log(fileOutputName)
