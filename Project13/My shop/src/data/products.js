const products = [
  { id: 1, name: "iPhone 15", price: 999, company: "Apple", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500" },
  { id: 2, name: "Galaxy S24", price: 899, company: "Samsung", image: "https://images.unsplash.com/photo-1715014798363-2287cf1cf3ec?w=500" },
  { id: 3, name: "Pixel 9", price: 799, company: "Google", image: "https://images.unsplash.com/photo-1725515797302-36c1b69f65fc?w=500" },
  { id: 4, name: "OnePlus 13", price: 749, company: "OnePlus", image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg" },
  { id: 5, name: "Xiaomi 15", price: 699, company: "Xiaomi", image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15.jpg" },
  { id: 6, name: "Nothing Phone 3", price: 649, company: "Nothing", image: "https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2.jpg" }, // Used high-quality predecessor/brand asset

  { id: 7, name: "MacBook Air M4", price: 1299, company: "Apple", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500" },
  { id: 8, name: "MacBook Pro 16", price: 2499, company: "Apple", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500" },
  { id: 9, name: "Dell XPS 15", price: 1899, company: "Dell", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500" },
  { id: 10, name: "ThinkPad X1 Carbon", price: 1699, company: "Lenovo", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500" },
  { id: 11, name: "ROG Strix G16", price: 1799, company: "ASUS", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500" },
  { id: 12, name: "HP Spectre x360", price: 1599, company: "HP", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500" },

  { id: 13, name: "iPad Pro", price: 1099, company: "Apple", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500" },
  { id: 14, name: "Galaxy Tab S10", price: 899, company: "Samsung", image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s10-ultra.jpg" },
  { id: 15, name: "Lenovo Tab Extreme", price: 749, company: "Lenovo", image: "https://fdn2.gsmarena.com/vv/bigpic/lenovo-tab-extreme.jpg" },
  { id: 16, name: "Xiaomi Pad 7", price: 499, company: "Xiaomi", image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-pad-7-pro.jpg" },

  { id: 17, name: "Apple Watch Ultra 2", price: 799, company: "Apple", image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500" },
  { id: 18, name: "Apple Watch Series 10", price: 499, company: "Apple", image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=500" },
  { id: 19, name: "Galaxy Watch 7", price: 399, company: "Samsung", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500" },
  { id: 20, name: "Pixel Watch 3", price: 349, company: "Google", image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-3.jpg" },
  { id: 21, name: "Garmin Fenix 8", price: 899, company: "Garmin" , image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: 22, name: "Amazfit GTR 4", price: 199, company: "Amazfit", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500" },

  { id: 23, name: "AirPods Pro 2", price: 249, company: "Apple", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500" },
  { id: 24, name: "Galaxy Buds 3 Pro", price: 229, company: "Samsung", image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-buds3-pro.jpg" },
  { id: 25, name: "Sony WF-1000XM5", price: 299, company: "Sony", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500" },
  { id: 26, name: "Nothing Ear", price: 149, company: "Nothing", image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500" },
  { id: 27, name: "JBL Tune Beam", price: 99, company: "JBL", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500" },
  { id: 28, name: "Anker Soundcore Liberty 4", price: 129, company: "Anker", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500" },

  { id: 29, name: "Sony WH-1000XM5", price: 399, company: "Sony", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500" },
  { id: 30, name: "AirPods Max", price: 549, company: "Apple", image: "https://images.unsplash.com/photo-1628202926206-c63a34b1e68f?w=500" },
  { id: 31, name: "Bose QuietComfort Ultra", price: 429, company: "Bose", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500" },
  { id: 32, name: "JBL Live 770NC", price: 199, company: "JBL", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },

  { id: 33, name: "PlayStation 5", price: 499, company: "Sony", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500" },
  { id: 34, name: "Xbox Series X", price: 499, company: "Microsoft", image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=500" },
  { id: 35, name: "Nintendo Switch OLED", price: 349, company: "Nintendo", image: "https://images.unsplash.com/photo-1568632234165-4fbb296f8c70?w=500" },
  { id: 36, name: "Steam Deck OLED", price: 549, company: "Valve", image: "https://images.unsplash.com/photo-1678128956920-fe154cc62a1c?w=500" },

  { id: 37, name: "Logitech G Pro X Mouse", price: 129, company: "Logitech", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500" },
  { id: 38, name: "Razer DeathAdder V3", price: 149, company: "Razer", image: "https://images.unsplash.com/photo-1625842268584-8f3290363326?w=500" },
  { id: 39, name: "Keychron K8", price: 99, company: "Keychron", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500" },
  { id: 40, name: "SteelSeries Apex Pro", price: 199, company: "SteelSeries", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500" },

  { id: 41, name: "Canon EOS R8", price: 1499, company: "Canon", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500" },
  { id: 42, name: "Sony A7 IV", price: 2499, company: "Sony", image: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=500" },
  { id: 43, name: "GoPro Hero 13", price: 399, company: "GoPro", image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500" },
  { id: 44, name: "DJI Osmo Pocket 3", price: 519, company: "DJI", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500" },

  { id: 45, name: "Samsung Smart TV 55", price: 699, company: "Samsung", image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500" },
  { id: 46, name: "LG OLED C4", price: 1499, company: "LG", image: "https://images.unsplash.com/photo-1558885561-56c2a0e975ce?w=500" },
  { id: 47, name: "Xiaomi TV A Pro", price: 599, company: "Xiaomi", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500" },

  { id: 48, name: "Amazon Echo Dot", price: 49, company: "Amazon", image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500" },
  { id: 49, name: "Google Nest Hub", price: 99, company: "Google", image: "https://images.unsplash.com/photo-1568910169355-1c31f5994e8a?w=500" },
  { id: 50, name: "Apple HomePod Mini", price: 99, company: "Apple", image: "https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?w=500" },

  { id: 51, name: "Anker Power Bank 20000mAh", price: 59, company: "Anker", image: "https://images.unsplash.com/photo-1609592424087-0fb845348ff9?w=500" },
  { id: 52, name: "Samsung T9 SSD 1TB", price: 129, company: "Samsung", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500" },
  { id: 53, name: "SanDisk Extreme SSD", price: 119, company: "SanDisk", image: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?w=500" },
  { id: 54, name: "TP-Link Archer AX55", price: 139, company: "TP-Link", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500" },
  { id: 55, name: "ASUS RT-AX86U", price: 249, company: "ASUS", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" }
];

export default products;