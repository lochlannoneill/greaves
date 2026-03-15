import p1_i1 from "./images/p1_i1.png";
import p1_i2 from "./images/p1_i2.png";
import p1_i3 from "./images/p1_i3.png";
import p1_i4 from "./images/p1_i4.png";
import p1_i5 from "./images/p1_i5.png";
import p2_img from "./images/product_2.png";
import p3_img from "./images/product_3.png";
import p4_img from "./images/product_4.png";
import p5_img from "./images/product_5.png";
import p6_img from "./images/product_6.png";
import p7_img from "./images/product_7.png";
import p8_img from "./images/product_8.png";
import p9_img from "./images/product_9.png";
import p10_img from "./images/product_10.png";
import p11_img from "./images/product_11.png";
import p12_img from "./images/product_12.png";
import p13_img from "./images/product_13.png";
import p14_img from "./images/product_14.png";
import p15_img from "./images/product_15.png";
import p16_img from "./images/product_16.png";
import p17_img from "./images/product_17.png";
import p18_img from "./images/product_18.png";
import p19_img from "./images/product_19.png";
import p20_img from "./images/product_20.png";
import p21_img from "./images/product_21.png";
import p22_img from "./images/product_22.png";
import p23_img from "./images/product_23.png";
import p24_img from "./images/product_24.png";
import p25_img from "./images/product_25.png";
import p26_img from "./images/product_26.png";
import p27_img from "./images/product_27.png";
import p28_img from "./images/product_28.png";
import p29_img from "./images/product_29.png";
import p30_img from "./images/product_30.png";
import p31_img from "./images/product_31.png";
import p32_img from "./images/product_32.png";
import p33_img from "./images/product_33.png";
import p34_img from "./images/product_34.png";
import p35_img from "./images/product_35.png";
import p36_img from "./images/product_36.png";
import p37_img from "./images/product_37.png";
import p38_img from "./images/product_38.png";
import p39_img from "./images/product_39.png";
import p40_img from "./images/product_40.png";
import p41_img from "./images/product_41.png";
import p42_img from "./images/product_42.png";
import p43_img from "./images/product_43.jpg";

let products = [
  {
    id: 1,
    title: "Long Sleeved Knit Sweater",
    images: [p1_i1, p1_i2, p1_i3, p1_i4, p1_i5],
    description:
      "Stay cozy and stylish during the colder months with this striped knit sweater. Made from soft and warm fabric, it features a timeless striped pattern that adds a touch of sophistication to any outfit.",
    tags: ["new", "popular", "modern", "elegant", "knit", "cozy"],
    category: "women",
    rating: 4.0,
    stock: {
      "Rust": {
        small: 3,
        medium: 5,
        large: 2,
        xlarge: 0,
        xxlarge: 0
      },
      "Cream": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Charcoal": {
        small: 0,
        medium: 4,
        large: 6,
        xlarge: 3,
        xxlarge: 0
      },
      "Navy": {
        small: 0,
        medium: 0,
        large: 2,
        xlarge: 1,
        xxlarge: 0
      }
    },
    price: 49.99,
    price_previous: 69.99,
  },
  {
    id: 2,
    title: "Suede Checkered Overshirt",
    images: [p5_img],
    description:
      "Layer up in style with this suede checkered overshirt. The soft-touch suede fabric gives it a premium feel, while the classic checkered pattern adds a laid-back, fashionable edge. Perfect as a light jacket or a statement layering piece for transitional weather.",
    tags: ["popular", "modern", "latest", "modern", "cozy"],
    category: "women",
    rating: 3.5,
    stock: {
      "Brown": {
        small: 24,
        medium: 25,
        large: 17,
        xlarge: 19,
        xxlarge: 14
      },
      "Forest Green": {
        small: 14,
        medium: 15,
        large: 19,
        xlarge: 8,
        xxlarge: 6
      },
      "Burgundy": {
        small: 18,
        medium: 37,
        large: 29,
        xlarge: 10,
        xxlarge: 8
      }
    },
    price: 45.99,
  },
  {
    id: 3,
    title: "Long Botton-Sleeve Dress",
    images: [p3_img],
    description:
      "Stay effortlessly cool with this timeless denim button-up shirt. Crafted with high-quality denim fabric, it offers both style and comfort. Pair it with your favorite jeans for a classic double denim look.",
    tags: ["popular", "denim", "button-up", "casual", "modern"],
    category: "women",
    rating: 4.5,
    stock: {
      "Burgundy": {
        small: 18,
        medium: 20,
        large: 35,
        xlarge: 12,
        xxlarge: 6
      },
      "Olive": {
        small: 8,
        medium: 22,
        large: 29,
        xlarge: 9,
        xxlarge: 18
      },
      "Maroon": {
        small: 18,
        medium: 18,
        large: 34,
        xlarge: 24,
        xxlarge: 13
      }
    },
    price: 39.99,
  },
  {
    id: 4,
    title: "Loose Denim Jeans with Folded Hem",
    images: [p4_img],
    description:
      "These loose-fit denim jeans offer a relaxed, comfortable silhouette with a signature folded hem for a touch of casual flair. Made from durable, high-quality denim with just the right amount of stretch, they pair effortlessly with sneakers or boots for an everyday look.",
    tags: ["modern", "latest", "elegant", "knit"],
    category: "women",
    rating: 3.5,
    stock: {
      "Dark Wash": {
        small: 15,
        medium: 35,
        large: 14,
        xlarge: 19,
        xxlarge: 15
      },
      "Medium Wash": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Light Wash": {
        small: 10,
        medium: 31,
        large: 15,
        xlarge: 5,
        xxlarge: 13
      }
    },
    price: 99.99,
    price_previous: 120.5,
  },
  {
    id: 5,
    title: "Heavy Knit Tutleneck Sweater",
    images: [p12_img],
    description:
      "Stay warm in this heavy-knit turtleneck sweater, crafted from thick, cozy yarn for maximum insulation. The chunky knit texture adds visual depth, while the classic turtleneck design keeps you sheltered from cold winds. A timeless winter wardrobe essential.",
    tags: ["new", "modern", "latest"],
    category: "women",
    rating: 3.5,
    stock: {
      "Forest Green": {
        small: 4,
        medium: 4,
        large: 0,
        xlarge: 4,
        xxlarge: 4
      },
      "Oatmeal": {
        small: 1,
        medium: 3,
        large: 1,
        xlarge: 3,
        xxlarge: 3
      },
      "Black": {
        small: 1,
        medium: 0,
        large: 3,
        xlarge: 3,
        xxlarge: 3
      },
      "Wine": {
        small: 4,
        medium: 1,
        large: 2,
        xlarge: 3,
        xxlarge: 3
      }
    },
    price: 99.99,
    price_previous: 110.99,
  },
  {
    id: 6,
    title: "Knit Tunic Sweater",
    images: [p6_img],
    description:
      "This knit tunic sweater combines comfort with a flattering longer length that pairs beautifully with leggings or skinny jeans. The soft, breathable knit fabric drapes elegantly, making it ideal for both relaxed weekends and polished casual outings.",
    tags: ["popular", "modern", "elegant", "latest"],
    category: "women",
    rating: 3.5,
    stock: {
      "Heather Gray": {
        small: 17,
        medium: 37,
        large: 32,
        xlarge: 21,
        xxlarge: 7
      },
      "Dusty Rose": {
        small: 22,
        medium: 18,
        large: 34,
        xlarge: 8,
        xxlarge: 8
      },
      "Ivory": {
        small: 8,
        medium: 34,
        large: 22,
        xlarge: 8,
        xxlarge: 10
      }
    },
    price: 76.99,
  },
  {
    id: 7,
    title: "Plunging V-Neck Sweater",
    images: [p7_img],
    description:
      "Make a statement with this plunging V-neck sweater, designed to add a bold yet sophisticated touch to your outfit. The deep neckline is perfect for layering over a camisole or wearing on its own for a confident look. Soft knit fabric ensures all-day comfort.",
    tags: ["popular", "modern", "latest", "cozy"],
    category: "women",
    rating: 3.5,
    stock: {
      "Camel": {
        small: 15,
        medium: 11,
        large: 10,
        xlarge: 16,
        xxlarge: 0
      },
      "Burgundy": {
        small: 0,
        medium: 0,
        large: 20,
        xlarge: 0,
        xxlarge: 17
      },
      "Ivory": {
        small: 0,
        medium: 29,
        large: 21,
        xlarge: 0,
        xxlarge: 24
      },
      "Slate Blue": {
        small: 0,
        medium: 0,
        large: 19,
        xlarge: 0,
        xxlarge: 0
      }
    },
    price: 67.99,
  },
  {
    id: 8,
    title: "Heavy Knit Collared V-Neck Sweater",
    images: [p8_img],
    description:
      "Elevate your knitwear collection with this heavy knit collared V-neck sweater. The structured collar adds a refined, preppy detail, while the thick knit fabric provides excellent warmth. Ideal for layering over a shirt or wearing as a standalone piece.",
    tags: ["new", "modern", "latest"],
    category: "women",
    rating: 3.5,
    stock: {
      "Grey": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Cream": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Blush Pink": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Sage": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      }
    },
    price: 89.99
  },
  {
    id: 9,
    title: "Knit Collared V-Neck Sweater",
    images: [p9_img],
    description:
      "A versatile collared V-neck sweater knitted from premium soft yarn. The relaxed fit and neat collar give it a smart-casual appeal that transitions easily from the office to weekend plans. Pair with chinos or jeans for an effortlessly polished look.",
    tags: ["modern", "latest", "floral"],
    category: "women",
    rating: 3.5,
    stock: {
      "Olive": {
        small: 23,
        medium: 22,
        large: 22,
        xlarge: 29,
        xxlarge: 8
      },
      "Charcoal": {
        small: 9,
        medium: 36,
        large: 32,
        xlarge: 13,
        xxlarge: 8
      },
      "Dusty Pink": {
        small: 24,
        medium: 35,
        large: 30,
        xlarge: 11,
        xxlarge: 10
      }
    },
    price: 45.99,
  },
  {
    id: 10,
    title: "Long Sleeved V-Neck Cardigan",
    images: [p10_img],
    description:
      "Wrap yourself in comfort with this long-sleeved V-neck cardigan. Lightweight yet warm, it features an open-front design that makes layering a breeze. The soft knit fabric and classic V-neckline create a timeless silhouette suitable for any occasion.",
    tags: ["modern", "latest"],
    category: "women",
    rating: 3.5,
    stock: {
      "Black": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Taupe": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Olive": {
        small: 6,
        medium: 5,
        large: 3,
        xlarge: 3,
        xxlarge: 6
      },
      "Wine Red": {
        small: 2,
        medium: 2,
        large: 5,
        xlarge: 1,
        xxlarge: 1
      }
    },
    price: 65.99,
  },
  {
    id: 11,
    title: "Tight Buttoned Cardigan",
    images: [p11_img],
    description:
      "This fitted buttoned cardigan offers a sleek, body-hugging silhouette that flatters every figure. Delicate button closures run down the front for a clean, put-together appearance. Perfect worn on its own or layered under a coat during colder months.",
    tags: ["modern", "latest"],
    category: "women",
    rating: 3.5,
    stock: {
      "Rustic": {
        small: 0,
        medium: 1,
        large: 0,
        xlarge: 0,
        xxlarge: 2
      },
      "Ivory": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Mustard": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Burgundy": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      }
    },
    price: 49.99,
  },
  {
    id: 12,
    title: "Long Sleeved Knit Sweater",
    images: [p2_img],
    description:
      "Add a touch of elegance to your wardrobe with this stunning floral print wrap dress. Featuring a flattering ruffle trim and a comfortable fit, it's perfect for both casual outings and special occasions.",
    tags: ["new", "wrap Dress", "elegant", "knit"],
    category: "women",
    rating: 4.2,
    stock: {
      "Charcoal": {
        small: 17,
        medium: 22,
        large: 25,
        xlarge: 28,
        xxlarge: 14
      },
      "Cream": {
        small: 21,
        medium: 15,
        large: 32,
        xlarge: 8,
        xxlarge: 13
      },
      "Teal": {
        small: 24,
        medium: 38,
        large: 12,
        xlarge: 14,
        xxlarge: 6
      }
    },
    price: 59.99,
    price_previous: 79.99,
  },
  {
    id: 13,
    title: "Suede Polo Shirt",
    images: [p13_img],
    description:
      "Upgrade your polo game with this suede-finish polo shirt. The buttery soft texture gives a luxurious feel, while the classic polo collar and short sleeves keep it relaxed. A versatile staple that works for both smart-casual and laid-back settings.",
    tags: ["popular", "modern", "latest"],
    category: "men",
    rating: 3.5,
    stock: {
      "Olive": {
        small: 21,
        medium: 17,
        large: 35,
        xlarge: 12,
        xxlarge: 8
      },
      "Tan": {
        small: 20,
        medium: 25,
        large: 32,
        xlarge: 22,
        xxlarge: 17
      },
      "Stone Gray": {
        small: 13,
        medium: 33,
        large: 16,
        xlarge: 21,
        xxlarge: 17
      },
      "Navy": {
        small: 14,
        medium: 40,
        large: 17,
        xlarge: 12,
        xxlarge: 14
      }
    },
    price: 34.99,
  },
  {
    id: 14,
    title: "Loose Linen Blend Button-Up Shirt",
    images: [p14_img],
    description:
      "Stay cool and composed in this loose-fit linen blend button-up shirt. The breathable fabric keeps you comfortable in warm weather, while the relaxed cut provides easy, unrestricted movement. A go-to shirt for beach days, holidays, or casual Fridays.",
    tags: ["new", "popular", "modern", "latest"],
    category: "men",
    rating: 3.5,
    stock: {
      "Black": {
        small: 4,
        medium: 2,
        large: 3,
        xlarge: 2,
        xxlarge: 4
      },
      "Sky Blue": {
        small: 2,
        medium: 1,
        large: 3,
        xlarge: 0,
        xxlarge: 2
      },
      "Sand": {
        small: 3,
        medium: 4,
        large: 3,
        xlarge: 1,
        xxlarge: 4
      },
      "Sage Green": {
        small: 2,
        medium: 4,
        large: 1,
        xlarge: 2,
        xxlarge: 1
      }
    },
    price: 59.99,
    price_previous: 99.99,
  },
  {
    id: 15,
    title: "Hemp Henley Shirt",
    images: [p23_img],
    description:
      "This hemp henley shirt combines eco-friendly fabric with everyday style. The natural hemp blend is durable, breathable, and gets softer with every wash. Featuring a classic button placket and a relaxed fit, it's the perfect choice for conscious, comfortable dressing.",
    tags: ["modern", "latest"],
    category: "men",
    rating: 3.5,
    stock: {
      "Coffee": {
        small: 17,
        medium: 19,
        large: 13,
        xlarge: 21,
        xxlarge: 12
      },
      "Slate": {
        small: 12,
        medium: 27,
        large: 26,
        xlarge: 18,
        xxlarge: 9
      },
      "Olive": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Rust": {
        small: 20,
        medium: 35,
        large: 15,
        xlarge: 22,
        xxlarge: 9
      }
    },
    price: 99.99,
    price_previous: 120.5,
  },
  {
    id: 16,
    title: "Relaxed Linen Shirt",
    images: [p16_img],
    description:
      "Effortlessly stylish, this relaxed linen shirt is a warm-weather essential. The lightweight, airy linen fabric keeps you cool while the loose, easy-going fit offers maximum comfort. Wear it buttoned up or open over a tee for a laid-back summer look.",
    tags: ["popular", "modern", "latest"],
    category: "men",
    rating: 3.5,
    stock: {
      "White": {
        small: 8,
        medium: 21,
        large: 19,
        xlarge: 19,
        xxlarge: 10
      },
      "Oatmeal": {
        small: 13,
        medium: 29,
        large: 17,
        xlarge: 28,
        xxlarge: 7
      },
      "Cream": {
        small: 24,
        medium: 36,
        large: 30,
        xlarge: 10,
        xxlarge: 12
      }
    },
    price: 82.99,
  },
  {
    id: 17,
    title: "Muscle-Fit Linen Button-Up T-Shirt",
    images: [p17_img],
    description:
      "Designed to accentuate your build, this muscle-fit linen button-up tee combines a tailored silhouette with the natural breathability of linen. The short sleeves and slim cut make it ideal for showcasing your physique while staying cool and comfortable.",
    tags: ["new", "popular", "modern", "latest"],
    category: "men",
    rating: 3.5,
    stock: {
      "Cream": {
        small: 12,
        medium: 0,
        large: 28,
        xlarge: 28,
        xxlarge: 0
      },
      "Coffee": {
        small: 0,
        medium: 20,
        large: 0,
        xlarge: 17,
        xxlarge: 0
      },
      "Dusty Blue": {
        small: 0,
        medium: 0,
        large: 16,
        xlarge: 19,
        xxlarge: 25
      }
    },
    price: 99.99,
    price_previous: 139.99,
  },
  {
    id: 18,
    title: "Muscle-Fit Polo Shirt",
    images: [p18_img],
    description:
      "This muscle-fit polo shirt is tailored to hug your frame in all the right places. Made from stretch-blend fabric, it moves with you while maintaining a sharp, athletic look. The ribbed collar and cuffs add a classic touch to this modern essential.",
    tags: ["new", "modern", "latest"],
    category: "men",
    rating: 3.5,
    stock: {
      "Grey": {
        small: 17,
        medium: 16,
        large: 21,
        xlarge: 15,
        xxlarge: 9
      },
      "White": {
        small: 16,
        medium: 26,
        large: 29,
        xlarge: 21,
        xxlarge: 14
      },
      "Navy": {
        small: 17,
        medium: 24,
        large: 14,
        xlarge: 15,
        xxlarge: 5
      },
      "Burgundy": {
        small: 10,
        medium: 40,
        large: 14,
        xlarge: 26,
        xxlarge: 16
      }
    },
    price: 73.99,
    price_previous: 89.99,
  },
  {
    id: 19,
    title: "Denim Jacket with Sherpa Lining",
    images: [p19_img],
    description:
      "Rugged meets cozy in this sherpa-lined denim jacket. The classic denim exterior provides timeless style, while the plush sherpa lining delivers exceptional warmth during colder months. Metal button closures and chest pockets complete the iconic look.",
    tags: ["new", "modern", "latest"],
    category: "men",
    rating: 3.5,
    stock: {
      "Midnight Black": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Black Wash": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Light Wash": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      }
    },
    price: 52.99,
  },
  {
    id: 20,
    title: "Smart Casual Collared Shirt",
    images: [p20_img],
    description:
      "Bridge the gap between formal and casual with this smart collared shirt. The crisp collar and clean lines give it a polished appearance, while the comfortable, breathable fabric makes it suitable for all-day wear. Tuck it in or leave it untucked — it works both ways.",
    tags: ["modern", "latest"],
    category: "men",
    rating: 3.5,
    stock: {
      "White Blue": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 1,
        xxlarge: 0
      },
      "Pale Blue": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Light Pink": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Charcoal": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      }
    },
    price: 45.99,
  },
  {
    id: 21,
    title: "Regular Fit Corduroy Pants",
    images: [p15_img],
    description:
      "These regular-fit corduroy pants bring retro charm to your modern wardrobe. The soft, ribbed corduroy fabric offers a distinctive texture and a comfortable feel. With a classic straight leg and sturdy construction, they pair easily with knitwear and boots.",
    tags: ["new", "popular", "modern", "latest"],
    category: "men",
    rating: 3.5,
    stock: {
      "Coffee": {
        small: 20,
        medium: 36,
        large: 29,
        xlarge: 15,
        xxlarge: 13
      },
      "Forest Green": {
        small: 12,
        medium: 15,
        large: 29,
        xlarge: 17,
        xxlarge: 11
      },
      "Navy": {
        small: 24,
        medium: 15,
        large: 35,
        xlarge: 20,
        xxlarge: 15
      },
      "Rust": {
        small: 22,
        medium: 15,
        large: 25,
        xlarge: 24,
        xxlarge: 10
      }
    },
    price: 63.99,
    price_previous: 89.99,
  },
  {
    id: 22,
    title: "Crew Neck Henley Shirt",
    images: [p22_img],
    description:
      "A modern take on the classic henley, this crew neck version features a subtle button placket and a clean, rounded neckline. Made from soft cotton-blend fabric, it's comfortable enough for everyday wear and stylish enough for a casual night out.",
    tags: ["new", "modern", "latest"],
    category: "men",
    rating: 3.5,
    stock: {
      "Gray": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Navy": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Olive": {
        small: 1,
        medium: 3,
        large: 1,
        xlarge: 4,
        xxlarge: 3
      },
      "White": {
        small: 2,
        medium: 5,
        large: 1,
        xlarge: 5,
        xxlarge: 1
      }
    },
    price: 83.99,
  },
  {
    id: 23,
    title: "Tan Suede Relaxed T-Shirt",
    images: [p21_img],
    description:
      "This tan suede relaxed tee brings a premium, textured feel to a casual favourite. The soft suede-touch fabric gives it a luxurious edge, while the loose, relaxed fit keeps things comfortable and easy. Perfect for elevating your everyday basics.",
    tags: ["modern", "latest"],
    category: "men",
    rating: 3.5,
    stock: {
      "Tan": {
        small: 10,
        medium: 17,
        large: 19,
        xlarge: 17,
        xxlarge: 14
      },
      "Charcoal": {
        small: 8,
        medium: 34,
        large: 27,
        xlarge: 30,
        xxlarge: 18
      },
      "Sage": {
        small: 10,
        medium: 29,
        large: 28,
        xlarge: 23,
        xxlarge: 16
      }
    },
    price: 65.99,
  },
  {
    id: 24,
    title: "Smart Suit Pants",
    images: [p24_img],
    description:
      "Sharp, tailored, and versatile — these charcoal suit pants are a wardrobe cornerstone. Cut from premium wool-blend fabric with a smooth finish, they drape beautifully and pair seamlessly with blazers, dress shirts, or even a simple knit for smart-casual occasions.",
    tags: ["modern", "latest"],
    category: "men",
    rating: 3.5,
    stock: {
      "Charcoal": {
        small: 3,
        medium: 2,
        large: 3,
        xlarge: 3,
        xxlarge: 1
      },
      "Black": {
        small: 3,
        medium: 3,
        large: 0,
        xlarge: 2,
        xxlarge: 3
      },
      "Navy": {
        small: 1,
        medium: 0,
        large: 2,
        xlarge: 2,
        xxlarge: 2
      }
    },
    price: 43.99,
  },
  {
    id: 25,
    title: "Overshirt Cardigan",
    images: [p25_img],
    description:
      "A hybrid between a shirt and a cardigan, this overshirt cardigan offers the best of both worlds. The structured shoulders and button-front design give it a shirt-like appearance, while the soft knit fabric keeps it cozy. Great for layering in cooler weather.",
    tags: ["modern", "latest"],
    category: "boys",
    rating: 3.5,
    stock: {
      "Oatmeal": {
        small: 10,
        medium: 26,
        large: 23,
        xlarge: 10,
        xxlarge: 11
      },
      "Navy": {
        small: 13,
        medium: 19,
        large: 13,
        xlarge: 10,
        xxlarge: 5
      },
      "Red": {
        small: 18,
        medium: 38,
        large: 21,
        xlarge: 20,
        xxlarge: 15
      }
    },
    price: 79.99,
    price_previous: 89.99,
  },
  {
    id: 26,
    title: "Heavy Checkered Shirt",
    images: [p26_img],
    description:
      "Built for adventure, this heavy checkered shirt features a thick, durable weave that stands up to outdoor activities. The bold check pattern adds classic appeal, while the brushed interior provides extra softness and warmth. A rugged staple for young explorers.",
    tags: ["modern", "latest"],
    category: "boys",
    rating: 3.5,
    stock: {
      "White": {
        small: 9,
        medium: 32,
        large: 26,
        xlarge: 7,
        xxlarge: 5
      },
      "Red": {
        small: 17,
        medium: 17,
        large: 15,
        xlarge: 21,
        xxlarge: 14
      },
      "Charcoal": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Green": {
        small: 8,
        medium: 35,
        large: 26,
        xlarge: 8,
        xxlarge: 15
      }
    },
    price: 76.99,
  },
  {
    id: 27,
    title: "Striped Crew Neck Pullover Sweater",
    images: [p27_img],
    description:
      "This striped crew neck pullover sweater is a cheerful addition to any young wardrobe. The colourful horizontal stripes add personality, while the soft knit fabric keeps kids comfortable all day long. Easy to pull on and perfect for school or play.",
    tags: ["modern", "latest"],
    category: "boys",
    rating: 3.5,
    stock: {
      "Red Stripe": {
        small: 9,
        medium: 18,
        large: 31,
        xlarge: 30,
        xxlarge: 5
      },
      "Blue Stripe": {
        small: 14,
        medium: 26,
        large: 22,
        xlarge: 8,
        xxlarge: 17
      },
      "Green Stripe": {
        small: 15,
        medium: 34,
        large: 21,
        xlarge: 15,
        xxlarge: 16
      }
    },
    price: 54.99,
  },
  {
    id: 28,
    title: "T-Shirt",
    images: [p28_img],
    description:
      "A classic everyday tee made from soft, breathable cotton. The relaxed fit and crew neckline make it a reliable go-to for any casual outfit. Easy to style and comfortable enough to wear all day, this is a wardrobe essential for every boy.",
    tags: ["modern", "latest"],
    category: "boys",
    rating: 3.5,
    stock: {
      "Grey": {
        small: 0,
        medium: 1,
        large: 0,
        xlarge: 1,
        xxlarge: 0
      },
      "Black": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Gray": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Navy": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "White": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      }
    },
    price: 87.99,
  },
  {
    id: 29,
    title: "Regular Fit T-Shirt",
    images: [p29_img],
    description:
      "This regular-fit tee delivers the perfect balance of comfort and structure. Made from durable cotton with a smooth jersey finish, it holds its shape wash after wash. A dependable basic that pairs with everything from joggers to jeans.",
    tags: ["modern", "latest"],
    category: "boys",
    rating: 3.5,
    stock: {
      "Black": {
        small: 25,
        medium: 18,
        large: 35,
        xlarge: 22,
        xxlarge: 6
      },
      "White": {
        small: 10,
        medium: 36,
        large: 24,
        xlarge: 12,
        xxlarge: 7
      },
      "Heather Gray": {
        small: 14,
        medium: 19,
        large: 17,
        xlarge: 20,
        xxlarge: 7
      },
      "Sky Blue": {
        small: 13,
        medium: 27,
        large: 12,
        xlarge: 28,
        xxlarge: 7
      },
      "Forest Green": {
        small: 22,
        medium: 18,
        large: 15,
        xlarge: 27,
        xxlarge: 8
      }
    },
    price:  69.99,
    price_previous: 129.99,
  },
  {
    id: 30,
    title: "Smart Collared Shirt",
    images: [p30_img],
    description:
      "Dress to impress with this smart collared shirt for boys. The crisp collar and tailored fit give a polished look, while the soft cotton fabric ensures comfort throughout the day. Ideal for school events, family gatherings, or any occasion that calls for a tidy appearance.",
    tags: ["modern", "latest"],
    category: "boys",
    rating: 3.5,
    stock: {
      "White": {
        small: 15,
        medium: 0,
        large: 21,
        xlarge: 0,
        xxlarge: 0
      },
      "Light Blue": {
        small: 11,
        medium: 21,
        large: 0,
        xlarge: 0,
        xxlarge: 17
      },
      "Pink": {
        small: 0,
        medium: 30,
        large: 9,
        xlarge: 19,
        xxlarge: 0
      }
    },
    price: 34.99,
  },
  {
    id: 31,
    title: "Long Sleeve Button-Down Polo Shirt",
    images: [p31_img],
    description:
      "This long-sleeve button-down polo combines the casual charm of a polo with the smarter finish of a button-down collar. The comfortable cotton fabric and relaxed fit make it perfect for everyday wear, whether heading to school or out on the weekend.",
    tags: ["modern", "latest"],
    category: "boys",
    rating: 3.5,
    stock: {
      "White": {
        small: 15,
        medium: 35,
        large: 27,
        xlarge: 21,
        xxlarge: 10
      },
      "Navy": {
        small: 12,
        medium: 30,
        large: 32,
        xlarge: 30,
        xxlarge: 17
      },
      "Burgundy": {
        small: 15,
        medium: 27,
        large: 20,
        xlarge: 15,
        xxlarge: 17
      },
      "Hunter Green": {
        small: 18,
        medium: 24,
        large: 32,
        xlarge: 16,
        xxlarge: 11
      }
    },
    price: 65.99,
  },
  {
    id: 32,
    title: "Formal Pants",
    images: [p32_img],
    description:
      "These smart formal pants for boys feature a clean, straight-leg cut with a smooth finish. Made from a comfortable poly-blend fabric with a hint of stretch, they're perfect for school uniforms, ceremonies, or family events where a polished look is needed.",
    tags: ["modern", "latest"],
    category: "boys",
    rating: 3.5,
    stock: {
      "Black": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Charcoal": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Navy": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      }
    },
    price: 79.99,
    price_previous: 109.99,
  },
  {
    id: 33,
    title: "Relaxed-Fit Polo Shirt",
    images: [p33_img],
    description:
      "Keep it cool and casual with this relaxed-fit polo shirt for boys. The loose, comfortable cut allows for easy movement, while the classic polo collar adds a touch of smart style. Made from soft, machine-washable fabric for easy care.",
    tags: ["modern", "latest"],
    category: "boys",
    rating: 3.5,
    stock: {
      "White": {
        small: 2,
        medium: 1,
        large: 2,
        xlarge: 0,
        xxlarge: 3
      },
      "Sky Blue": {
        small: 2,
        medium: 4,
        large: 4,
        xlarge: 3,
        xxlarge: 3
      },
      "Red": {
        small: 4,
        medium: 0,
        large: 2,
        xlarge: 2,
        xxlarge: 1
      },
      "Navy": {
        small: 2,
        medium: 1,
        large: 1,
        xlarge: 4,
        xxlarge: 3
      }
    },
    price: 76.99,
  },
  {
    id: 34,
    title: "Striped Crew Neck Pullover Sweater",
    images: [p34_img],
    description:
      "A cozy striped pullover that's perfect for autumn and winter. The bold stripe pattern gives it a fun, youthful look, while the soft knit fabric provides warmth without bulk. Easy to layer over a collared shirt for a smarter finish.",
    tags: ["modern", "latest"],
    category: "boys",
    rating: 3.5,
    stock: {
      "Blue and Green": {
        small: 10,
        medium: 20,
        large: 19,
        xlarge: 17,
        xxlarge: 11
      },
      "Red and Orange": {
        small: 25,
        medium: 26,
        large: 27,
        xlarge: 18,
        xxlarge: 11
      },
      "Navy and Gray": {
        small: 9,
        medium: 26,
        large: 27,
        xlarge: 15,
        xxlarge: 11
      }
    },
    price: 54.99,
  },
  {
    id: 35,
    title: "Levi's Tee",
    images: [p35_img],
    description:
      "A classic graphic tee with an iconic look. Made from soft, pre-shrunk cotton for lasting comfort and fit. The casual crew neck and relaxed cut make it an everyday favourite that pairs effortlessly with jeans, shorts, or joggers.",
    tags: ["modern", "latest"],
    category: "boys",
    rating: 3.5,
    stock: {
      "Grey": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "White": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Black": {
        small: 1,
        medium: 1,
        large: 1,
        xlarge: 1,
        xxlarge: 2
      },
      "Navy": {
        small: 5,
        medium: 4,
        large: 4,
        xlarge: 1,
        xxlarge: 5
      }
    },
    price: 83.99,
  },
  {
    id: 36,
    title: "Button-Up Collared Shirt",
    images: [p36_img],
    description:
      "This button-up collared shirt offers a neat, tidy look for boys who like to dress smart. The structured collar and clean button-front create a polished appearance, while the lightweight cotton fabric keeps things comfortable for all-day wear.",
    tags: ["modern", "latest"],
    category: "boys",
    rating: 3.5,
    stock: {
      "Black": {
        small: 24,
        medium: 37,
        large: 14,
        xlarge: 28,
        xxlarge: 9
      },
      "White": {
        small: 23,
        medium: 23,
        large: 19,
        xlarge: 27,
        xxlarge: 11
      },
      "Cream": {
        small: 24,
        medium: 37,
        large: 12,
        xlarge: 29,
        xxlarge: 13
      },
      "Light Blue": {
        small: 11,
        medium: 16,
        large: 17,
        xlarge: 27,
        xxlarge: 18
      }
    },
    price: 39.99,
  },
  {
    id: 37,
    title: "Cotton 2-Piece Dress Set with Ruffle Details",
    images: [p37_img],
    description:
      "This adorable 2-piece dress set features a coordinated top and skirt in soft cotton with charming ruffle details. The delicate ruffles add a playful, feminine touch, while the breathable cotton fabric keeps little ones comfortable throughout the day. Perfect for parties, playdates, or picture day.",
    tags: ["modern", "latest"],
    category: "girls",
    rating: 3.5,
    stock: {
      "Blush Pink": {
        small: 18,
        medium: 31,
        large: 32,
        xlarge: 17,
        xxlarge: 15
      },
      "Ivory": {
        small: 25,
        medium: 29,
        large: 21,
        xlarge: 24,
        xxlarge: 18
      },
      "Lilac": {
        small: 23,
        medium: 24,
        large: 14,
        xlarge: 8,
        xxlarge: 10
      }
    },
    price: 49.99,
  },
  {
    id: 38,
    title: "Linen and Suede Plaid 2-Piece Dress Set with Ruffle Details",
    images: [p38_img],
    description:
      "A premium 2-piece dress set combining linen and suede-touch plaid fabric with elegant ruffle accents. The mixed-material design creates a unique, textured look that stands out at any event. Comfortable, stylish, and easy to coordinate with accessories.",
    tags: ["modern", "latest"],
    category: "girls",
    rating: 3.5,
    stock: {
      "White Plaid": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 1,
        xxlarge: 0
      },
      "Rose Plaid": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Sage Plaid": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Beige Plaid": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      }
    },
    price: 89.99,
    price_previous: 129.99,
  },
  {
    id: 39,
    title: "Checkered Dress",
    images: [p39_img],
    description:
      "This cheerful checkered dress brings a timeless pattern to a playful, youthful design. Made from soft, lightweight fabric, it allows for easy movement and all-day comfort. The classic check print pairs beautifully with cardigans, tights, or on its own during warmer days.",
    tags: ["modern", "latest"],
    category: "girls",
    rating: 3.5,
    stock: {
      "Red Check": {
        small: 13,
        medium: 12,
        large: 29,
        xlarge: 21,
        xxlarge: 6
      },
      "Blue Check": {
        small: 0,
        medium: 0,
        large: 0,
        xlarge: 0,
        xxlarge: 0
      },
      "Pink Check": {
        small: 14,
        medium: 14,
        large: 16,
        xlarge: 6,
        xxlarge: 13
      }
    },
    price: 54.99,
  },
  {
    id: 40,
    title: "Linen Collared Shirt",
    images: [p40_img],
    description:
      "Keep her looking fresh and put-together in this linen collared shirt. The natural linen fabric is breathable and lightweight, perfect for warmer days. The neat collar and button-front give it a polished look that works for both casual and semi-formal occasions.",
    tags: ["modern", "latest"],
    category: "girls",
    rating: 3.5,
    stock: {
      "White": {
        small: 17,
        medium: 29,
        large: 25,
        xlarge: 9,
        xxlarge: 17
      },
      "Peach": {
        small: 19,
        medium: 28,
        large: 12,
        xlarge: 15,
        xxlarge: 15
      },
      "Mint Green": {
        small: 12,
        medium: 24,
        large: 30,
        xlarge: 10,
        xxlarge: 11
      }
    },
    price: 64.99,
  },
  {
    id: 41,
    title: "Checkered Shirt",
    images: [p41_img],
    description:
      "A fun, easy-to-wear checkered shirt for girls who love colour and pattern. The soft cotton fabric and relaxed fit make it comfortable for everyday activities, while the playful check design adds personality to any outfit. Roll up the sleeves for a casual vibe.",
    tags: ["modern", "latest"],
    category: "girls",
    rating: 3.5,
    stock: {
      "Red Check": {
        small: 2,
        medium: 0,
        large: 3,
        xlarge: 2,
        xxlarge: 1
      },
      "Purple Check": {
        small: 1,
        medium: 1,
        large: 2,
        xlarge: 1,
        xxlarge: 3
      },
      "Teal Check": {
        small: 1,
        medium: 4,
        large: 1,
        xlarge: 1,
        xxlarge: 0
      }
    },
    price: 79.99,
    price_previous: 109.99,
  },
  {
    id: 42,
    title: "High-Waisted Plaid Skirt",
    images: [p42_img],
    description:
      "This high-waisted plaid skirt brings preppy charm to any girl's wardrobe. The classic plaid pattern and flattering high-waisted silhouette create a stylish, put-together look. Made from a comfortable poly-blend fabric, it's perfect for school, outings, or special occasions.",
    tags: ["modern", "latest"],
    category: "girls",
    rating: 3.5,
    stock: {
      "Black Plaid": {
        small: 21,
        medium: 25,
        large: 21,
        xlarge: 22,
        xxlarge: 12
      },
      "Navy Plaid": {
        small: 14,
        medium: 37,
        large: 32,
        xlarge: 22,
        xxlarge: 13
      },
      "Green Plaid": {
        small: 12,
        medium: 17,
        large: 14,
        xlarge: 19,
        xxlarge: 5
      },
      "Red Plaid": {
        small: 24,
        medium: 37,
        large: 20,
        xlarge: 25,
        xxlarge: 9
      }
    },
    price: 57.99,
  },
    {
    id: 43,
    title: "Long Sleeve Knitted Bowknot Sweater with Pleated Skirt",
    images: [p43_img],
    description:
      "Girls fall winter clothes set, Warm knitted sweater with delicate bow on it paired with cute solid colour pleated skirt. No need to bother with matching, it can make your little princess more elegant and lovely. Made of high quality nylon and polyester fabrics, this baby girls clothes outfit is skin-friendly, comfortable and warm, perfect for little girls.Girls casual dress is perfect for cool spring, autumn and winter seasons. Whether it's a school event, outdoor and other casual activities, or birthday, travelling, wedding, party, shooting, Christmas and other formal occasions, wearing this set will make your girl stand out in the crowd. Our girls knitted clothes outfits are versatile and easy to mix and match, so you can mix and match them with other items in your girl's wardrobe to create a versatile look for any occasion. Our girls party dress set is designed for girls aged 2-6 years old, available in blue, pink and brown, please refer to our size chart for more details.",
    tags: ["modern", "latest"],
    category: "girls",
    rating: 3.5,
    stock: {
      "Sky Blue": {
        small: 0,
        medium: 17,
        large: 17,
        xlarge: 13,
        xxlarge: 0
      },
      "Blush Pink": {
        small: 0,
        medium: 0,
        large: 23,
        xlarge: 19,
        xxlarge: 18
      },
      "Coffee Brown": {
        small: 11,
        medium: 12,
        large: 0,
        xlarge: 13,
        xxlarge: 26
      }
    },
    price: 19.97,
  },
];

export default products;
