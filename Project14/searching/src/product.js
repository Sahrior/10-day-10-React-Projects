const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Smartphone",
    brand: "Apple",
    price: 1199,
    oldPrice: 1299,
    discount: 8,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc",
    rating: 4.8,
    reviews: 245,
    stock: 15,
    colors: ["Black", "Blue", "Titanium"],
    description: "Premium smartphone with A17 Pro chip and 48MP camera.",
    features: ["5G", "Face ID", "USB-C"],
    warranty: "1 Year",
    shipping: "Free Delivery",
    isFeatured: true
  },

  {
    id: 2,
    name: "Samsung Galaxy S25 Ultra",
    category: "Smartphone",
    brand: "Samsung",
    price: 1099,
    oldPrice: 1199,
    discount: 10,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    rating: 4.7,
    reviews: 320,
    stock: 20,
    colors: ["Black", "Silver"],
    description: "Flagship Android phone with AI features.",
    features: ["200MP Camera", "S Pen", "5G"],
    warranty: "1 Year",
    shipping: "Free Delivery",
    isFeatured: true
  },

  {
    id: 3,
    name: "MacBook Pro M4",
    category: "Laptop",
    brand: "Apple",
    price: 1999,
    oldPrice: 2199,
    discount: 9,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    rating: 4.9,
    reviews: 500,
    stock: 8,
    colors: ["Space Gray"],
    description: "Powerful laptop for developers and creators.",
    features: ["M4 Chip", "16GB RAM", "512GB SSD"],
    warranty: "1 Year",
    shipping: "Free Delivery",
    isFeatured: true
  },


  {
    id: 4,
    name: "Dell XPS 15",
    category: "Laptop",
    brand: "Dell",
    price: 1499,
    oldPrice: 1699,
    discount: 12,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
    rating: 4.6,
    reviews: 190,
    stock: 12,
    colors: ["Silver"],
    description: "Professional Windows laptop.",
    features: ["Intel i7", "16GB RAM", "OLED"],
    warranty: "1 Year",
    shipping: "Free Delivery"
  },


  {
    id: 5,
    name: "Sony WH-1000XM5",
    category: "Headphone",
    brand: "Sony",
    price: 349,
    oldPrice: 399,
    discount: 12,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    rating: 4.9,
    reviews: 900,
    stock: 30,
    colors:["Black","White"],
    description:"Noise cancelling wireless headphone.",
    features:["ANC","Bluetooth","30h Battery"],
    warranty:"1 Year",
    shipping:"Free Delivery"
  },


  {
    id: 6,
    name:"Nike Air Max",
    category:"Shoes",
    brand:"Nike",
    price:150,
    oldPrice:180,
    discount:17,
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    rating:4.7,
    reviews:600,
    stock:50,
    colors:["Red","Black"],
    sizes:[39,40,41,42,43],
    description:"Comfort running shoes.",
    features:["Lightweight","Sport"],
    warranty:"6 Months"
  },


  {
    id:7,
    name:"Canon EOS R6 Camera",
    category:"Camera",
    brand:"Canon",
    price:1799,
    oldPrice:1999,
    discount:10,
    image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    rating:4.8,
    reviews:300,
    stock:10,
    description:"Professional mirrorless camera.",
    features:["4K Video","Full Frame"],
    warranty:"1 Year"
  },


  {
    id:8,
    name:"Apple Watch Series 10",
    category:"Smart Watch",
    brand:"Apple",
    price:399,
    oldPrice:449,
    discount:11,
    image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    rating:4.7,
    reviews:450,
    stock:25,
    colors:["Black","Gold"],
    features:["Heart Monitor","GPS"],
    warranty:"1 Year"
  },


  {
    id:9,
    name:"PlayStation 5",
    category:"Gaming",
    brand:"Sony",
    price:499,
    oldPrice:549,
    discount:9,
    image:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    rating:4.9,
    reviews:1200,
    stock:5,
    features:["4K Gaming","SSD"],
    warranty:"1 Year"
  },


  {
    id:10,
    name:"Xbox Series X",
    category:"Gaming",
    brand:"Microsoft",
    price:499,
    image:"https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
    rating:4.8,
    reviews:800,
    stock:7,
    features:["4K","120FPS"],
    warranty:"1 Year"
  },


  {
    id:11,
    name:"Logitech MX Master 3",
    category:"Accessories",
    brand:"Logitech",
    price:99,
    image:"https://images.unsplash.com/photo-1527814050087-3793815479db",
    rating:4.7,
    reviews:600,
    stock:100,
    features:["Wireless","Ergonomic"]
  },


  {
    id:12,
    name:"Mechanical Keyboard",
    category:"Accessories",
    brand:"Keychron",
    price:89,
    image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    rating:4.6,
    reviews:220,
    stock:60,
    features:["RGB","Hot Swap"]
  },


  {
    id:13,
    name:"Samsung 4K Monitor",
    category:"Monitor",
    brand:"Samsung",
    price:399,
    image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    rating:4.5,
    reviews:180,
    stock:20,
    features:["4K","HDR"]
  },


  {
    id:14,
    name:"AirPods Pro 2",
    category:"Earbuds",
    brand:"Apple",
    price:249,
    image:"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434",
    rating:4.8,
    reviews:900,
    stock:40,
    features:["ANC","Wireless"]
  },


  {
    id:15,
    name:"Kindle Paperwhite",
    category:"Tablet",
    brand:"Amazon",
    price:139,
    image:"https://images.unsplash.com/photo-1592496001020-d31bd830651f",
    rating:4.7,
    reviews:350,
    stock:35,
    features:["E-Ink","Waterproof"]
  },


  {
    id:16,
    name:"GoPro Hero 13",
    category:"Camera",
    brand:"GoPro",
    price:399,
    image:"https://images.unsplash.com/photo-1564466809058-bf4114d55352",
    rating:4.6,
    reviews:200,
    stock:15,
    features:["Action Camera","5K Video"]
  },


  {
    id:17,
    name:"Adidas Running Shoes",
    category:"Shoes",
    brand:"Adidas",
    price:120,
    image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    rating:4.5,
    reviews:450,
    stock:70,
    features:["Comfort","Sports"]
  },


  {
    id:18,
    name:"JBL Bluetooth Speaker",
    category:"Speaker",
    brand:"JBL",
    price:129,
    image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    rating:4.7,
    reviews:700,
    stock:55,
    features:["Bass","Waterproof"]
  },


  {
    id:19,
    name:"Dyson Vacuum Cleaner",
    category:"Home Appliance",
    brand:"Dyson",
    price:599,
    image:"https://images.unsplash.com/photo-1558317374-067fb5f30001",
    rating:4.6,
    reviews:300,
    stock:18,
    features:["Powerful Suction"]
  },


  {
    id:20,
    name:"Gaming Chair",
    category:"Furniture",
    brand:"Secretlab",
    price:399,
    image:"https://images.unsplash.com/photo-1598550476439-6847785fcea6",
    rating:4.7,
    reviews:250,
    stock:25,
    features:["Ergonomic","Adjustable"]
  }
];

export default products