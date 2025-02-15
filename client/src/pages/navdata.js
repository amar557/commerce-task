export const menuItems = [
  { name: "Shop", path: "/" },
  { name: "cart", path: "/cart" },
  { name: "shop", path: "/shop" },
  { name: "Kids", path: "/kids" },
  {
    name: "Categories",
    path: "/categories",
    children: [
      {
        header: "Accessories",
        nestedChildren: [
          "Cufflinks",
          "Timepiece",
          "Table Clock",
          "Collectibles",
          "Watch Organiser",
        ],
      },
      {
        header: "Watches",
        nestedChildren: [
          "Men",
          "Women",
          "Kids",
          "Couple Watches",
          "Watches",
          "Brand New Watches",
          "New Watches",
          "Wrist Watches",
          "Luxury Watches",
          "Unisex Watches",
          "Quartz Watches",
          "Fashion Watches",
          "Preowned Watches",
          "Automatic Watches",
        ],
      },
    ],
  },
  {
    name: "Brands",
    path: "/brands",
    children: [
      {
        header: "A-C",
        nestedChildren: [
          "ALBA",
          "Anchor",
          "Atranta",
          "August Steiner",
          "Aimant",
          "Akribos",
          "Armitron",
          "Anne Klein",
          "Armani Exchange",
          "Braccialini",
          "Bering",
          "Belmond",
        ],
      },
      {
        header: "B-C",
        nestedChildren: [
          "Ballast",
          "Bering Max Rene",
          "BCBG Max Azria",
          "Burberry",
          "Bill Blass",
          "Casio",
          "Citizen",
          "Calvin Klein",
          "Custo",
          "Chanel",
          "Certina",
          "Cacharel",
        ],
      },
      {
        header: "C-E",
        nestedChildren: [
          "Coach New York",
          "California Watch Co",
          "Diesel",
          "DKNY",
          "Daring",
          "Daniel Wellington",
          "Diocesan Boys School",
          "Essence",
          "Earnshaw",
          "Effy New York",
          "Esprit",
          "Ellesse",
        ],
      },
      {
        header: "E-G",
        nestedChildren: [
          "Esmurt",
          "Elle",
          "Emporio Armani",
          "Ferrucci",
          "Fossil",
          "Ferrari",
          "Festina",
          "Furla",
          "Flik Flak by Swatch",
          "Frederique Constant",
          "Gucci",
          "Guess",
        ],
      },
      {
        header: "G-J",
        nestedChildren: [
          "Garonne",
          "Givenchy",
          "Giordano",
          "Gogo sport",
          "Helvei",
          "Hugo Boss",
          "Henry London",
          "Healbe GoBe",
          "I Watch",
          "Inouness",
          "ITAnano",
          "Jeep",
        ],
      },
      {
        header: "J-L",
        nestedChildren: [
          "Joop",
          "Jaragar",
          "Just Cavalli",
          "Jean Mortimer",
          "Jacques du Manoir",
          "Juicy Couture",
          "Joshua & Sons",
          "Journal Standard",
          "Klaus Kobec",
          "Kenneth Cole",
          "LLoyd",
          "Lorus",
        ],
      },
      {
        header: "L-M",
        nestedChildren: [
          "Lacoste",
          "Lemon",
          "Lemans",
          "Lancaster Italy",
          "Movado",
          "Michael Kors",
          "Maserati",
          "Marc Jacobs",
          "Marie Claire",
          "Miss Sixty",
          "Meridian",
          "Michele",
        ],
      },
      {
        header: "M-R",
        nestedChildren: [
          "Meridian",
          "New Fande",
          "Nicole Miller",
          "Nixon",
          "Norton",
          "Oris",
          "Pierre Cardin",
          "Platinum",
          "Pandora",
          "Puma",
          "Pulsar",
          "Roamer",
        ],
      },
      {
        header: "R-S",
        nestedChildren: [
          "Roots",
          "Radiant",
          "Rado",
          "Relic",
          "Rolex",
          "Romanson",
          "Re-long",
          "Raymond Weil",
          "Seiko",
          "Seculus",
          "Swatch",
          "Superdry",
        ],
      },
      {
        header: "S-T",
        nestedChildren: [
          "Slazenger",
          "Stuhrling",
          "Sisley",
          "S Oliver",
          "San marco",
          "Seksy",
          "Swiss Legend",
          "Speed line",
          "Star Wars",
          "Skagen Denmark",
          "Titus",
          "Ted Baker",
        ],
      },
    ],
  },
  { name: "Sell Your Watch", path: "/sell-your-watch" },
];

export const categories = [
  {
    category: "Accessories",
    subcategories: [
      { category: "Collectibles" },
      { category: "Cufflinks" },
      { category: "Table Clock" },
      { category: "Timepiece" },
      { category: "Watch Organiser" },
    ],
  },
  { category: "Alarm Watch" },
  { category: "Bangle" },
  {
    category: "Dial size",
    subcategories: [
      { category: "15 - 20 mm" },
      { category: "15mm" },
      { category: "16mm" },
      { category: "17mm" },
      { category: "18mm" },
      { category: "19mm" },
      { category: "20mm" },
      { category: "21 - 25 mm" },
      { category: "21mm" },
      { category: "22mm" },
    ],
  },
  { category: "Digital Dial" },
  { category: "Digital Watch" },
  { category: "Digital Watches" },
  { category: "Mix" },
  { category: "New" },
  { category: "Powermatic" },
  { category: "Preowned" },
  { category: "Purple Strap" },
  { category: "Sky Blue Dial" },
  { category: "Smart Watch" },
  {
    category: "Watches",
    subcategories: [
      { category: "Activity Tracker" },
      { category: "Automatic Watches" },
      { category: "Brand New" },
      { category: "Couple Watches" },
      { category: "Fashion Watches" },
      { category: "Fitness Bands" },
      { category: "Fitness Watches" },
      { category: "HOT SELLING" },
      { category: "Kids Watches" },
      { category: "Like New" },
      { category: "Luxury Watches" },
    ],
  },
  {
    category: "Men Watches",
    subcategories: [
      { category: "Automatic Watch" },
      { category: "Black Chain" },
      { category: "Black Dial" },
      { category: "Blue Chain" },
      { category: "Blue Dial" },
      { category: "Ceramic Chain" },
      { category: "Ceramic Watch" },
    ],
  },
  { category: "New Watches" },
  { category: "Preowned Watches" },
  { category: "Quartz Watches" },
  { category: "Unisex Watches" },
  { category: "Women Watches" },
  { category: "Wrist Watches" },
];
