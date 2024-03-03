const Products = [
  {
    id: 1,
    title: {
      tr: "Fjallraven - Foldsack No. 1 Sırt Çantası, 15 İnç Dizüstü Bilgisayar Uyumlu",
      en: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
    seller: "Fjallraven",
    brand: "Fjallraven",
    price: 99.99,
    description: {
      tr: "Her günlük kullanım ve ormanda yürüyüşler için mükemmel bir çanta. Dizüstü bilgisayarınızı (en fazla 15 inç) yastıklı bölmesine yerleştirin, günlük eşyalarınızı...",
      en: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday...",
    },
    category: "erkek giyim",
    image: {
      thumbnail: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      images: ["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"],
    },
    rating: {
      rate: 3.9,
      count: 120,
    },
    countInStock: 2,
    reviews: [
      {
        user: "JohnDoe",
        date: "2023-08-16",
        review: "Çanta kaliteli ve rahat bir kullanıma sahip. Ancak stoklar hızla tükeniyor gibi görünüyor.",
      },
      // Diğer inceleme girdileri...
    ],
  },
  {
    id: 2,
    title: {
      tr: "Erkekler için Rahat Premium Dar Kesim Tişörtler",
      en: "Mens Casual Premium Slim Fit T-Shirts",
    },
    seller: "BrandX",
    brand: "BrandX",
    price: 22.99,
    description: {
      tr: "Dar kesim tarzı, tezgah raglan uzun kollu, üç düğmeli yaka plakası, nefes alabilir ve rahat giyim için hafif & yumuşak kumaş. Ve dayanıklılık ve...",
      en: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing...",
    },
    category: "erkek giyim",
    image: {
      thumbnail: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      images: ["https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"],
    },
    rating: {
      rate: 4.1,
      count: 259,
    },
    countInStock: 102,
    reviews: [
      {
        user: "JaneDoe",
        date: "2023-08-15",
        review: "Tişört ince ve rahattır. Rengi resimde göründüğü gibidir.",
      },
      // Diğer inceleme girdileri...
    ],
  },
  {
    id: 3,
    title: {
      tr: "Erkek Pamuk Ceket",
      en: "Mens Cotton Jacket",
    },
    seller: "JacketWorld",
    brand: "JacketWorld",
    price: 54.99,
    description: {
      tr: "İlkbahar/Sonbahar/Kış için harika dış giyim ceketleri, çalışmak, yürüyüş yapmak, kamp yapmak, dağ/taş tırmanışı yapmak, bisiklete binmek, seyahat etmek veya diğer...",
      en: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling...",
    },
    category: "erkek giyim",
    image: {
      thumbnail: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      images: ["https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"],
    },
    rating: {
      rate: 4.7,
      count: 500,
    },
    countInStock: 102,
    reviews: [
      {
        user: "JackSmith",
        date: "2023-08-14",
        review: "Ceket oldukça sıcak ve dayanıklı. Kaliteli bir ürün.",
      },
      // Diğer inceleme girdileri...
    ],
  },
  {
    id: 4,
    title: {
      tr: "Erkek Rahat Dar Kesim Tişört",
      en: "Mens Casual Slim Fit",
    },
    seller: "CoolStyles",
    brand: "CoolStyles",
    price: 14.99,
    description: {
      tr: "Renk ekran ve pratikte biraz farklı olabilir. Lütfen beden özelliklerinin kişiden kişiye farklılık gösterebileceğini unutmayın, bu nedenle detaylı boyut bilgileri...",
      en: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information...",
    },
    category: "erkek giyim",
    image: {
      thumbnail: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      images: ["https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"],
    },
    rating: {
      rate: 2.1,
      count: 430,
    },
    countInStock: 102,
    reviews: [
      {
        user: "SamJohnson",
        date: "2023-08-13",
        review: "Renk resimde görüldüğü gibi değil. Ayrıca, tişört biraz kalitesiz görünüyor.",
      },
      // Diğer inceleme girdileri...
    ],
  },
  {
    id: 5,
    title: {
      tr: "John Hardy Kadın Efsaneler Naga Altın & Gümüş Ejderha Zincir Bilezik",
      en: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    },
    seller: "John Hardy",
    brand: "John Hardy",
    price: 699.99,
    description: {
      tr: "Efsaneler Koleksiyonumuzdan, denizin incisini koruyan efsanevi su ejderhasından esinlenilen Naga. Aşk ve bollukla bahşedilen, ya da koruma sağlamak için dışarıya...",
      en: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and...",
    },
    category: "mücevher",
    image: {
      thumbnail: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      images: ["https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"],
    },
    rating: {
      rate: 4.6,
      count: 400,
    },
    countInStock: 102,
    reviews: [
      {
        user: "EmilyBrown",
        date: "2023-08-12",
        review: "Bilezik muhteşem görünüyor ve oldukça zarif. Ancak fiyatı biraz yüksek.",
      },
      // Diğer inceleme girdileri...
    ],
  },
  {
    id: 6,
    title: {
      tr: "Solid Gold Petite Micropave",
      en: "Solid Gold Petite Micropave",
    },
    seller: "Hafeez Center",
    brand: "Hafeez Center",
    price: 169.99,
    description: {
      tr: "Memnuniyet Garantili. Herhangi bir siparişi 30 gün içinde iade veya değiştirme. Amerika Birleşik Devletleri'nde Hafeez Center tarafından tasarlanmış ve satılmıştır...",
      en: "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return...",
    },
    category: "mücevher",
    image: {
      thumbnail: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      images: ["https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"],
    },
    rating: {
      rate: 3.9,
      count: 70,
    },
    countInStock: 102,
    reviews: [
      {
        user: "MichaelWhite",
        date: "2023-08-11",
        review: "Küçük ve zarif bir takı. Fiyatına değer.",
      },
      // Diğer inceleme girdileri...
    ],
  },
  {
    id: 7,
    title: {
      tr: "Beyaz Altın Kaplama Prenses Yüzük",
      en: "White Gold Plated Princess",
    },
    seller: "JewelryPalace",
    brand: "JewelryPalace",
    price: 9.99,
    description: {
      tr: "Klasik Yaratılmış Düğün Nişan Tek Taş Elmas Söz Yüzüğü. Sevgilinizi Daha Fazla Şımartmak İçin Hediyeler, Nişan, Düğün, Yıl Dönümü, Sevgililer Günü...",
      en: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    },
    category: "mücevher",
    image: {
      thumbnail: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      images: ["https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"],
    },
    rating: {
      rate: 3,
      count: 400,
    },
    countInStock: 102,
    reviews: [
      {
        user: "AlexMiller",
        date: "2023-08-10",
        review: "Yüzük güzel görünüyor, ancak boyutu biraz büyük gibi.",
      },
      // Diğer inceleme girdileri...
    ],
  },
  {
    id: 8,
    title: {
      tr: "Delikli Baykuş Gül Altın Kaplama Paslanmaz Çelik Çift Tünel Fiş Küpesi",
      en: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    },
    seller: "Pierced Owl",
    brand: "Pierced Owl",
    price: 10.99,
    description: {
      tr: "Gül Altın Kaplama Çift Flared Tünel Fiş Küpeleri. 316L Paslanmaz Çelikten Yapılmıştır.",
      en: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    },
    category: "mücevher",
    image: {
      thumbnail: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      images: ["https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"],
    },
    rating: {
      rate: 1.9,
      count: 100,
    },
    countInStock: 102,
    reviews: [
      {
        user: "SarahClark",
        date: "2023-08-09",
        review: "Küpeler oldukça hafif ve rahat. Ancak kaplama zamanla soyulabilir gibi görünüyor.",
      },
      // Diğer inceleme girdileri...
    ],
  },
  {
    id: 9,
    title: {
      tr: "WD 2TB Elements Taşınabilir Harici Hard Disk - USB 3.0",
      en: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    },
    seller: "Western Digital",
    brand: "Western Digital",
    price: 64.99,
    description: {
      tr: "USB 3.0 ve USB 2.0 Uyumlu Hızlı veri aktarımları PC Performansını İyileştirir Yüksek Kapasite; Uyumlu Windows 10, Windows 8.1, Windows 7 için...",
      en: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7...",
    },
    category: "elektronik",
    image: {
      thumbnail: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      images: ["https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"],
    },
    rating: {
      rate: 3.3,
      count: 203,
    },
    countInStock: 102,
    reviews: [
      {
        user: "DavidWilliams",
        date: "2023-08-08",
        review: "Taşınabilir hard disk hızlı ve kullanışlı. Ancak kapasitesi biraz düşük gibi.",
      },
      // Diğer inceleme girdileri...
    ],
  },
  {
    id: 10,
    title: {
      tr: "SanDisk SSD PLUS 1TB Dahili SSD - SATA III 6 Gb/s",
      en: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    },
    seller: "SanDisk",
    brand: "SanDisk",
    price: 109.99,
    description: {
      tr: "Hızlı başlatma, kapanma, uygulama yükleme ve yanıt için kolay yükseltme (5400 RPM SATA 2.5” sabit diske kıyasla; PCMark vantage puanları kullanılarak yayınlanan özellikler...",
      en: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications...",
    },
    category: "elektronik",
    image: {
      thumbnail: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      images: ["https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"],
    },
    rating: {
      rate: 2.9,
      count: 470,
    },
    countInStock: 102,
    reviews: [
      {
        user: "JenniferSmith",
        date: "2023-08-07",
        review: "SSD performansı harika, bilgisayarımı çok hızlandırdı. Ancak fiyat biraz yüksek gibi.",
      },
      // Diğer inceleme girdileri...
    ],
  },
  // Diğer ürün girdileri...
];

export default Products;
