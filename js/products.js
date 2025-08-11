export function updatePricesLocal(percent = 10) {
  return productos.map(product => ({
    ...product,
    variants: Object.fromEntries(
      Object.entries(product.variants).map(([variantName, sizes]) => [
        variantName,
        Object.fromEntries(
          Object.entries(sizes).map(([size, price]) => [
            size,
            Math.round(price * (1 + percent / 100))
          ])
        )
      ])
    )
  }));
}

export const productos = [
  {
    id: 1,
    name: "Tapa blanca precintada - Modelo para frasco euro",
    image: "./images/1.jpg",
    variants: {
      Ambar: { "10ML": 728, "15ML": 754, "20ML": 806, "30ML": 831, "50ML": 936, "100ML": 1040 },
      Claro: { "10ML": 806, "15ML": 831, "20ML": 859, "30ML": 923, "50ML": 1014, "100ML": 1092 },
      "Verde/Azul": { "10ML": 871, "15ML": 910, "20ML": 962, "30ML": 1001, "50ML": 1104, "100ML": 1261 }
    }
  },
  {
    id: 2,
    name: "Tapa negra precintada - Modelo para frasco euro",
    image: "./images/2.jpg",
    variants: {
      Ambar: { "10ML": 728, "15ML": 754, "20ML": 806, "30ML": 831, "50ML": 936, "100ML": 1040 },
      Claro: { "10ML": 806, "15ML": 831, "20ML": 859, "30ML": 923, "50ML": 1014, "100ML": 1092 },
      "Verde/Azul": { "10ML": 871, "15ML": 910, "20ML": 962, "30ML": 1001, "50ML": 1104, "100ML": 1261 }
    }
  },
  {
    id: 3,
    name: "Tapa aluminio con inserto - Modelo para frasco euro",
    image: "./images/3.jpg",
    variants: {
      Ambar: { "10ML": 928, "15ML": 954, "20ML": 1006, "30ML": 1031, "50ML": 1136, "100ML": 1240 },
      Claro: { "10ML": 1006, "15ML": 1031, "20ML": 1059, "30ML": 1123, "50ML": 1214, "100ML": 1292 },
      "Verde/Azul": { "10ML": 1071, "15ML": 1110, "20ML": 1162, "30ML": 1201, "50ML": 1304, "100ML": 1461 }
    }
  },
  {
    id: 4,
    name: "Tapa aluminio con inserto - Modelo para frasco euro",
    image: "./images/4.jpg",
    variants: {
      Ambar: { "10ML": 928, "15ML": 954, "20ML": 1006, "30ML": 1031, "50ML": 1136, "100ML": 1240 },
      Claro: { "10ML": 1006, "15ML": 1031, "20ML": 1059, "30ML": 1123, "50ML": 1214, "100ML": 1292 },
      "Verde/Azul": { "10ML": 1071, "15ML": 1110, "20ML": 1162, "30ML": 1201, "50ML": 1304, "100ML": 1461 }
    }
  },
  {
    id: 5,
    name: "Tapa enfundada dorada/plateada con inserto - Modelo para frasco euro",
    image: "./images/5.jpg",
    variants: {
      Ambar: { "10ML": 928, "15ML": 954, "20ML": 1006, "30ML": 1031, "50ML": 1136, "100ML": 1240 },
      Claro: { "10ML": 1006, "15ML": 1031, "20ML": 1059, "30ML": 1123, "50ML": 1214, "100ML": 1292 },
      "Verde/Azul": { "10ML": 1071, "15ML": 1110, "20ML": 1162, "30ML": 1201, "50ML": 1304, "100ML": 1461 }
    }
  },
  {
    id: 6,
    name: "Tapa ciega negra con inserto - Modelo para frasco euro",
    image: "./images/6.jpg",
    variants: {
      Ambar: { "10ML": 928, "15ML": 954, "20ML": 1006, "30ML": 1031, "50ML": 1136, "100ML": 1240 },
      Claro: { "10ML": 1006, "15ML": 1031, "20ML": 1059, "30ML": 1123, "50ML": 1214, "100ML": 1292 },
      "Verde/Azul": { "10ML": 1071, "15ML": 1110, "20ML": 1162, "30ML": 1201, "50ML": 1304, "100ML": 1461 }
    }
  },
  {
    id: 7,
    name: "Roll-on tapa negra - Modelo para frasco euro",
    image: "./images/7.jpg",
    variants: {
      Ambar: { "10ML": 648, "15ML": 674, "20ML": 726, "30ML": 751, "50ML": 856, "100ML": 960 },
      Claro: { "10ML": 726, "15ML": 751, "20ML": 779, "30ML": 843, "50ML": 934, "100ML": 1012 },
      "Verde/Azul": { "10ML": 791, "15ML": 830, "20ML": 882, "30ML": 921, "50ML": 1024, "100ML": 1181 }
    }
  },
  {
    id: 8,
    name: "Spray con tapa negra - Modelo para frasco euro",
    image: "./images/8.jpg",
    variants: {
      Ambar: { "10ML": 648, "15ML": 674, "20ML": 726, "30ML": 751, "50ML": 856, "100ML": 960 },
      Claro: { "10ML": 726, "15ML": 751, "20ML": 779, "30ML": 843, "50ML": 934, "100ML": 1012 },
      "Verde/Azul": { "10ML": 791, "15ML": 830, "20ML": 882, "30ML": 921, "50ML": 1024, "100ML": 1181 }
    }
  },
  {
    id: 9,
    name: "Frasco con tapa y tetina negra",
    image: "./images/9.jpg",
    variants: {
      Ambar: { "10ML": 728, "15ML": 754, "20ML": 806, "30ML": 831, "50ML": 936, "100ML": 1040 },
      Claro: { "10ML": 806, "15ML": 831, "20ML": 859, "30ML": 923, "50ML": 1014, "100ML": 1092 },
      "Verde/Azul": { "10ML": 871, "15ML": 910, "20ML": 962, "30ML": 1001, "50ML": 1104, "100ML": 1261 }
    }
  },
  {
    id: 13,
    name: "Frasco con tapa dorada y tetina blanca",
    image: "./images/13.jpg",
    variants: {
      Ambar: { "10ML": 928, "15ML": 954, "20ML": 1006, "30ML": 1031, "50ML": 1136, "100ML": 1240 },
      Claro: { "10ML": 1006, "15ML": 1031, "20ML": 1059, "30ML": 1123, "50ML": 1214, "100ML": 1292 },
      "Verde/Azul": { "10ML": 1071, "15ML": 1110, "20ML": 1162, "30ML": 1201, "50ML": 1304, "100ML": 1461 }
    }
  },
  {
    id: 17,
    name: "Frasco con tapa dorada",
    image: "./images/17.jpg",
    variants: {
      Ambar: { "10ML": 928, "15ML": 954, "20ML": 1006, "30ML": 1031, "50ML": 1136, "100ML": 1240 },
      Claro: { "10ML": 1006, "15ML": 1031, "20ML": 1059, "30ML": 1123, "50ML": 1214, "100ML": 1292 },
      "Verde/Azul": { "10ML": 1071, "15ML": 1110, "20ML": 1162, "30ML": 1201, "50ML": 1304, "100ML": 1461 }
    }
  },
  {
    id: 25,
    name: "Frasco con tapa ciega e inserto",
    image: "./images/25.jpg",
    variants: {
      Ambar: { "10ML": 648, "15ML": 674, "20ML": 726, "30ML": 751, "50ML": 856, "100ML": 960 },
      Claro: { "10ML": 726, "15ML": 751, "20ML": 779, "30ML": 843, "50ML": 934, "100ML": 1012 },
      "Verde/Azul": { "10ML": 791, "15ML": 830, "20ML": 882, "30ML": 921, "50ML": 1024, "100ML": 1181 }
    }
  },
  {
    id: 29,
    name: "Frasco con tapa dorada y tetina blanca",
    image: "./images/29.jpg",
    variants: {
      Ambar: { "10ML": 928, "15ML": 954, "20ML": 1006, "30ML": 1031, "50ML": 1136, "100ML": 1240 },
      Claro: { "10ML": 1006, "15ML": 1031, "20ML": 1059, "30ML": 1123, "50ML": 1214, "100ML": 1292 },
      "Verde/Azul": { "10ML": 1071, "15ML": 1110, "20ML": 1162, "30ML": 1201, "50ML": 1304, "100ML": 1461 }
    }
  },
  {
    id: 23,
    name: "Frasco con tapa plata",
    image: "./images/23.jpg",
    variants: {
      Ambar: { "10ML": 928, "15ML": 954, "20ML": 1006, "30ML": 1031, "50ML": 1136, "100ML": 1240 },
      Claro: { "10ML": 1006, "15ML": 1031, "20ML": 1059, "30ML": 1123, "50ML": 1214, "100ML": 1292 },
      "Verde/Azul": { "10ML": 1071, "15ML": 1110, "20ML": 1162, "30ML": 1201, "50ML": 1304, "100ML": 1461 }
    }
  },
  {
    id: 33,
    name: "Frasco con tapa blanca precintada",
    image: "./images/33.jpg",
    variants: {
      Ambar: { "10ML": 728, "15ML": 754, "20ML": 806, "30ML": 831, "50ML": 936, "100ML": 1040 },
      Claro: { "10ML": 806, "15ML": 831, "20ML": 859, "30ML": 923, "50ML": 1014, "100ML": 1092 },
      "Verde/Azul": { "10ML": 871, "15ML": 910, "20ML": 962, "30ML": 1001, "50ML": 1104, "100ML": 1261 }
    }
  }
];