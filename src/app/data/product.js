const products = [/* Fruits heading*/ 
  {
    
    id: 1,
    name: "Apple",
    category: "Fruits",
    price: 120,
    image: "https://images.pexels.com/photos/28710026/pexels-photo-28710026.jpeg"
  },
  {
    id: 2,
    name: "Banana",
    category: "Fruits",
    price: 60,
    image: "https://images.pexels.com/photos/30893278/pexels-photo-30893278.jpeg"
  },
  {
    id: 3,  
    name: "Mango",
    category: "Fruits",
    price: 80,
    image: "https://images.pexels.com/photos/37816783/pexels-photo-37816783.jpeg"
  },
    {
    id: 4,
    name: "Orange",
    category: "Fruits",
    price: 70,
    image: "https://images.pexels.com/photos/18452311/pexels-photo-18452311.jpeg"
    },
    {
    id: 5,
    name: "Grapes",
    category: "Fruits",
    price: 80,
    image:"https://images.pexels.com/photos/23784980/pexels-photo-23784980.jpeg"
    },
    {
    id: 6,
    name: "Pineapple",
    category: "Fruits",
    price: 120,
    image: "https://images.pexels.com/photos/37284807/pexels-photo-37284807.jpeg"
    },
    {
    id: 7,
    name: "Watermelon",
    category: "Fruits",
    price: 80,
    image:"https://images.pexels.com/photos/26950757/pexels-photo-26950757.jpeg"
    },
    {
    id: 8,
    name: "Papaya",
    category: "Fruits",
    price: 100,
    image:"https://m.media-amazon.com/images/I/61CuiyI4aBL._AC_UF894,1000_QL80_.jpg"
    },
    {
    id: 9,
    name: "Guava",
    category: "Fruits",
    price:60,
    image:"https://images.pexels.com/photos/28536571/pexels-photo-28536571.jpeg"
    },
    {
    id: 10,
    name: "Pomegranate",
    category: "Fruits",   
    price: 120,
    image:"https://images.pexels.com/photos/37917425/pexels-photo-37917425.jpeg"
    },
    {
  id: 11,
  name: "Kiwi",
  category: "Fruits",
  price: 140,
  image: "https://images.pexels.com/photos/6411505/pexels-photo-6411505.jpeg"
},
{
  id: 12,
  name: "Strawberry",
  category: "Fruits",
  price: 150,
  image: "https://m.media-amazon.com/images/I/61hVLTBkByL.jpg"
},
{
  id: 13,
  name: "Blueberry",
  category: "Fruits",
  price: 250,
  image: "https://m.media-amazon.com/images/I/51L9T8N-lNL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 14,
  name: "Raspberry",
  category: "Fruits",
  price: 280,
  image: "https://m.media-amazon.com/images/I/61bvr8oXviL.jpg"
},
{
  id: 15,
  name: "Blackberry",
  category: "Fruits",
  price: 260,
  image: "https://cdn4.volusion.store/uyqbk-sezkn/v/vspfiles/photos/BERBLK-TL-ARAPAHO-2.jpg?v-cache=1778849033"
},
{
  id: 16,
  name: "Dragon Fruit",
  category: "Fruits",
  price: 110,
  image: "https://m.media-amazon.com/images/I/614Kdil2FAL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 17,
  name: "Pear",
  category: "Fruits",
  price: 90,
  image: "https://m.media-amazon.com/images/I/51JColx7avL.jpg"
},
{
  id: 18,
  name: "Peach",
  category: "Fruits",
  price: 220,
  image: "https://images.pexels.com/photos/11063842/pexels-photo-11063842.jpeg"
},
{
  id: 19,
  name: "Plum",
  category: "Fruits",
  price: 120,
  image: "https://m.media-amazon.com/images/I/51bp+8ZQ0HL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 20,
  name: "Cherry",
  category: "Fruits",
  price: 150,
  image: "https://m.media-amazon.com/images/I/41WfimazUWL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 21,
  name: "Avocado",
  category: "Fruits",
  price: 180,
  image: "https://images.pexels.com/photos/19808832/pexels-photo-19808832.jpeg"
},
{
  id: 22,
  name: "Lychee",
  category: "Fruits",
  price: 140,
  image: "https://images.pexels.com/photos/16965810/pexels-photo-16965810.jpeg"
},
{
  id: 23,
  name: "Sapota",
  category: "Fruits",
  price: 80,
  image: "https://m.media-amazon.com/images/I/51lrHM92IHL.jpg"
},
{
  id: 24,
  name: "Custard Apple",
  category: "Fruits",
  price: 100,
  image: "https://m.media-amazon.com/images/I/71kUFTKH4EL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 25,
  name: "Jackfruit",
  category: "Fruits",
  price: 90,
  image: "https://images.pexels.com/photos/11669555/pexels-photo-11669555.jpeg"
},
{
  id: 26,
  name: "Fig",
  category: "Fruits",
  price: 200,
  image: "https://m.media-amazon.com/images/I/51d9A9zl5iL.jpg"
},
{
  id: 27,
  name: "Coconut",
  category: "Fruits",
  price: 50,
  image: "https://images.pexels.com/photos/36063662/pexels-photo-36063662.jpeg"
},
{
  id: 28,
  name: "Lemon",
  category: "Fruits",
  price: 40,
  image: "https://m.media-amazon.com/images/I/51leGwY2FDL.jpg"
},
{
  id: 29,
  name: "Sweet Lime",
  category: "Fruits",
  price: 60,
  image: "https://images.pexels.com/photos/9095452/pexels-photo-9095452.jpeg"
},
{
  id: 30,
  name: "Passion Fruit",
  category: "Fruits",
  price: 270,
  image: "https://images.pexels.com/photos/6332803/pexels-photo-6332803.jpeg"
},
{
  id: 31,
  name: "Apricot",
  category: "Fruits",
  price: 210,
  image: "https://m.media-amazon.com/images/I/5147FwBPm1L._AC_UF894,1000_QL80_.jpg"
},
{
  id: 32,
  name: "Cranberry",
  category: "Fruits",
  price: 240,
  image: "https://images.pexels.com/photos/5418669/pexels-photo-5418669.jpeg"
},
{
  id: 33,
  name: "Mulberry",
  category: "Fruits",
  price: 180,
  image: "https://m.media-amazon.com/images/I/51p1IFR6eSL.jpg"
},
{
  id: 34,
  name: "Dates",
  category: "Fruits",
  price: 160,
  image: "https://m.media-amazon.com/images/I/71JBjo4WwRL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 35,
  name: "Star Fruit",
  category: "Fruits",
  price: 120,
  image: "https://m.media-amazon.com/images/I/61+3KCvQPHL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 36,
  name: "Gooseberry",
  category: "Fruits",
  price: 80,
  image: "https://m.media-amazon.com/images/I/61kkRAMX4xS._AC_UF894,1000_QL80_.jpg"
},
{
  id: 37,
  name: "Tangerine",
  category: "Fruits",
  price: 100,
  image: "https://m.media-amazon.com/images/I/61wbC5Yri-L.jpg"
},
{
  id: 38,
  name: "Clementine",
  category: "Fruits",
  price: 110,
  image: "https://m.media-amazon.com/images/I/51B8Esyj1TL._AC_UF350,350_QL80_.jpg"
},
{
  id: 39,
  name: "Red Grapes",
  category: "Fruits",
  price: 90,
  image: "https://m.media-amazon.com/images/I/81ypWaffKhL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 40,
  name: "Green Grapes",
  category: "Fruits",
  price: 90,
  image: "https://m.media-amazon.com/images/I/81r5J-BZ-UL._AC_UF894,1000_QL80_.jpg"
},
/* Vegetables */

{
  id: 41,
  name: "Tomato",
  category: "Vegetables",
  price: 30,
  image: "https://m.media-amazon.com/images/I/61ZJhcdG7LL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 42,
  name: "Potato",
  category: "Vegetables",
  price: 25,
  image: "https://m.media-amazon.com/images/I/41QKCkQ2A5L.jpg"
},
{
  id: 43,
  name: "Onion",
  category: "Vegetables",
  price: 35,
  image: "https://m.media-amazon.com/images/I/51sOb-ICEuL.jpg"
},
{
  id: 44,
  name: "Carrot",
  category: "Vegetables",
  price: 40,
  image: "https://m.media-amazon.com/images/I/710EvtgG++L._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 45,
  name: "Beetroot",
  category: "Vegetables",
  price: 45,
  image: "https://m.media-amazon.com/images/I/81AMyaOcW3L._AC_UF350,350_QL80_.jpg"
},
{
  id: 46,
  name: "Radish",
  category: "Vegetables",
  price: 30,
  image: "https://m.media-amazon.com/images/I/610QNmGSrvL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 47,
  name: "Cabbage",
  category: "Vegetables",
  price: 35,
  image: "https://images.pexels.com/photos/37744357/pexels-photo-37744357.jpeg"
},
{
  id: 48,
  name: "Cauliflower",
  category: "Vegetables",
  price: 50,
  image: "https://m.media-amazon.com/images/I/6143iZupyQL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 49,
  name: "Broccoli",
  category: "Vegetables",
  price: 80,
  image: "https://images.pexels.com/photos/36071084/pexels-photo-36071084.jpeg"
},
{
  id: 50,
  name: "Spinach",
  category: "Vegetables",
  price: 20,
  image: "https://m.media-amazon.com/images/I/41zkZf9xPdL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 51,
  name: "Kasoori Methi",
  category: "Vegetables",
  price: 20,
  image: "https://m.media-amazon.com/images/I/81M0tOB2RoL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 52,
  name: "Coriander",
  category: "Vegetables",
  price: 15,
  image: "https://m.media-amazon.com/images/I/41oCRXEnZQL.jpg"
},
{
  id: 53,
  name: "Mint Leaves",
  category: "Vegetables",
  price: 15,
  image: "https://m.media-amazon.com/images/I/81Jn9AOliFL.jpg"
},
{
  id: 54,
  name: "Green Chilli",
  category: "Vegetables",
  price: 40,
  image: "https://m.media-amazon.com/images/I/71uG4XJZE+L._AC_UF894,1000_QL80_.jpg"
},
{
  id: 55,
  name: "Capsicum",
  category: "Vegetables",
  price: 60,
  image: "https://m.media-amazon.com/images/I/41dAQYYglyL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 56,
  name: "Brinjal",
  category: "Vegetables",
  price: 35,
  image: "https://m.media-amazon.com/images/I/51XBbkVrvWL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 57,
  name: "lady Finger (Okra)",
  category: "Vegetables",
  price: 40,
  image: "https://m.media-amazon.com/images/I/51yqai2b3nL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 58,
  name: "Cucumber",
  category: "Vegetables",
  price: 30,
  image: "https://m.media-amazon.com/images/I/61CuHdE0obL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 59,
  name: "Bottle Gourd",
  category: "Vegetables",
  price: 35,
  image: "https://images.pexels.com/photos/33211277/pexels-photo-33211277.jpeg"
},
{
  id: 60,
  name: "Ridge Gourd",
  category: "Vegetables",
  price: 40,
  image: "https://images.pexels.com/photos/33778443/pexels-photo-33778443.jpeg"
},
{
  id: 61,
  name: "Bitter Gourd",
  category: "Vegetables",
  price: 45,
  image: "https://m.media-amazon.com/images/I/61d2PKDIsnL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 62,
  name: "Pumpkin",
  category: "Vegetables",
  price: 30,
  image: "https://m.media-amazon.com/images/I/618AXxtzQCL.jpg"
},
{
  id: 63,
  name: "Sweet Potato",
  category: "Vegetables",
  price: 50,
  image: "https://m.media-amazon.com/images/I/61zeL72JcQL.jpg"
},
{
  id: 64,
  name: "Garlic",
  category: "Vegetables",
  price: 80,
  image: "https://m.media-amazon.com/images/I/71KmgOL2q4L.jpg"
},
{
  id: 65,
  name: "Ginger",
  category: "Vegetables",
  price: 50,
  image: "https://m.media-amazon.com/images/I/61n+6FilCnL.jpg"
},
{
  id: 66,
  name: "Green Peas",
  category: "Vegetables",
  price: 60,
  image: "https://m.media-amazon.com/images/I/31GnnFWow6L._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 67,
  name: "Corn",
  category: "Vegetables",
  price: 35,
  image: "https://m.media-amazon.com/images/I/517AaWnYlpL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 68,
  name: "Mushroom",
  category: "Vegetables",
  price: 120,
  image: "https://m.media-amazon.com/images/I/71XMKwfQCzL.jpg"
},
{
  id: 69,
  name: "Lettuce",
  category: "Vegetables",
  price: 50,
  image: "https://m.media-amazon.com/images/I/81qWkG6XTVL.jpg"
},
{
  id: 70,
  name: "Celery",
  category: "Vegetables",
  price: 60,
  image: "https://m.media-amazon.com/images/I/617XoNuZuOL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 71,
  name: "Spring Onion",
  category: "Vegetables",
  price: 40,
  image: "https://m.media-amazon.com/images/I/51HfZ46+FzL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 72,
  name: "Zucchini",
  category: "Vegetables",
  price: 90,
  image: "https://images.pexels.com/photos/13656392/pexels-photo-13656392.jpeg"
},
{
  id: 73,
  name: "Kale",
  category: "Vegetables",
  price: 80,
  image: "https://m.media-amazon.com/images/I/51dlaq2stAL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 74,
  name: "Turnip",
  category: "Vegetables",
  price: 35,
  image: "https://m.media-amazon.com/images/I/41e8Odn353L.jpg"
},
{
  id: 75,
  name: "Drumstick",
  category: "Vegetables",
  price: 50,
  image: "https://m.media-amazon.com/images/I/51Z8jTjmNSL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 76,
  name: "Snake Gourd",
  category: "Vegetables",
  price: 40,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3lrsjUukrbjT4GTBiCzIFcUCdD0_MfIkeQ&s"
},
{
  id: 77,
  name: "Ash Gourd",
  category: "Vegetables",
  price: 35,
  image: "https://plus.unsplash.com/premium_photo-1668363229859-571d01b5a385?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 78,
  name: "Raw Banana",
  category: "Vegetables",
  price: 45,
  image: "https://m.media-amazon.com/images/I/41Y0FNxvffL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 79,
  name: "Red Cabbage",
  category: "Vegetables",
  price: 60,
  image: "https://m.media-amazon.com/images/I/71feo5UT3qL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 80,
  name: "Yellow Capsicum",
  category: "Vegetables",
  price: 70,
  image: "https://m.media-amazon.com/images/I/41ZsVQcKSHL._AC_UF1000,1000_QL80_.jpg"
},
/* Dairy */

{
  id: 81,
  name: "Milk",
  category: "Dairy",
  price: 30,
  image: "https://m.media-amazon.com/images/I/51WmLtStneL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 82,
  name: "Toned Milk",
  category: "Dairy",
  price: 32,
  image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9uZWQlMjBtaWxrfGVufDB8fDB8fHww"
},
{
  id: 83,
  name: "Full Cream Milk",
  category: "Dairy",
  price: 38,
  image: "https://m.media-amazon.com/images/I/71W+RZnbJbL.jpg"
},
{
  id: 84,
  name: "Skimmed Milk",
  category: "Dairy",
  price: 35,
  image: "https://nada.com.sa/wp-content/uploads/2024/12/UHT_Milk-Skimmed-English.jpg"
},
{
  id: 85,
  name: "Curd",
  category: "Dairy",
  price: 40,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KUMfOqoCokh49SXOZtRHO71qUkN3xHZV_g&s"
},
{
  id: 86,
  name: "Yogurt",
  category: "Dairy",
  price: 45,
  image: "https://www.bbassets.com/media/uploads/p/xl/40123244_6-milky-mist-fruit-yoghurt-strawberry.jpg"
},
{
  id: 87,
  name: "Greek Yogurt",
  category: "Dairy",
  price: 90,
  image: "https://epigamiastore.com/cdn/shop/files/GY_400g_Natural_Pack_of_1.png?v=1739179817"
},
{
  id: 88,
  name: "Butter",
  category: "Dairy",
  price: 55,
  image: "https://www.allrecipes.com/thmb/YEHvUygNdvsUwzKttGh314d9n1M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sticks-of-butter-photo-by-twoellis-GettyImages-149134517-resized-3911123142a141eca2340a4bb63e0869.jpg"
},
{
  id: 89,
  name: "Salted Butter",
  category: "Dairy",
  price: 60,
  image: "https://m.media-amazon.com/images/S/aplus-media/sota/95d868ed-6acd-4efc-990f-ee892ff3118d.__CR0,0,970,600_PT0_SX970_V1___.jpg"
},
{
  id: 90,
  name: "Unsalted Butter",
  category: "Dairy",
  price: 60,
  image: "https://neelamfoodlandmumbai.com/cdn/shop/files/20103AMULBUTTERUNSALTED500GM_1.jpg?v=1755381836&width=416"
},
{
  id: 91,
  name: "Cheese",
  category: "Dairy",
  price: 120,
  image: "https://m.media-amazon.com/images/I/61+AzywctoL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 92,
  name: "Cheddar Cheese",
  category: "Dairy",
  price: 150,
  image: "https://m.media-amazon.com/images/I/71MsFFfO+BL.jpg"
},
{
  id: 93,
  name: "Mozzarella Cheese",
  category: "Dairy",
  price: 180,
  image: "https://5.imimg.com/data5/SELLER/Default/2022/3/BA/VN/QF/1442638/40126254-2-1-amul-pizza-cheese-mozzarella-diced.jpg"
},
{
  id: 94,
  name: "Paneer",
  category: "Dairy",
  price: 90,
  image: "https://chennaionlineshopping.in/image/cache/catalog/Products/panner/amul%20panner-800x800.jpg"
},
{
  id: 95,
  name: "Ghee",
  category: "Dairy",
  price: 250,
  image: "https://organictattva.com/cdn/shop/files/1.jpg?v=1760437640"
},
{
  id: 96,
  name: "Cream",
  category: "Dairy",
  price: 70,
  image: "https://m.media-amazon.com/images/I/61Dqy4bMgVL.jpg"
},
{
  id: 97,
  name: "Fresh Cream",
  category: "Dairy",
  price: 85,
  image: "https://m.media-amazon.com/images/I/71xrLO3FK5L._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 98,
  name: "Ice Cream",
  category: "Dairy",
  price: 120,
  image: "https://m.media-amazon.com/images/I/71W+RZnbJbL.jpg"
},
{
  id: 99,
  name: "Vanilla Ice Cream",
  category: "Dairy",
  price: 140,
  image: "https://m.media-amazon.com/images/I/51+NnTLP0-L._AC_UF894,1000_QL80_.jpg"
},
{
  id: 100,
  name: "Chocolate Ice Cream",
  category: "Dairy",
  price: 150,
  image: "https://www.bbassets.com/media/uploads/p/l/40003796_5-amul-real-ice-cream-chocolate-brownie.jpg"
},
{
  id: 101,
  name: "Buttermilk",
  category: "Dairy",
  price: 25,
  image: "https://m.media-amazon.com/images/I/615Npbm4wsL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 102,
  name: "Lassi",
  category: "Dairy",
  price: 35,
  image: "https://m.media-amazon.com/images/I/51TdPCNzFkL.jpg"
},
{
  id: 103,
  name: "Flavored Milk",
  category: "Dairy",
  price: 40,
  image: "https://nagabazaar.com/cdn/shop/files/Smoodh-Chocolate-Milk-Rich-Taste-Flavour-High-In-Calcium-Protein-40x85-ml.jpg?v=1747519889"
},
{
  id: 104,
  name: "Condensed Milk",
  category: "Dairy",
  price: 90,
  image: "https://m.media-amazon.com/images/I/41HeAIZ5YjS._AC_UF894,1000_QL80_.jpg"
},
{
  id: 105,
  name: "Milk Powder",
  category: "Dairy",
  price: 220,
  image: "https://m.media-amazon.com/images/I/91RDzLe9XLL.jpg" 
},
{
  id: 106,
  name: "Sour Cream",
  category: "Dairy",
  price: 95,
  image: "https://i.ebayimg.com/images/g/z0cAAOSwkstmTURh/s-l1200.jpg"
},
{
  id: 107,
  name: "Cottage Cheese",
  category: "Dairy",
  price: 130,
  image: "https://m.media-amazon.com/images/I/81fNs8l3IOL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 108,
  name: "Probiotic Yogurt",
  category: "Dairy",
  price: 110,
  image: "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-04-01/Epigamia_Probiotic_Yogurt_-_Alphonso_Mango_75_g.jpg"
},
{
  id: 109,
  name: "Whipping Cream",
  category: "Dairy",
  price: 140,
  image: "https://m.media-amazon.com/images/I/71BdLEK0VkL.jpg"
},
{
  id: 110,
  name: "Dairy Whitener",
  category: "Dairy",
  price: 180,
  image: "https://m.media-amazon.com/images/I/61gTWwxRR9L._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 111,
  name: "Potato Chips",
  category: "Snacks",
  price: 20,
  image: "https://5.imimg.com/data5/IOS/Default/2021/9/GY/AR/VW/26897356/product-jpeg.png"
},
{
  id: 112,
  name: "Banana Chips",
  category: "Snacks",
  price: 30,
  image: "https://m.media-amazon.com/images/I/41DAJ7+BhPS._SY300_SX300_QL70_FMwebp_.jpg"
},
{
  id: 113,
  name: "Nachos",
  category: "Snacks",
  price: 50,
  image: "https://m.media-amazon.com/images/I/71syW2KpA1L.jpg"
},
{
  id: 114,
  name: "Popcorn",
  category: "Snacks",
  price: 40,
  image: "https://m.media-amazon.com/images/I/81+ZVgOHrJL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 115,
  name: "Salted Peanuts",
  category: "Snacks",
  price: 35,
  image: "https://m.media-amazon.com/images/I/61j28cBVCGL.jpg"
},
{
  id: 116,
  name: "Roasted Peanuts",
  category: "Snacks",
  price: 40,
  image: "https://www.bbassets.com/media/uploads/p/l/40206304_2-haldirams-crushed-peanut.jpg"
},
{
  id: 117,
  name: "Cashews",
  category: "Snacks",
  price: 380,
  image: "https://m.media-amazon.com/images/I/71okGbsfa3L.jpg"
},
{
  id: 118,
  name: "Almonds",
  category: "Snacks",
  price: 320,
  image: "https://images.unsplash.com/photo-1615485737627-627006ab6920?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWxtb25kcyUyMHBhY2tldHxlbnwwfHwwfHx8MA%3D%3D"
},
{
  id: 119,
  name: "Pistachios",
  category: "Snacks",
  price: 360,
  image: "https://images.unsplash.com/photo-1615485925933-379c8b6ad03c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGlzdGFjaGlvc3xlbnwwfHwwfHx8MA%3D%3D"
},
{
  id: 120,
  name: "Trail Mix",
  category: "Snacks",
  price: 550,
  image: "https://plus.unsplash.com/premium_photo-1668677227454-213252229b73?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhaWwlMjBtaXh8ZW58MHx8MHx8fDA%3D"
},
{
  id: 121,
  name: "Cookies",
  category: "Snacks",
  price: 60,
  image: "https://images.unsplash.com/photo-1771580824774-a1910891af35?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29va2llcyUyMHBhY2tldHxlbnwwfHwwfHx8MA%3D%3D"
},
{
  id: 122,
  name: "Chocolate Cookies",
  category: "Snacks",
  price: 90,
  image: "https://media.istockphoto.com/id/104532753/photo/open-packet-of-chocolate-chip-cookies.webp?a=1&b=1&s=612x612&w=0&k=20&c=55to3Q40Y1EXdOH6MfRsgszBhhnZIe7TfUeUpd2Vh_4="
},
{
  id: 123,
  name: "Cream Biscuits",
  category: "Snacks",
  price: 40,
  image: "https://images.unsplash.com/photo-1603423806798-0dd81439e1e3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyZWFtJTIwYmlzY3VpdHMlMjBwYWNrZXRzfGVufDB8fDB8fHww"
},
{
  id: 124,
  name: "Crackers",
  category: "Snacks",
  price: 45,
  image: "https://plus.unsplash.com/premium_photo-1675237626022-b1a09338a57a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JhY2tlcnMlMjBiaXNjdWl0c3xlbnwwfHwwfHx8MA%3D%3D"
},
{
  id: 125,
  name: "Marie Biscuits",
  category: "Snacks",
  price: 25,
  image: "https://media.istockphoto.com/id/1353526712/photo/a-steel-plate-full-of-english-marie-biscuits-with-dark-background-selective-focus.jpg?s=612x612&w=is&k=20&c=iAWMAzqOmSEq8BhJS_FZzthY6gBBTNqccLCOt8VOnsU="
},
{
  id: 126,
  name: "Digestive Biscuits",
  category: "Snacks",
  price: 45,
  image: "https://images.unsplash.com/photo-1725022857876-f3ac4e3aa17f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGlnZXN0aXZlJTIwQmlzY3VpdHN8ZW58MHx8MHx8fDA%3D"
},
{
  id: 127,
  name: "Chocolate Wafer",
  category: "Snacks",
  price: 30,
  image: "https://images.pexels.com/photos/15911875/pexels-photo-15911875.jpeg"
},
{
  id: 128,
  name: "Energy Bar",
  category: "Snacks",
  price: 50,
  image: "https://images.pexels.com/photos/14513406/pexels-photo-14513406.jpeg"
},
{
  id: 129,
  name: "Protein Bar",
  category: "Snacks",
  price: 80,
  image: "https://m.media-amazon.com/images/I/61ubgq-p6EL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 130,
  name: "Corn Puffs",
  category: "Snacks",
  price: 40,
  image: "https://m.media-amazon.com/images/I/51xKXY1jghL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 131,
  name: "Cheese Balls",
  category: "Snacks",
  price: 50,
  image: "https://media.istockphoto.com/id/1221395498/photo/frozen-cheese-balls-in-batter-in-a-plastic-bag-on-white-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=3AGu1ncNEv-iXNQmgn9i1kfpotCHpFRyQ4tRI1bqGk0="
},
{
  id: 132,
  name: "Pretzels",
  category: "Snacks",
  price: 60,
  image: "https://m.media-amazon.com/images/I/81frK35+8JL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 133,
  name: "Murukku",
  category: "Snacks",
  price: 70,
  image: "https://m.media-amazon.com/images/I/61+07Vfa4lL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 134,
  name: "Mixture",
  category: "Snacks",
  price: 60,
  image: "https://m.media-amazon.com/images/I/81VAKEk69yL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 135,
  name: "Sev",
  category: "Snacks",
  price: 50,
  image: "https://m.media-amazon.com/images/I/71qDlDaTU6L._AC_UF894,1000_QL80_.jpg"
},
{
  id: 136,
  name: "Chakli",
  category: "Snacks",
  price: 70,
  image: "https://m.media-amazon.com/images/I/81PoYBliupL._AC_UF350,350_QL80_.jpg"
},
{
  id: 137,
  name: "Samosa",
  category: "Snacks",
  price: 20,
  image: "https://m.media-amazon.com/images/I/718Zf-xYwyL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 138,
  name: "Kachori",
  category: "Snacks",
  price: 25,
  image: "https://m.media-amazon.com/images/I/51F37b92+PL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 139,
  name: "Cotton candy",
  category: "Snacks",
  price: 30,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLsD2XcPcyZjlDHRGEcd_6qUzMHjAiYnhhA&s"
},
{
  id: 140,
  name: "Khakhra",
  category: "Snacks",
  price: 50,
  image: "https://m.media-amazon.com/images/I/91uILcmck0L.jpg"
},
{
  id: 141,
  name: "Mathri",
  category: "Snacks",
  price: 45,
  image: "https://www.bbassets.com/media/uploads/p/l/40077332_2-special-namkeen-mathri.jpg"
},
{
  id: 142,
  name: "Peanut Chikki",
  category: "Snacks",
  price: 35,
  image: "https://farmveda.in/cdn/shop/files/2_f4319785-55d4-41bb-acc1-44673b6bf29d_620x.jpg?v=1762576619"
},
{
  id: 143,
  name: "Dry Fruit Bar",
  category: "Snacks",
  price: 70,
  image: "https://m.media-amazon.com/images/I/81yDXLZnRKL.jpg"
},
{
  id: 144,
  name: "Dark Chocolate Bar",
  category: "Snacks",
  price: 140,
  image: "https://m.media-amazon.com/images/I/61b2Ae0EqML._AC_UF894,1000_QL80_.jpg"
},
{
  id: 145,
  name: "Candy",
  category: "Snacks",
  price: 10,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAq0PikIQUTXGQgBU1DrwUHqlwU-8Mp02pVQ&s"
},
{
  id: 146,
  name: "Gummies",
  category: "Snacks",
  price: 30,
  image: "https://m.media-amazon.com/images/I/81cPpdGzkRL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 147,
  name: "Rice Crackers",
  category: "Snacks",
  price: 50,
  image: "https://m.media-amazon.com/images/I/41FtAnBhLVL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 148,
  name: "Oats Cookies",
  category: "Snacks",
  price: 55,
  image: "https://m.media-amazon.com/images/I/712xLOHNEVL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 149,
  name: "Mini Cupcake",
  category: "Snacks",
  price: 35,
  image: "https://peasandcrayons.com/wp-content/uploads/2024/01/pink-cake-mix-mini-vanilla-cupcakes-recipe-2-500x375.jpg"
},
{
  id: 150,
  name: "Donut",
  category: "Snacks",
  price: 40,
  image: "https://m.media-amazon.com/images/I/61cHrf5vRSL._AC_UF894,1000_QL80_.jpg"
},
/* Drinks */

{
  id: 151,
  name: "Mineral Water",
  category: "Drinks",
  price: 40,
  image: "https://5.imimg.com/data5/SELLER/Default/2026/1/579801674/UW/RN/OH/49320493/mineral-water-bottles.jpeg"
},
{
  id: 152,
  name: "Sparkling Water",
  category: "Drinks",
  price: 110,
  image: "https://m.media-amazon.com/images/I/61SpVer994L._AC_UF350,350_QL80_.jpg"
},
{
  id: 153,
  name: "Coca Cola",
  category: "Drinks",
  price: 40,
  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRs61FqRVMD_odVRlFbGAYOwlzmILoAcYEYw_15ZFvY1TimJrjp12oq-nJs29FfzaaKBnYr67bwEEA3OMH4KL3Qd98_0ne_m7VKSzu9ZAT0CJFnNJV1HNVSAoBVOkrA3iy-_MkK_ik&usqp=CAc"
},
{
  id: 154,
  name: "Pepsi",
  category: "Drinks",
  price: 40,
  image: "https://m.media-amazon.com/images/I/61rmYnJvWzL.jpg"
},
{
  id: 155,
  name: "Sprite",
  category: "Drinks",
  price: 40,
  image: "https://m.media-amazon.com/images/I/71doy6em4jL.jpg"
},
{
  id: 156,
  name: "Fanta",
  category: "Drinks",
  price: 40,
  image: "https://m.media-amazon.com/images/I/615u1d85kCL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 157,
  name: "Limca",
  category: "Drinks",
  price: 40,
  image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/12/20/0244056c-5539-4467-ae5a-1a5d300323bd_1896_3.png"
},
{
  id: 158,
  name: "Mountain Dew",
  category: "Drinks",
  price: 45,
  image: "https://m.media-amazon.com/images/I/81aUQBuLk8L.jpg"
},
{
  id: 159,
  name: "diet Coke",
  category: "Drinks",
  price: 60,
  image: "https://m.media-amazon.com/images/I/51Pl42aKWEL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 160,
  name: "Mango Juice",
  category: "Drinks",
  price: 60,
  image: "https://storage.googleapis.com/shy-pub/330294/1704025324420_SKU-1336_0.png"
},
{
  id: 161,
  name: "Apple Juice",
  category: "Drinks",
  price: 60,
  image: "https://tandobeverage.com/wp-content/uploads/apple-juice.jpg"
},
{
  id: 162,
  name: "Grape Juice",
  category: "Drinks",
  price: 60,
  image: "https://vaya.in/recipes/wp-content/uploads/2018/02/Grape-Juice.jpg"
},
{
  id: 163,
  name: "Mixed Fruit Juice",
  category: "Drinks",
  price: 70,
  image: "https://4.imimg.com/data4/XB/FG/MY-31657999/mix-fruit-juice-500x500.jpg"
},
{
  id: 164,
  name: "Coconut Water",
  category: "Drinks",
  price: 40,
  image: "https://m.media-amazon.com/images/I/81AeAj-oA6L._AC_UF350,350_QL80_.jpg"
},
{
  id: 165,
  name: "Lemon Juice",
  category: "Drinks",
  price: 50,
  image: "https://m.media-amazon.com/images/I/61EOq8-7UhL._AC_UF350,350_QL80_.jpg"
},
{
  id: 166,
  name: "Monster Drink",
  category: "Drinks",
  price: 250,
  image: "https://m.media-amazon.com/images/I/51E6iD7tCMS.jpg"
},
{
  id: 167,
  name: "Sports Drink",
  category: "Drinks",
  price: 190,
  image: "https://m.media-amazon.com/images/I/71QKr98XL+L._AC_UF894,1000_QL80_.jpg"
},
{
  id: 168,
  name: "Green Tea",
  category: "Drinks",
  price: 180,
  image: "https://m.media-amazon.com/images/I/61bJVkkSusL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 169,
  name: "Black Tea",
  category: "Drinks",
  price: 130,
  image: "https://shop.chaipoint.com/cdn/shop/files/TeaBagsListingImages-06.jpg?v=1694163500"
},
{
  id: 170,
  name: "Iced Tea",
  category: "Drinks",
  price:130,
  image: "https://m.media-amazon.com/images/I/81kJkdhO9nL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 171,
  name: "Coffee",
  category: "Drinks",
  price: 120,
  image: "https://m.media-amazon.com/images/I/71oHXR1wTJL.jpg"
},
{
  id: 172,
  name: "Cold Coffee",
  category: "Drinks",
  price: 140,
  image: "https://m.media-amazon.com/images/I/717Z8Pec5SL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 173,
  name: "Milkshake",
  category: "Drinks",
  price: 100,
  image: "https://m.media-amazon.com/images/I/71vxV9m3XeL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 174,
  name: "Chocolate Milkshake",
  category: "Drinks",
  price: 120,
  image: "https://www.hersheyland.in/content/dam/Hersheyland_India/en_in/products/milkshakes/milkshake-chooclate-180ml-FOP.png"
},
{
  id: 175,
  name: "Strawberry Milkshake",
  category: "Drinks",
  price: 120,
  image: "https://www.hersheyland.in/content/dam/Hersheyland_India/en_in/products/milkshakes/milkshake-strawberry-180ml-FOP.png"
},
{
  id: 176,
  name: "Protein Shake",
  category: "Drinks",
  price: 180,
  image: "https://www.myprotein.co.in/images?url=https://static.thcdn.com/productimg/original/16155527-1525217854254107.jpg&format=webp&auto=avif&crop=900,900,smart"
},
{
  id: 177,
  name: "Almond Milk",
  category: "Drinks",
  price: 240,
  image: "https://m.media-amazon.com/images/I/81-AmLzPlbL.jpg"
},
{
  id: 178,
  name: "Soy Milk",
  category: "Drinks",
  price: 320,
  image: "https://veganday.in/cdn/shop/files/Jar_Variant_MM_5_9296911e-0b33-4512-b290-3846de199d86.png?v=1776506983"
},
{
  id: 179,
  name: "Oat Milk",
  category: "Drinks",
  price: 440,
  image: "https://dancingcow.in/cdn/shop/files/4_6d04c3f3-a936-4e29-b53a-25523e0f5216.png?v=1768812094"
},
{
  id: 180,
  name: "Smoothie",
  category: "Drinks",
  price: 210,
  image: "https://5.imimg.com/data5/SELLER/Default/2023/2/XU/CH/QJ/117156741/chocolate-smoothie-flavoured-milk.jpg"
},
{
  id: 181,
  name: "Banana Smoothie",
  category: "Drinks",
  price: 210,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NC4csR0IpPpC8AG_0ynDpYbtkfJDwJN5rQ&s"
},
{
  id: 182,
  name: "Berry Smoothie",
  category: "Drinks",
  price: 650,
  image: "https://m.media-amazon.com/images/I/71UWEFfVyeL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 183,
  name: "Hot Chocolate",
  category: "Drinks",
  price: 220,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMVmyS-MIpwBRpLPjlPjqnTNVnGXq-zl-Zg&s"
},
{
  id: 184,
  name: "Ginger Tea",
  category: "Drinks",
  price: 70,
  image: "https://m.media-amazon.com/images/I/719uiDDuDYL.jpg"
},
{
  id: 185,
  name: "Herbal Tea",
  category: "Drinks",
  price: 90,
  image: "https://m.media-amazon.com/images/I/61lDzEQlACL._AC_UF894,1000_QL80_.jpg"
},

/* Bakery */

{
  id: 186,
  name: "White Bread",
  category: "Bakery",
  price: 40,
  image: "https://m.media-amazon.com/images/I/713ygtL7QiL.jpg"
},
{
  id: 187,
  name: "Brown Bread",
  category: "Bakery",
  price: 45,
  image: "https://m.media-amazon.com/images/I/71zLJqDIGTL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 188,
  name: "Multigrain Bread",
  category: "Bakery",
  price:130,
  image: "https://m.media-amazon.com/images/I/71xCwxIDhTL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 189,
  name: "Garlic Bread",
  category: "Bakery",
  price: 80,
  image: "https://m.media-amazon.com/images/I/61a+JKvDD5L.jpg"
},
{
  id: 190,
  name: "Burger Bun",
  category: "Bakery",
  price: 45,
  image: "https://m.media-amazon.com/images/I/719cD5dMMfL.jpg"
},
{
  id: 191,
  name: "Hot Dog Bun",
  category: "Bakery",
  price: 65,
  image: "https://m.media-amazon.com/images/I/51BH6P0XN8L.jpg"
},
{
  id: 192,
  name: "Croissant",
  category: "Bakery",
  price: 70,
  image: "https://m.media-amazon.com/images/I/71s3Vi-JAPL.jpg"
},
{
  id: 193,
  name: "Muffin",
  category: "Bakery",
  price: 50,
  image: "https://m.media-amazon.com/images/I/71YGuz88o4L.jpg"
},
{
  id: 194,
  name: "Chocolate Muffin",
  category: "Bakery",
  price: 60,
  image: "https://m.media-amazon.com/images/I/71YGuz88o4L.jpg"
},
{
  id: 195,
  name: "Cupcake",
  category: "Bakery",
  price: 40,
  image: "https://tiimg.tistatic.com/fp/1/007/406/multi-flavor-and-multi-shape-cup-cake-packaging-type-box-422.jpg"
},
{
  id: 196,
  name: "Vanilla Cake",
  category: "Bakery",
  price: 250,
  image: "https://5.imimg.com/data5/SELLER/Default/2025/2/490999123/MK/XA/WZ/39801536/vanilla-cupcakes.jpg"
},
{
  id: 197,
  name: "Chocolate Cake",
  category: "Bakery",
  price: 300,
  image: "https://m.media-amazon.com/images/I/71O73pEEMDL.jpg"
},
{
  id: 198,
  name: "Fruit Cake",
  category: "Bakery",
  price: 280,
  image: "https://m.media-amazon.com/images/I/61jgaxBM6CL.jpg"
},
{
  id: 199,
  name: "Donut",
  category: "Bakery",
  price: 50,
  image: "https://m.media-amazon.com/images/I/81wQM2rK94L._AC_UF350,350_QL80_.jpg"
},
{
  id: 200,
  name: "Danish Pastry",
  category: "Bakery",
  price: 80,
  image: "https://m.media-amazon.com/images/I/818rDWsDFmL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 201,
  name: "Cinnamon Roll",
  category: "Bakery",
  price: 90,
  image: "https://www.bbassets.com/media/uploads/p/l/40203031_2-the-bakers-dozen-cinnamon-rolls.jpg"
},
{
  id: 202,
  name: "Bagel",
  category: "Bakery",
  price: 60,
  image: "https://m.media-amazon.com/images/I/61Cpll4dkVL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 203,
  name: "Breadsticks",
  category: "Bakery",
  price: 70,
  image: "https://5.imimg.com/data5/SELLER/Default/2024/3/398725116/QH/UJ/MB/26558154/soup-sticks-250x250.jpg"
},
{
  id: 204,
  name: "Swiss Roll",
  category: "Bakery",
  price: 120,
  image: "https://m.media-amazon.com/images/I/81rACHB-2GL.jpg"
},
{
  id: 205,
  name: "Puff Pastry",
  category: "Bakery",
  price: 60,
  image: "https://m.media-amazon.com/images/I/71E2nqbRM6L.jpg"
},

/* Household */

{
  id: 206,
  name: "Dishwash Liquid",
  category: "Household",
  price: 199,
  image: "https://m.media-amazon.com/images/I/7137B8hib1L._AC_UF350,350_QL80_.jpg"
},
{
  id: 207,
  name: "Laundry Detergent",
  category: "Household",
  price: 199,
  image: "https://m.media-amazon.com/images/I/81qUYLsu2bL.jpg"
},
{
  id: 208,
  name: "Fabric Softener",
  category: "Household",
  price: 180,
  image: "https://m.media-amazon.com/images/I/81hjfHDwDXL.jpg"
},
{
  id: 209,
  name: "Floor Cleaner",
  category: "Household",
  price: 150,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEazYdFHUvbSQhLXXEp7ytjd0UqpqbCMbI6w&s"
},
{
  id: 210,
  name: "Toilet Cleaner",
  category: "Household",
  price: 240,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6asXYQZbY0URTL-70fUEhyzWVx7DMIBRt9g&s"
},
{
  id: 211,
  name: "Glass Cleaner",
  category: "Household",
  price: 120,
  image: "https://m.media-amazon.com/images/I/614Y+uBNiYL.jpg"
},
{
  id: 212,
  name: "Hand Wash",
  category: "Household",
  price: 90,
  image: "https://5.imimg.com/data5/SELLER/Default/2021/6/ON/PN/SE/128766901/pp-500x500.jpg"
},
{
  id: 213,
  name: "Hand Sanitizer",
  category: "Household",
  price: 80,
  image: "https://m.media-amazon.com/images/I/717SevxRjsL.jpg"
},
{
  id: 214,
  name: "Bath Soap",
  category: "Household",
  price: 45,
  image: "https://m.media-amazon.com/images/I/61BBoZ3rhsL.jpg"
},
{
  id: 215,
  name: "Shampoo",
  category: "Household",
  price: 245,
  image: "https://nathabit.in/_nat/images/PDP_Castor_blackseed_1_b5fddae5c0.jpg?format=auto&width=1920&quality=75&f=n"
},
{
  id: 216,
  name: "Conditioner",
  category: "Household",
  price: 320,
  image: "https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/products/hair-care/conditioner/everpure-moisture-conditioner/moisture-conditioner/loreal-haircare-everpure-moisture-conditioner-71249341254-av1-v2-min.png"
},
{
  id: 217,
  name: "Toothpaste",
  category: "Household",
  price: 90,
  image: "https://m.media-amazon.com/images/I/71NE2o55PhL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 218,
  name: "Toothbrush",
  category: "Household",
  price: 40,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWc_ed7Yoi1sJkwRZKl7cJI2sQO5mXo8e9dQ&s"
},
{
  id: 219,
  name: "Tissue Paper",
  category: "Household",
  price: 70,
  image: "https://m.media-amazon.com/images/I/71UxyvXl-ML._AC_UF894,1000_QL80_.jpg"
},
{
  id: 220,
  name: "Paper Towels",
  category: "Household",
  price: 120,
  image: "https://m.media-amazon.com/images/I/71UxyvXl-ML._AC_UF894,1000_QL80_.jpg"
},
{
  id: 221,
  name: "Garbage Bags",
  category: "Household",
  price: 90,
  image: "https://m.media-amazon.com/images/I/71reG0GIchL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 222,
  name: "Aluminum Foil",
  category: "Household",
  price: 110,
  image: "https://m.media-amazon.com/images/I/71jLvYP0kKL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 223,
  name: "Plastic Wrap",
  category: "Household",
  price: 80,
  image: "https://m.media-amazon.com/images/I/3150iGx-UtL._AC_UF894,1000_QL80_.jpg"
},
{
  id: 224,
  name: "Air Freshener",
  category: "Household",
  price: 160,
  image: "https://m.media-amazon.com/images/I/714YnxXRqXL._AC_UF1000,1000_QL80_.jpg"
},
{
  id: 225,
  name: "Mosquito Repellent",
  category: "Household",
  price: 140,
  image: "https://m.media-amazon.com/images/I/61CzgH+vqSL._AC_UF1000,1000_QL80_.jpg"
}
];
export default products;