const destinations = [
  {
    slug: "araku-valley",
    name: "Araku Valley",
    type: "Hill country & coffee",
    region: "Coast & hills",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/Araku_Valley_coffee_plantations5.jpg",
    imageCredit: "Tarunsamanta · CC BY-SA 4.0",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Araku_Valley_coffee_plantations5.jpg",
    tag: "Cool escape",
    intro:
      "A green Eastern Ghats escape known for coffee country, forested slopes and Adivasi cultural heritage.",
    history:
      "Araku sits within the Eastern Ghats, where generations of Indigenous communities have shaped the region’s living cultures. Coffee cultivation later became a defining part of its landscape and local economy.",
    highlights: [
      "Coffee plantations and a local coffee museum",
      "Tribal Museum in Araku town",
      "Scenic rail and road journeys through the Eastern Ghats",
    ],
    bestTime:
      "October–March is generally more comfortable; monsoon brings lush scenery but can affect roads.",
    timeNeeded: "1–2 days",
    gettingThere:
      "Visakhapatnam is the main gateway. Araku is reached by rail or road; reserve transport ahead during busy weekends.",
    visitorTip:
      "Carry a light layer for evenings and ask permission before photographing people or cultural activities.",
    sourceUrl: "https://allurisitharamaraju.ap.gov.in/tourism/",
    sourceLabel: "Alluri Sitharama Raju district tourism",
  },
  {
    slug: "tirupati",
    name: "Tirupati & Tirumala",
    type: "Sacred trails",
    region: "Temple towns",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/sri-venkateswara-swamy-vaari-temple-tirupati-andhra-pradesh-1-new-attr-hero?qlt=82&ts=1726816404788",
    tag: "Culture",
    intro:
      "A major pilgrimage region at the foothills of the Eastern Ghats, centred on the hill shrine of Lord Venkateswara at Tirumala.",
    history:
      "The Tirumala temple grew over many centuries under the patronage of South Indian dynasties, including the Pallavas, Cholas and Vijayanagara rulers. Its architecture and rituals reflect that long history of devotion and patronage.",
    highlights: [
      "Sri Venkateswara Temple at Tirumala",
      "Govindaraja Swamy Temple in Tirupati",
      "Kapila Theertham and the Tirumala hill setting",
    ],
    bestTime:
      "October–March is usually more comfortable. Festival periods can be especially busy.",
    timeNeeded: "1–2 days",
    gettingThere:
      "Tirupati has an airport and railway station, with frequent road connections to Tirumala.",
    visitorTip:
      "Darshan slots, entry rules and queues change. Check current official temple guidance and book through the temple authority before travelling.",
    sourceUrl:
      "https://www.incredibleindia.gov.in/en/andhra-pradesh/tirupati/sri-venkateswara-swamy-vaari-temple",
    sourceLabel: "Incredible India · Sri Venkateswara Temple",
  },
  {
    slug: "gandikota",
    name: "Gandikota",
    type: "Pennar gorge & fort",
    region: "Rayalaseema",
    image:
      "https://media.assettype.com/outlooktraveller/2024-02/2fd0385b-2eca-460b-9f5c-666aaf320bfa/Gandikota_Canyon.jpeg?auto=format%2Ccompress&fit=max&w=1200",
    tag: "Adventure",
    intro:
      "A dramatic Pennar River gorge framed by the remains of a fortified settlement in the dry landscapes of Kadapa region.",
    history:
      "The fort’s recorded history reaches back to the 12th century and later includes the Kakatiyas and local Nayaka rulers. Within the fort area, visitors can see historic temples, a mosque and defensive structures.",
    highlights: [
      "Pennar gorge viewpoints",
      "Fort walls and the Madhavaraya and Ranganatha temples",
      "Sunrise or sunset over the rocky landscape",
    ],
    bestTime:
      "October–February for milder daytime temperatures; summer afternoons can be very hot.",
    timeNeeded: "1 full day",
    gettingThere:
      "Gandikota is best reached by road. Jammalamadugu is a nearby railhead; arrange onward transport in advance.",
    visitorTip:
      "There is little shade around the viewpoints. Bring water, sun protection and sturdy shoes; stay behind barriers near cliff edges.",
    sourceUrl: "https://kadapa.ap.gov.in/tourist-place/gandikota/",
    sourceLabel: "Kadapa district tourism · Gandikota",
  },
  {
    slug: "kurnool",
    name: "Kurnool",
    type: "Rayalaseema history & culture",
    region: "Rayalaseema",
    image:
      "https://indiacinehub.gov.in/sites/default/files/styles/flexslider_full/public/2024-01/kondareddy_buruju_kurnool_kurnool_district_andhra_pradesh.jpg?itok=gjEds1R_",
    tag: "Historic city",
    intro:
      "Explore a historic Rayalaseema city, with a landmark fort tower, old architecture and striking rocky landscapes nearby.",
    history:
      "Kurnool was the capital of Andhra State from 1953 to 1956. Konda Reddy Buruju, a remnant of Kurnool Fort, is associated with Vijayanagara-era rulers and later became known for the revolutionary Konda Reddy, who was imprisoned there.",
    highlights: [
      "Konda Reddy Buruju in the heart of the city",
      "Abdul Wahab Khan’s Gol Gumbaz by the Hundri River",
      "Orvakal Rock Garden, a scenic outing outside the city",
    ],
    bestTime:
      "October–February is generally more comfortable for sightseeing; afternoons can be very hot in summer.",
    timeNeeded: "1–2 days",
    gettingThere:
      "Kurnool is connected by road and rail. Kurnool City is the main railway station; check current services and onward transport before travelling.",
    visitorTip:
      "Plan outdoor stops for the cooler morning or late afternoon, carry water, and confirm site access and opening hours locally.",
    sourceUrl: "https://kurnool.ap.gov.in/tourist-places/",
    sourceLabel: "Kurnool district tourism",
  },
  {
    slug: "konaseema",
    name: "Konaseema",
    type: "Backwaters & village life",
    region: "River & heritage",
    image:
      "https://images.nativeplanet.com/te/img/2018/01/04-1515067100-1.jpg",
    tag: "Slow travel",
    intro:
      "A tranquil Godavari delta landscape of waterways, coconut groves, rice fields and welcoming riverine towns.",
    history:
      "Konaseema’s identity has been shaped by the Godavari delta: its fertile waterways support agriculture, fishing, river trade and temple-centred communities. It is a region to explore slowly rather than a single monument stop.",
    highlights: [
      "Godavari estuary and backwater scenery",
      "Village roads, coconut groves and local food",
      "Temples and river experiences around the delta",
    ],
    bestTime:
      "November–February is generally pleasant. Check local weather and boat operations during monsoon season.",
    timeNeeded: "1–2 days",
    gettingThere:
      "Rajamahendravaram and Kakinada are useful gateways; local taxis or a pre-arranged driver make exploring easier.",
    visitorTip:
      "Confirm boat schedules, safety equipment and river conditions directly with licensed local operators before boarding.",
    sourceUrl: "https://konaseema.ap.gov.in/tourism-2/",
    sourceLabel: "Dr. B. R. Ambedkar Konaseema district tourism",
  },
  {
    slug: "lepakshi",
    name: "Lepakshi",
    type: "Vijayanagara art & architecture",
    region: "Rayalaseema",
    image:
      "https://lepakshitemple.in/wp-content/uploads/2023/10/sri-veerabhadra-temple-lepakshi-hanging-pillar.webp",
    tag: "Living history",
    intro:
      "A remarkable temple village where monumental sculpture, painted ceilings and Vijayanagara craftsmanship reward a slow visit.",
    history:
      "The Veerabhadra Temple flourished under the Vijayanagara Empire in the 16th century. Its celebrated features include elaborate murals, carved pillars and a monolithic Nandi nearby; an inscription is dated to 1583.",
    highlights: [
      "Veerabhadra Temple and its painted ceilings",
      "The famed hanging pillar",
      "Monolithic Nandi sculpture outside the main temple complex",
    ],
    bestTime:
      "October–February is most comfortable for exploring the temple grounds.",
    timeNeeded: "Half day",
    gettingThere:
      "Lepakshi is commonly visited by road from Bengaluru or Hindupur; check transport options before setting out.",
    visitorTip:
      "Dress respectfully for a place of worship. Some areas may be restricted during rituals; follow on-site guidance.",
    sourceUrl:
      "https://www.incredibleindia.gov.in/en/andhra-pradesh/anantapur/lepakshi-temple",
    sourceLabel: "Incredible India · Lepakshi Temple",
  },
  {
    slug: "belum-caves",
    name: "Belum Caves",
    type: "Underground limestone passages",
    region: "Rayalaseema",
    image:
      "https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2022/6/8/belum-caves-3.jpg",
    tag: "Under the surface",
    intro:
      "A large natural cave system with winding passages, chambers and striking limestone formations beneath the dry plateau.",
    history:
      "Belum’s caves were formed over a long period by water moving through limestone. The site is also associated with Buddhist and Jain monastic use, though visitors should treat such interpretations as historical tradition rather than a fully documented account.",
    highlights: [
      "Limestone formations and spacious chambers",
      "A cool, subterranean contrast to the Rayalaseema landscape",
      "An easy pairing with other heritage stops in the region",
    ],
    bestTime:
      "October–February is best for the journey and outdoor stops nearby.",
    timeNeeded: "Half day",
    gettingThere:
      "Belum is reached by road and is usually combined with a driver-led Rayalaseema itinerary from Kurnool or Kadapa.",
    visitorTip:
      "Wear comfortable shoes and check current opening and access conditions before travelling; cave paths may be uneven or humid.",
    sourceUrl: "https://www.incredibleindia.gov.in/en/andhra-pradesh/kurnool",
    sourceLabel: "Incredible India · Kurnool attractions",
  },
  {
    slug: "ahobilam",
    name: "Ahobilam",
    type: "Nallamala pilgrimage trail",
    region: "Rayalaseema",
    image:
      "https://images.nativeplanet.com/img/2016/05/ahobilamtemple-20-1463746990.jpg",
    tag: "Hill pilgrimage",
    intro:
      "A sacred landscape of shrines set among the rugged Nallamala hills, closely associated with the Narasimha tradition.",
    history:
      "Ahobilam is revered for its nine forms of Lord Narasimha, worshipped at temples across the lower and upper hill areas. The complex brings together devotional traditions and a striking forested setting.",
    highlights: [
      "Lower Ahobilam temples",
      "Upper Ahobilam shrines and hill scenery",
      "Nine Narasimha shrines associated with the site",
    ],
    bestTime:
      "November–February is generally cooler for walking. Avoid difficult trails in heavy rain.",
    timeNeeded: "1–2 days",
    gettingThere:
      "Ahobilam is a road trip from Nandyal or Allagadda; arrange local transport and confirm access to upper shrines.",
    visitorTip:
      "Some shrine visits involve steep, rocky or longer walks. Carry water, use grippy footwear and check local conditions before attempting upper routes.",
    sourceUrl: "https://www.incredibleindia.gov.in/en/andhra-pradesh/kurnool",
    sourceLabel: "Incredible India · Ahobilam and Kurnool",
  },
  {
    slug: "srisailam",
    name: "Srisailam",
    type: "Temple, forest & Krishna river",
    region: "Rayalaseema",
    image:
      "https://assets.thehansindia.com/h-upload/feeds/2019/08/19/207498-mallikarjuna-temple.jpg",
    tag: "Sacred wilderness",
    intro:
      "A major pilgrimage town set among the Nallamala forests above the Krishna River, combining temple heritage and dramatic scenery.",
    history:
      "The Mallikarjuna Swamy Temple is one of India’s twelve Jyotirlinga shrines and is also revered as a Shakti Peetha. The temple town has long drawn pilgrims into the forested hill country.",
    highlights: [
      "Mallikarjuna Swamy Temple",
      "Krishna River and Srisailam dam viewpoints",
      "Nallamala forest landscapes and nearby cave shrines",
    ],
    bestTime:
      "October–February is generally more comfortable; major festivals bring large crowds.",
    timeNeeded: "1–2 days",
    gettingThere:
      "Srisailam is primarily reached by road from Kurnool, Nandyal or Hyderabad. Check current ghat-road and transport conditions.",
    visitorTip:
      "Road access through forested hills can take time. Plan daylight travel, follow forest-area rules and verify temple or boat access locally.",
    sourceUrl:
      "https://www.incredibleindia.gov.in/en/andhra-pradesh/kurnool/srisailam-temple",
    sourceLabel: "Incredible India · Srisailam Temple",
  },
  {
    slug: "horsley-hills",
    name: "Horsley Hills",
    type: "Eastern Ghats hill station",
    region: "Rayalaseema",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/View_from_Horsely_hills_01.jpg/1024px-View_from_Horsely_hills_01.jpg",
    imageCredit: "suffering_socrates · CC BY 2.0",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:View_from_Horsely_hills_01.jpg",
    tag: "Highland pause",
    intro:
      "A quiet hill escape above the plains, known for wooded slopes, viewpoints and a cooler change of pace.",
    history:
      "The hill station takes its name from W. D. Horsley, a British-era district collector associated with its development as a summer retreat. The surrounding landscape is part of the Eastern Ghats.",
    highlights: [
      "Hilltop viewpoints and forest walks",
      "A relaxed overnight stop on a Rayalaseema road trip",
      "Nearby Madanapalle for local food and onward connections",
    ],
    bestTime:
      "October–February usually offers the most comfortable daytime weather.",
    timeNeeded: "Half day to 1 night",
    gettingThere:
      "Madanapalle is the nearest larger town; travel the final stretch by road and check local transport availability.",
    visitorTip:
      "Treat it as a nature break rather than a packed sightseeing circuit; keep to marked paths and take litter back with you.",
    sourceUrl: "https://www.incredibleindia.gov.in/en/andhra-pradesh/chittoor",
    sourceLabel: "Incredible India · Horsley Hills",
  },
  {
    slug: "yaganti",
    name: "Yaganti",
    type: "Temple architecture & hill setting",
    region: "Rayalaseema",
    image:
      "https://i0.wp.com/hindupost.in/wp-content/uploads/2020/09/yaganti-temple.png?ssl=1",
    tag: "Temple heritage",
    intro:
      "A historic temple tucked among rocky hills, known for an unusual sculpted form of Shiva and Parvati.",
    history:
      "The Uma Maheshwara Temple is commonly dated to the 5th–6th centuries. Its central Ardhanareeswara image depicts Shiva and Parvati together in a single sculpted form; the complex also includes a hill-fed temple tank.",
    highlights: [
      "Uma Maheshwara Temple",
      "The Ardhanareeswara sculpture",
      "Agastya Pushkarni and the rocky hill setting",
    ],
    bestTime:
      "October–February for milder weather; festival days can be crowded.",
    timeNeeded: "Half day",
    gettingThere:
      "Yaganti is most easily visited by road as part of a Kurnool-region itinerary; arrange transport in advance.",
    visitorTip:
      "This is an active place of worship. Follow temple dress and photography guidance and check opening information before departure.",
    sourceUrl:
      "https://www.incredibleindia.gov.in/en/andhra-pradesh/kurnool/a-journey-through-kurnools-spiritual-sites",
    sourceLabel: "Incredible India · Yaganti and Kurnool",
  },
  {
    slug: "visakhapatnam",
    name: "Visakhapatnam",
    type: "Coastal city & port heritage",
    region: "Coast & hills",
    image:
      "https://www.ambicaseagreen.com/vizag/vizag.jpg",
    tag: "Sea & city",
    intro:
      "A lively Bay of Bengal city with beaches, viewpoints, port history and easy access to the Eastern Ghats.",
    history:
      "Visakhapatnam’s identity has been shaped by its natural harbour, maritime trade and successive regional powers. Nearby Buddhist remains and historic temples show that the wider coast has a much older cultural story too.",
    highlights: [
      "Ramakrishna Beach and the submarine museum",
      "Yarada and Kailasagiri viewpoints",
      "Simhachalam Temple and day trips toward Araku",
    ],
    bestTime:
      "November–February is generally most pleasant for outdoor sightseeing.",
    timeNeeded: "2–3 days",
    gettingThere:
      "Visakhapatnam is a major rail, road and air gateway for northern Andhra Pradesh.",
    visitorTip:
      "Plan beach visits around heat and sea conditions; heed lifeguard flags and avoid swimming where it is not permitted.",
    sourceUrl:
      "https://www.incredibleindia.gov.in/en/andhra-pradesh/visakhapatnam",
    sourceLabel: "Incredible India · Visakhapatnam",
  },
  {
    slug: "borra-caves",
    name: "Borra Caves",
    type: "Limestone caves of Ananthagiri",
    region: "Coast & hills",
    image:
      "https://www.borracaves.in/images/5.jpg",
    tag: "Natural wonder",
    intro:
      "A dramatic cave system in the Ananthagiri hills, with sculpted limestone formations and a memorable descent underground.",
    history:
      "The caves formed over time as water shaped the limestone. Geological accounts associate their modern documentation with geologist William King in 1807; local communities also hold their own traditions about the site.",
    highlights: [
      "Stalactite and stalagmite formations",
      "A steep, atmospheric cave interior",
      "A popular stop on the Araku rail or road route",
    ],
    bestTime:
      "October–March for the broader Araku trip; check cave access during heavy rain.",
    timeNeeded: "2–3 hours",
    gettingThere:
      "Borra Caves are reached by road or rail from Visakhapatnam and are often combined with Araku Valley.",
    visitorTip:
      "Expect stairs and uneven, sometimes damp surfaces. Wear shoes with grip and check current access conditions.",
    sourceUrl:
      "https://www.incredibleindia.gov.in/en/andhra-pradesh/visakhapatnam/borra-caves",
    sourceLabel: "Incredible India · Borra Caves",
  },
  {
    slug: "vijayawada",
    name: "Vijayawada",
    type: "Krishna river & temple city",
    region: "River & heritage",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Prakasam_barrage_view_from_durga_temple_vijayawada.JPG",
    imageCredit: "రహ్మానుద్దీన్ · CC BY-SA 3.0",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Prakasam_barrage_view_from_durga_temple_vijayawada.JPG",
    tag: "City stories",
    intro:
      "A busy river city and practical travel hub, with a hilltop temple, lively food scene and heritage close by.",
    history:
      "The Krishna River has helped shape Vijayawada as a centre for settlement, movement and trade. Nearby Kondapalli Fort, built in the 14th century, recalls the region’s medieval political history.",
    highlights: [
      "Kanaka Durga Temple on Indrakeeladri Hill",
      "Krishna River and Prakasam Barrage views",
      "Kondapalli Fort and its traditional wooden toys",
    ],
    bestTime:
      "October–February is more comfortable for outdoor visits; festival periods can be crowded.",
    timeNeeded: "1–2 days",
    gettingThere:
      "Vijayawada is one of the state’s main rail, road and air gateways.",
    visitorTip:
      "Allow extra time around temple visits and check local traffic or access notices, especially on festival days.",
    sourceUrl: "https://www.incredibleindia.gov.in/en/andhra-pradesh",
    sourceLabel: "Incredible India · Andhra Pradesh highlights",
  },
  {
    slug: "amaravati",
    name: "Amaravati",
    type: "Buddhist archaeology & river heritage",
    region: "River & heritage",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Amaravathi_mahachaitya.jpg/1600px-Amaravathi_mahachaitya.jpg",
    imageCredit: "IM3847 · CC BY-SA 4.0",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Amaravathi_mahachaitya.jpg",
    tag: "Ancient Andhra",
    intro:
      "A major archaeological landscape on the Krishna River, where Buddhist art and a much-layered regional history come together.",
    history:
      "The Amaravati Mahachaitya became an important Buddhist centre from the 3rd century BCE and flourished under the Satavahanas. Its sculptural tradition is renowned, while the protected archaeological remains and museum help visitors understand the site.",
    highlights: [
      "Amaravati Mahachaitya archaeological site",
      "Amaravati Archaeological Museum",
      "Amaralingeswara Temple nearby",
    ],
    bestTime:
      "October–February is generally more comfortable for visiting the open archaeological grounds.",
    timeNeeded: "Half day",
    gettingThere:
      "Amaravati is commonly visited from Vijayawada or Guntur by road.",
    visitorTip:
      "Museum and site access can differ by day or maintenance schedule; confirm opening details before travelling and avoid touching the remains.",
    sourceUrl:
      "https://www.incredibleindia.gov.in/en/andhra-pradesh/amaravati/amaravati-mahachaitya",
    sourceLabel: "Incredible India · Amaravati Mahachaitya",
  },
  {
    slug: "undavalli-caves",
    name: "Undavalli Caves",
    type: "Rock-cut architecture",
    region: "River & heritage",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/undavalli-caves-vijayawada-andhra-pradesh-state-body?qlt=82&ts=1726744169517",
    tag: "Carved in stone",
    intro:
      "A striking multi-storey rock-cut cave complex overlooking the Krishna River, close to Vijayawada and Amaravati.",
    history:
      "The caves are generally dated to the 4th–5th centuries and show a long evolution of rock-cut religious architecture. Their best-known feature is a large reclining Vishnu figure carved from the rock.",
    highlights: [
      "Multi-level cave halls and carved pillars",
      "The reclining Vishnu sculpture",
      "Krishna River views from the site",
    ],
    bestTime: "October–February for a more comfortable visit.",
    timeNeeded: "1–2 hours",
    gettingThere:
      "Undavalli is a short road trip from Vijayawada and can be paired with Amaravati or Kondapalli.",
    visitorTip:
      "Some steps and interior surfaces are uneven. Follow site rules and check opening arrangements before you go.",
    sourceUrl:
      "https://www.incredibleindia.gov.in/en/andhra-pradesh/guntur/undavalli-caves",
    sourceLabel: "Incredible India · Undavalli Caves",
  },
  {
    slug: "srikurmam",
    name: "Srikurmam",
    type: "North Andhra temple heritage",
    region: "Temple towns",
    image:
      "https://srikurmam.info/sites/default/files/2021-05/srikurmam_temple_3.jpg",
    tag: "Rare tradition",
    intro:
      "A distinctive temple town in coastal North Andhra, set near the Nagavali River and known for its Kurmanatha shrine.",
    history:
      "The Kurmanatha Swamy Temple has associations with the Eastern Ganga dynasty and later Gajapati patronage. It is especially notable for its Vishnu shrine in the Kurma, or tortoise, form and its blend of regional architectural influences.",
    highlights: [
      "Sri Kurmanatha Swamy Temple",
      "Swetha Pushkarini temple tank",
      "A quieter cultural detour in Srikakulam district",
    ],
    bestTime:
      "October–February is generally more comfortable; check festival dates before visiting.",
    timeNeeded: "Half day",
    gettingThere:
      "Srikakulam town is the usual base, with the temple reached by road. Arrange local transport in advance.",
    visitorTip:
      "Respect worship hours and local customs; ask before photographing worshippers or ceremonies.",
    sourceUrl:
      "https://www.incredibleindia.gov.in/en/andhra-pradesh/srikakulam/srikurmam",
    sourceLabel: "Incredible India · Srikurmam",
  },
];

const app = document.querySelector("#app");
app.innerHTML = `
  <header class="topbar">
    <a class="brand" href="#top" aria-label="The Andhra Atlas Guide home"><img class="brand-logo" src="assets/andhra-cultural-emblem.png" alt=""/><span>The Andhra<br><em>Atlas Guide</em></span></a>
    <nav aria-label="Primary navigation">
      <a href="#destinations">Destinations</a><a href="#experiences">Experiences</a><a href="#itineraries">Plan your trip</a><a href="#stories">Travel stories</a>
    </nav>
    <div class="nav-actions"><button class="theme-toggle" id="themeToggle" type="button" aria-label="Switch to light mode" aria-pressed="false"><span id="themeIcon" aria-hidden="true">☼</span><span class="theme-label">Light mode</span></button><button class="icon-button" aria-label="Search">⌕</button><button class="menu-button" aria-label="Open menu">☰</button></div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-image" role="img" aria-label="A coastal view near Andhra Pradesh"></div>
      <div class="hero-shade"></div>
      <div class="hero-content container">
        <p class="eyebrow light">INDIA'S EASTERN COAST, UNFOLDED</p>
        <h1>Every turn tells<br>an <i>Andhra</i> story.</h1>
        <p class="hero-copy">From misty coffee slopes to temple bells and sunlit shores, find the Andhra Pradesh that stays with you.</p>
        <div class="hero-controls"><a class="button primary" href="#destinations">Start exploring <span>→</span></a><button class="text-button" id="weatherJump">See today’s weather <span>↓</span></button></div>
      </div>
      <div class="hero-bottom container"><span>SCROLL TO EXPLORE</span><div class="category-links"><a href="#destinations">Coast</a><a href="#destinations">Hills</a><a href="#experiences">Culture</a><a href="#experiences">Food</a><a href="#itineraries">Road trips</a></div></div>
    </section>

    <section class="weather-strip" id="weather">
      <div class="container">
        <div class="weather-layout"><div><p class="eyebrow">RIGHT NOW IN ANDHRA</p><h2>Make room for <span id="weatherSummary">a little sunshine.</span></h2><div class="weather-controls"><label for="weatherPlace">Forecast location<select id="weatherPlace"><option value="vizag">Visakhapatnam</option><option value="vijayawada">Vijayawada</option><option value="tirupati">Tirupati</option><option value="araku">Araku Valley</option><option value="rajahmundry">Rajamahendravaram</option><option value="kakinada">Kakinada</option><option value="kurnool">Kurnool</option></select></label><button id="weatherRefresh" type="button" aria-label="Refresh weather">↻ Refresh</button></div><p class="weather-updated" id="weatherUpdated">Loading current conditions…</p></div><div class="weather-card" aria-live="polite"><div class="weather-symbol" id="weatherIcon">☀</div><div class="weather-main"><strong id="temperature">Loading...</strong><span id="weatherLocation">Visakhapatnam</span></div><div class="weather-stats"><span id="weatherDetail">Fetching live conditions</span><span id="weatherHumidity">Humidity —</span><span id="weatherWind">Wind —</span><span id="weatherRain">Rain —</span></div></div></div>
        <div class="forecast-heading"><div><p class="eyebrow dark">THE WEEK AHEAD</p><h3>Seven-day forecast</h3></div><span id="forecastLocationLabel">Visakhapatnam · Andhra Pradesh</span></div>
        <div class="forecast-grid" id="forecastGrid" aria-live="polite"><p class="forecast-loading">Loading the seven-day forecast…</p></div>
        <p class="weather-footnote">Forecasts are model estimates and can change, especially local rain and showers. Check official alerts before travel. Weather data by <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a>.</p>
      </div>
    </section>

    <section class="editorial" id="destinations">
      <div class="container">
        <div class="section-heading"><div><p class="eyebrow dark">CHOOSE YOUR CHAPTER</p><h2>Places that make you<br>want to stay <i>longer.</i></h2></div><p class="section-intro">From Rayalaseema’s forts and caves to the coast and Krishna river heritage. Choose a region, then open any place for its story and practical visitor guide.</p></div>
        <div class="destination-filters" role="group" aria-label="Filter destinations">
          <button class="destination-filter" type="button" data-region="all" aria-pressed="true">All places</button>
          <button class="destination-filter" type="button" data-region="Rayalaseema" aria-pressed="false">Rayalaseema</button>
          <button class="destination-filter" type="button" data-region="Coast & hills" aria-pressed="false">Coast & hills</button>
          <button class="destination-filter" type="button" data-region="River & heritage" aria-pressed="false">River & heritage</button>
          <button class="destination-filter" type="button" data-region="Temple towns" aria-pressed="false">Temple towns</button>
        </div>
        <div class="destination-grid" id="destinationGrid">${destinations.map((place, index) => `<article class="place-card ${index === 0 ? "featured" : ""}" data-destination="${place.slug}" data-region="${place.region}" style="--bg:url('${place.image}')"><span class="place-overlay"></span><div class="place-top"><span>${place.tag}</span><a class="place-card-map" href="${googleMapsDirections(place.name)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${place.name} in Google Maps">Google Maps ↗</a></div><div class="place-copy"><span class="place-type">${place.type}</span><h3 class="place-title">${place.name}</h3><button class="place-discover" type="button" aria-label="Open visitor guide for ${place.name}">Open place guide <span aria-hidden="true">→</span></button></div></article>`).join("")}</div>
      </div>
    </section>

    <section class="immersive" id="experiences"><div class="container experience-layout"><div class="experience-photo"></div><div class="experience-copy"><p class="eyebrow light">FIND YOUR RHYTHM</p><h2>Not just places.<br>Ways to feel <i>alive.</i></h2><p>Wake with the fishermen of Kakinada. Share a fragrant plate of bamboo chicken in Araku. Follow an ancient path through Srisailam. The best itineraries leave room for the unplanned.</p><div class="experience-pills"><span>Beach days</span><span>Temple trails</span><span>Local flavours</span><span>Wild escapes</span></div><a class="button primary" href="#itineraries">Explore experiences <span>→</span></a></div></div></section>

    <section class="itinerary-section" id="itineraries">
      <div class="container">
        <div class="section-heading"><div><p class="eyebrow dark">MAKE IT YOUR OWN</p><h2>Your first Andhra<br>adventure starts <i>here.</i></h2></div><p class="section-intro">Choose a regional circuit, how long you have, and what you enjoy. We’ll shape a day-by-day starting point you can fine-tune.</p></div>
        <div class="planner-panel">
          <form class="planner-controls" id="itineraryForm">
            <label for="itineraryRoute">Choose a regional route<select id="itineraryRoute"><option value="coast">Visakhapatnam & Eastern Ghats</option><option value="rayalaseema">Rayalaseema forts & hills</option><option value="river">Vijayawada & Godavari heritage</option><option value="tirupati">Tirupati temple visit</option></select></label>
            <label for="itineraryDays">How many days?<select id="itineraryDays"></select></label>
            <label for="itineraryInterest">What are you interested in?<select id="itineraryInterest"><option value="balanced">A bit of everything</option><option value="nature">Nature & outdoors</option><option value="heritage">History & culture</option><option value="spiritual">Temples & pilgrimage</option></select></label>
            <label for="itineraryStart">Where will you start?<select id="itineraryStart"><option>Visakhapatnam</option><option>Vijayawada</option><option>Tirupati</option><option>Kurnool</option><option>Rajamahendravaram</option></select></label>
            <button class="button primary planner-submit" type="submit">Build my itinerary <span>→</span></button>
          </form>
          <p class="planner-note">Suggested place order only. Check local road conditions and travel times before you set out.</p>
          <div class="planner-result" id="itineraryResult" aria-live="polite"></div>
        </div>
        <div class="route-grid"><article class="route route-red"><p>04 DAYS · RIVER & CULTURE</p><h3>The Krishna<br>heritage loop</h3><ol><li>Vijayawada</li><li>Undavalli Caves</li><li>Amaravati</li><li>Konaseema</li></ol><button class="route-open" data-plan="Create a warm, practical four-day Andhra Pradesh itinerary covering Vijayawada, Undavalli Caves, Amaravati, and Konaseema. Include travel logic, highlights, food and stay suggestions.">Ask Atlas to refine this route <span>→</span></button></article><article class="route route-image"><div><p>05 DAYS · HILLS & HERITAGE</p><h3>From coast<br>to cloud forest</h3><button class="route-open" data-plan="Create a five-day Andhra Pradesh itinerary with Visakhapatnam, Araku Valley, Borra Caves, and nearby experiences. Include transport, bike rental tips, stays, and best times of day.">Ask Atlas to plan <span>→</span></button></div></article></div>
      </div>
    </section>

    <section class="stories" id="stories"><div class="container quote-wrap"><p class="eyebrow light">A STATE OF MANY MOODS</p><blockquote>"Come with a plan.<br>Leave with a <i>story.</i>"</blockquote><a class="button secondary" href="#top">Begin your journey <span>↑</span></a></div></section>
  </main>

  <button class="side-tab side-left" type="button" onclick="document.querySelector('#itineraries').scrollIntoView({behavior:'smooth'})">PLAN A TRIP</button>
  <button class="side-tab side-right" id="chatToggle">ASK ATLAS ✦</button>
  <section class="chat-panel" id="chatPanel" aria-label="Atlas trip planner" aria-hidden="true"><div class="chat-head"><div><span class="chat-dot">✦</span><div><strong>Ask Atlas</strong><small>Your Andhra travel companion</small></div></div><button id="chatClose" aria-label="Close chat">×</button></div><div class="chat-messages" id="chatMessages"><div class="message bot">Hello! I can help shape your Andhra journey. Ask for a route, a stay area, food stop, or rental tip.</div><div class="quick-prompts"><button data-prompt="Plan a four-day Andhra Pradesh trip for a first-time visitor.">4-day trip</button><button data-prompt="Where should I stay in Visakhapatnam?">Stay in Vizag</button><button data-prompt="How can I rent a bike in Andhra Pradesh safely?">Bike rentals</button></div></div><form class="chat-form" id="chatForm"><input id="chatInput" placeholder="Ask about your trip..." autocomplete="off"/><button aria-label="Send question">↑</button></form><p class="chat-note">AI suggestions are for planning—confirm availability before booking.</p></section>
  <dialog class="destination-dialog" id="destinationDialog" aria-labelledby="destinationTitle"><button class="destination-close" id="destinationClose" type="button" aria-label="Close place guide">×</button><div id="destinationDetails"></div></dialog>
  <footer><div class="container footer-inner"><a class="brand" href="#top"><img class="brand-logo" src="assets/andhra-cultural-emblem.png" alt=""/><span>The Andhra<br><em>Atlas Guide</em></span></a><p>Made for unhurried journeys across Andhra Pradesh.</p><span>© 2026</span></div></footer>
`;

const destinationDialog = document.querySelector("#destinationDialog");
const destinationDetails = document.querySelector("#destinationDetails");
function googleMapsDirections(destination, origin) {
  const params = new URLSearchParams({
    api: "1",
    destination: `${destination}, Andhra Pradesh, India`,
  });
  if (origin) params.set("origin", `${origin}, Andhra Pradesh, India`);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}
function addDestinationImageFallbacks() {
  const fallbackSlugs = {
    "Coast & hills": "araku-valley",
    Rayalaseema: "kurnool",
    "River & heritage": "konaseema",
    "Temple towns": "tirupati",
  };

  document.querySelectorAll(".place-card").forEach((card) => {
    const place = destinations.find((item) => item.slug === card.dataset.destination);
    const fallbackPlace = destinations.find((item) => item.slug === fallbackSlugs[place?.region]);
    if (!place || !fallbackPlace) return;

    const imageCheck = new Image();
    imageCheck.onerror = () => {
      card.style.setProperty(
        "--bg",
        `linear-gradient(135deg, rgba(7, 7, 7, .12), rgba(7, 7, 7, .62)), url("${fallbackPlace.image}")`,
      );
    };
    imageCheck.src = place.image;
  });
}
addDestinationImageFallbacks();
document.querySelectorAll(".place-card").forEach((card) =>
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    const place = destinations.find(
      (item) => item.slug === card.dataset.destination,
    );
    if (!place) return;
    destinationDetails.innerHTML = `
    <article class="destination-detail">
      <div class="destination-detail-hero" style="--detail-image:url('${place.image}')">
        <span class="destination-detail-region">${place.region} · ${place.tag}</span>
        <h2 id="destinationTitle">${place.name}</h2>
        <p>${place.intro}</p>
      </div>
      <div class="destination-detail-body">
        <section class="destination-history"><p class="eyebrow dark">HISTORY & CONTEXT</p><p>${place.history}</p></section>
        <div class="destination-facts"><div><span>Suggested time</span><strong>${place.timeNeeded}</strong></div><div><span>Best season</span><strong>${place.bestTime}</strong></div></div>
        <div class="destination-info-grid">
          <section><h3>What to see</h3><ul>${place.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}</ul></section>
          <section><h3>Getting there</h3><p>${place.gettingThere}</p></section>
        </div>
        <aside class="destination-tip"><strong>Useful to know</strong><p>${place.visitorTip}</p></aside>
        <a class="destination-map-link" href="${googleMapsDirections(place.name)}" target="_blank" rel="noopener noreferrer" aria-label="Get directions to ${place.name} in Google Maps">Get directions in Google Maps <span aria-hidden="true">↗</span></a>
        <a class="destination-source" href="${place.sourceUrl}" target="_blank" rel="noopener noreferrer">Read the official tourism reference <span aria-hidden="true">↗</span><small>${place.sourceLabel}</small></a>
        ${place.imageCredit ? `<p class="destination-photo-credit">Photo: <a href="${place.imageCreditUrl}" target="_blank" rel="noopener noreferrer">${place.imageCredit}</a></p>` : ""}
      </div>
    </article>`;
    destinationDialog.showModal();
  }),
);
document
  .querySelector("#destinationClose")
  .addEventListener("click", () => destinationDialog.close());
destinationDialog.addEventListener("click", (event) => {
  if (event.target === destinationDialog) destinationDialog.close();
});
document.querySelectorAll(".destination-filter").forEach((filter) =>
  filter.addEventListener("click", () => {
    const region = filter.dataset.region;
    document
      .querySelectorAll(".destination-filter")
      .forEach((button) =>
        button.setAttribute("aria-pressed", String(button === filter)),
      );
    document.querySelectorAll(".place-card").forEach((card) => {
      card.hidden = region !== "all" && card.dataset.region !== region;
    });
  }),
);

const itineraryProfiles = {
  coast: { days: [3, 4, 5], defaultDays: 4, start: "Visakhapatnam", stops: ["srikurmam", "visakhapatnam", "borra-caves", "araku-valley"], interests: { nature: ["visakhapatnam", "borra-caves", "araku-valley"], heritage: ["srikurmam", "visakhapatnam"], spiritual: ["srikurmam"] }, buffer: "Add a slower day in Visakhapatnam or Araku for a beach, viewpoint or coffee stop." },
  rayalaseema: { days: [4, 5, 6, 7], defaultDays: 5, start: "Kurnool", stops: ["lepakshi", "horsley-hills", "gandikota", "belum-caves", "yaganti", "ahobilam", "srisailam"], interests: { nature: ["horsley-hills", "gandikota", "belum-caves", "ahobilam", "srisailam"], heritage: ["lepakshi", "gandikota", "belum-caves", "yaganti"], spiritual: ["lepakshi", "yaganti", "ahobilam", "srisailam"] }, buffer: "Add a rest or transfer day around Kurnool or Nandyal rather than rushing between hill and temple stops." },
  river: { days: [3, 4, 5], defaultDays: 4, start: "Vijayawada", stops: ["vijayawada", "undavalli-caves", "amaravati", "konaseema"], interests: { nature: ["konaseema"], heritage: ["vijayawada", "undavalli-caves", "amaravati"], spiritual: ["vijayawada", "amaravati"] }, buffer: "Use an extra day to slow down in the Godavari delta and confirm boat trips with a local operator." },
  tirupati: { days: [1, 2, 3], defaultDays: 2, start: "Tirupati", stops: ["tirupati"], interests: { nature: ["tirupati"], heritage: ["tirupati"], spiritual: ["tirupati"] }, buffer: "Keep an extra day for rest or nearby temples; darshan queues and access can vary." },
};
const itineraryPlaces = Object.fromEntries(destinations.map((place) => [place.slug, place]));
const itineraryForm = document.querySelector("#itineraryForm");
const itineraryRoute = document.querySelector("#itineraryRoute");
const itineraryDays = document.querySelector("#itineraryDays");
const itineraryInterest = document.querySelector("#itineraryInterest");
const itineraryStart = document.querySelector("#itineraryStart");
const itineraryResult = document.querySelector("#itineraryResult");
let itineraryBuilt = false;

function updateItineraryOptions() {
  const profile = itineraryProfiles[itineraryRoute.value];
  itineraryDays.innerHTML = profile.days.map((days) => `<option value="${days}" ${days === profile.defaultDays ? "selected" : ""}>${days} days</option>`).join("");
  itineraryStart.value = profile.start;
}

function renderItinerary() {
  const profile = itineraryProfiles[itineraryRoute.value];
  const selectedDays = Number(itineraryDays.value);
  const preference = itineraryInterest.value;
  const preferred = preference === "balanced" ? [] : (profile.interests[preference] || []);
  const prioritized = preferred.length ? profile.stops.filter((slug) => preferred.includes(slug)) : profile.stops;
  const chosen = [...prioritized, ...profile.stops.filter((slug) => !prioritized.includes(slug))]
    .slice(0, Math.min(selectedDays, profile.stops.length))
    .sort((a, b) => profile.stops.indexOf(a) - profile.stops.indexOf(b));
  const places = chosen.map((slug) => itineraryPlaces[slug]).filter(Boolean);
  const labels = { balanced: "a balanced mix", nature: "nature and outdoor stops", heritage: "history and culture", spiritual: "temples and pilgrimage" };
  const start = itineraryStart.value;
  const dayCards = places.map((place, index) => {
    const previous = index === 0 ? start : places[index - 1].name;
    return `<article class="planner-day"><div class="planner-day-index">DAY ${index + 1}</div><div class="planner-day-copy"><p class="planner-day-region">${place.region} · ${place.timeNeeded}</p><h3>${place.name}</h3><p>${place.intro}</p><span class="planner-day-highlight">Try: ${place.highlights[0]}</span></div><div class="planner-day-actions"><span class="planner-leg">${previous} → ${place.name}</span><button type="button" data-open-guide="${place.slug}">Place guide</button><a class="planner-map-link" href="${googleMapsDirections(place.name, previous)}" target="_blank" rel="noopener noreferrer" aria-label="Open directions from ${previous} to ${place.name} in Google Maps">Google Maps ↗</a></div></article>`;
  }).join("");
  const flexibleDays = selectedDays - places.length;
  const flexibleNote = flexibleDays > 0 ? `<p class="planner-buffer"><strong>Leave room to breathe:</strong> ${profile.buffer} (${flexibleDays} flexible ${flexibleDays === 1 ? "day" : "days"} included.)</p>` : "";
  const routeLabel = itineraryRoute.options[itineraryRoute.selectedIndex].text;
  const planPrompt = `Make this ${selectedDays}-day ${routeLabel} plan practical for a first-time visitor focused on ${labels[preference]}, starting from ${start}: ${places.map((place) => place.name).join(" → ")}. Suggest sensible overnight bases, local food and realistic pacing. Flag travel times or booking details I should verify.`;
  itineraryResult.innerHTML = `<div class="planner-result-heading"><div><p class="eyebrow dark">YOUR ${selectedDays}-DAY ROUTE</p><h3>${routeLabel}</h3><p>Starting in ${start} · Focus: ${labels[preference]}</p></div><button class="route-open planner-ask" type="button">Ask Atlas to refine <span>→</span></button></div><div class="planner-days">${dayCards}</div>${flexibleNote}<p class="planner-disclaimer">This is a place-by-place outline, not a confirmed schedule. Temple timings, access, transport and weather can change; confirm before you travel.</p>`;
  itineraryResult.hidden = false;
  itineraryResult.querySelector(".planner-ask").addEventListener("click", () => askAtlas(planPrompt));
}

const refreshBuiltItinerary = () => {
  if (itineraryBuilt) renderItinerary();
};
itineraryRoute.addEventListener("change", () => {
  updateItineraryOptions();
  refreshBuiltItinerary();
});
itineraryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  itineraryBuilt = true;
  renderItinerary();
  itineraryResult.scrollIntoView({ behavior: "smooth", block: "start" });
});
itineraryDays.addEventListener("change", refreshBuiltItinerary);
itineraryInterest.addEventListener("change", refreshBuiltItinerary);
itineraryStart.addEventListener("change", refreshBuiltItinerary);
itineraryResult.addEventListener("click", (event) => {
  const guideButton = event.target.closest("[data-open-guide]");
  if (guideButton) document.querySelector(`[data-destination="${guideButton.dataset.openGuide}"]`)?.click();
});
updateItineraryOptions();
itineraryResult.hidden = true;

const codeToWeather = (code) => {
  if (code === 0) return ["☀", "Clear sky"];
  if (code === 1) return ["🌤", "Mainly clear"];
  if (code === 2) return ["⛅", "Partly cloudy"];
  if (code === 3) return ["☁", "Overcast"];
  if ([45, 48].includes(code)) return ["〰", "Fog"];
  if ([51, 53, 55, 56, 57].includes(code)) return ["🌦", "Drizzle"];
  if ([61, 63, 65, 66, 67].includes(code)) return ["🌧", "Rain"];
  if ([71, 73, 75, 77].includes(code)) return ["❄", "Snow"];
  if ([80, 81, 82].includes(code)) return ["🌦", "Showers"];
  if ([85, 86].includes(code)) return ["🌨", "Snow showers"];
  if ([95, 96, 99].includes(code)) return ["⛈", "Thunderstorm"];
  return ["☁", "Variable"];
};

const weatherLocations = {
  vizag: { name: "Visakhapatnam", latitude: 17.6868, longitude: 83.2185 },
  vijayawada: { name: "Vijayawada", latitude: 16.5062, longitude: 80.648 },
  tirupati: { name: "Tirupati", latitude: 13.6288, longitude: 79.4192 },
  araku: { name: "Araku Valley", latitude: 18.3273, longitude: 82.8779 },
  rajahmundry: {
    name: "Rajamahendravaram",
    latitude: 17.0005,
    longitude: 81.804,
  },
  kakinada: { name: "Kakinada", latitude: 16.9891, longitude: 82.2475 },
  kurnool: { name: "Kurnool", latitude: 15.8281, longitude: 78.0373 },
};
const makeWeatherUrl = ({ latitude, longitude }) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&forecast_days=7&timezone=Asia%2FKolkata&wind_speed_unit=kmh`;
const formatDay = (date, index) =>
  index === 0
    ? "Today"
    : new Intl.DateTimeFormat("en-IN", {
        weekday: "short",
        timeZone: "Asia/Kolkata",
      }).format(new Date(`${date}T12:00:00+05:30`));
let weatherRequestId = 0;

async function loadWeather() {
  const requestId = ++weatherRequestId;
  const place = weatherLocations[document.querySelector("#weatherPlace").value];
  document.querySelector("#weatherUpdated").textContent =
    `Loading ${place.name} forecast…`;
  document.querySelector("#weatherLocation").textContent = place.name;
  document.querySelector("#forecastLocationLabel").textContent =
    `${place.name} · Andhra Pradesh`;
  try {
    const response = await fetch(makeWeatherUrl(place), {
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok)
      throw new Error(`Open-Meteo returned HTTP ${response.status}`);
    const { current, daily } = await response.json();
    if (requestId !== weatherRequestId) return;
    const [icon, description] = codeToWeather(current.weather_code);
    document.querySelector("#weatherIcon").textContent = icon;
    document.querySelector("#temperature").textContent =
      `${Math.round(current.temperature_2m)}°C`;
    document.querySelector("#weatherDetail").textContent = description;
    document.querySelector("#weatherHumidity").textContent =
      `Humidity ${Math.round(current.relative_humidity_2m)}%`;
    document.querySelector("#weatherWind").textContent =
      `Wind ${Math.round(current.wind_speed_10m)} km/h`;
    document.querySelector("#weatherRain").textContent =
      `Precipitation ${current.precipitation == null ? "—" : `${Number(current.precipitation).toFixed(1)} mm`}`;
    document.querySelector("#weatherSummary").textContent =
      description.toLowerCase() + ".";
    const modelTime = new Date(`${current.time}+05:30`);
    document.querySelector("#weatherUpdated").textContent =
      `Forecast model time · ${new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(modelTime)} IST`;
    document.querySelector("#forecastGrid").innerHTML = daily.time
      .map((date, index) => {
        const [dayIcon, dayDescription] = codeToWeather(
          daily.weather_code[index],
        );
        const rainChance = daily.precipitation_probability_max[index];
        const chanceText =
          rainChance == null ? "—" : `${Math.round(rainChance)}%`;
        const precipitation =
          daily.precipitation_sum[index] == null
            ? "—"
            : `${Number(daily.precipitation_sum[index]).toFixed(1)} mm`;
        return `<article class="forecast-card"><span class="forecast-day">${formatDay(date, index)}</span><span class="forecast-icon" aria-label="${dayDescription}">${dayIcon}</span><span class="forecast-condition">${dayDescription}</span><span class="forecast-temps"><strong>${Math.round(daily.temperature_2m_max[index])}°</strong><span>${Math.round(daily.temperature_2m_min[index])}°</span></span><span class="forecast-rain">☂ ${chanceText} · ${precipitation}</span></article>`;
      })
      .join("");
  } catch (error) {
    if (requestId !== weatherRequestId) return;
    const reason = error.message?.startsWith("Open-Meteo returned HTTP")
      ? error.message
      : error.name === "TimeoutError"
        ? "The weather request timed out"
        : "Open-Meteo could not be reached; check your internet connection";
    document.querySelector("#temperature").textContent = "Weather unavailable";
    document.querySelector("#weatherDetail").textContent = reason;
    document.querySelector("#weatherUpdated").textContent =
      `Could not load ${place.name}. ${reason}. Press Refresh to retry.`;
    document.querySelector("#forecastGrid").innerHTML =
      `<p class="forecast-loading">${reason}. Press Refresh to retry.</p>`;
  }
}
const savedWeatherPlace = localStorage.getItem("andhra-atlas-weather-place");
document.querySelector("#weatherPlace").value = weatherLocations[
  savedWeatherPlace
]
  ? savedWeatherPlace
  : "vizag";
loadWeather();
document.querySelector("#weatherPlace").addEventListener("change", (event) => {
  localStorage.setItem("andhra-atlas-weather-place", event.target.value);
  loadWeather();
});
document
  .querySelector("#weatherRefresh")
  .addEventListener("click", loadWeather);
window.setInterval(
  () => {
    if (document.visibilityState === "visible") loadWeather();
  },
  60 * 60 * 1000,
);
document
  .querySelector("#weatherJump")
  .addEventListener("click", () =>
    document.querySelector("#weather").scrollIntoView({ behavior: "smooth" }),
  );

const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("andhra-atlas-theme");
const initialTheme =
  savedTheme ||
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
document.documentElement.dataset.theme = initialTheme;
function updateThemeButton(theme) {
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    `Switch to ${isDark ? "light" : "dark"} mode`,
  );
  document.querySelector("#themeIcon").textContent = isDark ? "☾" : "☼";
  themeToggle.querySelector(".theme-label").textContent = isDark
    ? "Dark mode"
    : "Light mode";
  document.querySelector('meta[name="theme-color"]').content = isDark
    ? "#101216"
    : "#070707";
}
updateThemeButton(initialTheme);
themeToggle.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("andhra-atlas-theme", nextTheme);
  updateThemeButton(nextTheme);
});

const panel = document.querySelector("#chatPanel");
const messages = document.querySelector("#chatMessages");
const toggleChat = (show) => {
  panel.classList.toggle("open", show);
  panel.setAttribute("aria-hidden", String(!show));
  if (show) document.querySelector("#chatInput").focus();
};
document
  .querySelector("#chatToggle")
  .addEventListener("click", () => toggleChat(true));
document
  .querySelector("#chatClose")
  .addEventListener("click", () => toggleChat(false));
const addMessage = (text, type) => {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.textContent = text;
  messages.append(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
};
async function askAtlas(prompt) {
  toggleChat(true);
  addMessage(prompt, "user");
  const loading = addMessage("Atlas is mapping your route…", "bot loading");
  try {
    const response = await fetch("/api/atlas-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: prompt }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const reason =
        data?.error ||
        ([404, 405].includes(response.status)
          ? "This page is using a static or different server without the chat API. Stop it, run “node server.js”, then open http://localhost:8080."
          : `The chat server returned HTTP ${response.status}.`);
      throw new Error(reason);
    }
    loading.textContent =
      data.answer || data.message || "I could not find a response just now.";
  } catch (error) {
    loading.textContent =
      error.message === "Failed to fetch"
        ? "Atlas could not be reached. Start the site with “node server.js” and check your internet connection."
        : error.message ||
          "Atlas is temporarily unavailable. Please try again.";
  }
}
document.querySelector("#chatForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#chatInput");
  if (input.value.trim()) {
    askAtlas(input.value.trim());
    input.value = "";
  }
});
document
  .querySelectorAll("[data-prompt], [data-plan]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      askAtlas(button.dataset.prompt || button.dataset.plan),
    ),
  );
