const state = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const citiesOfState = {
  "Andaman and Nicobar Islands": ["Port Blair"],
  Haryana: [
    "Bahadurgarh",
    "Bhiwani",
    "Charkhi Dadri",
    "Fatehabad",
    "Faridabad",
    "Gohana",
    "Gurgaon",
    "Hansi",
    "Hisar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Ladwa",
    "Mahendragarh",
    "Mandi Dabwali",
    "Narnaul",
    "Narwana",
    "Panchkula",
    "Panipat",
    "Pehowa",
    "Pinjore",
    "Rania",
    "Ratia",
    "Rewari",
    "Rohtak",
    "Samalkha",
    "Sarsod",
    "Safidon",
    "Shahbad",
    "Sirsa",
    "Sohna",
    "Sonipat",
    "Taraori",
    "Thanesar",
    "Tohana",
    "Yamunanagar",
  ],
  "Tamil Nadu": [
    "Arakkonam",
    "Aruppukkottai",
    "Chennai",
    "Coimbatore",
    "Erode",
    "Gobichettipalayam",
    "Kancheepuram",
    "Karur",
    "Madurai",
    "Nagapattinam",
    "Nagercoil",
    "Namakkal",
    "Nandivaram-Guduvancheri",
    "Nanjikottai",
    "Natham",
    "Nellikuppam",
    "Neyveli (TS)",
    "Oddanchatram",
    "Pacode",
    "Palani",
    "Palladam",
    "Pallapatti",
    "Pallikonda",
    "Panagudi",
    "Panchkula",
    "Paramakudi",
    "Pattukkottai",
    "Perambalur",
    "Peravurani",
    "Pernampattu",
    "Periyakulam",
    "Periyasemur",
    "P.N.Patti",
    "Pollachi",
    "Pudukkottai",
    "Pudupattinam",
    "Puliyankudi",
    "Punjaipugalur",
    "Rajapalayam",
    "Ramanathapuram",
    "Rameshwaram",
    "Ranipet",
    "Rasipuram",
    "Rewari",
    "Rohtak",
    "Salem",
    "Samalkha",
    "Sankari",
    "Sankarankovil",
    "Sarsod",
    "Sathyamangalam",
    "Sattur",
    "Safidon",
    "Sankali",
    "Sivaganga",
    "Sivagiri",
    "Sivakasi",
    "Sirkali",
    "Sivakasi",
    "Srivilliputhur",
    "Suriyampalayam",
    "Surandai",
    "Shahbad",
    "Shenkottai",
    "Sholingur",
    "Sholavandan",
    "Sankarankovil",
    "Taraori",
    "Taramangalam",
    "Tenkasi",
    "Thanesar",
    "Thanjavur",
    "Tharamangalam",
    "Thiruvarur",
    "Thiruthuraipoondi",
    "Thirumangalam",
    "Thirukkoyilur",
    "Thirupathur",
    "Thirupathur",
    "Thiruchengode",
    "Thiruchendur",
    "Thiruvannamalai",
    "Thiruvethipuram",
    "Thuraiyur",
    "Tiruchirappalli",
    "Tiruchirappalli",
    "Tirukalukundram",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruppur",
    "Tiruttani",
    "Tiruvallur",
    "Udhagamandalam",
    "Uthamapalayam",
    "Uthiramerur",
    "Usilampatti",
    "Uthiramerur",
    "Vadalur",
    "Vadakkuvalliyur",
    "Vadipatti",
    "Valparai",
    "Vaniyambadi",
    "Vandavasi",
    "Vedaranyam",
    "Vellore",
    "Vellakoil",
    "Vikramasingapuram",
    "Viluppuram",
    "Viswanatham",
  ],
  "Madhya Pradesh": [
    "Alirajpur",
    "Ashok Nagar",
    "Balaghat",
    "Bhopal",
    "Ganjbasoda",
    "Gwalior",
    "Indore",
    "Itarsi",
    "Jabalpur",
    "Lahar",
    "Maihar",
    "Mandsaur",
    "Mandla",
    "Mandideep",
    "Manawar",
    "Morena",
    "Murwara (Katni)",
    "Nagda",
    "Nainpur",
    "Narsinghgarh",
    "Narsinghgarh",
    "Nepanagar",
    "Neemuch",
    "Niwari",
    "Nowgong",
    "Nowrozabad (Khodargama)",
    "Pachore",
    "Pali",
    "Pandhurna",
    "Panagar",
    "Panna",
    "Pasan",
    "Pipariya",
    "Pithampur",
    "Porsa",
    "Prithvipur",
    "Raghogarh-Vijaypur",
    "Raisen",
    "Rajgarh",
    "Rahatgarh",
    "Ratlam",
    "Rau",
    "Rewa",
    "Sabalgarh",
    "Sagar",
    "Sarangpur",
    "Satna",
    "Sausar",
    "Sarni",
    "Sehore",
    "Sendhwa",
    "Seoni",
    "Seoni-Malwa",
    "Shahdol",
    "Shajapur",
    "Shamgarh",
    "Sheopur",
    "Shivpuri",
    "Shujalpur",
    "Sihora",
    "Sironj",
    "Sohagpur",
    "Tarana",
    "Ujjain",
    "Umaria",
    "Vidisha",
    "Vijaypur",
    "Wara Seoni",
  ],
  Jharkhand: [
    "Adityapur",
    "Bokaro Steel City",
    "Chaibasa",
    "Chatra",
    "Chirkunda",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "Giridih",
    "Gumia",
    "Hazaribag",
    "Jamshedpur",
    "Jhumri Tilaiya",
    "Lohardaga",
    "Madhupur",
    "Medininagar (Daltonganj)",
    "Mihijam",
    "Musabani",
    "Pakaur",
    "Patratu",
    "Phusro",
    "Ramgarh",
    "Ranchi",
    "Saunda",
    "Sahibganj",
    "Simdega",
    "Tenu dam-cum-Kathhara",
  ],
  Mizoram: ["Aizawl", "Lunglei", "Saiha"],
  Nagaland: [
    "Dimapur",
    "Kohima",
    "Mokokchung",
    "Tuensang",
    "Wokha",
    "Zunheboto",
  ],
  "Himachal Pradesh": [
    "Kullu",
    "Mandi",
    "Nahan",
    "Palampur",
    "Shimla",
    "Solan",
    "Sundarnagar",
  ],
  Tripura: [
    "Agartala",
    "Belonia",
    "Dharmanagar",
    "Kailasahar",
    "Khowai",
    "Pratapgarh",
    "Udaipur",
  ],
  "Andhra Pradesh": [
    "Adoni",
    "Amalapuram",
    "Anakapalle",
    "Anantapur",
    "Bapatla",
    "Bheemunipatnam",
    "Bhimavaram",
    "Bobbili",
    "Chilakaluripet",
    "Chirala",
    "Chittoor",
    "Dharmavaram",
    "Eluru",
    "Guntakal",
    "Guntur",
    "Gudivada",
    "Hindupur",
    "Jaggayyapeta",
    "Kadapa",
    "Kadiri",
    "Kakinada",
    "Kandukur",
    "Kavali",
    "Kurnool",
    "Machilipatnam",
    "Madanapalle",
    "Naidupet",
    "Nandyal",
    "Narasaraopet",
    "Narasapuram",
    "Nellore",
    "Nuzvid",
    "Ongole",
    "Palasa Kasibugga",
    "Palacole",
    "Ponnur",
    "Proddatur",
    "Punganur",
    "Puttur",
    "Rajahmundry",
    "Rajam",
    "Rajampet",
    "Ramachandrapuram",
    "Rayachoti",
    "Rayadurg",
    "Repalle",
    "Salur",
    "Samalkot",
    "Sattenapalle",
    "Srikakulam",
    "Srikalahasti",
    "Srisailam Project (Right Flank Colony) Township",
    "Sullurpeta",
    "Tanuku",
    "Tadepalligudem",
    "Tadpatri",
    "Tenali",
    "Tirupati",
    "Tiruvuru",
    "Tuni",
    "Uravakonda",
    "Venkatagiri",
    "Vijayawada",
    "Vinukonda",
    "Visakhapatnam",
    "Vizianagaram",
    "Yemmiganur",
    "Yerraguntla",
  ],
  Punjab: [
    "Amritsar",
    "Barnala",
    "Batala",
    "Bathinda",
    "Dhuri",
    "Faridkot",
    "Fazilka",
    "Firozpur",
    "Firozpur Cantt.",
    "Gobindgarh",
    "Gurdaspur",
    "Hoshiarpur",
    "Jagraon",
    "Jalandhar",
    "Jalandhar Cantt.",
    "Kapurthala",
    "Kharar",
    "Khanna",
    "Kot Kapura",
    "Ludhiana",
    "Malout",
    "Malerkotla",
    "Mansa",
    "Moga",
    "Mohali",
    "Morinda, India",
    "Mukerian",
    "Muktsar",
    "Nabha",
    "Nakodar",
    "Nangal",
    "Nawanshahr",
    "Pathankot",
    "Patiala",
    "Patti",
    "Pattran",
    "Phillaur",
    "Phagwara",
    "Qadian",
    "Raikot",
    "Rajpura",
    "Rampura Phul",
    "Rupnagar",
    "Samana",
    "Sangrur",
    "Sirhind Fatehgarh Sahib",
    "Sujanpur",
    "Sunam",
    "Talwara",
    "Tarn Taran",
    "Urmar Tanda",
    "Zira",
    "Zirakpur",
  ],
  Chandigarh: ["Chandigarh"],
  Rajasthan: [
    "Ajmer",
    "Alwar",
    "Barmer",
    "Bharatpur",
    "Bikaner",
    "Jaipur",
    "Jodhpur",
    "Lachhmangarh",
    "Ladnu",
    "Lakheri",
    "Losal",
    "Makrana",
    "Malpura",
    "Mandalgarh",
    "Mandawa",
    "Merta City",
    "Mount Abu",
    "Nagaur",
    "Nasirabad",
    "Nathdwara",
    "Nimbahera",
    "Nohar",
    "Nokha",
    "Pali",
    "Phalodi",
    "Phulera",
    "Pilibanga",
    "Pilani",
    "Prantij",
    "Pratapgarh",
    "Rajsamand",
    "Ratangarh",
    "Rawatbhata",
    "Rawatsar",
    "Rajakhera",
    "Rajaldesar",
    "Rajgarh (Alwar)",
    "Rajgarh (Churu)",
    "Ramganj Mandi",
    "Ramngarh",
    "Raisinghnagar",
    "Rampura Phul",
    "Ratangarh",
    "Reengus",
    "Sadri",
    "Sadulpur",
    "Sadulshahar",
    "Sagwara",
    "Sambhar",
    "Sanchore",
    "Sangaria",
    "Sardarshahar",
    "Sawai Madhopur",
    "Sikar",
    "Sirohi",
    "Sri Madhopur",
    "Sujangarh",
    "Sumerpur",
    "Suratgarh",
    "Takhatgarh",
    "Taranagar",
    "Todabhim",
    "Todaraisingh",
    "Tonk",
    "Udaipur",
    "Udaipurwati",
    "Vijainagar, Ajmer",
  ],
  Assam: [
    "Barpeta",
    "Bongaigaon City",
    "Dibrugarh",
    "Dhubri",
    "Diphu",
    "Goalpara",
    "Guwahati",
    "Jorhat",
    "Karimganj",
    "Lanka",
    "Lumding",
    "Mangaldoi",
    "Mankachar",
    "Margherita",
    "Mariani",
    "Marigaon",
    "Nagaon",
    "Nalbari",
    "North Lakhimpur",
    "Rangia",
    "Silapathar",
    "Silchar",
    "Sibsagar",
    "Tezpur",
    "Tinsukia",
  ],
  Odisha: [
    "Baleshwar Town",
    "Balangir",
    "Barbil",
    "Baripada Town",
    "Bargarh",
    "Bhadrak",
    "Bhawanipatna",
    "Bhubaneswar",
    "Brahmapur",
    "Byasanagar",
    "Cuttack",
    "Dhenkanal",
    "Jatani",
    "Jharsuguda",
    "Kendrapara",
    "Kendujhar",
    "Malkangiri",
    "Nabarangapur",
    "Paradip",
    "Parlakhemundi",
    "Pattamundai",
    "Phulabani",
    "Puri",
    "Rajagangapur",
    "Rairangpur",
    "Raurkela",
    "Rayagada",
    "Sambalpur",
    "Soro",
    "Sundargarh",
    "Sunabeda",
    "Tarbha",
    "Talcher",
    "Titlagarh",
  ],
  Chhattisgarh: [
    "Ambikapur",
    "Bhatapara",
    "Bhilai Nagar",
    "Bilaspur",
    "Chirmiri",
    "Dalli-Rajhara",
    "Dhamtari",
    "Durg",
    "Jagdalpur",
    "Korba",
    "Mahasamund",
    "Manendragarh",
    "Mungeli",
    "Naila Janjgir",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Sakti",
    "Tilda Newra",
  ],
  "Jammu and Kashmir": [
    "Anantnag",
    "Baramula",
    "Jammu",
    "KathUrban Agglomeration",
    "Punch",
    "Rajauri",
    "Sopore",
    "Srinagar",
    "Udhampur",
  ],
  Karnataka: [
    "Adyar",
    "Afzalpur",
    "Arsikere",
    "Athni",
    "Ballari",
    "Belagavi",
    "Bengaluru",
    "Chikkamagaluru",
    "Davanagere",
    "Gokak",
    "Hubli-Dharwad",
    "Kolar",
    "Lakshmeshwar",
    "Lingsugur",
    "Madikeri",
    "Madhugiri",
    "Magadi",
    "Malavalli",
    "Malur",
    "Mandya",
    "Mangaluru",
    "Manvi",
    "Mudabidri",
    "Mudalagi",
    "Muddebihal",
    "Mudhol",
    "Mudigere",
    "Mudalagi",
    "Mundargi",
    "Mysore",
    "Nanjangud",
    "Nargund",
    "Navalgund",
    "Pavagada",
    "Piriyapatna",
    "Puttur",
    "Raayachuru",
    "Rabkavi Banhatti",
    "Ramanagaram",
    "Ramdurg",
    "Robertson Pet",
    "Ron",
    "Sadalagi",
    "Sagara",
    "Sakaleshapura",
    "Sanduru",
    "Sankeshwara",
    "Sedam",
    "Shahabad",
    "Shahpur",
    "Shikaripur",
    "Shiggaon",
    "Shrirangapattana",
    "Siddapur",
    "Sidlaghatta",
    "Sindagi",
    "Sindhnur",
    "Sira",
    "Sirsi",
    "Siruguppa",
    "Srinivaspur",
    "Srinagar",
    "Surapura",
    "Talikota",
    "Tarikere",
    "Terdal",
    "Tiptur",
    "Tumkur",
    "Udupi",
    "Vijayapura",
    "Wadi",
    "Yadgir",
  ],
  Manipur: ["Imphal", "Lilong", "Mayang Imphal", "Thoubal"],
  Kerala: [
    "Adoor",
    "Alappuzha",
    "Attingal",
    "Chalakudy",
    "Changanassery",
    "Cherthala",
    "Chittur-Thathamangalam",
    "Erattupetta",
    "Guruvayoor",
    "Kanhangad",
    "Kannur",
    "Kayamkulam",
    "Kochi",
    "Kollam",
    "Kottayam",
    "Koyilandy",
    "Kozhikode",
    "Kunnamkulam",
    "Kuthuparamba",
    "Malappuram",
    "Mavelikkara",
    "Mavoor",
    "Mattannur",
    "Muvattupuzha",
    "Nedumangad",
    "Neyyattinkara",
    "Nilambur",
    "Ottappalam",
    "Palai",
    "Palakkad",
    "Panniyannur",
    "Pappinisseri",
    "Paravoor",
    "Pathanamthitta",
    "Peringathur",
    "Perinthalmanna",
    "Perumbavoor",
    "Punalur",
    "Puthuppally",
    "Taliparamba",
    "Thiruvalla",
    "Thiruvananthapuram",
    "Thrissur",
    "Tirur",
    "Vaikom",
    "Varkala",
    "Vatakara",
  ],
  Delhi: ["Delhi", "New Delhi"],
  "Dadra and Nagar Haveli": ["Silvassa"],
  Puducherry: ["Karaikal", "Mahe", "Pondicherry", "Yanam"],
  Uttarakhand: [
    "Bageshwar",
    "Dehradun",
    "Haldwani-cum-Kathgodam",
    "Hardwar",
    "Kashipur",
    "Manglaur",
    "Mussoorie",
    "Nagla",
    "Nainital",
    "Pauri",
    "Pithoragarh",
    "Ramnagar",
    "Rishikesh",
    "Roorkee",
    "Rudrapur",
    "Sitarganj",
    "Srinagar",
    "Tehri",
  ],
  "Uttar Pradesh": [
    "Achhnera",
    "Agra",
    "Aligarh",
    "Allahabad",
    "Amroha",
    "Azamgarh",
    "Bahraich",
    "Chandausi",
    "Etawah",
    "Firozabad",
    "Hapur",
    "Hardoi ",
    "Jhansi",
    "Kanpur",
    "Khair",
    "Lakhimpur",
    "Lal Gopalganj Nindaura",
    "Lalitpur",
    "Loni",
    "Lucknow",
    "Mathura",
    "Meerut",
    "Modinagar",
    "Moradabad",
    "Nagina",
    "Nainital",
    "Najibabad",
    "Nanpara",
    "Nawabganj",
    "Nehtaur",
    "Noida",
    "Obra",
    "Orai",
    "Padrauna",
    "Palampur",
    "Palia Kalan",
    "Parasi",
    "Phulpur",
    "Pihani",
    "Pilibhit",
    "Pilkhuwa",
    "Powayan",
    "Puranpur",
    "Purwa",
    "Rae Bareli",
    "Rampur",
    "Rasra",
    "Rath",
    "Renukoot",
    "Robertsganj",
    "Rudauli",
    "Rudrapur",
    "SUrban Agglomerationr",
    "Sadabad",
    "Safipur",
    "Saharanpur",
    "Sahaswan",
    "Sahaspur",
    "Sahawar",
    "Sahjanwa",
    "Saidpur",
    "Sambhal",
    "Samdhan",
    "Samthar",
    "Sardhana",
    "Sarnath",
    "Sasni",
    "Sasvad",
    "Satrikh",
    "Saunda",
    "Saurikh",
    "Sauris",
    "Sikanderpur",
    "Sikandra Rao",
    "Sikandrabad",
    "Sirsi",
    "Sirsaganj",
    "Siruguppa",
    "Sitapur",
    "Soron",
    "Suar",
    "Sultanpur",
    "Sumerpur",
    "Tanda",
    "Tulsipur",
    "Tundla",
    "Ujhani",
    "Unnao",
    "Utraula",
    "Varanasi",
    "Vrindavan",
    "Warhapur",
    "Zaidpur",
    "Zamania",
  ],
  Bihar: [
    "Araria",
    "Arwal",
    "Arrah",
    "Asarganj",
    "Aurangabad",
    "Bagaha",
    "Barh",
    "Begusarai",
    "Bettiah",
    "BhabUrban Agglomeration",
    "Bhagalpur",
    "Buxar",
    "Chhapra",
    "Darbhanga",
    "Dehri-on-Sone",
    "Dumraon",
    "Forbesganj",
    "Gaya",
    "Gopalganj",
    "Hajipur",
    "Jamalpur",
    "Jamui",
    "Jehanabad",
    "Katihar",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Maharajganj",
    "Mahnar Bazar",
    "Makhdumpur",
    "Maner",
    "Manihari",
    "Marhaura",
    "Masaurhi",
    "Mirganj",
    "Motihari",
    "Motipur",
    "Munger",
    "Murliganj",
    "Muzaffarpur",
    "Narkatiaganj",
    "Nawada",
    "Naugachhia",
    "Nokha",
    "Piro",
    "Purnia",
    "Rafiganj",
    "Rajgir",
    "Ramnagar",
    "Raxaul Bazar",
    "Revelganj",
    "Rosera",
    "Saharsa",
    "Samastipur",
    "Sasaram",
    "Sheikhpura",
    "Sheohar",
    "Sherghati",
    "Silao",
    "Sitamarhi",
    "Sonepur",
    "Sugauli",
    "Sultanganj",
    "Supaul",
    "Warisaliganj",
  ],
  Gujarat: [
    "Adalaj",
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Anjar",
    "Ankleshwar",
    "Bharuch",
    "Bhavnagar",
    "Bhuj",
    "Chhapra",
    "Deesa",
    "Dhoraji",
    "Gandhinagar",
    "Godhra",
    "Jamnagar",
    "Kadi",
    "Kapadvanj",
    "Keshod",
    "Khambhat",
    "Lathi",
    "Limbdi",
    "Lunawada",
    "Mahemdabad",
    "Mahesana",
    "Mahuva",
    "Mandvi",
    "Mansa",
    "Modasa",
    "Morvi",
    "Nadiad",
    "Navsari",
    "Padanpur",
    "Palanpur",
    "Palitana",
    "Pardi",
    "Patan",
    "Petlad",
    "Porbandar",
    "Rajkot",
    "Rajpipla",
    "Rajula",
    "Ranavav",
    "Rapar",
    "Salaya",
    "Sanand",
    "Savarkundla",
    "Sidhpur",
    "Sihor",
    "Songadh",
    "Surat",
    "Talaja",
    "Thangadh",
    "Tharad",
    "Una",
    "Umbergaon",
    "Umreth",
    "Unjha",
    "Upleta",
    "Vadnagar",
    "Vadodara",
    "Valsad",
    "Vapi",
    "Veraval",
    "Vijapur",
    "Viramgam",
    "Vyara",
    "Wadhwan",
    "Wankaner",
  ],
  Telangana: [
    "Adilabad",
    "Bellampalle",
    "Bhadrachalam",
    "Bhainsa",
    "Bhongir",
    "Bodhan",
    "Farooqnagar",
    "Gadwal",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Kagaznagar",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Koratla",
    "Kothagudem",
    "Kyathampalle",
    "Mahbubnagar",
    "Mandamarri",
    "Mancherial",
    "Manuguru",
    "Medak",
    "Miryalaguda",
    "Nagarkurnool",
    "Narayanpet",
    "Nirmal",
    "Nizamabad",
    "Palwancha",
    "Ramagundam",
    "Sadasivpet",
    "Sangareddy",
    "Siddipet",
    "Sircilla",
    "Suryapet",
    "Tandur",
    "Vikarabad",
    "Wanaparthy",
    "Warangal",
    "Yellandu",
  ],
  Meghalaya: ["Nongstoin", "Shillong", "Tura"],
  "Arunachal Pradesh": ["Naharlagun", "Pasighat"],
  Maharashtra: [
    "Achalpur",
    "Ahmednagar",
    "Akola",
    "Akot",
    "Amalner",
    "Ambejogai",
    "Amravati",
    "Anjangaon",
    "Aurangabad",
    "Bhiwandi",
    "Dhule",
    "Ichalkaranji",
    "Kalyan-Dombivali",
    "Latur",
    "Lonavla",
    "Malegaon",
    "Malkapur",
    "Manmad",
    "Mira-Bhayandar",
    "Nagpur",
    "Nanded-Waghala",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Pandharpur",
    "Panvel",
    "Parbhani",
    "Pune",
    "Sangli",
    "Satara",
    "Solapur",
    "Thane",
    "Udgir",
    "Vasai-Virar",
    "Wardha",
    "Yavatmal",
    "Achalpur",
    "Ahmednagar",
    "Akola",
    "Akot",
    "Amalner",
    "Ambejogai",
    "Amravati",
    "Anjangaon",
    "Aurangabad",
    "Bhiwandi",
    "Dhule",
    "Ichalkaranji",
    "Kalyan-Dombivali",
    "Latur",
    "Lonavla",
    "Malegaon",
    "Malkapur",
    "Manmad",
    "Mira-Bhayandar",
    "Nagpur",
    "Nanded-Waghala",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Pandharpur",
    "Panvel",
    "Parbhani",
    "Pune",
    "Sangli",
    "Satara",
    "Solapur",
    "Thane",
    "Udgir",
    "Vasai-Virar",
    "Wardha",
    "Yavatmal",
  ],
  Goa: ["Marmagao", "Margao", "Mapusa", "Panaji"],
  "West Bengal": [
    "Adra",
    "AlipurdUrban Agglomerationr",
    "Arambagh",
    "Asansol",
    "Baharampur",
    "Balurghat",
    "Bankura",
    "Darjiling",
    "English Bazar",
    "Gangarampur",
    "Habra",
    "Hugli-Chinsurah",
    "Jalpaiguri",
    "Jhargram",
    "Kharagpur",
    "Kolkata",
    "Kalimpong",
    "Malda",
    "Mathabhanga",
    "Medinipur",
    "Memari",
    "Monoharpur",
    "Murshidabad",
    "Nabadwip",
    "Naihati",
    "PandUrban Agglomeration",
    "Panchla",
    "Paschim Punropara",
    "Purulia",
    "Raghunathganj",
    "Raghunathpur",
    "Raiganj",
    "Rampurhat",
    "Ranaghat",
    "Sainthia",
    "Santipur",
    "Siliguri",
    "Srirampore",
    "Suri",
    "Taki",
    "Tarakeswar",
  ],
};

export { state, citiesOfState };
