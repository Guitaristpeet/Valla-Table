const menu = [
    {
        id: 1,
        title: 'Rak Bua Tod',
        category: 'appetizers',
        price: '9',
        info: `Lotus root chips served with a sweet potato tahini, brown rice miso dip`,
        img: '/ASSETS/IMAGES/APP/RakBuaTod.jpg',
    },
    {
        id: 2,
        title: 'Sai Oua',
        category: 'appetizers',
        price: '11',
        info: `Grandma's homemade recipe for Thai style lemongrass pork sausage. An iconic dish of northern Thailand. Deeply delicious and special treat we hope you enjoy served with toasted cashew nut and fresh ginger`,
        img: '/ASSETS/IMAGES/APP/SaiOua.jpg',
    },
    {
        id: 3,
        title: 'Thai Pastry Puff',
        category: 'appetizers',
        price: '9',
        info: `Thai style pastries filled with grounded chicken, onions, potatoes and curry-power served with a sweet cucumber relish sauce`,
        img: '/ASSETS/IMAGES/APP/ThaiPastryPuff.jpg',
    },
    {
        id: 4,
        title: 'Chicken Satay',
        category: 'appetizers',
        price: '11',
        info: `Slowly grilled chicken breast on skewers marinated with coconut milk and curry power served with a creamy Thai peanut sauce & sweet cucumber relish sauce`,
        img: '/ASSETS/IMAGES/APP/ChickenSatay.jpg',
    },
    {
        id: 5,
        title: 'Kanom Jeep',
        category: 'appetizers',
        price: '9',
        info: `Homemade chicken shumai. Served steamed or fried with a citrus champagne soy sauce vinaigrette`,
        img: '/ASSETS/IMAGES/APP/KanomJeep.jpg',
    },
    {
        id: 6,
        title: 'Sai Krok Khao',
        category: 'appetizers',
        price: '11',
        info: `Homemade pork, rice, garlic, white pepper sausage. Served with toasted cashew nuts and fresh ginger`,
        img: '/ASSETS/IMAGES/APP/SaiKrokKhao.jpg',
    },
    {
        id: 7,
        title: 'Pak Mor Cashew',
        category: 'appetizers',
        price: '10',
        info: `Dumplings made with sauté grounded cashew nuts, sweet radish, shallot, cilantro and coconut sugar filled in freshly steamed rice paper. Served with sea salted coconut sauce`,
        img: '/ASSETS/IMAGES/APP/PakMorCashew.jpg',
    },
    {
        id: 8,
        title: 'Lui Suan',
        category: 'appetizers',
        price: '11',
        info: `Elegant Thai-style garden wrap filled with choice of sauté minced chicken, shrimp or soft tofu in rice noodles and spring greens served with a homemade chili lime sauce`,
        img: '/ASSETS/IMAGES/APP/LuiSuan.jpg',
    },
    {
        id: 9,
        title: 'Ma Haw',
        category: 'appetizers',
        price: '9',
        info: `Sweet radish, shallot, cilantro, coconut-sugar and cashew nut ball in fresh pineapple`,
        img: '/ASSETS/IMAGES/APP/MaHaw.jpg',
    },
    {
        id: 10,
        title: 'Miang Kham',
        category: 'appetizers',
        price: '10',
        info: `Toasted coconut, diced lemon red onion, fresh ginger, cashew nuts, herbs and pam sugar served pm chef selected green leaves`,
        img: '/ASSETS/IMAGES/APP/MiangKham.jpg',
    },
    {
        id: 11,
        title: 'Goong Sarong',
        category: 'appetizers',
        price: '11',
        info: `Marinated shrimp wrapped in wonton noodles and crispy fried served soups with a sweet chili sauce`,
        img: '/ASSETS/IMAGES/APP/GoongSarong.jpg',
    },
    {
        id: 12,
        title: 'Tom Kha Soup',
        category: 'soups',
        price: '7',
        info: `Classic Thai coconut soup infused with lemongrass galangals, kaffir lime leaf, cilantro, chive oil with onions and mushroom`,
        img: '/ASSETS/IMAGES/SOUP/TomKhaSoup.jpg',
    },
    {
        id: 13,
        title: 'Tom Yum Tiger Prawn Shrimp',
        category: 'soups',
        price: '16',
        info: `Classic Thai spicy and sour soup with lemongrass, chili, onion, lime, King Oyster Mushroom and Tiger Prawn shrimp`,
        img: '/ASSETS/IMAGES/SOUP/TomYumTigerPrawnShrimp.jpg',
    },
    {
        id: 14,
        title: 'Beef Noodle Soup',
        category: 'soups',
        price: '18',
        info: `Double braised beef shank in an infused Chinese herbs & pices broth, leaf lettuce, bean-sprouts, cilantro and rice noodles served with house made hot sauce`,
        img: '/ASSETS/IMAGES/SOUP/BeefNoodleSoup.jpg',
    },
    {
        id: 15,
        title: 'Ginger Soup',
        category: 'soups',
        price: '7',
        info: `Slow cooked ginger broth with carrot, napa, and scallion`,
        img: '/ASSETS/IMAGES/SOUP/GingerSoup.jpg',
    },
    {
        id: 16,
        title: 'Yum Talay',
        category: 'salad',
        price: '16',
        info: `New Zealand green mussels, shrimp, squid, onions, Thai chili, lime and cilantro`,
        img: '/ASSETS/IMAGES/SALAD/YumTalay.jpg',
    },
    {
        id: 17,
        title: 'Yum Beef',
        category: 'salad',
        price: '16',
        info: `Grilled flank steak, fresh herbs, smoked chili paste, tamarind juice and toasted rice powder`,
        img: '/ASSETS/IMAGES/SALAD/YumBeef.jpg',
    },
    {
        id: 18,
        title: 'Crispy Duck Salad',
        category: 'salad',
        price: '23',
        info: `Crispy roasted duck, pineapple, cashew nuts, smoked chili paste dressed in tamarind sauce`,
        img: '/ASSETS/IMAGES/SALAD/CrispyDuckSalad.jpg',
    },
    {
        id: 19,
        title: 'Som Tum Thai',
        category: 'salad',
        price: '11',
        info: `Fresh shredded green papaya, tomato and peanuts with lime dressing`,
        img: '/ASSETS/IMAGES/SALAD/SomTumThai.jpg',
    },
    {
        id: 20,
        title: 'Som Tum Laos',
        category: 'salad',
        price: '12',
        info: `Green papaya salad, tomato and Laos style anchovy dressing`,
        img: '/ASSETS/IMAGES/SALAD/SomTumLaos.jpg',
    },
    {
        id: 21,
        title: 'Yum Woonsen',
        category: 'salad',
        price: '11',
        info: `Fresh vermicelli noodle, prawn, minced pork, red onion in lime dressing`,
        img: '/ASSETS/IMAGES/SALAD/YumWoonSen.jpg',
    },
    {
        id: 22,
        title: 'Khao Soi Neua',
        category: 'noodles',
        price: '18',
        info: `Northern Thai style steamed eff noodles with khao sou curry, slow cooked beef, red onions, pickle cabbage, fresh lime and crispy egg noodles`,
        img: '/ASSETS/IMAGES/NOODLE/KhaoSoiNuea.jpg',
    },
    {
        id: 23,
        title: 'Khao Soi Kai',
        category: 'noodles',
        price: '18',
        info: `Northern Thai styles steamed egg noodles with khao soi curry, braised chicken drumstick, red onions, pickle cabbage, fresh lime and crispy egg noodles`,
        img: '/ASSETS/IMAGES/NOODLE/KhaoSoiKai.jpg',
    },
    {
        id: 24,
        title: 'Crispy Shrimp Noodle',
        category: 'noodles',
        price: '18',
        info: `Southern Thai style fry angle hair rice noodles, coconut milk, chili paste. Served with sea salted crispy shrimp in cilantro garlic, fresh shredded mango, carrot, red onions, bean sprouts & coconut chili sauce`,
        img: '/ASSETS/IMAGES/NOODLE/CrispyShrimpNoodle.jpg',
    },
    {
        id: 25,
        title: 'Red Curry',
        category: 'curry',
        price: '14',
        info: `A popular Thai dish consisting of the spicy bold taste of dried red chili paste coconut milk, Thai eggplant, bell pepper, bamboo shoots and fresh Thai basil leaves. Served with jasmine rice`,
        img: '/ASSETS/IMAGES/CURRY/RedCurry.jpg',
    },
    {
        id: 26,
        title: 'Braised Beef Green Curry',
        category: 'curry',
        price: '21',
        info: `Grandma's recipe, green curry with coconut milk, Thai eggplant, bell pepper, bamboo shoots & fresh Thai basil leaves served with Thai roti bread`,
        img: '/ASSETS/IMAGES/CURRY/BraisedBeefGreenCurry.jpg',
    },
    {
        id: 27,
        title: 'Panang Curry',
        category: 'curry',
        price: '14',
        info: `Panang refers to the island of the Penang in northern Malaysia bordering southern Thailand. Spicy but milder taste of curry in coconut milk & thin sliced kaffir lime leaves, carrots, peas, bell pepper served with jasmine rice`,
        img: '/ASSETS/IMAGES/CURRY/PanangCurry.jpg',
    },
    {
        id: 28,
        title: 'Massaman Curry',
        category: 'curry',
        price: '14',
        info: `A famous Thai curry rich, flavorful & relatively mild made with sweet potatoes, onions and peanuts in coconut milk. Served with jasmine rice`,
        img: '/ASSETS/IMAGES/CURRY/MassamanCurry.jpg',
    },
    {
        id: 29,
        title: 'Crab Dumpling Curry',
        category: 'chef special',
        price: '28',
        info: `Crab meat filled in freshly made to order streamed rice wrappers in nam yaa curry sauce, chili, oil, lotus roots chips. Served with jasmine rice`,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 30,
        title: 'Pad Talay',
        category: 'chef special',
        price: '26',
        info: `Stir fry mix seafood, smoked chili paste, curry power, egg, onion, chinese celery, bell pepper served with jasmine rice`,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 31,
        title: 'Miang Salmon',
        category: 'chef special',
        price: '24',
        info: `Crispy salmon bits, angel hair rice noodles, lime, ginger, red onions, cashew nuts with lettuce to wrap. Served with spicy chili lime sauce`,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 32,
        title: 'Pla Tod Nam Pla',
        category: 'chef special',
        price: '29',
        info: `Fried king fish, fresh mango salad served with jasmine rice`,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 33,
        title: 'Duck tamarind',
        category: 'chef special',
        price: '25',
        info: `Seared duck breast topped with tamarind sauce accompanied by wonton noodles, cilantro and over baked crispy garlic and bok choy`,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 34,
        title: 'Crispy Fry Whole Branzino',
        category: 'chef special',
        price: '40',
        info: `Crispy fried whole Branzino with garlic and pepper sauce. Served with jasmine rice`,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 35,
        title: 'Khao Op',
        category: 'rice',
        price: '16',
        info: `Vegan fried rice with shiitake mushroom, taro, carrot and peas`,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 36,
        title: 'Khao Pad Bacon',
        category: 'rice',
        price: '20',
        info: `Thai basil fried rice with hand cut bacon sriracha and coconut sugar glaze`,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 37,
        title: 'Crab Meat Fried Rice',
        category: 'rice',
        price: '21',
        info: `Thai style fried rice with crab meat, egg, scallions and curry power. Served with house made chili sauce`,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 38,
        title: 'Jasmine Rice',
        category: 'side order',
        price: '3',
        info: ``,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 39,
        title: 'Brown Rice',
        category: 'side order',
        price: '4',
        info: ``,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 40,
        title: 'Sticky Rice',
        category: 'side order',
        price: '4',
        info: ``,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 41,
        title: 'Roti Bread',
        category: 'side order',
        price: '4',
        info: ``,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 42,
        title: 'Mango Sticky Rice',
        category: 'dessert',
        price: '13',
        info: `Steamed coconut sticky rice served with sweet ripe Thai mango, topped with warm coconut milk and roasted sesame seeds`,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 43,
        title: 'Thai Chocolate Cake',
        category: 'dessert',
        price: '11',
        info: `Flour-less chocolate mascarpone crème and raspberry.`,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
    {
        id: 44,
        title: 'Thai Coffee Tiramisu',
        category: 'dessert',
        price: '13',
        info: `Tiramisu made with chef's special strong brewed Thai coffee`,
        img: '/ASSETS/IMAGES/sally_2.jpg',
    },
];
