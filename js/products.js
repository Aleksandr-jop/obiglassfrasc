export function updatePricesLocal(percent = 10) {
  return productos.map(product => ({
    ...product,
    variants: Object.fromEntries(
      Object.entries(product.variants).map(([variantName, sizes]) => [
        variantName,
        Object.fromEntries(
          Object.entries(sizes).map(([size, price]) => [
            size,
            percent >= 0
              ? Math.ceil(price * (1 + percent / 100))
              : Math.floor(price * (1 + percent / 100))
          ])
        )
      ])
    )
  }));
}

export const productos = [
  {
    "id": 1,
    "name": "Tapa blanca precintada - Modelo para frasco euro",
    "image": "./images/1.jpg",
    "variants": {
      "Ambar": {
        "10ML": 732,
        "15ML": 758,
        "20ML": 810,
        "30ML": 835,
        "50ML": 941,
        "100ML": 1045
      },
      "Claro": {
        "10ML": 810,
        "15ML": 835,
        "20ML": 863,
        "30ML": 928,
        "50ML": 1019,
        "100ML": 1097
      },
      "Verde/Azul": {
        "10ML": 875,
        "15ML": 915,
        "20ML": 967,
        "30ML": 1006,
        "50ML": 1110,
        "100ML": 1267
      }
    }
  },
  {
    "id": 2,
    "name": "Tapa negra precintada - Modelo para frasco euro",
    "image": "./images/2.jpg",
    "variants": {
      "Ambar": {
        "10ML": 732,
        "15ML": 758,
        "20ML": 810,
        "30ML": 835,
        "50ML": 941,
        "100ML": 1045
      },
      "Claro": {
        "10ML": 810,
        "15ML": 835,
        "20ML": 863,
        "30ML": 928,
        "50ML": 1019,
        "100ML": 1097
      },
      "Verde/Azul": {
        "10ML": 875,
        "15ML": 915,
        "20ML": 967,
        "30ML": 1006,
        "50ML": 1110,
        "100ML": 1267
      }
    }
  },
  {
    "id": 3,
    "name": "Tapa aluminio con inserto - Modelo para frasco euro",
    "image": "./images/3.jpg",
    "variants": {
      "Ambar": {
        "10ML": 933,
        "15ML": 959,
        "20ML": 1011,
        "30ML": 1036,
        "50ML": 1142,
        "100ML": 1246
      },
      "Claro": {
        "10ML": 1011,
        "15ML": 1036,
        "20ML": 1064,
        "30ML": 1129,
        "50ML": 1220,
        "100ML": 1298
      },
      "Verde/Azul": {
        "10ML": 1076,
        "15ML": 1116,
        "20ML": 1168,
        "30ML": 1207,
        "50ML": 1311,
        "100ML": 1468
      }
    }
  },
  {
    "id": 4,
    "name": "Tapa aluminio con inserto - Modelo para frasco euro",
    "image": "./images/4.jpg",
    "variants": {
      "Ambar": {
        "10ML": 933,
        "15ML": 959,
        "20ML": 1011,
        "30ML": 1036,
        "50ML": 1142,
        "100ML": 1246
      },
      "Claro": {
        "10ML": 1011,
        "15ML": 1036,
        "20ML": 1064,
        "30ML": 1129,
        "50ML": 1220,
        "100ML": 1298
      },
      "Verde/Azul": {
        "10ML": 1076,
        "15ML": 1116,
        "20ML": 1168,
        "30ML": 1207,
        "50ML": 1311,
        "100ML": 1468
      }
    }
  },
  {
    "id": 5,
    "name": "Tapa enfundada dorada/plateada con inserto - Modelo para frasco euro",
    "image": "./images/5.jpg",
    "variants": {
      "Ambar": {
        "10ML": 933,
        "15ML": 959,
        "20ML": 1011,
        "30ML": 1036,
        "50ML": 1142,
        "100ML": 1246
      },
      "Claro": {
        "10ML": 1011,
        "15ML": 1036,
        "20ML": 1064,
        "30ML": 1129,
        "50ML": 1220,
        "100ML": 1298
      },
      "Verde/Azul": {
        "10ML": 1076,
        "15ML": 1116,
        "20ML": 1168,
        "30ML": 1207,
        "50ML": 1311,
        "100ML": 1468
      }
    }
  },
  {
    "id": 6,
    "name": "Tapa ciega negra con inserto - Modelo para frasco euro",
    "image": "./images/6.jpg",
    "variants": {
      "Ambar": {
        "10ML": 933,
        "15ML": 959,
        "20ML": 1011,
        "30ML": 1036,
        "50ML": 1142,
        "100ML": 1246
      },
      "Claro": {
        "10ML": 1011,
        "15ML": 1036,
        "20ML": 1064,
        "30ML": 1129,
        "50ML": 1220,
        "100ML": 1298
      },
      "Verde/Azul": {
        "10ML": 1076,
        "15ML": 1116,
        "20ML": 1168,
        "30ML": 1207,
        "50ML": 1311,
        "100ML": 1468
      }
    }
  },
  {
    "id": 7,
    "name": "Roll-on tapa negra - Modelo para frasco euro",
    "image": "./images/7.jpg",
    "variants": {
      "Ambar": {
        "10ML": 651,
        "15ML": 677,
        "20ML": 730,
        "30ML": 755,
        "50ML": 860,
        "100ML": 965
      },
      "Claro": {
        "10ML": 730,
        "15ML": 755,
        "20ML": 783,
        "30ML": 847,
        "50ML": 939,
        "100ML": 1017
      },
      "Verde/Azul": {
        "10ML": 795,
        "15ML": 834,
        "20ML": 886,
        "30ML": 926,
        "50ML": 1029,
        "100ML": 1187
      }
    }
  },
  {
    "id": 8,
    "name": "Spray con tapa negra - Modelo para frasco euro",
    "image": "./images/8.jpg",
    "variants": {
      "Ambar": {
        "10ML": 651,
        "15ML": 677,
        "20ML": 730,
        "30ML": 755,
        "50ML": 860,
        "100ML": 965
      },
      "Claro": {
        "10ML": 730,
        "15ML": 755,
        "20ML": 783,
        "30ML": 847,
        "50ML": 939,
        "100ML": 1017
      },
      "Verde/Azul": {
        "10ML": 795,
        "15ML": 834,
        "20ML": 886,
        "30ML": 926,
        "50ML": 1029,
        "100ML": 1187
      }
    }
  },
  {
    "id": 9,
    "name": "Frasco con tapa y tetina negra",
    "image": "./images/9.jpg",
    "variants": {
      "Ambar": {
        "10ML": 732,
        "15ML": 758,
        "20ML": 810,
        "30ML": 835,
        "50ML": 941,
        "100ML": 1045
      },
      "Claro": {
        "10ML": 810,
        "15ML": 835,
        "20ML": 863,
        "30ML": 928,
        "50ML": 1019,
        "100ML": 1097
      },
      "Verde/Azul": {
        "10ML": 875,
        "15ML": 915,
        "20ML": 967,
        "30ML": 1006,
        "50ML": 1110,
        "100ML": 1267
      }
    }
  },
  {
    "id": 13,
    "name": "Frasco con tapa dorada y tetina blanca",
    "image": "./images/13.jpg",
    "variants": {
      "Ambar": {
        "10ML": 933,
        "15ML": 959,
        "20ML": 1011,
        "30ML": 1036,
        "50ML": 1142,
        "100ML": 1246
      },
      "Claro": {
        "10ML": 1011,
        "15ML": 1036,
        "20ML": 1064,
        "30ML": 1129,
        "50ML": 1220,
        "100ML": 1298
      },
      "Verde/Azul": {
        "10ML": 1076,
        "15ML": 1116,
        "20ML": 1168,
        "30ML": 1207,
        "50ML": 1311,
        "100ML": 1468
      }
    }
  },
  {
    "id": 17,
    "name": "Frasco con tapa dorada",
    "image": "./images/17.jpg",
    "variants": {
      "Ambar": {
        "10ML": 933,
        "15ML": 959,
        "20ML": 1011,
        "30ML": 1036,
        "50ML": 1142,
        "100ML": 1246
      },
      "Claro": {
        "10ML": 1011,
        "15ML": 1036,
        "20ML": 1064,
        "30ML": 1129,
        "50ML": 1220,
        "100ML": 1298
      },
      "Verde/Azul": {
        "10ML": 1076,
        "15ML": 1116,
        "20ML": 1168,
        "30ML": 1207,
        "50ML": 1311,
        "100ML": 1468
      }
    }
  },
  {
    "id": 25,
    "name": "Frasco con tapa ciega e inserto",
    "image": "./images/25.jpg",
    "variants": {
      "Ambar": {
        "10ML": 651,
        "15ML": 677,
        "20ML": 730,
        "30ML": 755,
        "50ML": 860,
        "100ML": 965
      },
      "Claro": {
        "10ML": 730,
        "15ML": 755,
        "20ML": 783,
        "30ML": 847,
        "50ML": 939,
        "100ML": 1017
      },
      "Verde/Azul": {
        "10ML": 795,
        "15ML": 834,
        "20ML": 886,
        "30ML": 926,
        "50ML": 1029,
        "100ML": 1187
      }
    }
  },
  {
    "id": 29,
    "name": "Frasco con tapa dorada y tetina blanca",
    "image": "./images/29.jpg",
    "variants": {
      "Ambar": {
        "10ML": 933,
        "15ML": 959,
        "20ML": 1011,
        "30ML": 1036,
        "50ML": 1142,
        "100ML": 1246
      },
      "Claro": {
        "10ML": 1011,
        "15ML": 1036,
        "20ML": 1064,
        "30ML": 1129,
        "50ML": 1220,
        "100ML": 1298
      },
      "Verde/Azul": {
        "10ML": 1076,
        "15ML": 1116,
        "20ML": 1168,
        "30ML": 1207,
        "50ML": 1311,
        "100ML": 1468
      }
    }
  },
  {
    "id": 23,
    "name": "Frasco con tapa plata",
    "image": "./images/23.jpg",
    "variants": {
      "Ambar": {
        "10ML": 933,
        "15ML": 959,
        "20ML": 1011,
        "30ML": 1036,
        "50ML": 1142,
        "100ML": 1246
      },
      "Claro": {
        "10ML": 1011,
        "15ML": 1036,
        "20ML": 1064,
        "30ML": 1129,
        "50ML": 1220,
        "100ML": 1298
      },
      "Verde/Azul": {
        "10ML": 1076,
        "15ML": 1116,
        "20ML": 1168,
        "30ML": 1207,
        "50ML": 1311,
        "100ML": 1468
      }
    }
  },
  {
    "id": 33,
    "name": "Frasco con tapa blanca precintada",
    "image": "./images/33.jpg",
    "variants": {
      "Ambar": {
        "10ML": 732,
        "15ML": 758,
        "20ML": 810,
        "30ML": 835,
        "50ML": 941,
        "100ML": 1045
      },
      "Claro": {
        "10ML": 810,
        "15ML": 835,
        "20ML": 863,
        "30ML": 928,
        "50ML": 1019,
        "100ML": 1097
      },
      "Verde/Azul": {
        "10ML": 875,
        "15ML": 915,
        "20ML": 967,
        "30ML": 1006,
        "50ML": 1110,
        "100ML": 1267
      }
    }
  }
];