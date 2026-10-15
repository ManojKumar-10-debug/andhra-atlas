const destinations = [
  {
    slug: "araku-valley",
    name: "Araku Valley",
    type: "Hill country & coffee",
    region: "Coast & hills",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Araku_Valley_coffee_plantations5.jpg/1280px-Araku_Valley_coffee_plantations5.jpg",
    imageFallback:
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/N-AP-9_Monolithic_Granite_Nandhi_Lepakshi.jpg/1280px-N-AP-9_Monolithic_Granite_Nandhi_Lepakshi.jpg",
    imageFallback:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/N-AP-9_Monolithic_Granite_Nandhi_Lepakshi.jpg",
    imageCredit: "MADHURANTHAKAN JAGADEESAN · CC BY-SA 4.0",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:N-AP-9_Monolithic_Granite_Nandhi_Lepakshi.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/The_Main_Caves%2C_Belum%2C_Andhra_Pradesh.jpg/1280px-The_Main_Caves%2C_Belum%2C_Andhra_Pradesh.jpg",
    imageFallback:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/The_Main_Caves%2C_Belum%2C_Andhra_Pradesh.jpg",
    imageCredit: "Naga Praveena Sharma P · CC BY-SA 3.0",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:The_Main_Caves,_Belum,_Andhra_Pradesh.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Upper_Ahobilam_temple_Gopuram.jpg",
    imageFallback:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Upper_Ahobilam_temple_Gopuram.jpg?width=1024",
    imageCredit: "Sai Sreekanth · CC BY-SA 2.0",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Upper_Ahobilam_temple_Gopuram.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/View_from_Horsely_hills_01.jpg/1280px-View_from_Horsely_hills_01.jpg",
    imageFallback:
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Yaganti_Temple_in_Andhra_Pradesh.jpg/1280px-Yaganti_Temple_in_Andhra_Pradesh.jpg",
    imageFallback:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Yaganti_Temple_in_Andhra_Pradesh.jpg",
    imageCredit: "Vikas Kumar Chaturvedi · CC BY-SA 4.0",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Yaganti_Temple_in_Andhra_Pradesh.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/5/54/INS_Kursura_%28S20%29_in_2023.jpg",
    imageFallback:
      "https://commons.wikimedia.org/wiki/Special:FilePath/INS_Kursura_(S20)_in_2023.jpg?width=1440",
    imageCredit: "Maina Tudu · CC0",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:INS_Kursura_(S20)_in_2023.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Borra_Cave.jpg/1280px-Borra_Cave.jpg",
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/7/70/Borra_Cave.jpg",
    imageCredit: "Robbygrine · public domain",
    imageCreditUrl: "https://commons.wikimedia.org/wiki/File:Borra_Cave.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Prakasam_barrage_view_from_durga_temple_vijayawada.JPG/1280px-Prakasam_barrage_view_from_durga_temple_vijayawada.JPG",
    imageFallback:
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dhyana_buddha_statue_in_Amaravathi.jpg/1280px-Dhyana_buddha_statue_in_Amaravathi.jpg",
    imageFallback:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Dhyana_buddha_statue_in_Amaravathi.jpg",
    imageCredit: "iMahesh · CC BY-SA 4.0",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Dhyana_buddha_statue_in_Amaravathi.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Undavalli_Caves%2C_Vijayawada%2C_Guntur%2C_Andhra_Pradesh%2C_India_%282018%29_1.jpg/1280px-Undavalli_Caves%2C_Vijayawada%2C_Guntur%2C_Andhra_Pradesh%2C_India_%282018%29_1.jpg",
    imageFallback:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Undavalli_Caves%2C_Vijayawada%2C_Guntur%2C_Andhra_Pradesh%2C_India_%282018%29_1.jpg",
    imageCredit: "Laxmanvety · CC BY-SA 4.0",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Undavalli_Caves,_Vijayawada,_Guntur,_Andhra_Pradesh,_India_(2018)_1.jpg",
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

const districtNames = [
  "Alluri Sitharama Raju", "Anakapalli", "Ananthapuramu", "Annamayya", "Bapatla", "Chittoor",
  "Dr. B.R. Ambedkar Konaseema", "East Godavari", "Eluru", "Guntur", "Kakinada", "Krishna",
  "Kurnool", "Markapuram", "Nandyal", "NTR", "Palnadu", "Parvathipuram Manyam", "Polavaram",
  "Prakasam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Srikakulam", "Tirupati",
  "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa",
];

const weatherLocations = {
  araku: { name: "Araku Valley", district: "Alluri Sitharama Raju", label: "Alluri Sitharama Raju — Araku Valley", latitude: 18.3273, longitude: 82.8779 },
  anakapalli: { name: "Anakapalli", district: "Anakapalli", label: "Anakapalli", latitude: 17.6913, longitude: 83.0039 },
  ananthapuramu: { name: "Anantapur", district: "Ananthapuramu", label: "Ananthapuramu — Anantapur", latitude: 14.6819, longitude: 77.6006 },
  annamayya: { name: "Rayachoti", district: "Annamayya", label: "Annamayya — Rayachoti", latitude: 14.0572, longitude: 78.7511 },
  bapatla: { name: "Bapatla", district: "Bapatla", label: "Bapatla", latitude: 15.9044, longitude: 80.4675 },
  chittoor: { name: "Chittoor", district: "Chittoor", label: "Chittoor", latitude: 13.2172, longitude: 79.1003 },
  konaseema: { name: "Amalapuram", district: "Dr. B.R. Ambedkar Konaseema", label: "Dr. B.R. Ambedkar Konaseema — Amalapuram", latitude: 16.5787, longitude: 82.0061 },
  rajahmundry: { name: "Rajamahendravaram", district: "East Godavari", label: "East Godavari — Rajamahendravaram", latitude: 17.0005, longitude: 81.804 },
  eluru: { name: "Eluru", district: "Eluru", label: "Eluru", latitude: 16.7107, longitude: 81.0952 },
  guntur: { name: "Guntur", district: "Guntur", label: "Guntur", latitude: 16.3067, longitude: 80.4365 },
  kakinada: { name: "Kakinada", district: "Kakinada", label: "Kakinada", latitude: 16.9891, longitude: 82.2475 },
  krishna: { name: "Machilipatnam", district: "Krishna", label: "Krishna — Machilipatnam", latitude: 16.1875, longitude: 81.1389 },
  kurnool: { name: "Kurnool", district: "Kurnool", label: "Kurnool", latitude: 15.8281, longitude: 78.0373 },
  markapuram: { name: "Markapuram", district: "Markapuram", label: "Markapuram", latitude: 15.7363, longitude: 79.2694 },
  nandyal: { name: "Nandyal", district: "Nandyal", label: "Nandyal", latitude: 15.4779, longitude: 78.4836 },
  vijayawada: { name: "Vijayawada", district: "NTR", label: "NTR — Vijayawada", latitude: 16.5062, longitude: 80.648 },
  palnadu: { name: "Narasaraopet", district: "Palnadu", label: "Palnadu — Narasaraopet", latitude: 16.2353, longitude: 80.0479 },
  manyam: { name: "Parvathipuram", district: "Parvathipuram Manyam", label: "Parvathipuram Manyam — Parvathipuram", latitude: 18.7811, longitude: 83.4252 },
  polavaram: { name: "Rampachodavaram", district: "Polavaram", label: "Polavaram — Rampachodavaram", latitude: 17.4447, longitude: 81.7732 },
  prakasam: { name: "Ongole", district: "Prakasam", label: "Prakasam — Ongole", latitude: 15.5057, longitude: 80.0499 },
  nellore: { name: "Nellore", district: "Sri Potti Sriramulu Nellore", label: "Sri Potti Sriramulu Nellore — Nellore", latitude: 14.4426, longitude: 79.9865 },
  srisathyasai: { name: "Puttaparthi", district: "Sri Sathya Sai", label: "Sri Sathya Sai — Puttaparthi", latitude: 14.1653, longitude: 77.8117 },
  srikakulam: { name: "Srikakulam", district: "Srikakulam", label: "Srikakulam", latitude: 18.2949, longitude: 83.8938 },
  tirupati: { name: "Tirupati", district: "Tirupati", label: "Tirupati", latitude: 13.6288, longitude: 79.4192 },
  vizag: { name: "Visakhapatnam", district: "Visakhapatnam", label: "Visakhapatnam", latitude: 17.6868, longitude: 83.2185 },
  vizianagaram: { name: "Vizianagaram", district: "Vizianagaram", label: "Vizianagaram", latitude: 18.1133, longitude: 83.397 },
  westgodavari: { name: "Bhimavaram", district: "West Godavari", label: "West Godavari — Bhimavaram", latitude: 16.5449, longitude: 81.5212 },
  kadapa: { name: "YSR Kadapa", district: "YSR Kadapa", label: "YSR Kadapa", latitude: 14.4673, longitude: 78.8242 },
};

const destinationMetadata = {
  "araku-valley": { district: "Alluri Sitharama Raju", categories: ["forest", "nature", "culture"] },
  tirupati: { district: "Tirupati", categories: ["temple", "heritage", "nature"] },
  gandikota: { district: "YSR Kadapa", categories: ["heritage", "nature"] },
  kurnool: { district: "Kurnool", categories: ["heritage", "culture"] },
  konaseema: { district: "Dr. B.R. Ambedkar Konaseema", categories: ["river", "nature", "culture", "temple"] },
  lepakshi: { district: "Sri Sathya Sai", categories: ["heritage", "temple"] },
  "belum-caves": { district: "Nandyal", categories: ["caves", "nature"] },
  ahobilam: { district: "Nandyal", categories: ["temple", "forest", "nature"] },
  srisailam: { district: "Nandyal", categories: ["temple", "forest", "river", "nature"] },
  "horsley-hills": { district: "Annamayya", categories: ["hills", "forest", "nature"] },
  yaganti: { district: "Nandyal", categories: ["temple", "heritage", "nature"] },
  visakhapatnam: { district: "Visakhapatnam", categories: ["beach", "city", "nature"] },
  "borra-caves": { district: "Alluri Sitharama Raju", categories: ["caves", "nature"] },
  vijayawada: { district: "NTR", categories: ["city", "heritage", "river", "temple"] },
  amaravati: { district: "Palnadu", categories: ["buddhist", "heritage", "temple", "river"] },
  "undavalli-caves": { district: "Guntur", categories: ["caves", "heritage"] },
  srikurmam: { district: "Srikakulam", categories: ["temple", "heritage"] },
};

destinations.push(
  {
    slug: "bojjannakonda",
    name: "Bojjannakonda",
    type: "Buddhist hilltop heritage",
    region: "Coast & hills",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rock_cut_Stupas%2C_Bojjannakonda_Monastic_ruins%2C_Andhra_Pradesh.jpg/1280px-Rock_cut_Stupas%2C_Bojjannakonda_Monastic_ruins%2C_Andhra_Pradesh.jpg",
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Rock_cut_Stupas%2C_Bojjannakonda_Monastic_ruins%2C_Andhra_Pradesh.jpg",
    imageCredit: "Adityamadhav83 · CC BY-SA 3.0",
    imageCreditUrl: "https://commons.wikimedia.org/wiki/File:Rock_cut_Stupas,_Bojjannakonda_Monastic_ruins,_Andhra_Pradesh.jpg",
    tag: "Buddhist heritage",
    intro: "Two quiet hillocks near Sankaram hold one of North Andhra’s most remarkable early Buddhist archaeological landscapes.",
    history: "Bojjannakonda and nearby Lingalakonda preserve stupas, chaityas, monasteries and rock-cut caves. The district tourism account describes the site as an important Buddhist complex that flourished across several centuries, from roughly the 4th to 9th centuries CE.",
    highlights: ["Explore both Bojjannakonda and Lingalakonda hillocks", "Look for the monolithic stupa and sculpted cave panels", "Allow time for the village setting and views from the hill"],
    bestTime: "October–February is usually more comfortable for the exposed steps and hilltop paths.",
    timeNeeded: "2–3 hours",
    gettingThere: "The site is near Sankaram village, a short drive from Anakapalli. Arrange local transport from town and check access before leaving.",
    visitorTip: "Wear sturdy shoes for uneven stone steps, carry water, and do not climb on or touch archaeological structures.",
    sourceUrl: "https://anakapalli.ap.gov.in/religious-tourism/",
    sourceLabel: "Anakapalli district tourism · Bojjannakonda",
  },
  {
    slug: "gooty-fort",
    name: "Gooty Fort",
    type: "Hill fort & historic gateways",
    region: "Rayalaseema",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/gooty-fort-anantapur-ap-2-attr-hero?qlt=82&ts=1726744005190",
    tag: "Fort country",
    intro: "A dramatic hilltop fort of granite ramparts, layered gateways and sweeping views over Ananthapuramu’s dry plains.",
    history: "Gooty Fort is one of Andhra Pradesh’s oldest hill forts. Inscriptions point to an early medieval past, while the surviving complex—traditionally described as fifteen connected forts—shows how later rulers strengthened its walls, gateways and water systems.",
    highlights: ["Climb through the successive gateways and ramparts", "See the citadel, old wells and cliffside pavilion", "Take in the broad views from the hilltop"],
    bestTime: "November–February for cooler climbing conditions; avoid the hottest part of summer days.",
    timeNeeded: "Half day",
    gettingThere: "Gooty is reachable by rail and road; the fort is a short local transfer from town. Confirm access and transport locally.",
    visitorTip: "The uphill route is steep and exposed, with limited facilities. Carry water, wear grip shoes, and do not go beyond safe edges.",
    sourceUrl: "https://ananthapuramu.ap.gov.in/tourist-place/gooty-fort/",
    sourceLabel: "Ananthapuramu district tourism · Gooty Fort",
  },
  {
    slug: "suryalanka-beach",
    name: "Suryalanka Beach",
    type: "Bay of Bengal coastline",
    region: "Coast & hills",
    image: "https://media.newindianexpress.com/TNIE/import/2023/8/25/original/Suryalanka.jpg?auto=format%2Ccompress&enlarge=true&fit=max&h=675&w=1200",
    tag: "Coastal pause",
    intro: "A broad sandy shoreline near Bapatla, popular for sea views, beach walks and a relaxed coastal break.",
    history: "Suryalanka, also called Bapatla Beach, is one of the district’s best-known natural attractions. Its open shoreline and nearby visitor facilities make it an easy coastal outing from Bapatla town.",
    highlights: ["Walk the long shoreline and watch the Bay of Bengal", "Catch sunrise or a late-afternoon sea breeze", "Pair the visit with Bapatla town and nearby coastal stops"],
    bestTime: "November–February is generally more comfortable; check local weather and sea conditions year-round.",
    timeNeeded: "Half day",
    gettingThere: "Suryalanka is about 9 km from Bapatla. Use local road transport and confirm return options before heading to the beach.",
    visitorTip: "Sea conditions can change quickly. Follow lifeguard and police guidance, and do not swim unless local authorities say it is safe.",
    sourceUrl: "https://bapatla.ap.gov.in/tourist-place/suryalanka-beach/",
    sourceLabel: "Bapatla district tourism · Suryalanka Beach",
  },
  {
    slug: "kanipakam",
    name: "Kanipakam Vinayaka Temple",
    type: "Pilgrimage & temple architecture",
    region: "Temple towns",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Galipgopuram_of_Kanipakam_temple_%28May_2019%29_10.jpg/1280px-Galipgopuram_of_Kanipakam_temple_%28May_2019%29_10.jpg",
    imageCredit: "Wikimedia Commons · CC BY-SA 4.0",
    imageCreditUrl: "https://commons.wikimedia.org/wiki/File:Galipgopuram_of_Kanipakam_temple_(May_2019)_10.jpg",
    tag: "Temple trail",
    intro: "A major Ganesha shrine near Chittoor, known for its temple tank, tall gopuram and living pilgrimage traditions.",
    history: "The Sri Varasidhi Vinayaka Swamy Temple is associated with a local legend of a self-manifested Ganesha idol discovered in a well. The shrine has grown into an important pilgrimage stop in the Chittoor region.",
    highlights: ["Sri Varasidhi Vinayaka Swamy shrine", "The temple’s well and sacred-water tradition", "The carved entrance tower and nearby Chittoor heritage"],
    bestTime: "October–February is usually more comfortable. Festival days and weekends can be very busy.",
    timeNeeded: "2–4 hours",
    gettingThere: "Kanipakam is about 11 km from Chittoor and around 68 km from Tirupati by road.",
    visitorTip: "Check current darshan timings, dress guidance and queue arrangements through the temple before travelling; photography may be restricted inside.",
    sourceUrl: "https://chittoor.ap.gov.in/tourist-place/kanipakam/",
    sourceLabel: "Chittoor district tourism · Kanipakam",
  },
  {
    slug: "rajamahendravaram",
    name: "Rajamahendravaram",
    type: "Godavari riverfront & cultural history",
    region: "River & heritage",
    image: "https://images.unsplash.com/photo-1701694376119-85ff2f2e6905?auto=format&fit=crop&fm=jpg&q=80&w=1400",
    tag: "Godavari stories",
    intro: "A historic river city where Godavari ghats, railway bridges and Telugu literary heritage meet.",
    history: "Known historically as Rajamahendravaram or Rajahmundry, the city is closely associated with the Godavari and a long tradition of Telugu learning and culture. It is also a gateway to river journeys and sites around the delta.",
    highlights: ["Walk the Godavari riverfront and ghats", "See the great railway bridges from a safe public viewpoint", "Explore local museums, temples and old-city streets"],
    bestTime: "November–February is generally pleasant; check river and flood conditions during monsoon months.",
    timeNeeded: "1–2 days",
    gettingThere: "Rajamahendravaram is a major rail and road gateway with an airport. Local transport connects the city centre and riverfront.",
    visitorTip: "Use designated public viewpoints and follow local advice around the river, particularly during high water or boat trips.",
    sourceUrl: "https://eastgodavari.ap.gov.in/tourist-place/rajamahendravaram/",
    sourceLabel: "East Godavari district tourism · Rajamahendravaram",
  },
  {
    slug: "dwaraka-tirumala",
    name: "Dwaraka Tirumala",
    type: "Hill shrine & pilgrimage town",
    region: "Temple towns",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dwaraka_Tirumala_Main_Gopuram_01.jpg/960px-Dwaraka_Tirumala_Main_Gopuram_01.jpg",
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/6/69/Dwaraka_Tirumala_Main_Gopuram_01.jpg",
    imageCredit: "Adityamadhav83 · CC BY-SA 3.0",
    imageCreditUrl: "https://commons.wikimedia.org/wiki/File:Dwaraka_Tirumala_Main_Gopuram_01.jpg",
    tag: "Chinna Tirupati",
    intro: "A well-known Venkateswara pilgrimage town in Eluru district, set among low hills and visited throughout the year.",
    history: "The Sri Venkateswara Swamy shrine is widely known as Dwaraka Tirumala or Chinna Tirupati. Its layered temple traditions and annual festivals make it one of the region’s best-known pilgrimage destinations.",
    highlights: ["Sri Venkateswara Swamy temple", "The gopuram and hilltop temple setting", "Festival traditions and nearby Eluru-region stops"],
    bestTime: "November–February is usually more comfortable; major festival periods can bring heavy crowds.",
    timeNeeded: "Half day",
    gettingThere: "The temple is in Dwaraka Tirumala mandal of Eluru district. Reach by road from Eluru or nearby railway stations, then use local transport.",
    visitorTip: "Confirm darshan timings, festival dates and any online booking requirements with the temple before travel.",
    sourceUrl: "https://www.utsav.gov.in/view-darshan/dwaraka-tirumala-temple-1",
    sourceLabel: "Ministry of Tourism · Dwaraka Tirumala Temple",
  },
  {
    slug: "hope-island",
    name: "Hope Island",
    type: "Island & coastal ecology",
    region: "Coast & hills",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Satellite_kkd.jpg/1280px-Satellite_kkd.jpg",
    imageFallback: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Satellite_kkd.jpg",
    imageCredit: "NASA · public domain",
    imageCreditUrl: "https://commons.wikimedia.org/wiki/File:Satellite_kkd.jpg",
    tag: "Island escape",
    intro: "A slender coastal island that shelters Kakinada Bay, with sandy edges, greenery and a distinctive sea-and-lagoon setting.",
    history: "Hope Island is a natural barrier island formed by Godavari sediment and shaped by coastal processes. Its position helps buffer Kakinada Bay from the open Bay of Bengal, making it both a landscape feature and an ecologically sensitive area.",
    highlights: ["See the island and bay from an authorised boat trip", "Observe coastal habitats and the changing shoreline", "Combine with Kakinada’s beach and harbourfront"],
    bestTime: "November–February is generally more comfortable for coastal outings; boat access depends on sea and weather conditions.",
    timeNeeded: "Half day",
    gettingThere: "Access is by boat from Kakinada. Confirm current licensed operators, departure points and conditions locally before planning the trip.",
    visitorTip: "Do not land or explore independently. Use authorised boats, follow safety instructions and avoid disturbing wildlife or fragile coastal areas.",
    sourceUrl: "https://kakinada.ap.gov.in/tourism/tourist-places/",
    sourceLabel: "Kakinada district tourism · Hope Island",
  },
  {
    slug: "manginapudi-beach",
    name: "Manginapudi Beach",
    type: "Coastal heritage near Machilipatnam",
    region: "Coast & hills",
    image: "https://www.beyondyatra.com/assets/images/imgtg/vijayawada/nr/manginapudi_beach_vijayawada_andhra_pradesh_india.jpg",
    imageFallback: "https://www.hyderabadtourism.travel/images/popular/beaches-near-hyderabad/manginapudi-beach-machilipatnam-near-hyderabad.jpg",
    tag: "Coast & history",
    intro: "A distinctive beach near Machilipatnam, where shallow coastal scenery meets the old port town’s maritime story.",
    history: "The Krishna district tourism portal connects the area with Machilipatnam’s historic port and Dutch-era memories. The beach remains a popular local gathering point and a natural counterpoint to the district’s river and cultural heritage.",
    highlights: ["Walk the beach and watch the Bay of Bengal", "Visit Machilipatnam’s historic town and local crafts", "Check for current public events and beach facilities"],
    bestTime: "November–February is generally more comfortable for coastal visits.",
    timeNeeded: "Half day",
    gettingThere: "The beach is about 11 km from Machilipatnam. Local road transport is available from town; check return arrangements in advance.",
    visitorTip: "Do not assume the water is safe for swimming. Follow posted warnings and local authority guidance, and keep away from active port areas.",
    sourceUrl: "https://krishna.ap.gov.in/eco-tourism/",
    sourceLabel: "Krishna district tourism · Manginapudi Beach",
  },
  {
    slug: "bhairavakona",
    name: "Bhairavakona",
    type: "Rock-cut shrines & forested hills",
    region: "Rayalaseema",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/7th_to_8th_century_Bhairavakona_rock_cut_cave_temples%2C_Ambavaram_Nallamala_Hills%2C_Andhra_Pradesh_-_1.jpg/1280px-7th_to_8th_century_Bhairavakona_rock_cut_cave_temples%2C_Ambavaram_Nallamala_Hills%2C_Andhra_Pradesh_-_1.jpg",
    imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/7th_to_8th_century_Bhairavakona_rock_cut_cave_temples,_Ambavaram_Nallamala_Hills,_Andhra_Pradesh_-_12.jpg?width=1280",
    imageCredit: "Ms Sarah Welch · CC BY-SA 4.0",
    imageCreditUrl: "https://commons.wikimedia.org/wiki/File:7th_to_8th_century_Bhairavakona_rock_cut_cave_temples,_Ambavaram_Nallamala_Hills,_Andhra_Pradesh_-_1.jpg",
    tag: "Carved in stone",
    intro: "A remote Nallamala hillside shrine with rock-cut temples, forest scenery and a seasonal waterfall setting.",
    history: "Bhairavakona is known for eight rock-cut shrines associated with Shiva and Devi traditions. The site’s carvings and mountain setting make it a meaningful heritage stop as well as a nature excursion.",
    highlights: ["Rock-cut temple facades and sculpted details", "Nallamala hill scenery and seasonal cascades", "A quiet, respectful visit to an active sacred site"],
    bestTime: "November–February is often more comfortable. Waterfall flow varies with the monsoon, and access may change after heavy rain.",
    timeNeeded: "Half day",
    gettingThere: "Bhairavakona is reached by road from the Markapuram region; the last stretch is remote, so arrange transport and check road conditions first.",
    visitorTip: "Carry water, wear sturdy shoes and avoid the area during unsafe weather. Respect temple customs and do not enter restricted forest areas.",
    sourceUrl: "https://markapuram.ap.gov.in/places-of-interest/",
    sourceLabel: "Markapuram district tourism · Bhairavakona",
  },
  {
    slug: "talpagiri-ranganathaswamy",
    name: "Talpagiri Ranganathaswamy Temple",
    type: "Pennar river temple heritage",
    region: "Temple towns",
    image: "https://i0.wp.com/dakshinapatha.com/wp-content/uploads/2025/05/767f058f-6784-42e6-ae17-fd4733083390.jpeg?resize=1200%2C900&ssl=1",
    tag: "Living heritage",
    intro: "A landmark Vishnu temple on the Pennar River, recognised by its tall gopuram and long history in Nellore city.",
    history: "The district’s religious-tourism account describes the temple as more than 600 years old, with records and later additions reflecting Pallava, Chola and Pandya-era patronage. Its riverfront setting has shaped the temple’s identity and local stories.",
    highlights: ["The seven-tier eastern gopuram", "The historic shrine and surrounding temple streets", "The Pennar riverfront and nearby Nellore landmarks"],
    bestTime: "November–February is generally more comfortable. Brahmotsavam and festival dates vary by the Hindu calendar.",
    timeNeeded: "2–3 hours",
    gettingThere: "The temple is in Nellore city and is a short road journey from the railway station or bus stand.",
    visitorTip: "Check worship timings and festival schedules before visiting. Follow temple dress guidance and ask before taking photographs.",
    sourceUrl: "https://spsnellore.ap.gov.in/religious-tourism/",
    sourceLabel: "Sri Potti Sriramulu Nellore district tourism · Ranganatha Swamy Temple",
  },
  {
    slug: "kurupam-palace",
    name: "Kurupam Palace",
    type: "Regional palace & Manyam heritage",
    region: "Coast & hills",
    image: "https://www.mappls.com/place/GBN3WB_1686457807254_0.png",
    tag: "Manyam heritage",
    intro: "A heritage stop in the forested north-eastern uplands, introducing visitors to the region’s local royal and tribal histories.",
    history: "Kurupam Palace is one of the notable heritage places featured by the Parvathipuram Manyam district administration. It offers a contrast to the district’s waterfalls and forest routes, and can be paired with a wider Manyam circuit.",
    highlights: ["Explore the palace exterior and local setting", "Combine with Parvathipuram and nearby nature stops", "Learn about the region’s communities and local history"],
    bestTime: "October–February is generally more comfortable for travel in the uplands.",
    timeNeeded: "1–2 hours",
    gettingThere: "Plan a road trip from Parvathipuram and confirm local access and opening arrangements before setting out.",
    visitorTip: "Treat this as a local heritage visit: confirm whether interiors are open, ask permission before photographing residents, and respect private areas.",
    sourceUrl: "https://parvathipurammanyam.ap.gov.in/gallery/important-places/",
    sourceLabel: "Parvathipuram Manyam district · Important Places",
  },
  {
    slug: "maredumilli",
    name: "Maredumilli",
    type: "Forest streams & Eastern Ghats",
    region: "Coast & hills",
    image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/03/10190048/MareduMilli.jpg",
    tag: "Forest escape",
    intro: "A lush Eastern Ghats getaway of forest roads, streams and waterfalls, now within Polavaram district.",
    history: "Maredumilli’s landscape is closely connected to the forests and Indigenous communities of the Eastern Ghats. Coffee and rubber plantations, streams and waterfalls form part of the region’s contemporary visitor experience.",
    highlights: ["Forest drives and seasonal waterfalls", "Coffee-growing landscapes and local food", "Nearby viewpoints and village experiences"],
    bestTime: "October–February is usually easier for travel. Monsoon greenery is beautiful but can affect roads and waterfall access.",
    timeNeeded: "1–2 days",
    gettingThere: "Maredumilli is reached by road from Rajamahendravaram or Rampachodavaram. Start early and arrange a local vehicle for nearby stops.",
    visitorTip: "Stay on permitted routes, do not litter or feed wildlife, and check forest entry, road and waterfall conditions with local authorities.",
    sourceUrl: "https://polavaram.ap.gov.in/about-district/administrative-setup/mandal-tahsil/",
    sourceLabel: "Polavaram district administration · Maredumilli mandal",
  },
  {
    slug: "kothapatnam-beach",
    name: "Kothapatnam Beach",
    type: "Ongole coast & Bay of Bengal",
    region: "Coast & hills",
    image: "https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format%3Dwebp%2Cw%3D1200/QwRY54Li1HMwD7oNfpCUlDXoeCoIBQmvMzcQfjgz7j",
    tag: "Coastal pause",
    intro: "An open sandy beach close to Ongole, suited to a short coastal break and sunset walk.",
    history: "Kothapatnam is a coastal village in Prakasam district and one of Ongole’s best-known beach outings. The shoreline is also a place for local gatherings, especially during festival periods.",
    highlights: ["A long walk along the sandy shoreline", "Sunrise and sunset views over the Bay of Bengal", "A relaxed road trip from Ongole"],
    bestTime: "November–February is generally more comfortable for beach walks.",
    timeNeeded: "2–4 hours",
    gettingThere: "The beach is around 18 km from Ongole and is best reached by road. Check local transport and facilities before travelling.",
    visitorTip: "Swimming and boating are not guaranteed services. Follow local warnings, stay clear of rough surf and confirm any facilities on arrival.",
    sourceUrl: "https://prakasam.ap.gov.in/tourist-place/kothapatnam-beach/",
    sourceLabel: "Prakasam district tourism · Kothapatnam Beach",
  },
  {
    slug: "vizianagaram-fort",
    name: "Vizianagaram Fort",
    type: "Royal fort & town heritage",
    region: "Coast & hills",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Vizianagaram_fort_walls_02.JPG/1280px-Vizianagaram_fort_walls_02.JPG",
    imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Vizianagaram_fort_walls_02.JPG?width=1280",
    imageCredit: "Adityamadhav83 · CC BY-SA 3.0",
    imageCreditUrl: "https://commons.wikimedia.org/wiki/File:Vizianagaram_fort_walls_02.JPG",
    tag: "Royal heritage",
    intro: "A historic town landmark whose gateways, palace buildings and gardens tell the story of the Pusapati rulers.",
    history: "The district portal records the fort’s foundation in 1713 by Vijayarama Raju I. Its East Gate, Nagaar Khana, Moti Mahal and surrounding royal buildings preserve the shape of Vizianagaram’s princely past.",
    highlights: ["The East Gate and Nagaar Khana", "Moti Mahal and nearby historic buildings", "The fort gardens and town’s clock tower"],
    bestTime: "October–February for a more comfortable town walk.",
    timeNeeded: "2–3 hours",
    gettingThere: "The fort is in Vizianagaram town and can be reached by local auto or taxi from the railway station and bus stand.",
    visitorTip: "Some buildings have other current uses and may not be open inside. Check access locally and respect any posted restrictions.",
    sourceUrl: "https://vizianagaram.ap.gov.in/tourist-spots/",
    sourceLabel: "Vizianagaram district tourism · Tourist Spots",
  },
  {
    slug: "bhimavaram-someshwara",
    name: "Bhimavaram Someswara Temple",
    type: "Pancharama temple heritage",
    region: "Temple towns",
    image: "https://tripxl.com/blog/wp-content/uploads/2024/09/Someswara-Janardhana-Temple.jpg",
    imageFallback: "https://templeconnect.com/wp-content/uploads/2022/06/image_search_1654252095405.jpg",
    tag: "Temple trail",
    intro: "A prominent Shiva shrine in Bhimavaram and one of the five Pancharama Kshetras of Andhra Pradesh.",
    history: "The Gunupudi Someswara Janardhana Swamy Temple is associated with Chalukya Bhima and is a major religious landmark in West Godavari. Temple tradition links the shrine’s Someswara linga with the moon god Chandra.",
    highlights: ["Someswara Swamy shrine and temple tower", "The sacred temple tank and surrounding complex", "Nearby Palakollu’s Ksheerarama temple"],
    bestTime: "October–February is generally more comfortable; Mahashivaratri and other festivals are busy.",
    timeNeeded: "2–3 hours",
    gettingThere: "Bhimavaram is connected by rail and road; the temple is within town and reachable by local transport.",
    visitorTip: "Check darshan timings and festival arrangements locally. Respect worship practices and photography restrictions.",
    sourceUrl: "https://westgodavari.ap.gov.in/religioustourism/",
    sourceLabel: "West Godavari district tourism · Someswara Janardhana Swamy Temple",
  },
);

const newDestinationMetadata = {
  bojjannakonda: { district: "Anakapalli", categories: ["buddhist", "heritage", "caves", "nature"] },
  "gooty-fort": { district: "Ananthapuramu", categories: ["heritage", "hills"] },
  "suryalanka-beach": { district: "Bapatla", categories: ["beach", "nature"] },
  kanipakam: { district: "Chittoor", categories: ["temple", "heritage"] },
  rajamahendravaram: { district: "East Godavari", categories: ["river", "heritage", "city", "culture"] },
  "dwaraka-tirumala": { district: "Eluru", categories: ["temple", "heritage"] },
  "hope-island": { district: "Kakinada", categories: ["beach", "nature", "wildlife"] },
  "manginapudi-beach": { district: "Krishna", categories: ["beach", "heritage"] },
  bhairavakona: { district: "Markapuram", categories: ["temple", "heritage", "forest", "nature"] },
  "talpagiri-ranganathaswamy": { district: "Sri Potti Sriramulu Nellore", categories: ["temple", "heritage", "river"] },
  "kurupam-palace": { district: "Parvathipuram Manyam", categories: ["heritage", "culture"] },
  maredumilli: { district: "Polavaram", categories: ["forest", "nature", "waterfall"] },
  "kothapatnam-beach": { district: "Prakasam", categories: ["beach", "nature"] },
  "vizianagaram-fort": { district: "Vizianagaram", categories: ["heritage", "culture"] },
  "bhimavaram-someshwara": { district: "West Godavari", categories: ["temple", "heritage"] },
};

Object.entries({ ...destinationMetadata, ...newDestinationMetadata }).forEach(([slug, metadata]) => {
  const place = destinations.find((item) => item.slug === slug);
  if (place) Object.assign(place, metadata);
});

const destinationCategories = [
  { id: "heritage", label: "Heritage & history" },
  { id: "temple", label: "Temples" },
  { id: "beach", label: "Beaches" },
  { id: "forest", label: "Forests & wildlife" },
  { id: "caves", label: "Caves" },
  { id: "nature", label: "Hills & nature" },
  { id: "river", label: "Rivers & backwaters" },
  { id: "buddhist", label: "Buddhist heritage" },
  { id: "culture", label: "Culture" },
  { id: "hills", label: "Hill country" },
  { id: "city", label: "City breaks" },
  { id: "wildlife", label: "Wildlife" },
  { id: "waterfall", label: "Waterfalls" },
];

const districtRegionGroups = [
  {
    name: "North Andhra",
    districts: ["Alluri Sitharama Raju", "Anakapalli", "Parvathipuram Manyam", "Srikakulam", "Visakhapatnam", "Vizianagaram"],
  },
  {
    name: "Godavari country",
    districts: ["Dr. B.R. Ambedkar Konaseema", "East Godavari", "Eluru", "Kakinada", "Polavaram", "West Godavari"],
  },
  {
    name: "Coastal plains",
    districts: ["Bapatla", "Guntur", "Krishna", "Markapuram", "NTR", "Palnadu", "Prakasam", "Sri Potti Sriramulu Nellore"],
  },
  {
    name: "Rayalaseema",
    districts: ["Ananthapuramu", "Annamayya", "Chittoor", "Kurnool", "Nandyal", "Sri Sathya Sai", "Tirupati", "YSR Kadapa"],
  },
];

const districtExtraAttractions = {
  "Alluri Sitharama Raju": [
    { name: "Katiki Waterfalls", note: "A forest-side waterfall outing near the Borra Caves route." },
    { name: "Chaparai Waterfalls", note: "A rocky stream and picnic landscape near Araku; check water and road conditions." },
  ],
  Anakapalli: [
    { name: "Kondakarla Bird Sanctuary", note: "A lake and wetland known for birdlife and quiet boat rides." },
    { name: "Sri Nookambika Ammavari Temple", note: "A well-known Anakapalli town temple; check festival crowds and timings." },
  ],
  Ananthapuramu: [
    { name: "Penukonda Fort", note: "A hill fort and historic settlement with gateways and old structures." },
    { name: "Chintala Venkataramana Temple", note: "A celebrated Vijayanagara-era temple in Tadipatri." },
  ],
  Annamayya: [
    { name: "Tallapaka", note: "The birthplace region associated with the poet-composer Annamacharya." },
    { name: "Nandalur Soumyanatha Temple", note: "An important historic temple with a large pillared complex." },
  ],
  Bapatla: [
    { name: "Bhavanarayana Swamy Temple", note: "A historic Vishnu temple in Bapatla town." },
    { name: "Vodarevu Beach", note: "A popular coastal stop south of Bapatla; follow posted sea-safety guidance." },
  ],
  Chittoor: [
    { name: "Mogili Temple", note: "A well-known Shiva temple stop along the Chittoor–Palamaner route." },
    { name: "Kaigal Waterfalls", note: "A seasonal waterfall in the Koundinya landscape; access can vary with rain." },
  ],
  "Dr. B.R. Ambedkar Konaseema": [
    { name: "Draksharamam Bhimeswara Temple", note: "One of the Pancharama Kshetras, with a notable temple complex." },
    { name: "Antarvedi Lakshmi Narasimha Temple", note: "A pilgrimage stop near the Godavari estuary and Bay of Bengal." },
  ],
  "East Godavari": [
    { name: "Dowleswaram Barrage", note: "A landmark on the Godavari associated with the region’s irrigation history." },
    { name: "Kadiyam Nurseries", note: "A broad nursery-growing area near Rajamahendravaram; ask before entering private plots." },
  ],
  Eluru: [
    { name: "Kolleru Lake", note: "A major freshwater lake and bird habitat; check seasonal access and local advisories." },
    { name: "Guntupalli Buddhist Caves", note: "Rock-cut Buddhist remains in a wooded hill setting; confirm site access." },
  ],
  Guntur: [
    { name: "Uppalapadu Bird Sanctuary", note: "A community-managed wetland known for waterbirds, especially in season." },
    { name: "Mangalagiri Panakala Narasimha Temple", note: "A hill temple near the Vijayawada–Guntur corridor." },
  ],
  Kakinada: [
    { name: "Coringa Wildlife Sanctuary", note: "A mangrove ecosystem near Kakinada; use authorised visitor facilities." },
    { name: "Uppada Beach", note: "An open coastal stretch north of Kakinada; follow sea-safety guidance." },
  ],
  Krishna: [
    { name: "Ghantasala Buddhist Site", note: "An archaeological stop associated with the region’s Buddhist heritage." },
    { name: "Hamsaladeevi", note: "A coastal and river-mouth landscape; check local access and sea conditions." },
  ],
  Kurnool: [
    { name: "Orvakal Rock Garden", note: "A striking landscape of natural rock formations outside Kurnool city." },
    { name: "Adoni Fort", note: "A large historic fort complex in the western part of the district." },
  ],
  Markapuram: [
    { name: "Cumbum Lake", note: "A historic irrigation lake and scenic stop; water levels vary by season." },
    { name: "Markapuram Chenna Kesava Temple", note: "A town heritage stop; confirm worship hours locally." },
  ],
  Nandyal: [
    { name: "Mahanandi Temple", note: "A historic Shiva shrine set amid the Nallamala foothills." },
    { name: "Rollapadu Wildlife Sanctuary", note: "A grassland reserve known for the great Indian bustard; confirm access and sightings." },
  ],
  NTR: [
    { name: "Kanaka Durga Temple", note: "A major hilltop shrine overlooking Vijayawada and the Krishna River." },
    { name: "Kondapalli Fort", note: "A hill fort near the famous Kondapalli wooden-toy craft village." },
  ],
  Palnadu: [
    { name: "Kotappakonda", note: "A hill and temple destination known for its views and annual festival." },
    { name: "Ethipothala Falls", note: "A scenic cascade near Nagarjuna Sagar; flow changes with the season." },
  ],
  "Parvathipuram Manyam": [
    { name: "Thotapalli Barrage", note: "A riverside stop on the Nagavali with broad water and hill views." },
    { name: "Seethampeta", note: "A gateway to Manyam’s upland scenery and local markets; arrange transport ahead." },
  ],
  Polavaram: [
    { name: "Papikondalu", note: "A Godavari river-and-hill landscape; use authorised boats and check current operations." },
    { name: "Rampachodavaram viewpoints", note: "A base for exploring the Eastern Ghats; ask locally about safe, open routes." },
  ],
  Prakasam: [
    { name: "Chandavaram Buddhist Site", note: "An archaeological hilltop complex with stupas and monastic remains." },
    { name: "Bhairavakona", note: "Rock-cut shrines in the Nallamala hills; check road and weather conditions." },
  ],
  "Sri Potti Sriramulu Nellore": [
    { name: "Pulicat Lake", note: "A large brackish lagoon and bird habitat shared across the Andhra–Tamil Nadu border." },
    { name: "Nelapattu Bird Sanctuary", note: "A seasonal birding destination; confirm opening and waterbird activity before visiting." },
  ],
  "Sri Sathya Sai": [
    { name: "Prasanthi Nilayam, Puttaparthi", note: "A spiritual campus and visitor destination; follow current entry guidance." },
    { name: "Dharmavaram Handloom Market", note: "Look for the district’s silk-weaving tradition and locally made textiles." },
  ],
  Srikakulam: [
    { name: "Arasavalli Sun Temple", note: "A renowned Sun temple with a long history in the Srikakulam region." },
    { name: "Kalingapatnam Beach", note: "A coastal stop near the Vamsadhara River mouth; check sea conditions." },
  ],
  Tirupati: [
    { name: "Sri Kalahasti Temple", note: "A major Shiva temple known for its Dravidian architecture and pilgrimage traditions." },
    { name: "Talakona Waterfall", note: "A forest waterfall inside the Sri Venkateswara National Park landscape." },
  ],
  Visakhapatnam: [
    { name: "Simhachalam Temple", note: "A hilltop Varaha Lakshmi Narasimha shrine with distinctive stone architecture." },
    { name: "Kailasagiri", note: "A hilltop park with panoramic views over the city and coastline." },
  ],
  Vizianagaram: [
    { name: "Ramateertham", note: "A historic hilltop temple and archaeological landscape near Vizianagaram." },
    { name: "Punyagiri", note: "A hill and temple destination; check local access and weather before travelling." },
  ],
  "West Godavari": [
    { name: "Palakollu Ksheera Ramalingeswara Temple", note: "One of the Pancharama temples, known for its tall gopuram." },
    { name: "Perupalem Beach", note: "A coastal outing west of Bhimavaram; follow local sea-safety advice." },
  ],
  "YSR Kadapa": [
    { name: "Vontimitta Kodandarama Temple", note: "A major temple complex celebrated for its stone architecture." },
    { name: "Pushpagiri Temple Complex", note: "A historic group of temples on the Pennar River landscape." },
  ],
};

const foodGuides = [
  {
    title: "Bamboo chicken",
    region: "Araku & Maredumilli",
    icon: "♨",
    description: "A local specialty cooked inside bamboo, often enjoyed alongside a trip through the Eastern Ghats. Ask local hosts about preparation and availability.",
    source: "https://www.incredibleindia.gov.in/en/andhra-pradesh/rajahmundry/maredumilli",
    sourceLabel: "Incredible India · Maredumilli",
    place: "maredumilli",
  },
  {
    title: "Pesarattu, pulihora & gongura",
    region: "Andhra favourites",
    icon: "✦",
    description: "Try green-gram pesarattu, tangy tamarind rice and gongura pachadi. Recipes and spice levels vary from home to home.",
    source: "https://www.incredibleindia.gov.in/en/andhra-pradesh/amaravati",
    sourceLabel: "Incredible India · Amaravati cuisine",
    place: "amaravati",
  },
  {
    title: "Coastal seafood",
    region: "Visakhapatnam coast",
    icon: "≈",
    description: "Fish, prawns and crab feature on many coastal menus. Ask what is fresh and locally sourced, and mention dietary needs when ordering.",
    source: "https://www.incredibleindia.gov.in/en/andhra-pradesh/visakhapatnam",
    sourceLabel: "Incredible India · Visakhapatnam cuisine",
    place: "visakhapatnam",
  },
  {
    title: "Pootharekulu",
    region: "Godavari delta sweet",
    icon: "❋",
    description: "A delicate paper-thin sweet made from rice starch, traditionally associated with Atreyapuram in the Godavari region.",
    source: "https://www.incredibleindia.gov.in/en/andhra-pradesh/amaravati",
    sourceLabel: "Incredible India · Andhra food guide",
    place: "konaseema",
  },
];

const festivalGuides = [
  {
    title: "Tirumala Brahmotsavam",
    region: "Tirupati · devotional traditions",
    icon: "✺",
    description: "A major annual celebration at the Sri Venkateswara Temple, with processions and temple rituals. Dates and visitor arrangements vary; check TTD guidance before planning.",
    source: "https://www.incredibleindia.gov.in/en/andhra-pradesh/tirupati/sri-venkateswara-swamy-vaari-temple",
    sourceLabel: "Incredible India · Sri Venkateswara Temple",
    place: "tirupati",
  },
  {
    title: "Lepakshi Utsavalu",
    region: "Lepakshi · art & culture",
    icon: "✧",
    description: "A cultural celebration connected with Lepakshi’s living artistic heritage. Event dates and programmes can change from year to year.",
    source: "https://www.incredibleindia.gov.in/en/rural-tourism/lepakshi",
    sourceLabel: "Incredible India · Lepakshi",
    place: "lepakshi",
  },
  {
    title: "Simhachalam Giri Pradakshina",
    region: "Visakhapatnam · pilgrimage walk",
    icon: "⌁",
    description: "An annual devotional circumambulation of Simhachalam Hill, often observed around Ashadha Purnima. Confirm the current date, route and local arrangements before joining.",
    source: "https://www.incredibleindia.gov.in/en/festivals-and-events/andhra-pradesh/simhachalam---giri-pradakshina",
    sourceLabel: "Incredible India · Simhachalam event guide",
    place: "visakhapatnam",
  },
  {
    title: "Maredumilli Tourism Festival",
    region: "Forest country · nature & culture",
    icon: "❋",
    description: "A tourism celebration showcasing local nature, food and cultural experiences. Festival dates and activities can change; confirm through the official listing.",
    source: "https://www.incredibleindia.gov.in/en/festivals-and-events/andhra-pradesh/maredumilli-tourism-festival",
    sourceLabel: "Incredible India · Maredumilli event guide",
    place: "maredumilli",
  },
];

const savedPlacesStorageKey = "andhra-atlas-saved-places";
let savedPlaceSlugs = new Set();
try {
  const storedSavedPlaces = JSON.parse(localStorage.getItem(savedPlacesStorageKey) || "[]");
  if (Array.isArray(storedSavedPlaces)) savedPlaceSlugs = new Set(storedSavedPlaces);
} catch {
  savedPlaceSlugs = new Set();
}
savedPlaceSlugs = new Set(
  [...savedPlaceSlugs].filter((slug) => destinations.some((place) => place.slug === slug)),
);
let savedPlacesOnly = false;
const languageStorageKey = "andhra-atlas-language";
let currentLanguage = "en";
try {
  currentLanguage = localStorage.getItem(languageStorageKey) === "te" ? "te" : "en";
} catch {
  currentLanguage = "en";
}

const app = document.querySelector("#app");
app.innerHTML = `
  <a class="skip-link" href="#top">Skip to main content</a>
  <header class="topbar">
    <a class="brand" href="#top" aria-label="The Andhra Atlas Guide home"><img class="brand-logo" src="assets/andhra-cultural-emblem.png" alt=""/><span>The Andhra<br><em>Atlas Guide</em></span></a>
    <nav aria-label="Primary navigation">
      <a href="#destinations">Destinations</a><a href="#experiences">Experiences</a><a href="#culture">Food & festivals</a><a href="#itineraries">Plan your trip</a><a href="#stories">Travel stories</a>
    </nav>
    <div class="nav-actions"><button class="language-toggle" id="languageToggle" type="button" aria-label="Switch language to Telugu" aria-pressed="false">తెలుగు</button><button class="theme-toggle" id="themeToggle" type="button" aria-label="Switch to light mode" aria-pressed="false"><span id="themeIcon" aria-hidden="true">☼</span><span class="theme-label">Light mode</span></button><button class="icon-button" id="siteSearchToggle" type="button" aria-label="Search destinations" aria-expanded="false" aria-controls="siteSearchPanel"><span aria-hidden="true">⌕</span></button><button class="menu-button" id="siteMenuToggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="siteMenu"><span aria-hidden="true">☰</span></button></div>
    <div class="site-search-panel" id="siteSearchPanel" hidden>
      <label class="sr-only" for="siteSearchInput">Search places and districts</label>
      <input id="siteSearchInput" type="search" placeholder="Search a place or district…" autocomplete="off" />
      <div class="site-search-results" id="siteSearchResults" aria-live="polite"></div>
    </div>
    <nav class="site-menu" id="siteMenu" aria-label="Quick navigation" hidden>
      <a href="#weather">Live weather</a><a href="#destinations">Destinations</a><a href="#experiences">Experiences</a><a href="#culture">Food & festivals</a><a href="#itineraries">Plan your trip</a><a href="#stories">Travel stories</a>
    </nav>
  </header>

  <main id="top" tabindex="-1">
    <section class="hero">
      <div class="hero-image" role="img" aria-label="A coastal view near Andhra Pradesh"></div>
      <div class="hero-shade"></div>
      <div class="hero-content container">
        <p class="eyebrow light">INDIA'S EASTERN COAST, UNFOLDED</p>
        <h1 id="heroTitle">Every turn tells<br>an <i>Andhra</i> story.</h1>
        <p class="hero-copy">From misty coffee slopes to temple bells and sunlit shores, find the Andhra Pradesh that stays with you.</p>
        <div class="hero-controls"><a class="button primary" href="#destinations">Start exploring <span>→</span></a><button class="text-button" id="weatherJump">See today’s weather <span>↓</span></button></div>
      </div>
      <div class="hero-bottom container"><span>SCROLL TO EXPLORE</span><div class="category-links"><a href="#destinations">Coast</a><a href="#destinations">Hills</a><a href="#experiences">Culture</a><a href="#culture">Food</a><a href="#itineraries">Road trips</a></div></div>
    </section>

    <section class="weather-strip" id="weather">
      <div class="container">
        <div class="weather-layout"><div><p class="eyebrow">RIGHT NOW IN ANDHRA</p><h2>Make room for <span id="weatherSummary">a little sunshine.</span></h2><div class="weather-controls"><label for="weatherPlace">Forecast location<select id="weatherPlace">${Object.entries(weatherLocations).map(([key, place]) => `<option value="${key}">${place.label}</option>`).join("")}</select></label><button id="weatherRefresh" type="button" aria-label="Refresh weather">↻ Refresh</button></div><p class="weather-updated" id="weatherUpdated" aria-live="polite">Loading current conditions…</p></div><div class="weather-card" aria-live="polite"><div class="weather-symbol" id="weatherIcon" aria-hidden="true">☀</div><div class="weather-main"><strong id="temperature">Loading...</strong><span id="weatherLocation">Visakhapatnam</span></div><div class="weather-stats"><span id="weatherDetail">Fetching live conditions</span><span id="weatherHumidity">Humidity —</span><span id="weatherWind">Wind —</span><span id="weatherRain">Rain —</span></div></div></div>
        <div class="forecast-heading"><div><p class="eyebrow dark">THE WEEK AHEAD</p><h3>Seven-day forecast</h3></div><span id="forecastLocationLabel">Visakhapatnam · Andhra Pradesh</span></div>
        <div class="forecast-grid" id="forecastGrid" aria-label="Seven-day forecast" aria-live="polite" tabindex="0"><p class="forecast-loading">Loading the seven-day forecast…</p></div>
        <aside class="weather-advice" id="weatherAdvice" aria-live="polite" hidden></aside>
        <p class="weather-footnote">Forecasts are model estimates and can change, especially local rain and showers. Check official alerts before travel. Weather data by <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a>.</p>
      </div>
    </section>

    <section class="editorial" id="destinations">
      <div class="container">
        <div class="section-heading"><div><p class="eyebrow dark">EXPLORE ALL 28 DISTRICTS</p><h2>Find the Andhra<br>that feels <i>like you.</i></h2></div><p class="section-intro">Start with a district or browse by interest. Every guide opens with a place story, history, practical visitor notes and a Google Maps link.</p></div>
        <div class="destination-explorer">
          <div class="destination-browse-bar">
            <label class="destination-select-label" for="destinationDistrict">Browse by district
              <select id="destinationDistrict"><option value="all">All 28 districts</option>${districtNames.map((district) => `<option value="${district}">${district}</option>`).join("")}</select>
            </label>
            <p class="destination-count" id="destinationCount" aria-live="polite"></p>
          </div>
          <p class="destination-category-label">OR CHOOSE WHAT YOU’RE IN THE MOOD FOR</p>
          <div class="destination-filters" role="group" aria-label="Filter destinations by interest">
            <button class="destination-filter saved-places-toggle" id="savedPlacesToggle" type="button" aria-pressed="false"><span aria-hidden="true">♡</span> My saved places <span class="saved-places-count" id="savedPlacesCount">0</span></button>
            <button class="destination-filter" type="button" data-category="all" aria-pressed="true">All interests</button>
            ${destinationCategories.map((category) => `<button class="destination-filter" type="button" data-category="${category.id}" aria-pressed="false">${category.label}</button>`).join("")}
          </div>
          <p class="destination-storage-note">Saved places are kept in this browser on this device—no account needed.</p>
          <details class="district-explorer">
            <summary><span>Browse all 28 districts by region</span><span class="district-explorer-hint">Choose a district to filter places</span></summary>
            <div class="district-region-grid">${districtRegionGroups.map((group) => `<section class="district-region"><h3>${group.name}</h3><div>${group.districts.map((district) => `<button type="button" class="district-chip" data-district-choice="${district}">${district}</button>`).join("")}</div></section>`).join("")}</div>
          </details>
          <section class="district-picks" id="districtPicks" aria-live="polite" hidden></section>
        </div>
        <div class="destination-grid" id="destinationGrid">${destinations.map((place) => `<article class="place-card" data-destination="${place.slug}" data-district="${place.district}" data-categories="${place.categories.join(" ")}" style="--bg:url('${place.image}')"><span class="place-overlay"></span><div class="place-top"><span>${place.tag}</span><div class="place-card-actions"><button class="place-save" type="button" data-save-place="${place.slug}" aria-pressed="${savedPlaceSlugs.has(place.slug)}" aria-label="${savedPlaceSlugs.has(place.slug) ? `Remove ${place.name} from` : `Save ${place.name} to`} My saved places">${savedPlaceSlugs.has(place.slug) ? "♥" : "♡"}</button><a class="place-card-map" href="${googleMapsDirections(`${place.name}, ${place.district}`)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${place.name} in Google Maps">Google Maps ↗</a></div></div><div class="place-copy"><span class="place-district">${place.district} District</span><span class="place-type">${place.type}</span><h3 class="place-title">${place.name}</h3><div class="place-card-cta"><button class="place-discover" type="button" aria-label="Open visitor guide for ${place.name}">Open place guide <span aria-hidden="true">→</span></button><button class="place-add-to-trip" type="button" data-add-to-trip="${place.slug}" aria-pressed="false">＋ Add to trip</button></div></div></article>`).join("")}</div>
        <p class="destination-empty" id="destinationEmptyState" hidden>No places match that combination yet. Try another district or interest.</p>
      </div>
    </section>

    <section class="immersive" id="experiences"><div class="container experience-layout"><div class="experience-photo"></div><div class="experience-copy"><p class="eyebrow light">FIND YOUR RHYTHM</p><h2>Not just places.<br>Ways to feel <i>alive.</i></h2><p>Wake with the fishermen of Kakinada. Share a fragrant plate of bamboo chicken in Araku. Follow an ancient path through Srisailam. The best itineraries leave room for the unplanned.</p><div class="experience-pills"><span>Beach days</span><span>Temple trails</span><span>Local flavours</span><span>Wild escapes</span></div><a class="button primary" href="#itineraries">Explore experiences <span>→</span></a></div></div></section>

    <section class="culture-section" id="culture">
      <div class="container">
        <div class="section-heading"><div><p class="eyebrow dark">TASTE & TRADITION</p><h2>Come for the view.<br>Stay for the <i>stories.</i></h2></div><p class="section-intro">Find a local flavour or time your trip around a celebration. Festival dates and programmes can change—check official listings before travelling.</p></div>
        <div class="culture-heading"><div><p class="eyebrow dark">ON THE TABLE</p><h3>Flavours to look for</h3></div><span>Ask locally; menus and availability vary.</span></div>
        <div class="culture-grid">${foodGuides.map((guide) => `<article class="culture-card"><span class="culture-icon" aria-hidden="true">${guide.icon}</span><p class="culture-region">${guide.region}</p><h3>${guide.title}</h3><p class="culture-description">${guide.description}</p><div class="culture-card-actions"><button type="button" data-open-guide="${guide.place}">Explore a related place <span aria-hidden="true">→</span></button><a href="${guide.source}" target="_blank" rel="noopener noreferrer">${guide.sourceLabel} ↗</a></div></article>`).join("")}</div>
        <div class="culture-heading festival-heading"><div><p class="eyebrow dark">ON THE CALENDAR</p><h3>Celebrations worth discovering</h3></div><span>Dates can shift with local calendars.</span></div>
        <div class="culture-grid">${festivalGuides.map((guide) => `<article class="culture-card festival-card"><span class="culture-icon" aria-hidden="true">${guide.icon}</span><p class="culture-region">${guide.region}</p><h3>${guide.title}</h3><p class="culture-description">${guide.description}</p><div class="culture-card-actions"><button type="button" data-open-guide="${guide.place}">Explore a related place <span aria-hidden="true">→</span></button><a href="${guide.source}" target="_blank" rel="noopener noreferrer">Official event guide ↗</a></div></article>`).join("")}</div>
      </div>
    </section>

    <section class="itinerary-section" id="itineraries">
      <div class="container">
        <div class="section-heading"><div><p class="eyebrow dark">MAKE IT YOUR OWN</p><h2>Your first Andhra<br>adventure starts <i>here.</i></h2></div><p class="section-intro">Choose a regional circuit, how long you have, and what you enjoy. We’ll shape a day-by-day starting point you can fine-tune.</p></div>
        <div class="planner-panel">
          <section class="custom-trip-builder" aria-labelledby="customTripTitle">
            <div class="custom-trip-heading"><div><p class="eyebrow dark">YOUR CUSTOM JOURNEY</p><h3 id="customTripTitle">Build your own trip</h3><p>Add places from any destination card or its full guide. Reorder stops and your trip stays saved in this browser.</p></div><div class="custom-trip-tools"><span id="customTripCount" aria-live="polite">0 stops</span><a id="customTripMap" href="#" target="_blank" rel="noopener noreferrer" hidden>Map this trip ↗</a><button id="customTripClear" type="button">Clear trip</button></div></div>
            <p class="custom-trip-empty" id="customTripEmpty">Your trip is empty for now. Explore the destination cards and add places you like.</p>
            <ol class="custom-trip-stops" id="customTripStops" aria-label="Your custom trip stops"></ol>
            <p class="custom-trip-status" id="customTripStatus" aria-live="polite">Saved only in this browser on this device.</p>
          </section>
          <form class="planner-controls" id="itineraryForm">
            <label for="itineraryRoute">Choose a regional route<select id="itineraryRoute"><option value="coast">Visakhapatnam & Eastern Ghats</option><option value="rayalaseema">Rayalaseema forts & hills</option><option value="river">Vijayawada & Godavari heritage</option><option value="tirupati">Tirupati temple visit</option></select></label>
            <label for="itineraryDays">How many days?<select id="itineraryDays"></select></label>
            <label for="itineraryInterest">What are you interested in?<select id="itineraryInterest"><option value="balanced">A bit of everything</option><option value="nature">Nature & outdoors</option><option value="heritage">History & culture</option><option value="spiritual">Temples & pilgrimage</option></select></label>
            <label for="itineraryStart">Where will you start?<select id="itineraryStart"><option>Visakhapatnam</option><option>Vijayawada</option><option>Tirupati</option><option>Kurnool</option><option>Rajamahendravaram</option></select></label>
            <button class="button primary planner-submit" type="submit">Build my itinerary <span>→</span></button>
          </form>
          <p class="planner-note">Suggested place order only. Share a link to reopen this plan or print a copy; check local road conditions and travel times before setting out.</p>
            <div class="planner-result" id="itineraryResult" aria-live="polite"></div>
            <section class="trip-kit" id="tripKit" aria-labelledby="tripKitTitle">
              <div class="trip-kit-heading"><div><p class="eyebrow dark">YOUR TRAVEL CHECKLIST</p><h3 id="tripKitTitle">A little prep goes a long way.</h3><p>Keep essentials and personal trip notes together while you plan.</p></div><button class="trip-kit-reset" id="tripKitReset" type="button">Clear my trip kit</button></div>
              <div class="trip-kit-progress"><span id="tripKitProgressText">0 of 9 packed</span><progress id="tripKitProgress" max="9" value="0" aria-label="Trip packing checklist progress"></progress></div>
              <div class="trip-kit-checklist" id="tripKitChecklist">
                <label><input type="checkbox" data-trip-kit-item="id"><span>Government ID and any required permits</span></label>
                <label><input type="checkbox" data-trip-kit-item="bookings"><span>Tickets and stay confirmations (save an offline copy)</span></label>
                <label><input type="checkbox" data-trip-kit-item="contacts"><span>Emergency contacts and a little cash</span></label>
                <label><input type="checkbox" data-trip-kit-item="shoes"><span>Comfortable walking shoes</span></label>
                <label><input type="checkbox" data-trip-kit-item="weather"><span>Weather-ready clothes, sunscreen and a hat</span></label>
                <label><input type="checkbox" data-trip-kit-item="water"><span>Reusable water bottle</span></label>
                <label><input type="checkbox" data-trip-kit-item="medicine"><span>Personal medicines and basic first aid</span></label>
                <label><input type="checkbox" data-trip-kit-item="charger"><span>Phone charger and power bank</span></label>
                <label><input type="checkbox" data-trip-kit-item="rain"><span>Light rain cover or umbrella when the forecast calls for it</span></label>
              </div>
              <label class="trip-kit-notes-label" for="tripKitNotes">My trip notes</label>
              <textarea id="tripKitNotes" rows="4" maxlength="3000" placeholder="Add reminders, places to ask about, or things to book…"></textarea>
              <p class="trip-kit-storage"><span id="tripKitSaveStatus" aria-live="polite">Saved only in this browser on this device.</span> Don’t store passwords or sensitive personal information here.</p>
            <section class="trip-budget" id="tripBudget" aria-labelledby="tripBudgetTitle">
                <div class="trip-budget-heading"><div><p class="eyebrow dark">KEEP SPENDING IN SIGHT</p><h4 id="tripBudgetTitle">Trip budget</h4><p>Enter a rough limit and update costs as you plan.</p></div><button class="trip-kit-reset" id="budgetReset" type="button">Clear budget</button></div>
                <label class="budget-limit-label" for="budgetLimit">Total budget <span>INR (₹)</span><input id="budgetLimit" type="number" min="0" step="500" inputmode="numeric" placeholder="e.g. 25000" /></label>
                <div class="budget-categories">
                  <label>Transport<input data-budget-category="transport" type="number" min="0" step="100" inputmode="numeric" placeholder="₹ 0" /></label>
                  <label>Stay<input data-budget-category="stay" type="number" min="0" step="100" inputmode="numeric" placeholder="₹ 0" /></label>
                  <label>Food<input data-budget-category="food" type="number" min="0" step="100" inputmode="numeric" placeholder="₹ 0" /></label>
                  <label>Activities<input data-budget-category="activities" type="number" min="0" step="100" inputmode="numeric" placeholder="₹ 0" /></label>
                  <label>Other<input data-budget-category="other" type="number" min="0" step="100" inputmode="numeric" placeholder="₹ 0" /></label>
                </div>
                <div class="budget-summary" id="budgetSummary" aria-live="polite">
                  <div><span>Estimated spend</span><strong id="budgetSpent">₹0</strong></div><div><span>Remaining</span><strong id="budgetRemaining">Set a budget</strong></div>
                </div>
                <div class="budget-meter-wrap"><progress id="budgetMeter" max="100" value="0" aria-label="Budget used"></progress><span id="budgetMeterText">Add a budget to see your progress.</span></div>
                <p class="budget-trip-context" id="budgetTripContext" aria-live="polite">Your custom trip currently has 0 stops.</p>
                <p class="budget-note">A personal estimate only—prices vary. This tracker stays in this browser and does not process payments.</p>
              </section>
            </section>
        </div>
        <div class="route-grid"><article class="route route-red"><p>04 DAYS · RIVER & CULTURE</p><h3>The Krishna<br>heritage loop</h3><ol><li>Vijayawada</li><li>Undavalli Caves</li><li>Amaravati</li><li>Konaseema</li></ol><button class="route-open" data-plan="Create a warm, practical four-day Andhra Pradesh itinerary covering Vijayawada, Undavalli Caves, Amaravati, and Konaseema. Include travel logic, highlights, food and stay suggestions.">Ask Atlas to refine this route <span>→</span></button></article><article class="route route-image"><div><p>05 DAYS · HILLS & HERITAGE</p><h3>From coast<br>to cloud forest</h3><button class="route-open" data-plan="Create a five-day Andhra Pradesh itinerary with Visakhapatnam, Araku Valley, Borra Caves, and nearby experiences. Include transport, bike rental tips, stays, and best times of day.">Ask Atlas to plan <span>→</span></button></div></article></div>
      </div>
    </section>

    <section class="stories" id="stories"><div class="container quote-wrap"><p class="eyebrow light">A STATE OF MANY MOODS</p><blockquote>"Come with a plan.<br>Leave with a <i>story.</i>"</blockquote><a class="button secondary" href="#top">Begin your journey <span>↑</span></a></div></section>
  </main>

  <button class="side-tab side-left" type="button" onclick="document.querySelector('#itineraries').scrollIntoView({behavior:'smooth'})">PLAN A TRIP</button>
  <button class="side-tab side-right" id="chatToggle" type="button" aria-expanded="false" aria-controls="chatPanel">ASK ATLAS ✦</button>
  <section class="chat-panel" id="chatPanel" aria-label="Atlas trip planner" aria-hidden="true" inert><div class="chat-head"><div><span class="chat-dot" aria-hidden="true">✦</span><div><strong>Ask Atlas</strong><small>Your Andhra travel companion</small></div></div><button id="chatClose" type="button" aria-label="Close chat">×</button></div><div class="chat-messages" id="chatMessages" aria-live="polite" aria-relevant="additions text"><div class="message bot">Hello! I can help shape your Andhra journey. Ask for a route, a stay area, food stop, or rental tip.</div><div class="quick-prompts"><button type="button" data-prompt="Plan a four-day Andhra Pradesh trip for a first-time visitor.">4-day trip</button><button type="button" data-prompt="Where should I stay in Visakhapatnam?">Stay in Vizag</button><button type="button" data-prompt="How can I rent a bike in Andhra Pradesh safely?">Bike rentals</button></div></div><form class="chat-form" id="chatForm"><input id="chatInput" placeholder="Ask about your trip..." autocomplete="off"/><button type="submit" aria-label="Send question">↑</button></form><p class="chat-note">AI suggestions are for planning—confirm availability before booking.</p></section>
  <dialog class="destination-dialog" id="destinationDialog" aria-labelledby="destinationTitle"><button class="destination-close" id="destinationClose" type="button" aria-label="Close place guide">×</button><div id="destinationDetails"></div></dialog>
  <footer><div class="container footer-inner"><a class="brand" href="#top"><img class="brand-logo" src="assets/andhra-cultural-emblem.png" alt=""/><span>The Andhra<br><em>Atlas Guide</em></span></a><p>Made for unhurried journeys across Andhra Pradesh.</p><span>© 2026</span></div></footer>
`;

const teluguText = {
  "Skip to main content": "ప్రధాన విషయానికి వెళ్లండి",
  "Primary navigation": "ప్రధాన నావిగేషన్",
  "Destinations": "ప్రదేశాలు",
  "Experiences": "అనుభవాలు",
  "Food & festivals": "ఆహారం & పండుగలు",
  "Plan your trip": "మీ ప్రయాణాన్ని ప్లాన్ చేయండి",
  "Travel stories": "ప్రయాణ కథలు",
  "Live weather": "ప్రస్తుత వాతావరణం",
  "Search places and districts": "ప్రదేశాలు, జిల్లాలను వెతకండి",
  "Search a place or district…": "ప్రదేశం లేదా జిల్లాను వెతకండి…",
  "All 28 districts": "మొత్తం 28 జిల్లాలు",
  "Alluri Sitharama Raju": "అల్లూరి సీతారామరాజు",
  "Anakapalli": "అనకాపల్లి",
  "Ananthapuramu": "అనంతపురం",
  "Annamayya": "అన్నమయ్య",
  "Bapatla": "బాపట్ల",
  "Chittoor": "చిత్తూరు",
  "Dr. B.R. Ambedkar Konaseema": "డా. బి.ఆర్. అంబేద్కర్ కోనసీమ",
  "East Godavari": "తూర్పు గోదావరి",
  "Eluru": "ఏలూరు",
  "Guntur": "గుంటూరు",
  "Kakinada": "కాకినాడ",
  "Krishna": "కృష్ణా",
  "Kurnool": "కర్నూలు",
  "Markapuram": "మార్కాపురం",
  "Nandyal": "నంద్యాల",
  "NTR": "ఎన్టీఆర్",
  "Palnadu": "పల్నాడు",
  "Parvathipuram Manyam": "పార్వతీపురం మన్యం",
  "Polavaram": "పోలవరం",
  "Prakasam": "ప్రకాశం",
  "Sri Potti Sriramulu Nellore": "శ్రీ పొట్టి శ్రీరాములు నెల్లూరు",
  "Sri Sathya Sai": "శ్రీ సత్యసాయి",
  "Srikakulam": "శ్రీకాకుళం",
  "Tirupati": "తిరుపతి",
  "Visakhapatnam": "విశాఖపట్నం",
  "Vizianagaram": "విజయనగరం",
  "West Godavari": "పశ్చిమ గోదావరి",
  "YSR Kadapa": "వైఎస్ఆర్ కడప",
  "Araku Valley": "అరకు లోయ",
  "Anantapur": "అనంతపురం",
  "Rayachoti": "రాయచోటి",
  "Amalapuram": "అమలాపురం",
  "Rajamahendravaram": "రాజమహేంద్రవరం",
  "Machilipatnam": "మచిలీపట్నం",
  "Narasaraopet": "నరసరావుపేట",
  "Parvathipuram": "పార్వతీపురం",
  "Rampachodavaram": "రంపచోడవరం",
  "Ongole": "ఒంగోలు",
  "Nellore": "నెల్లూరు",
  "Puttaparthi": "పుట్టపర్తి",
  "Kadapa": "కడప",
  "Browse by district": "జిల్లా వారీగా చూడండి",
  "OR CHOOSE WHAT YOU’RE IN THE MOOD FOR": "లేదా మీ ఆసక్తిని ఎంచుకోండి",
  "My saved places": "నేను దాచిన ప్రదేశాలు",
  "All interests": "అన్ని ఆసక్తులు",
  "Heritage & history": "వారసత్వం & చరిత్ర",
  "Temples": "ఆలయాలు",
  "Beaches": "బీచ్‌లు",
  "Forests & wildlife": "అడవులు & వన్యప్రాణులు",
  "Caves": "గుహలు",
  "Hills & nature": "కొండలు & ప్రకృతి",
  "Rivers & backwaters": "నదులు & బ్యాక్‌వాటర్స్",
  "Buddhist heritage": "బౌద్ధ వారసత్వం",
  "Hill country": "కొండ ప్రాంతాలు",
  "City breaks": "నగర విహారం",
  "Wildlife": "వన్యప్రాణులు",
  "Waterfalls": "జలపాతాలు",
  "Saved places are kept in this browser on this device—no account needed.": "మీరు దాచిన ప్రదేశాలు ఈ పరికరంలోని బ్రౌజర్‌లోనే ఉంటాయి—ఖాతా అవసరం లేదు.",
  "Browse all 28 districts by region": "ప్రాంతాల వారీగా 28 జిల్లాలను చూడండి",
  "Choose a district to filter places": "ప్రదేశాలను వడపోసేందుకు జిల్లాను ఎంచుకోండి",
  "Loading current conditions…": "ప్రస్తుత వాతావరణాన్ని లోడ్ చేస్తున్నాం…",
  "Fetching live conditions": "ప్రస్తుత పరిస్థితులను పొందుతున్నాం",
  "Forecast location": "వాతావరణ ప్రదేశం",
  "↻ Refresh": "↻ మళ్లీ పొందండి",
  "Seven-day forecast": "ఏడు రోజుల వాతావరణ అంచనా",
  "THE WEEK AHEAD": "వచ్చే వారం",
  "RIGHT NOW IN ANDHRA": "ఆంధ్రలో ఇప్పటి వాతావరణం",
  "Make room for ": "స్వాగతించండి: ",
  "Make room for": "స్వాగతించండి:",
  "a little sunshine.": "కొద్దిపాటి ఎండ.",
  "Today's weather": "నేటి వాతావరణం",
  "See today’s weather ": "నేటి వాతావరణాన్ని చూడండి ",
  "Forecasts are model estimates and can change, especially local rain and showers. Check official alerts before travel. Weather data by ": "వాతావరణ అంచనాలు మారవచ్చు, ముఖ్యంగా స్థానిక వర్షాల విషయంలో. ప్రయాణానికి ముందు అధికారిక హెచ్చరికలను చూడండి. వాతావరణ సమాచారం: ",
  "EXPLORE ALL 28 DISTRICTS": "28 జిల్లాలన్నీ అన్వేషించండి",
  "Find the Andhra": "ఆంధ్రను కనుగొనండి",
  "that feels ": "మీకు నచ్చిన ",
  "like you.": "అనుభూతిని.",
  "Start with a district or browse by interest. Every guide opens with a place story, history, practical visitor notes and a Google Maps link.": "జిల్లా లేదా ఆసక్తితో ప్రారంభించండి. ప్రతి గైడ్‌లో ప్రదేశ కథ, చరిత్ర, సందర్శకుల సమాచారం, గూగుల్ మ్యాప్స్ లింక్ ఉంటాయి.",
  "A coastal view near Andhra Pradesh": "ఆంధ్రప్రదేశ్ సమీపంలోని తీర దృశ్యం",
  "Start exploring ": "అన్వేషణ ప్రారంభించండి ",
  "Coast": "తీరం",
  "Hills": "కొండలు",
  "Culture": "సంస్కృతి",
  "Food": "ఆహారం",
  "Road trips": "రోడ్ ట్రిప్పులు",
  "INDIA'S EASTERN COAST, UNFOLDED": "భారత తూర్పు తీరం — కొత్తగా తెలుసుకోండి",
  "Every turn tells": "ప్రతి మలుపూ",
  "an ": "ఒక ",
  " story.": " కథ చెబుతుంది.",
  "From misty coffee slopes to temple bells and sunlit shores, find the Andhra Pradesh that stays with you.": "మంచు కమ్మిన కాఫీ తోటల నుంచి ఆలయ ఘంటలు, ఎండ వెలిగే తీరాల వరకు—మనసులో నిలిచే ఆంధ్రప్రదేశ్‌ను కనుగొనండి.",
  "SCROLL TO EXPLORE": "అన్వేషించడానికి స్క్రోల్ చేయండి",
  "FIND YOUR RHYTHM": "మీ ప్రయాణ లయను కనుగొనండి",
  "Not just places.": "ప్రదేశాలే కాదు.",
  "Ways to feel ": "అనుభూతి చెందే ",
  "alive.": "విధానాలు.",
  "Beach days": "బీచ్ రోజులు",
  "Temple trails": "ఆలయ యాత్రలు",
  "Local flavours": "స్థానిక రుచులు",
  "Wild escapes": "ప్రకృతి విహారాలు",
  "Explore experiences ": "అనుభవాలను చూడండి ",
  "TASTE & TRADITION": "రుచి & సంప్రదాయం",
  "Come for the view.": "దృశ్యాల కోసం రండి.",
  "Stay for the ": "కథల కోసం ",
  "stories.": "ఆగండి.",
  "ON THE TABLE": "భోజనంలో",
  "Flavours to look for": "రుచి చూడదగిన వంటకాలు",
  "Ask locally; menus and availability vary.": "మెనూ, లభ్యత మారవచ్చు—స్థానికంగా అడగండి.",
  "ON THE CALENDAR": "పండుగల క్యాలెండర్",
  "Celebrations worth discovering": "తెలుసుకోవాల్సిన వేడుకలు",
  "MAKE IT YOUR OWN": "మీకు నచ్చినట్లు ప్లాన్ చేయండి",
  "YOUR CUSTOM JOURNEY": "మీ అనుకూల ప్రయాణం",
  "Build your own trip": "మీ ప్రయాణాన్ని మీరే రూపొందించండి",
  "Add places from any destination card or its full guide. Reorder stops and your trip stays saved in this browser.": "ఏ ప్రదేశ కార్డు లేదా పూర్తి గైడ్ నుంచైనా ప్రదేశాలను జోడించండి. క్రమాన్ని మార్చండి; మీ ప్రయాణం ఈ బ్రౌజర్‌లో భద్రపరచబడుతుంది.",
  "Your trip is empty for now. Explore the destination cards and add places you like.": "మీ ప్రయాణ జాబితా ఖాళీగా ఉంది. ప్రదేశాలను చూసి నచ్చిన వాటిని జోడించండి.",
  "Saved only in this browser on this device.": "ఈ పరికరంలోని బ్రౌజర్‌లో మాత్రమే భద్రపరచబడింది.",
  "Clear trip": "ప్రయాణాన్ని ఖాళీ చేయండి",
  "Add to trip": "ప్రయాణానికి జోడించండి",
  "＋ Add to trip": "＋ ప్రయాణానికి జోడించండి",
  "✓ Added": "✓ జోడించబడింది",
  "Map this trip ↗": "ఈ ప్రయాణ మార్గాన్ని మ్యాప్‌లో చూడండి ↗",
  "Open in Maps ↗": "మ్యాప్‌లో తెరవండి ↗",
  "Your custom trip currently has 0 stops.": "మీ అనుకూల ప్రయాణంలో ప్రస్తుతం 0 ప్రదేశాలు ఉన్నాయి.",
  "Add to my trip ": "నా ప్రయాణానికి జోడించండి ",
  "Your first Andhra": "మీ తొలి ఆంధ్ర",
  "adventure starts ": "సాహసం ఇక్కడే ",
  "here.": "ప్రారంభం.",
  "Choose a regional circuit, how long you have, and what you enjoy. We’ll shape a day-by-day starting point you can fine-tune.": "ప్రాంతీయ మార్గం, రోజుల సంఖ్య, మీ ఆసక్తులను ఎంచుకోండి. ప్రతి రోజు కోసం ఒక ప్రాథమిక ప్రయాణ ప్రణాళికను రూపొందిస్తాం.",
  "Choose a regional route": "ప్రాంతీయ మార్గాన్ని ఎంచుకోండి",
  "Visakhapatnam & Eastern Ghats": "విశాఖపట్నం & తూర్పు కనుమలు",
  "Rayalaseema forts & hills": "రాయలసీమ కోటలు & కొండలు",
  "Vijayawada & Godavari heritage": "విజయవాడ & గోదావరి వారసత్వం",
  "Tirupati temple visit": "తిరుపతి ఆలయ సందర్శన",
  "How many days?": "ఎన్ని రోజులు?",
  "What are you interested in?": "మీ ఆసక్తి ఏమిటి?",
  "Where will you start?": "మీరు ఎక్కడి నుంచి ప్రారంభిస్తారు?",
  "A bit of everything": "అన్నింటిలో కొంచెం",
  "Nature & outdoors": "ప్రకృతి & బహిరంగ విహారం",
  "History & culture": "చరిత్ర & సంస్కృతి",
  "Temples & pilgrimage": "ఆలయాలు & తీర్థయాత్ర",
  "1 days": "1 రోజు",
  "2 days": "2 రోజులు",
  "3 days": "3 రోజులు",
  "4 days": "4 రోజులు",
  "5 days": "5 రోజులు",
  "6 days": "6 రోజులు",
  "7 days": "7 రోజులు",
  "Build my itinerary ": "నా ప్రయాణ ప్రణాళిక చేయండి ",
  "Suggested place order only. Share a link to reopen this plan or print a copy; check local road conditions and travel times before setting out.": "ఇది ప్రదేశాల సూచించిన క్రమం మాత్రమే. లింక్‌ను పంచుకోండి లేదా ప్రింట్ చేయండి; బయలుదేరే ముందు రహదారి పరిస్థితులు, ప్రయాణ సమయాలు తనిఖీ చేయండి.",
  "YOUR TRAVEL CHECKLIST": "మీ ప్రయాణ చెక్‌లిస్ట్",
  "A little prep goes a long way.": "కొద్దిపాటి ముందస్తు సిద్ధత ఎంతో ఉపయోగం.",
  "Keep essentials and personal trip notes together while you plan.": "ప్రయాణానికి అవసరమైనవి, మీ గమనికలను ఒకచోట ఉంచండి.",
  "Clear my trip kit": "నా ట్రిప్ కిట్‌ను ఖాళీ చేయండి",
  "My trip notes": "నా ప్రయాణ గమనికలు",
  "Add reminders, places to ask about, or things to book…": "గుర్తింపులు, అడగాల్సిన ప్రదేశాలు లేదా బుకింగ్‌లను రాయండి…",
  "Saved only in this browser on this device.": "ఈ పరికరంలోని బ్రౌజర్‌లో మాత్రమే భద్రపరచబడింది.",
  "Don’t store passwords or sensitive personal information here.": "పాస్‌వర్డ్‌లు లేదా సున్నితమైన వ్యక్తిగత సమాచారాన్ని ఇక్కడ భద్రపరచవద్దు.",
  "KEEP SPENDING IN SIGHT": "ఖర్చులను గమనించండి",
  "Total budget": "మొత్తం బడ్జెట్",
  "Trip budget": "ప్రయాణ బడ్జెట్",
  "Enter a rough limit and update costs as you plan.": "సుమారు పరిమితిని నమోదు చేసి, ప్రణాళికలో ఖర్చులను నవీకరించండి.",
  "Clear budget": "బడ్జెట్‌ను తొలగించండి",
  "Total budget ": "మొత్తం బడ్జెట్ ",
  "Transport": "రవాణా",
  "Stay": "వసతి",
  "Food": "ఆహారం",
  "Activities": "కార్యకలాపాలు",
  "Other": "ఇతర",
  "Estimated spend": "అంచనా ఖర్చు",
  "Remaining": "మిగిలిన మొత్తం",
  "Set a budget": "బడ్జెట్‌ను నమోదు చేయండి",
  "Add a budget to see your progress.": "ఖర్చు స్థితిని చూడటానికి బడ్జెట్ నమోదు చేయండి.",
  "A personal estimate only—prices vary. This tracker stays in this browser and does not process payments.": "ఇది మీ వ్యక్తిగత అంచనా మాత్రమే—ధరలు మారవచ్చు. ఈ వివరాలు ఈ బ్రౌజర్‌లోనే ఉంటాయి; చెల్లింపులు జరగవు.",
  "Made for unhurried journeys across Andhra Pradesh.": "ఆంధ్రప్రదేశ్‌లో నెమ్మదిగా ఆస్వాదించే ప్రయాణాల కోసం.",
  "Ask Atlas": "అట్లాస్‌ను అడగండి",
  "Your Andhra travel companion": "మీ ఆంధ్ర ప్రయాణ సహచరుడు",
  "Hello! I can help shape your Andhra journey. Ask for a route, a stay area, food stop, or rental tip.": "మీ ఆంధ్ర ప్రయాణాన్ని ప్లాన్ చేయడంలో నేను సహాయపడతాను. మార్గం, వసతి ప్రాంతం, ఆహారం లేదా అద్దె వాహనం గురించి అడగండి.",
  "Close chat": "చాట్ మూసివేయండి",
  "PLAN A TRIP": "ప్రయాణం ప్లాన్ చేయండి",
  "ASK ATLAS ✦": "అట్లాస్‌ను అడగండి ✦",
  "Ask about your trip...": "మీ ప్రయాణం గురించి అడగండి...",
  "AI suggestions are for planning—confirm availability before booking.": "AI సూచనలు ప్రణాళిక కోసం మాత్రమే—బుక్ చేసే ముందు లభ్యతను నిర్ధారించండి.",
  "4-day trip": "4 రోజుల ప్రయాణం",
  "Stay in Vizag": "విశాఖలో వసతి",
  "Bike rentals": "బైక్ అద్దె",
  "Open place guide ": "ప్రదేశ గైడ్ తెరవండి ",
  "Google Maps ↗": "గూగుల్ మ్యాప్స్ ↗",
  "No places match that combination yet. Try another district or interest.": "ఈ ఎంపికలకు సరిపడే ప్రదేశాలు లేవు. మరో జిల్లా లేదా ఆసక్తిని ఎంచుకోండి.",
  "Explore a related place ": "సంబంధిత ప్రదేశాన్ని చూడండి ",
  "Open in Google Maps ↗": "గూగుల్ మ్యాప్స్‌లో తెరవండి ↗",
  "Ask Atlas to refine this route ": "ఈ మార్గాన్ని మెరుగుపరచమని అట్లాస్‌ను అడగండి ",
  "Place guide": "ప్రదేశ గైడ్",
  "Share trip ↗": "ప్రయాణాన్ని పంచుకోండి ↗",
  "Print plan": "ప్రణాళికను ప్రింట్ చేయండి",
  "Ask Atlas to refine ": "మెరుగుపరచమని అట్లాస్‌ను అడగండి ",
  "HISTORY & CONTEXT": "చరిత్ర & నేపథ్యం",
  "What to see": "చూడదగినవి",
  "Getting there": "ఎలా చేరుకోవాలి",
  "Useful to know": "ఉపయోగకరమైన సమాచారం",
  "Get directions in Google Maps ": "గూగుల్ మ్యాప్స్‌లో దారి చూడండి ",
  "Read the official tourism reference ": "అధికారిక పర్యాటక సమాచారాన్ని చదవండి ",
  "Close place guide": "ప్రదేశ గైడ్‌ను మూసివేయండి",
  "Light mode": "లైట్ మోడ్",
  "Dark mode": "డార్క్ మోడ్",
  "Start exploring": "అన్వేషణ ప్రారంభించండి",
  "Find the Andhra": "ఆంధ్రను కనుగొనండి",
  "that feels": "మీకు నచ్చిన",
  "Ways to feel": "అనుభూతి చెందే",
  "Stay for the": "కథల కోసం",
  "adventure starts": "సాహసం",
  "Build my itinerary": "నా ప్రయాణ ప్రణాళిక చేయండి",
  "Explore experiences": "అనుభవాలను చూడండి",
  "Google Maps ↗": "గూగుల్ మ్యాప్స్ ↗",
  "Get directions in Google Maps": "గూగుల్ మ్యాప్స్‌లో దారి చూడండి",
  "Read the official tourism reference": "అధికారిక పర్యాటక సమాచారాన్ని చదవండి",
  "Ask Atlas to refine": "మెరుగుపరచమని అట్లాస్‌ను అడగండి",
  "Open place guide": "ప్రదేశ గైడ్ తెరవండి",
  "Explore a related place": "సంబంధిత ప్రదేశాన్ని చూడండి",
  "Ask Atlas to refine this route": "ఈ మార్గాన్ని మెరుగుపరచమని అట్లాస్‌ను అడగండి",
  "Switch language to Telugu": "తెలుగు భాషకు మార్చండి",
  "Switch language to English": "ఆంగ్ల భాషకు మార్చండి",
};
const tr = (english) =>
  currentLanguage === "te" ? (teluguText[english] || english) : english;

function applyLanguage() {
  const isTelugu = currentLanguage === "te";
  document.documentElement.lang = isTelugu ? "te" : "en";
  const walker = document.createTreeWalker(app, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.__atlasEnglishText === undefined) node.__atlasEnglishText = node.nodeValue;
    const english = node.__atlasEnglishText;
    const trimmed = english.trim();
    if (!trimmed) continue;
    const leading = english.slice(0, english.indexOf(trimmed));
    const trailing = english.slice(english.indexOf(trimmed) + trimmed.length);
    node.nodeValue = `${leading}${isTelugu ? (teluguText[trimmed] || trimmed) : trimmed}${trailing}`;
  }
  const heroTitle = document.querySelector("#heroTitle");
  if (heroTitle) {
    heroTitle.innerHTML = isTelugu
      ? "ప్రతి మలుపూ ఒక<br><i>ఆంధ్ర</i> కథ చెబుతుంది."
      : "Every turn tells<br>an <i>Andhra</i> story.";
  }
  const weatherPlaceSelect = document.querySelector("#weatherPlace");
  Object.values(weatherLocations).forEach((place, index) => {
    const option = weatherPlaceSelect.options[index];
    if (option) option.textContent = isTelugu
      ? `${teluguText[place.district] || place.district} — ${teluguText[place.name] || place.name}`
      : place.label;
  });
  const languageToggle = document.querySelector("#languageToggle");
  languageToggle.textContent = isTelugu ? "English" : "తెలుగు";
  languageToggle.setAttribute("aria-pressed", String(isTelugu));
  languageToggle.setAttribute("aria-label", tr(isTelugu ? "Switch language to English" : "Switch language to Telugu"));
  document.querySelector("#siteSearchInput").placeholder = tr("Search a place or district…");
  document.querySelector("#tripKitNotes").placeholder = tr("Add reminders, places to ask about, or things to book…");
  document.querySelector("#chatInput").placeholder = tr("Ask about your trip...");
  document.querySelector("#themeToggle").setAttribute("aria-label", `${isTelugu ? "థీమ్ మార్చండి" : "Switch to"} ${document.documentElement.dataset.theme === "dark" ? (isTelugu ? "లైట్ మోడ్" : "light mode") : (isTelugu ? "డార్క్ మోడ్" : "dark mode")}`);
  document.querySelector("#chatClose").setAttribute("aria-label", tr("Close chat"));
  document.querySelector("#destinationClose").setAttribute("aria-label", tr("Close place guide"));
  document.querySelector("#siteSearchToggle").setAttribute("aria-label", isTelugu ? "ప్రదేశాలను వెతకండి" : "Search destinations");
  document.querySelector("#siteMenuToggle").setAttribute("aria-label", isTelugu ? "నావిగేషన్ మెనూ తెరవండి" : "Open navigation menu");
  document.querySelector("#chatToggle").setAttribute("aria-label", isTelugu ? "ప్రయాణ సహాయకుడిని తెరవండి" : "Open trip assistant");
  document.querySelector("#chatToggle").setAttribute("aria-expanded", String(document.querySelector("#chatPanel").classList.contains("open")));
  document.querySelector("#chatPanel").setAttribute("aria-label", isTelugu ? "ఆంధ్ర ప్రయాణ ప్లానర్" : "Atlas trip planner");
  document.querySelector("#forecastGrid").setAttribute("aria-label", isTelugu ? "ఏడు రోజుల వాతావరణ అంచనా" : "Seven-day forecast");
}

applyLanguage();

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
const customTripStorageKey = "andhra-atlas-custom-trip";
let customTripSlugs = [];
try {
  const storedCustomTrip = JSON.parse(localStorage.getItem(customTripStorageKey) || "[]");
  if (Array.isArray(storedCustomTrip)) {
    customTripSlugs = [...new Set(storedCustomTrip)].filter((slug) =>
      destinations.some((place) => place.slug === slug),
    );
  }
} catch {
  // The custom planner still works for this visit if storage is blocked.
}

function googleMapsTripDirections(places) {
  const point = (place) => `${place.name}, ${place.district}, Andhra Pradesh, India`;
  const params = new URLSearchParams({ api: "1", travelmode: "driving" });
  if (places.length > 1) {
    params.set("origin", point(places[0]));
    params.set("destination", point(places[places.length - 1]));
    if (places.length > 2) params.set("waypoints", places.slice(1, -1).map(point).join("|"));
  } else if (places.length === 1) {
    params.set("destination", point(places[0]));
  }
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function renderCustomTrip(statusMessage = null) {
  const places = customTripSlugs.map((slug) => destinations.find((place) => place.slug === slug)).filter(Boolean);
  const list = document.querySelector("#customTripStops");
  const empty = document.querySelector("#customTripEmpty");
  const mapButton = document.querySelector("#customTripMap");
  const count = document.querySelector("#customTripCount");
  const clearButton = document.querySelector("#customTripClear");
  const labelCount = currentLanguage === "te"
    ? `${places.length} ప్రదేశాలు`
    : `${places.length} ${places.length === 1 ? "stop" : "stops"}`;

  count.textContent = labelCount;
  empty.hidden = places.length > 0;
  list.hidden = places.length === 0;
  mapButton.hidden = places.length === 0;
  clearButton.disabled = places.length === 0;
  mapButton.href = places.length ? googleMapsTripDirections(places) : "#";
  mapButton.textContent = places.length === 1
    ? (currentLanguage === "te" ? "మ్యాప్‌లో చూడండి ↗" : "Open in Maps ↗")
    : (currentLanguage === "te" ? "ఈ ప్రయాణ మార్గాన్ని మ్యాప్‌లో చూడండి ↗" : "Map this trip ↗");
  list.setAttribute("aria-label", currentLanguage === "te" ? "మీ ప్రయాణ ప్రదేశాలు" : "Your custom trip stops");
  list.innerHTML = places.map((place, index) => {
    const previous = index ? places[index - 1] : null;
    const mapUrl = googleMapsDirections(`${place.name}, ${place.district}`, previous ? `${previous.name}, ${previous.district}` : undefined);
    const displayName = currentLanguage === "te" ? (teluguText[place.name] || place.name) : place.name;
    const displayDistrict = currentLanguage === "te" ? (teluguText[place.district] || place.district) : place.district;
    return `<li class="custom-trip-stop" data-trip-stop="${place.slug}"><span class="custom-trip-index">${String(index + 1).padStart(2, "0")}</span><img src="${place.imageFallback || place.image}" alt="" loading="lazy"/><div class="custom-trip-stop-copy"><strong>${displayName}</strong><span>${displayDistrict}${currentLanguage === "te" ? " జిల్లా" : " District"} · ${place.region}</span></div><div class="custom-trip-stop-tools"><a href="${mapUrl}" target="_blank" rel="noopener noreferrer" aria-label="${currentLanguage === "te" ? `${displayName} కోసం మ్యాప్ దిశలు` : `Map directions to ${place.name}`}">${currentLanguage === "te" ? "మ్యాప్ ↗" : "Map ↗"}</a><button type="button" data-trip-move="up" data-trip-slug="${place.slug}" aria-label="${currentLanguage === "te" ? "పైకి తరలించండి" : "Move up"}" ${index === 0 ? "disabled" : ""}>↑</button><button type="button" data-trip-move="down" data-trip-slug="${place.slug}" aria-label="${currentLanguage === "te" ? "కిందికి తరలించండి" : "Move down"}" ${index === places.length - 1 ? "disabled" : ""}>↓</button><button type="button" data-trip-remove="${place.slug}" aria-label="${currentLanguage === "te" ? `${displayName} తొలగించండి` : `Remove ${place.name}`}">×</button></div></li>`;
  }).join("");

  document.querySelectorAll("[data-add-to-trip]").forEach((button) => {
    const included = customTripSlugs.includes(button.dataset.addToTrip);
    button.setAttribute("aria-pressed", String(included));
    button.textContent = included
      ? (currentLanguage === "te" ? "ప్రయాణంలో ఉంది" : "Added")
      : (currentLanguage === "te" ? "ప్రయాణానికి జోడించండి" : "Add to trip");
    const place = destinations.find((item) => item.slug === button.dataset.addToTrip);
    if (place) button.setAttribute("aria-label", currentLanguage === "te"
      ? `${place.name} ${included ? "మీ ప్రయాణంలో ఉంది" : "ప్రయాణానికి జోడించండి"}`
      : `${included ? "Remove" : "Add"} ${place.name} ${included ? "from" : "to"} your trip`);
  });

  document.querySelector("#budgetTripContext").textContent = currentLanguage === "te"
    ? `మీ అనుకూల ప్రయాణంలో ప్రస్తుతం ${places.length} ప్రదేశాలు ఉన్నాయి.`
    : `Your custom trip currently has ${places.length} ${places.length === 1 ? "stop" : "stops"}.`;
  if (statusMessage) document.querySelector("#customTripStatus").textContent = statusMessage;
}

function saveCustomTrip(statusMessage) {
  try {
    localStorage.setItem(customTripStorageKey, JSON.stringify(customTripSlugs));
    renderCustomTrip(statusMessage || (currentLanguage === "te" ? "ఈ పరికరంలో ప్రయాణం భద్రపరచబడింది." : "Trip saved in this browser."));
  } catch {
    renderCustomTrip(currentLanguage === "te"
      ? "ఈ సందర్శనలో ప్రయాణం అందుబాటులో ఉంటుంది; బ్రౌజర్‌లో భద్రపరచడం సాధ్యం కాలేదు."
      : "Your trip is available for this visit, but browser storage could not save it.");
  }
}

function toggleCustomTripPlace(slug) {
  const place = destinations.find((item) => item.slug === slug);
  if (!place) return;
  const existingIndex = customTripSlugs.indexOf(slug);
  if (existingIndex >= 0) {
    customTripSlugs.splice(existingIndex, 1);
    saveCustomTrip(currentLanguage === "te" ? `${place.name} ప్రయాణం నుంచి తొలగించబడింది.` : `${place.name} removed from your trip.`);
  } else {
    customTripSlugs.push(slug);
    saveCustomTrip(currentLanguage === "te" ? `${place.name} మీ ప్రయాణానికి జోడించబడింది.` : `${place.name} added to your trip.`);
  }
}

renderCustomTrip(customTripSlugs.length
  ? (currentLanguage === "te" ? "మీ మునుపటి ప్రయాణం ఈ బ్రౌజర్ నుంచి తిరిగి తెరవబడింది." : "Your saved trip was restored from this browser.")
  : null);
document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-to-trip]");
  if (addButton) {
    event.preventDefault();
    toggleCustomTripPlace(addButton.dataset.addToTrip);
    return;
  }
  const removeButton = event.target.closest("[data-trip-remove]");
  if (removeButton) {
    event.preventDefault();
    toggleCustomTripPlace(removeButton.dataset.tripRemove);
    return;
  }
  const moveButton = event.target.closest("[data-trip-move]");
  if (moveButton) {
    const from = customTripSlugs.indexOf(moveButton.dataset.tripSlug);
    const to = from + (moveButton.dataset.tripMove === "up" ? -1 : 1);
    if (from < 0 || to < 0 || to >= customTripSlugs.length) return;
    [customTripSlugs[from], customTripSlugs[to]] = [customTripSlugs[to], customTripSlugs[from]];
    saveCustomTrip(currentLanguage === "te" ? "మీ ప్రయాణ క్రమం నవీకరించబడింది." : "Trip order updated and saved.");
  }
});
document.querySelector("#customTripClear").addEventListener("click", () => {
  if (!customTripSlugs.length) return;
  if (!window.confirm(currentLanguage === "te" ? "మీరు జోడించిన అన్ని ప్రదేశాలను తొలగించాలా?" : "Remove all places from your custom trip?")) return;
  customTripSlugs = [];
  try { localStorage.removeItem(customTripStorageKey); } catch { /* The visible trip still clears. */ }
  renderCustomTrip(currentLanguage === "te" ? "మీ ప్రయాణం ఖాళీ చేయబడింది." : "Your custom trip has been cleared.");
});
function addDestinationImageFallbacks() {
  document.querySelectorAll(".place-card").forEach((card) => {
    const place = destinations.find((item) => item.slug === card.dataset.destination);
    if (!place) return;

    const imageCheck = new Image();
    imageCheck.onerror = () => {
      if (!place.imageFallback) return;
      card.style.setProperty(
        "--bg",
        `url("${place.imageFallback}")`,
      );
    };
    imageCheck.src = place.image;
  });
}
addDestinationImageFallbacks();
document.querySelectorAll(".place-card").forEach((card) =>
  card.addEventListener("click", (event) => {
    if (event.target.closest("a, .place-save, [data-add-to-trip]")) return;
    const place = destinations.find(
      (item) => item.slug === card.dataset.destination,
    );
    if (!place) return;
    const districtPairings = destinations
      .filter((item) => item.slug !== place.slug && item.district === place.district)
      .slice(0, 3);
    const pairings = districtPairings.length ? districtPairings : destinations
      .filter((item) => item.slug !== place.slug && item.region === place.region)
      .slice(0, 3);
    const pairingDescription = districtPairings.length
      ? "More featured place guides in this district."
      : "These places share the same broad travel region; check road distances before combining stops.";
    const additionalDistrictPicks = districtExtraAttractions[place.district] || [];
    destinationDetails.innerHTML = `
    <article class="destination-detail">
      <div class="destination-detail-hero" style="--detail-image:url('${place.image}');--detail-fallback-image:url('${place.imageFallback || place.image}')">
        <span class="destination-detail-region">${place.district} District · ${place.region} · ${place.tag}</span>
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
        ${additionalDistrictPicks.length ? `<section class="destination-local-picks"><div><h3>More places in ${place.district}</h3><p>These are extra district suggestions; check distances, access and opening details before combining stops.</p></div><div class="destination-local-picks-grid">${additionalDistrictPicks.map((attraction) => `<article><h4>${attraction.name}</h4><p>${attraction.note}</p><a href="${googleMapsDirections(`${attraction.name}, ${place.district}`)}" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a></article>`).join("")}</div></section>` : ""}
        ${pairings.length ? `<section class="destination-pairings"><div><h3>${districtPairings.length ? `Explore ${place.district} District` : "Explore the wider region"}</h3><p>${pairingDescription}</p></div><div class="destination-pairing-list">${pairings.map((item) => `<button type="button" data-open-guide="${item.slug}">${item.name}<span>${item.district} District</span></button>`).join("")}</div></section>` : ""}
        <aside class="destination-tip"><strong>Useful to know</strong><p>${place.visitorTip}</p></aside>
        <button class="destination-add-to-trip" type="button" data-add-to-trip="${place.slug}" aria-pressed="false">＋ Add to my trip</button>
        <a class="destination-map-link" href="${googleMapsDirections(`${place.name}, ${place.district}`)}" target="_blank" rel="noopener noreferrer" aria-label="Get directions to ${place.name} in Google Maps">Get directions in Google Maps <span aria-hidden="true">↗</span></a>
        <a class="destination-source" href="${place.sourceUrl}" target="_blank" rel="noopener noreferrer">Read the official tourism reference <span aria-hidden="true">↗</span><small>${place.sourceLabel}</small></a>
        ${place.imageCredit ? `<p class="destination-photo-credit">Photo: <a href="${place.imageCreditUrl}" target="_blank" rel="noopener noreferrer">${place.imageCredit}</a></p>` : ""}
      </div>
    </article>`;
    applyLanguage();
    renderCustomTrip();
    destinationDialog.showModal();
  }),
);
document
  .querySelector("#destinationClose")
  .addEventListener("click", () => destinationDialog.close());
destinationDialog.addEventListener("click", (event) => {
  if (event.target === destinationDialog) destinationDialog.close();
});
const districtFilter = document.querySelector("#destinationDistrict");
const destinationCount = document.querySelector("#destinationCount");
const destinationEmptyState = document.querySelector("#destinationEmptyState");
const interestFilters = [...document.querySelectorAll(".destination-filter[data-category]")];
const savedPlacesToggle = document.querySelector("#savedPlacesToggle");
const savedPlacesCount = document.querySelector("#savedPlacesCount");
const districtPicksPanel = document.querySelector("#districtPicks");
let activeDestinationCategory = "all";

function renderDistrictPicks(district) {
  if (district === "all") {
    districtPicksPanel.hidden = true;
    districtPicksPanel.innerHTML = "";
    return;
  }
  const attractions = districtExtraAttractions[district] || [];
  if (!attractions.length) {
    districtPicksPanel.hidden = true;
    districtPicksPanel.innerHTML = "";
    return;
  }
  districtPicksPanel.innerHTML = `<div class="district-picks-heading"><div><p class="eyebrow dark">DISTRICT GUIDE</p><h3>More to explore in ${district}</h3><p>Quick picks beyond the featured place guides. Check local access, opening hours and conditions before you go.</p></div><span>${attractions.length} extra stops</span></div><div class="district-picks-grid">${attractions.map((attraction) => `<article class="district-pick"><div><span class="district-pick-icon" aria-hidden="true">✦</span><h4>${attraction.name}</h4><p>${attraction.note}</p></div><a href="${googleMapsDirections(`${attraction.name}, ${district}`)}" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a></article>`).join("")}</div>`;
  districtPicksPanel.hidden = false;
  applyLanguage();
}

const tripKitStorageKey = "andhra-atlas-trip-kit";
const tripKitChecklist = document.querySelector("#tripKitChecklist");
const tripKitNotes = document.querySelector("#tripKitNotes");
const tripKitProgress = document.querySelector("#tripKitProgress");
const tripKitProgressText = document.querySelector("#tripKitProgressText");
const tripKitSaveStatus = document.querySelector("#tripKitSaveStatus");
const tripKitItems = [...tripKitChecklist.querySelectorAll("[data-trip-kit-item]")];
let tripKitState = { checked: {}, notes: "" };
try {
  const storedTripKit = JSON.parse(localStorage.getItem(tripKitStorageKey) || "null");
  if (storedTripKit && typeof storedTripKit === "object") {
    tripKitState = {
      checked: storedTripKit.checked && typeof storedTripKit.checked === "object" ? storedTripKit.checked : {},
      notes: typeof storedTripKit.notes === "string" ? storedTripKit.notes.slice(0, 3000) : "",
    };
  }
} catch {
  // Keep the checklist usable if browser storage is blocked or unavailable.
}

function renderTripKit() {
  tripKitItems.forEach((input) => {
    input.checked = tripKitState.checked[input.dataset.tripKitItem] === true;
  });
  tripKitNotes.value = tripKitState.notes;
  const packed = tripKitItems.filter((input) => input.checked).length;
  tripKitProgress.value = packed;
  tripKitProgressText.textContent = currentLanguage === "te"
    ? `${tripKitItems.length}లో ${packed} సిద్ధం`
    : `${packed} of ${tripKitItems.length} packed`;
}

function saveTripKit(announceSave = true) {
  tripKitState.checked = Object.fromEntries(
    tripKitItems.map((input) => [input.dataset.tripKitItem, input.checked]),
  );
  tripKitState.notes = tripKitNotes.value.slice(0, 3000);
  try {
    localStorage.setItem(tripKitStorageKey, JSON.stringify(tripKitState));
    if (announceSave) tripKitSaveStatus.textContent = currentLanguage === "te"
      ? "ఈ పరికరంలోని బ్రౌజర్‌లో భద్రపరచబడింది."
      : "Saved in this browser on this device.";
  } catch {
    if (announceSave) tripKitSaveStatus.textContent = currentLanguage === "te"
      ? "బ్రౌజర్‌లో భద్రపరచడం సాధ్యం కాలేదు; గమనికలను వేరుగా దాచుకోండి."
      : "Browser storage is unavailable; keep a separate copy of these notes.";
  }
  const packed = tripKitItems.filter((input) => input.checked).length;
  tripKitProgress.value = packed;
  tripKitProgressText.textContent = currentLanguage === "te"
    ? `${tripKitItems.length}లో ${packed} సిద్ధం`
    : `${packed} of ${tripKitItems.length} packed`;
}

tripKitItems.forEach((input) => input.addEventListener("change", saveTripKit));
tripKitNotes.addEventListener("input", () => saveTripKit(false));
document.querySelector("#tripKitReset").addEventListener("click", () => {
  if (!window.confirm(currentLanguage === "te"
    ? "ఈ బ్రౌజర్‌లోని ట్రిప్ కిట్ చెక్‌లిస్ట్, గమనికలను తొలగించాలా?"
    : "Clear your Trip Kit checklist and notes from this browser?")) return;
  tripKitState = { checked: {}, notes: "" };
  renderTripKit();
  try {
    localStorage.removeItem(tripKitStorageKey);
    tripKitSaveStatus.textContent = currentLanguage === "te"
      ? "ఈ బ్రౌజర్‌లోని ట్రిప్ కిట్ తొలగించబడింది."
      : "Trip kit cleared from this browser.";
  } catch {
    tripKitSaveStatus.textContent = currentLanguage === "te"
      ? "ఈ సందర్శన కోసం చెక్‌లిస్ట్ రీసెట్ అయింది; బ్రౌజర్ నిల్వను తొలగించలేకపోయాం."
      : "The checklist was reset for this visit, but browser storage could not be cleared.";
  }
});
renderTripKit();

const budgetStorageKey = "andhra-atlas-trip-budget";
const budgetInput = document.querySelector("#budgetLimit");
const budgetCategoryInputs = [...document.querySelectorAll("[data-budget-category]")];
let budgetState = { limit: "", categories: {} };
try {
  const storedBudget = JSON.parse(localStorage.getItem(budgetStorageKey) || "null");
  if (storedBudget && typeof storedBudget === "object") {
    budgetState = {
      limit: Number.isFinite(Number(storedBudget.limit)) && Number(storedBudget.limit) > 0 ? String(storedBudget.limit) : "",
      categories: storedBudget.categories && typeof storedBudget.categories === "object" ? storedBudget.categories : {},
    };
  }
} catch {
  // Keep the tracker usable for this visit if browser storage is unavailable.
}

function formatRupees(amount) {
  return new Intl.NumberFormat(currentLanguage === "te" ? "te-IN" : "en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function renderBudget() {
  budgetInput.value = budgetState.limit;
  budgetCategoryInputs.forEach((input) => {
    input.value = budgetState.categories[input.dataset.budgetCategory] ?? "";
  });
  const limit = Number(budgetState.limit) || 0;
  const spent = budgetCategoryInputs.reduce((sum, input) => sum + (Number(budgetState.categories[input.dataset.budgetCategory]) || 0), 0);
  const remaining = limit - spent;
  const ratio = limit > 0 ? Math.min(100, Math.round((spent / limit) * 100)) : 0;
  document.querySelector("#budgetSpent").textContent = formatRupees(spent);
  document.querySelector("#budgetRemaining").textContent = !limit
    ? tr("Set a budget")
    : remaining >= 0
      ? formatRupees(remaining)
      : `${currentLanguage === "te" ? "బడ్జెట్ మించిపోయింది" : "Over budget by"} ${formatRupees(Math.abs(remaining))}`;
  const meter = document.querySelector("#budgetMeter");
  meter.value = ratio;
  meter.setAttribute("aria-label", currentLanguage === "te" ? "వినియోగించిన బడ్జెట్" : "Budget used");
  document.querySelector("#budgetMeterText").textContent = !limit
    ? tr("Add a budget to see your progress.")
    : currentLanguage === "te"
      ? `బడ్జెట్‌లో ${ratio}% ఖర్చు · ${formatRupees(spent)} / ${formatRupees(limit)}`
      : `${ratio}% of budget used · ${formatRupees(spent)} / ${formatRupees(limit)}`;
}

function saveBudget() {
  budgetState.limit = budgetInput.value && Number(budgetInput.value) > 0 ? String(Number(budgetInput.value)) : "";
  budgetState.categories = Object.fromEntries(budgetCategoryInputs.map((input) => [
    input.dataset.budgetCategory,
    input.value && Number(input.value) >= 0 ? String(Number(input.value)) : "",
  ]));
  try {
    localStorage.setItem(budgetStorageKey, JSON.stringify(budgetState));
  } catch {
    // In-memory calculations still work if storage is blocked.
  }
  renderBudget();
}

budgetInput.addEventListener("input", saveBudget);
budgetCategoryInputs.forEach((input) => input.addEventListener("input", saveBudget));
document.querySelector("#budgetReset").addEventListener("click", () => {
  if (!window.confirm(currentLanguage === "te" ? "ఈ పరికరంలో భద్రపరిచిన బడ్జెట్‌ను తొలగించాలా?" : "Clear the trip budget saved in this browser?")) return;
  budgetState = { limit: "", categories: {} };
  try { localStorage.removeItem(budgetStorageKey); } catch { /* Current view is still reset. */ }
  renderBudget();
});
renderBudget();

document.querySelector("#languageToggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "te" : "en";
  try { localStorage.setItem(languageStorageKey, currentLanguage); } catch { /* Language still changes for this visit. */ }
  applyLanguage();
  updateThemeButton(document.documentElement.dataset.theme);
  renderTripKit();
  renderCustomTrip(customTripSlugs.length
    ? (currentLanguage === "te" ? "మీ ప్రయాణం ఈ బ్రౌజర్‌లో భద్రపరచబడింది." : "Your trip is saved in this browser.")
    : (currentLanguage === "te" ? "ప్రదేశాలను జోడించండి; మీ జాబితా ఈ పరికరంలో భద్రపరచబడుతుంది." : "Add places and your list will be saved on this device."));
  renderBudget();
  if (itineraryBuilt) renderItinerary();
  if (!document.querySelector("#siteSearchPanel").hidden) renderSiteSearchResults(document.querySelector("#siteSearchInput").value);
  loadWeather();
});

function persistSavedPlaces() {
  try {
    localStorage.setItem(savedPlacesStorageKey, JSON.stringify([...savedPlaceSlugs]));
  } catch {
    // The shortlist still works for this page view when browser storage is unavailable.
  }
}

function updateSavedPlaceButtons() {
  document.querySelectorAll("[data-save-place]").forEach((button) => {
    const isSaved = savedPlaceSlugs.has(button.dataset.savePlace);
    const place = destinations.find((item) => item.slug === button.dataset.savePlace);
    button.textContent = isSaved ? "♥" : "♡";
    button.setAttribute("aria-pressed", String(isSaved));
    if (place) {
      button.setAttribute(
        "aria-label",
        `${isSaved ? "Remove" : "Save"} ${place.name} ${isSaved ? "from" : "to"} My saved places`,
      );
    }
  });
  savedPlacesCount.textContent = String(savedPlaceSlugs.size);
}

function applyDestinationFilters() {
  const selectedDistrict = districtFilter.value;
  renderDistrictPicks(selectedDistrict);
  const visiblePlaces = destinations.filter((place) => {
    const matchesDistrict = selectedDistrict === "all" || place.district === selectedDistrict;
    const matchesCategory = activeDestinationCategory === "all" || place.categories.includes(activeDestinationCategory);
    const matchesSaved = !savedPlacesOnly || savedPlaceSlugs.has(place.slug);
    return matchesDistrict && matchesCategory && matchesSaved;
  });
  document.querySelectorAll(".place-card").forEach((card) => {
    const matchesDistrict = selectedDistrict === "all" || card.dataset.district === selectedDistrict;
    const categories = card.dataset.categories.split(" ");
    const matchesCategory = activeDestinationCategory === "all" || categories.includes(activeDestinationCategory);
    const matchesSaved = !savedPlacesOnly || savedPlaceSlugs.has(card.dataset.destination);
    card.hidden = !(matchesDistrict && matchesCategory && matchesSaved);
  });
  const coveredDistricts = new Set(visiblePlaces.map((place) => place.district)).size;
  const interestLabel = destinationCategories.find((item) => item.id === activeDestinationCategory)?.label;
  const savedLabel = savedPlacesOnly ? " · My saved places" : "";
  destinationCount.textContent = selectedDistrict === "all"
    ? `${visiblePlaces.length} place guides across ${coveredDistricts} districts${interestLabel ? ` · ${interestLabel}` : ""}${savedLabel}`
    : `${visiblePlaces.length} place guide${visiblePlaces.length === 1 ? "" : "s"} in ${selectedDistrict}${interestLabel ? ` · ${interestLabel}` : ""}${savedLabel}`;
  destinationEmptyState.hidden = visiblePlaces.length > 0;
  destinationEmptyState.textContent = savedPlacesOnly && savedPlaceSlugs.size === 0
    ? "Your saved list is empty. Tap the heart on any place you want to remember."
    : savedPlacesOnly
      ? "No saved places match these filters. Try another district or interest."
      : "No places match that combination yet. Try another district or interest.";
}

districtFilter.addEventListener("change", applyDestinationFilters);
savedPlacesToggle.addEventListener("click", () => {
  savedPlacesOnly = !savedPlacesOnly;
  savedPlacesToggle.setAttribute("aria-pressed", String(savedPlacesOnly));
  applyDestinationFilters();
});
document.querySelector("#destinationGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-save-place]");
  if (!button) return;
  const slug = button.dataset.savePlace;
  if (savedPlaceSlugs.has(slug)) savedPlaceSlugs.delete(slug);
  else savedPlaceSlugs.add(slug);
  persistSavedPlaces();
  updateSavedPlaceButtons();
  applyDestinationFilters();
});
interestFilters.forEach((filter) => filter.addEventListener("click", () => {
  activeDestinationCategory = filter.dataset.category;
  interestFilters.forEach((button) => button.setAttribute("aria-pressed", String(button === filter)));
  applyDestinationFilters();
}));
document.querySelectorAll("[data-district-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    districtFilter.value = button.dataset.districtChoice;
    activeDestinationCategory = "all";
    savedPlacesOnly = false;
    savedPlacesToggle.setAttribute("aria-pressed", "false");
    interestFilters.forEach((filter) => filter.setAttribute("aria-pressed", String(filter.dataset.category === "all")));
    applyDestinationFilters();
    button.closest("details")?.removeAttribute("open");
    document.querySelector("#districtPicks").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
updateSavedPlaceButtons();
applyDestinationFilters();

function openDestinationGuide(slug) {
  const card = document.querySelector(`.place-card[data-destination="${slug}"]`);
  if (!card) return;
  districtFilter.value = "all";
  activeDestinationCategory = "all";
  savedPlacesOnly = false;
  savedPlacesToggle.setAttribute("aria-pressed", "false");
  interestFilters.forEach((filter) => filter.setAttribute("aria-pressed", String(filter.dataset.category === "all")));
  applyDestinationFilters();
  card.click();
}

document.querySelector("#culture").addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-guide]");
  if (button) openDestinationGuide(button.dataset.openGuide);
});
destinationDialog.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-guide]");
  if (!button) return;
  const slug = button.dataset.openGuide;
  destinationDialog.close();
  openDestinationGuide(slug);
});

const siteSearchToggle = document.querySelector("#siteSearchToggle");
const siteSearchPanel = document.querySelector("#siteSearchPanel");
const siteSearchInput = document.querySelector("#siteSearchInput");
const siteSearchResults = document.querySelector("#siteSearchResults");
const siteMenuToggle = document.querySelector("#siteMenuToggle");
const siteMenu = document.querySelector("#siteMenu");

function closeSiteSearch(returnFocus = false) {
  siteSearchPanel.hidden = true;
  siteSearchToggle.setAttribute("aria-expanded", "false");
  if (returnFocus) siteSearchToggle.focus();
}

function closeSiteMenu(returnFocus = false) {
  siteMenu.hidden = true;
  siteMenuToggle.setAttribute("aria-expanded", "false");
  if (returnFocus) siteMenuToggle.focus();
}

function renderSiteSearchResults(query = "") {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matches = normalizedQuery
    ? destinations.filter((place) =>
        [place.name, place.district, place.type, place.tag, place.intro]
          .join(" ")
          .toLocaleLowerCase()
          .includes(normalizedQuery),
      )
    : destinations.slice(0, 6);

  if (!matches.length) {
    siteSearchResults.innerHTML =
      '<p class="site-search-empty">No matching places yet. Try another name or district.</p>';
    applyLanguage();
    return;
  }

  siteSearchResults.innerHTML = matches
    .slice(0, 8)
    .map(
      (place) => `<button class="site-search-result" type="button" data-search-place="${place.slug}"><span><strong>${place.name}</strong><small>${place.district} District · ${place.type}</small></span><span aria-hidden="true">↗</span></button>`,
    )
    .join("");
  applyLanguage();
}

siteSearchToggle.addEventListener("click", () => {
  const shouldOpen = siteSearchPanel.hidden;
  closeSiteMenu();
  if (!shouldOpen) {
    closeSiteSearch();
    return;
  }
  siteSearchPanel.hidden = false;
  siteSearchToggle.setAttribute("aria-expanded", "true");
  renderSiteSearchResults(siteSearchInput.value);
  siteSearchInput.focus();
});
siteSearchInput.addEventListener("input", () =>
  renderSiteSearchResults(siteSearchInput.value),
);
siteSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    siteSearchResults.querySelector(".site-search-result")?.click();
  }
});
siteSearchResults.addEventListener("click", (event) => {
  const result = event.target.closest("[data-search-place]");
  if (!result) return;
  const place = destinations.find((item) => item.slug === result.dataset.searchPlace);
  if (!place) return;

  closeSiteSearch();
  openDestinationGuide(place.slug);
});

siteMenuToggle.addEventListener("click", () => {
  const shouldOpen = siteMenu.hidden;
  closeSiteSearch();
  siteMenu.hidden = !shouldOpen;
  siteMenuToggle.setAttribute("aria-expanded", String(shouldOpen));
});
siteMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeSiteMenu();
});
document.addEventListener("pointerdown", (event) => {
  if (!siteSearchPanel.contains(event.target) && !siteSearchToggle.contains(event.target))
    closeSiteSearch();
  if (!siteMenu.contains(event.target) && !siteMenuToggle.contains(event.target))
    closeSiteMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!siteSearchPanel.hidden) closeSiteSearch(true);
  if (!siteMenu.hidden) closeSiteMenu(true);
});

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
const itineraryStorageKey = "andhra-atlas-saved-itinerary";
const itineraryInterests = ["balanced", "nature", "heritage", "spiritual"];
const itineraryStartingCities = [...itineraryStart.options].map((option) => option.value);
let savedItineraryPlan = null;
function isValidItineraryPlan(plan) {
  return Boolean(
    plan &&
    Object.prototype.hasOwnProperty.call(itineraryProfiles, plan.route) &&
    itineraryProfiles[plan.route].days.includes(Number(plan.days)) &&
    itineraryInterests.includes(plan.interest) &&
    itineraryStartingCities.includes(plan.start),
  );
}
function getCurrentItineraryPlan() {
  return {
    route: itineraryRoute.value,
    days: Number(itineraryDays.value),
    interest: itineraryInterest.value,
    start: itineraryStart.value,
  };
}
try {
  const storedItinerary = JSON.parse(localStorage.getItem(itineraryStorageKey) || "null");
  if (isValidItineraryPlan(storedItinerary)) {
    savedItineraryPlan = { ...storedItinerary, days: Number(storedItinerary.days) };
  }
} catch {
  // Planning remains available for this visit when browser storage is blocked.
}
let itineraryBuilt = false;

function updateItineraryOptions() {
  const profile = itineraryProfiles[itineraryRoute.value];
  itineraryDays.innerHTML = profile.days.map((days) => `<option value="${days}" ${days === profile.defaultDays ? "selected" : ""}>${days} days</option>`).join("");
  itineraryStart.value = profile.start;
}

function createItineraryShareUrl() {
  const url = new URL(window.location.href);
  url.searchParams.set("tripRoute", itineraryRoute.value);
  url.searchParams.set("tripDays", itineraryDays.value);
  url.searchParams.set("tripInterest", itineraryInterest.value);
  url.searchParams.set("tripStart", itineraryStart.value);
  url.hash = "itineraries";
  return url;
}

async function shareItinerary() {
  const url = createItineraryShareUrl();
  const shareData = {
    title: "My Andhra Atlas itinerary",
    text: `My ${itineraryDays.value}-day Andhra Pradesh travel plan`,
    url: url.href,
  };
  const status = document.querySelector("#itineraryActionStatus");

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(url.href);
    status.textContent = "Trip link copied. It will reopen this route on the site.";
  } catch {
    window.prompt("Copy this itinerary link to share your trip:", url.href);
  }
}

function printItinerary() {
  const cleanup = () => document.body.classList.remove("printing-itinerary");
  document.body.classList.add("printing-itinerary");
  window.addEventListener("afterprint", cleanup, { once: true });
  window.setTimeout(cleanup, 3000);
  window.print();
}

function saveItinerary() {
  const status = document.querySelector("#itineraryActionStatus");
  const saveButton = document.querySelector("#saveItineraryButton");
  const plan = getCurrentItineraryPlan();
  try {
    localStorage.setItem(itineraryStorageKey, JSON.stringify(plan));
    savedItineraryPlan = plan;
    saveButton.textContent = currentLanguage === "te" ? "భద్రపరచబడింది ✓" : "Saved ✓";
    saveButton.setAttribute("aria-pressed", "true");
    status.textContent = currentLanguage === "te"
      ? "ఈ ప్రయాణ ప్రణాళిక ఈ బ్రౌజర్‌లో భద్రపరచబడింది."
      : "Your plan is saved in this browser on this device.";
  } catch {
    status.textContent = currentLanguage === "te"
      ? "ఈ పేజీ తెరిచి ఉన్నంత వరకు ప్రణాళిక అందుబాటులో ఉంటుంది; బ్రౌజర్‌లో భద్రపరచలేకపోయాం."
      : "Your plan is available while this page is open, but browser storage could not save it.";
  }
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
  const labels = currentLanguage === "te"
    ? { balanced: "అన్నింటిలో కొంచెం", nature: "ప్రకృతి, బహిరంగ ప్రదేశాలు", heritage: "చరిత్ర, సంస్కృతి", spiritual: "ఆలయాలు, తీర్థయాత్ర" }
    : { balanced: "a balanced mix", nature: "nature and outdoor stops", heritage: "history and culture", spiritual: "temples and pilgrimage" };
  const englishLabels = { balanced: "a balanced mix", nature: "nature and outdoor stops", heritage: "history and culture", spiritual: "temples and pilgrimage" };
  const start = itineraryStart.value;
  const currentPlan = getCurrentItineraryPlan();
  const planIsSaved = savedItineraryPlan &&
    savedItineraryPlan.route === currentPlan.route &&
    savedItineraryPlan.days === currentPlan.days &&
    savedItineraryPlan.interest === currentPlan.interest &&
    savedItineraryPlan.start === currentPlan.start;
  const dayCards = places.map((place, index) => {
    const previous = index === 0 ? start : places[index - 1].name;
    const highlights = place.highlights.slice(0, 3).map((highlight) => `<li>${highlight}</li>`).join("");
    const dayLabel = currentLanguage === "te" ? `రోజు ${index + 1}` : `DAY ${String(index + 1).padStart(2, "0")}`;
    return `<article class="planner-day"><div class="planner-day-index">${dayLabel}</div><img class="planner-day-photo" src="${place.imageFallback || place.image}" alt="" loading="lazy"/><div class="planner-day-copy"><p class="planner-day-region">${place.region} · ${place.timeNeeded}</p><h3>${place.name}</h3><p>${place.intro}</p><p class="planner-day-list-label">${currentLanguage === "te" ? "సూచించిన అనుభవాలు" : "A few good things to do"}</p><ul class="planner-day-highlights">${highlights}</ul><p class="planner-day-tip"><strong>${currentLanguage === "te" ? "ముందుగా తెలుసుకోండి" : "Good to know"}</strong> ${place.visitorTip}</p></div><div class="planner-day-actions"><span class="planner-leg">${previous} → ${place.name}</span><button type="button" data-open-guide="${place.slug}">${currentLanguage === "te" ? "ప్రదేశ గైడ్" : "Place guide"}</button><a class="planner-map-link" href="${googleMapsDirections(place.name, previous)}" target="_blank" rel="noopener noreferrer" aria-label="Open directions from ${previous} to ${place.name} in Google Maps">Google Maps ↗</a></div></article>`;
  }).join("");
  const flexibleDays = selectedDays - places.length;
  const flexibleNote = flexibleDays > 0 ? `<p class="planner-buffer"><strong>${currentLanguage === "te" ? "నెమ్మదిగా ఆస్వాదించండి:" : "Leave room to breathe:"}</strong> ${profile.buffer} (${flexibleDays} ${currentLanguage === "te" ? "విశ్రాంతి రోజులు చేర్చబడ్డాయి." : `flexible ${flexibleDays === 1 ? "day" : "days"} included.`})</p>` : "";
  const routeLabel = itineraryRoute.options[itineraryRoute.selectedIndex].text;
  const planPrompt = `Make this ${selectedDays}-day ${routeLabel} plan practical for a first-time visitor focused on ${englishLabels[preference]}, starting from ${start}: ${places.map((place) => place.name).join(" → ")}. Suggest sensible overnight bases, local food and realistic pacing. Flag travel times or booking details I should verify.`;
  itineraryResult.innerHTML = `<div class="planner-result-heading"><div><p class="eyebrow dark">${currentLanguage === "te" ? `మీ ${selectedDays} రోజుల మార్గం` : `YOUR ${selectedDays}-DAY ROUTE`}</p><h3>${routeLabel}</h3><p>${currentLanguage === "te" ? `${start} నుంచి ప్రారంభం · ఆసక్తి: ${labels[preference]}` : `Starting in ${start} · Focus: ${labels[preference]}`}</p></div><div class="planner-result-tools"><button class="planner-action" id="saveItineraryButton" type="button" aria-pressed="${Boolean(planIsSaved)}">${planIsSaved ? (currentLanguage === "te" ? "భద్రపరచబడింది ✓" : "Saved ✓") : (currentLanguage === "te" ? "ప్రణాళిక భద్రపరచండి" : "Save plan")}</button><button class="planner-action" id="shareItineraryButton" type="button">Share trip ↗</button><button class="planner-action" id="printItineraryButton" type="button">Print plan</button><button class="route-open planner-ask" type="button">Ask Atlas to refine <span>→</span></button></div></div><p class="planner-action-status" id="itineraryActionStatus" aria-live="polite"></p><div class="planner-days">${dayCards}</div>${flexibleNote}<p class="planner-disclaimer">${currentLanguage === "te" ? "ఇది ప్రదేశాల వారీగా ఒక ప్రాథమిక ప్రణాళిక మాత్రమే. ఆలయ సమయాలు, ప్రవేశం, రవాణా, వాతావరణం మారవచ్చు—ప్రయాణానికి ముందు నిర్ధారించండి." : "This is a place-by-place outline, not a confirmed schedule. Temple timings, access, transport and weather can change; confirm before you travel."}</p>`;
  itineraryResult.hidden = false;
  applyLanguage();
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
  if (guideButton) openDestinationGuide(guideButton.dataset.openGuide);
  if (event.target.closest("#saveItineraryButton")) saveItinerary();
  if (event.target.closest("#shareItineraryButton")) shareItinerary();
  if (event.target.closest("#printItineraryButton")) printItinerary();
});
updateItineraryOptions();
itineraryResult.hidden = true;
if (savedItineraryPlan) {
  itineraryRoute.value = savedItineraryPlan.route;
  updateItineraryOptions();
  itineraryDays.value = String(savedItineraryPlan.days);
  itineraryInterest.value = savedItineraryPlan.interest;
  itineraryStart.value = savedItineraryPlan.start;
  itineraryBuilt = true;
  renderItinerary();
}
const sharedTripParams = new URLSearchParams(window.location.search);
const sharedTripRoute = sharedTripParams.get("tripRoute");
if (sharedTripRoute && Object.prototype.hasOwnProperty.call(itineraryProfiles, sharedTripRoute)) {
  itineraryRoute.value = sharedTripRoute;
  updateItineraryOptions();
  const sharedDays = sharedTripParams.get("tripDays");
  if ([...itineraryDays.options].some((option) => option.value === sharedDays)) {
    itineraryDays.value = sharedDays;
  }
  const sharedInterest = sharedTripParams.get("tripInterest");
  if ([...itineraryInterest.options].some((option) => option.value === sharedInterest)) {
    itineraryInterest.value = sharedInterest;
  }
  const sharedStart = sharedTripParams.get("tripStart");
  if ([...itineraryStart.options].some((option) => option.value === sharedStart)) {
    itineraryStart.value = sharedStart;
  }
  itineraryBuilt = true;
  renderItinerary();
}

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

const makeWeatherUrl = ({ latitude, longitude }) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&forecast_days=7&timezone=Asia%2FKolkata&wind_speed_unit=kmh`;
const formatDay = (date, index) =>
  index === 0
    ? (currentLanguage === "te" ? "ఈ రోజు" : "Today")
    : new Intl.DateTimeFormat(currentLanguage === "te" ? "te-IN" : "en-IN", {
        weekday: "short",
        timeZone: "Asia/Kolkata",
      }).format(new Date(`${date}T12:00:00+05:30`));

function localizeWeather(description) {
  if (currentLanguage !== "te") return description;
  return ({
    "Clear sky": "ఆకాశం నిర్మలం",
    "Mainly clear": "ఎక్కువగా నిర్మలం",
    "Partly cloudy": "కొంత మేఘావృతం",
    Overcast: "పూర్తిగా మేఘావృతం",
    Fog: "పొగమంచు",
    Drizzle: "చినుకులు",
    Rain: "వర్షం",
    Snow: "మంచు",
    Showers: "జల్లులు",
    "Snow showers": "మంచు జల్లులు",
    Thunderstorm: "ఉరుములతో కూడిన వర్షం",
    Variable: "మారుతూ ఉంటుంది",
  })[description] || description;
}
const localizePlaceName = (name) =>
  currentLanguage === "te" ? (teluguText[name] || name) : name;

function renderWeatherAdvice(place, current, daily) {
  const panel = document.querySelector("#weatherAdvice");
  const nearDays = Math.min(3, daily.time.length);
  const maxRainChance = Math.max(0, ...daily.precipitation_probability_max.slice(0, nearDays).map((value) => Number(value) || 0));
  const expectedRain = daily.precipitation_sum.slice(0, nearDays).reduce((sum, value) => sum + (Number(value) || 0), 0);
  const highestTemperature = Math.max(...daily.temperature_2m_max.slice(0, nearDays).map(Number));
  const lowestTemperature = Math.min(...daily.temperature_2m_min.slice(0, nearDays).map(Number));
  const wind = Number(current.wind_speed_10m) || 0;
  let advice;
  if (maxRainChance >= 60 || expectedRain >= 8) {
    advice = currentLanguage === "te"
      ? ["వానకు సిద్ధంగా ఉండండి", `రాబోయే మూడు రోజుల్లో ${Math.round(maxRainChance)}% వరకు వర్ష సూచన ఉంది (${expectedRain.toFixed(1)} మి.మీ. అంచనా). గొడుగు లేదా తేలికపాటి రెయిన్‌కోట్ తీసుకెళ్లండి; ప్రయాణానికి ముందు రహదారి పరిస్థితులు తనిఖీ చేయండి.`]
      : ["Pack for showers", `The next three days show up to ${Math.round(maxRainChance)}% rain chance (${expectedRain.toFixed(1)} mm forecast). Carry a light rain layer and check road conditions before setting out.`];
  } else if (highestTemperature >= 35) {
    advice = currentLanguage === "te"
      ? ["వేడికి అనుగుణంగా ప్లాన్ చేయండి", `రాబోయే మూడు రోజులలో గరిష్ఠ ఉష్ణోగ్రత ${Math.round(highestTemperature)}°C వరకు ఉండొచ్చు. ఉదయం లేదా సాయంత్రం బయటికి వెళ్లండి; నీరు, టోపీ తీసుకెళ్లండి.`]
      : ["Plan around the heat", `The next three days may reach ${Math.round(highestTemperature)}°C. Plan outdoor visits for morning or evening, and carry water and sun protection.`];
  } else if (lowestTemperature < 18) {
    advice = currentLanguage === "te"
      ? ["కొంచెం వెచ్చని దుస్తులు తీసుకెళ్లండి", `రాబోయే రోజులలో కనిష్ఠ ఉష్ణోగ్రత ${Math.round(lowestTemperature)}°C వరకు తగ్గొచ్చు. కొండ ప్రాంతాల్లో ఉదయం, సాయంత్రం చల్లగా ఉండవచ్చు.`]
      : ["Bring a light layer", `Temperatures may dip to ${Math.round(lowestTemperature)}°C over the next few days. Hill and early-morning visits can feel cooler.`];
  } else if (wind >= 35) {
    advice = currentLanguage === "te"
      ? ["తీరప్రాంత ప్రణాళికలను నిర్ధారించండి", `గాలి వేగం సుమారు ${Math.round(wind)} కి.మీ./గం. ఉంది. బోటు లేదా బీచ్ కార్యకలాపాలకు ముందు స్థానిక పరిస్థితులు, అధికారిక సూచనలు తెలుసుకోండి.`]
      : ["Check coastal plans locally", `Winds are around ${Math.round(wind)} km/h. Check local conditions and official advice before boat or beach activities.`];
  } else {
    advice = currentLanguage === "te"
      ? ["బయటికి వెళ్లేందుకు అనుకూలం", "ప్రస్తుతం తీవ్రమైన వాతావరణ సూచన లేదు. అయినా నీరు తీసుకెళ్లండి, మధ్యాహ్నపు ఎండలో విరామం తీసుకోండి; స్థానిక పరిస్థితులు మారవచ్చు."]
      : ["A good window to explore", "No strong weather signal stands out right now. Carry water and take a break from the midday sun; local conditions can still change."];
  }
  panel.innerHTML = `<span class="weather-advice-icon" aria-hidden="true">✦</span><div><p class="eyebrow dark">${currentLanguage === "te" ? "వాతావరణం ఆధారంగా ప్రయాణ సూచన" : "TRAVEL TIP FROM THE FORECAST"} · ${localizePlaceName(place.name)}</p><h3>${advice[0]}</h3><p>${advice[1]}</p><small>${currentLanguage === "te" ? "ఓపెన్-మెటియో అంచనా ఆధారంగా; హెచ్చరికల కోసం అధికారిక వనరులను చూడండి." : "Based on the Open-Meteo forecast; check official sources for alerts."}</small></div>`;
  panel.hidden = false;
}
let weatherRequestId = 0;

async function loadWeather() {
  const requestId = ++weatherRequestId;
  const place = weatherLocations[document.querySelector("#weatherPlace").value];
  document.querySelector("#weatherUpdated").textContent =
    currentLanguage === "te" ? `${place.name} వాతావరణాన్ని లోడ్ చేస్తున్నాం…` : `Loading ${place.name} forecast…`;
  document.querySelector("#weatherLocation").textContent = localizePlaceName(place.name);
  document.querySelector("#forecastLocationLabel").textContent =
    `${localizePlaceName(place.name)} · ${currentLanguage === "te" ? "ఆంధ్రప్రదేశ్" : `${place.district} District`}`;
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
    document.querySelector("#weatherDetail").textContent = localizeWeather(description);
    document.querySelector("#weatherHumidity").textContent =
      `${currentLanguage === "te" ? "తేమ" : "Humidity"} ${Math.round(current.relative_humidity_2m)}%`;
    document.querySelector("#weatherWind").textContent =
      `${currentLanguage === "te" ? "గాలి" : "Wind"} ${Math.round(current.wind_speed_10m)} ${currentLanguage === "te" ? "కి.మీ./గం." : "km/h"}`;
    document.querySelector("#weatherRain").textContent =
      `${currentLanguage === "te" ? "వర్షపాతం" : "Precipitation"} ${current.precipitation == null ? "—" : `${Number(current.precipitation).toFixed(1)} ${currentLanguage === "te" ? "మి.మీ." : "mm"}`}`;
    document.querySelector("#weatherSummary").textContent =
      localizeWeather(description) + (currentLanguage === "te" ? "." : ".");
    const modelTime = new Date(`${current.time}+05:30`);
    document.querySelector("#weatherUpdated").textContent =
      `${currentLanguage === "te" ? "వాతావరణ నమూనా సమయం · " : "Forecast model time · "}${new Intl.DateTimeFormat(currentLanguage === "te" ? "te-IN" : "en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(modelTime)} ${currentLanguage === "te" ? "IST" : "IST"}`;
    document.querySelector("#forecastGrid").innerHTML = daily.time
      .map((date, index) => {
        const [dayIcon, englishDescription] = codeToWeather(
          daily.weather_code[index],
        );
        const dayDescription = localizeWeather(englishDescription);
        const rainChance = daily.precipitation_probability_max[index];
        const chanceText =
          rainChance == null ? "—" : `${Math.round(rainChance)}%`;
        const precipitation =
          daily.precipitation_sum[index] == null
            ? "—"
            : `${Number(daily.precipitation_sum[index]).toFixed(1)} ${currentLanguage === "te" ? "మి.మీ." : "mm"}`;
        return `<article class="forecast-card"><span class="forecast-day">${formatDay(date, index)}</span><span class="forecast-icon" aria-label="${dayDescription}">${dayIcon}</span><span class="forecast-condition">${dayDescription}</span><span class="forecast-temps"><strong>${Math.round(daily.temperature_2m_max[index])}°</strong><span>${Math.round(daily.temperature_2m_min[index])}°</span></span><span class="forecast-rain">☂ ${chanceText} · ${precipitation}</span></article>`;
      })
      .join("");
    renderWeatherAdvice(place, current, daily);
  } catch (error) {
    if (requestId !== weatherRequestId) return;
    const reason = error.message?.startsWith("Open-Meteo returned HTTP")
      ? error.message
      : error.name === "TimeoutError"
        ? "The weather request timed out"
        : "Open-Meteo could not be reached; check your internet connection";
    document.querySelector("#temperature").textContent = currentLanguage === "te" ? "వాతావరణం అందుబాటులో లేదు" : "Weather unavailable";
    document.querySelector("#weatherDetail").textContent = reason;
    document.querySelector("#weatherUpdated").textContent =
      currentLanguage === "te" ? `${localizePlaceName(place.name)} వాతావరణం లోడ్ కాలేదు. మళ్లీ ప్రయత్నించండి.` : `Could not load ${place.name}. ${reason}. Press Refresh to retry.`;
    document.querySelector("#forecastGrid").innerHTML =
      `<p class="forecast-loading">${reason}. ${currentLanguage === "te" ? "మళ్లీ పొందండి బటన్‌ను నొక్కండి." : "Press Refresh to retry."}</p>`;
    document.querySelector("#weatherAdvice").hidden = true;
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
    currentLanguage === "te"
      ? `${isDark ? "లైట్" : "డార్క్"} మోడ్‌కు మార్చండి`
      : `Switch to ${isDark ? "light" : "dark"} mode`,
  );
  document.querySelector("#themeIcon").textContent = isDark ? "☾" : "☼";
  themeToggle.querySelector(".theme-label").textContent = isDark
    ? tr("Dark mode")
    : tr("Light mode");
  document.querySelector('meta[name="theme-color"]').content = isDark
    ? "#101216"
    : "#070707";
}
updateThemeButton(initialTheme);
applyLanguage();
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
  panel.inert = !show;
  document.querySelector("#chatToggle").setAttribute("aria-expanded", String(show));
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

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const revealTargets = document.querySelectorAll(
    "#weather .weather-layout, #weather .forecast-heading, #weather .forecast-grid, .section-heading, .destination-explorer, .place-card, .experience-photo, .experience-copy > *, .culture-heading, .culture-card, .route, .quote-wrap > *",
  );
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
  );

  revealTargets.forEach((element, index) => {
    element.classList.add("motion-reveal");
    if (element.matches(".place-card")) {
      element.style.setProperty("--reveal-delay", `${(index % 3) * 75}ms`);
    }
    revealObserver.observe(element);
  });
}
