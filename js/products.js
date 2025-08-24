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
        "10ML": 739,
        "15ML": 765,
        "20ML": 818,
        "30ML": 843,
        "50ML": 950,
        "100ML": 1056
      },
      "Claro": {
        "10ML": 818,
        "15ML": 843,
        "20ML": 872,
        "30ML": 937,
        "50ML": 1029,
        "100ML": 1108
      },
      "Verde/Azul": {
        "10ML": 884,
        "15ML": 924,
        "20ML": 976,
        "30ML": 1016,
        "50ML": 1121,
        "100ML": 1280
      }
    }
  },
  {
    "id": 2,
    "name": "Tapa negra precintada - Modelo para frasco euro",
    "image": "./images/2.jpg",
    "variants": {
      "Ambar": {
        "10ML": 739,
        "15ML": 765,
        "20ML": 818,
        "30ML": 843,
        "50ML": 950,
        "100ML": 1056
      },
      "Claro": {
        "10ML": 818,
        "15ML": 843,
        "20ML": 872,
        "30ML": 937,
        "50ML": 1029,
        "100ML": 1108
      },
      "Verde/Azul": {
        "10ML": 884,
        "15ML": 924,
        "20ML": 976,
        "30ML": 1016,
        "50ML": 1121,
        "100ML": 1280
      }
    }
  },
  {
    "id": 3,
    "name": "Tapa aluminio con inserto - Modelo para frasco euro",
    "image": "./images/3.jpg",
    "variants": {
      "Ambar": {
        "10ML": 942,
        "15ML": 968,
        "20ML": 1021,
        "30ML": 1046,
        "50ML": 1153,
        "100ML": 1259
      },
      "Claro": {
        "10ML": 1021,
        "15ML": 1046,
        "20ML": 1075,
        "30ML": 1140,
        "50ML": 1232,
        "100ML": 1311
      },
      "Verde/Azul": {
        "10ML": 1087,
        "15ML": 1127,
        "20ML": 1179,
        "30ML": 1219,
        "50ML": 1324,
        "100ML": 1483
      }
    }
  },
  {
    "id": 4,
    "name": "Tapa aluminio con inserto - Modelo para frasco euro",
    "image": "./images/4.jpg",
    "variants": {
      "Ambar": {
        "10ML": 942,
        "15ML": 968,
        "20ML": 1021,
        "30ML": 1046,
        "50ML": 1153,
        "100ML": 1259
      },
      "Claro": {
        "10ML": 1021,
        "15ML": 1046,
        "20ML": 1075,
        "30ML": 1140,
        "50ML": 1232,
        "100ML": 1311
      },
      "Verde/Azul": {
        "10ML": 1087,
        "15ML": 1127,
        "20ML": 1179,
        "30ML": 1219,
        "50ML": 1324,
        "100ML": 1483
      }
    }
  },
  {
    "id": 5,
    "name": "Tapa enfundada dorada/plateada con inserto - Modelo para frasco euro",
    "image": "./images/5.jpg",
    "variants": {
      "Ambar": {
        "10ML": 942,
        "15ML": 968,
        "20ML": 1021,
        "30ML": 1046,
        "50ML": 1153,
        "100ML": 1259
      },
      "Claro": {
        "10ML": 1021,
        "15ML": 1046,
        "20ML": 1075,
        "30ML": 1140,
        "50ML": 1232,
        "100ML": 1311
      },
      "Verde/Azul": {
        "10ML": 1087,
        "15ML": 1127,
        "20ML": 1179,
        "30ML": 1219,
        "50ML": 1324,
        "100ML": 1483
      }
    }
  },
  {
    "id": 6,
    "name": "Tapa ciega negra con inserto - Modelo para frasco euro",
    "image": "./images/6.jpg",
    "variants": {
      "Ambar": {
        "10ML": 942,
        "15ML": 968,
        "20ML": 1021,
        "30ML": 1046,
        "50ML": 1153,
        "100ML": 1259
      },
      "Claro": {
        "10ML": 1021,
        "15ML": 1046,
        "20ML": 1075,
        "30ML": 1140,
        "50ML": 1232,
        "100ML": 1311
      },
      "Verde/Azul": {
        "10ML": 1087,
        "15ML": 1127,
        "20ML": 1179,
        "30ML": 1219,
        "50ML": 1324,
        "100ML": 1483
      }
    }
  },
  {
    "id": 7,
    "name": "Roll-on tapa negra - Modelo para frasco euro",
    "image": "./images/7.jpg",
    "variants": {
      "Ambar": {
        "10ML": 658,
        "15ML": 684,
        "20ML": 737,
        "30ML": 762,
        "50ML": 869,
        "100ML": 974
      },
      "Claro": {
        "10ML": 737,
        "15ML": 762,
        "20ML": 791,
        "30ML": 856,
        "50ML": 948,
        "100ML": 1027
      },
      "Verde/Azul": {
        "10ML": 803,
        "15ML": 842,
        "20ML": 895,
        "30ML": 935,
        "50ML": 1039,
        "100ML": 1199
      }
    }
  },
  {
    "id": 8,
    "name": "Spray con tapa negra - Modelo para frasco euro",
    "image": "./images/8.jpg",
    "variants": {
      "Ambar": {
        "10ML": 658,
        "15ML": 684,
        "20ML": 737,
        "30ML": 762,
        "50ML": 869,
        "100ML": 974
      },
      "Claro": {
        "10ML": 737,
        "15ML": 762,
        "20ML": 791,
        "30ML": 856,
        "50ML": 948,
        "100ML": 1027
      },
      "Verde/Azul": {
        "10ML": 803,
        "15ML": 842,
        "20ML": 895,
        "30ML": 935,
        "50ML": 1039,
        "100ML": 1199
      }
    }
  },
  {
    "id": 9,
    "name": "Frasco con tapa y tetina negra",
    "image": "./images/9.jpg",
    "variants": {
      "Ambar": {
        "10ML": 739,
        "15ML": 765,
        "20ML": 818,
        "30ML": 843,
        "50ML": 950,
        "100ML": 1056
      },
      "Claro": {
        "10ML": 818,
        "15ML": 843,
        "20ML": 872,
        "30ML": 937,
        "50ML": 1029,
        "100ML": 1108
      },
      "Verde/Azul": {
        "10ML": 884,
        "15ML": 924,
        "20ML": 976,
        "30ML": 1016,
        "50ML": 1121,
        "100ML": 1280
      }
    }
  },
  {
    "id": 13,
    "name": "Frasco con tapa dorada y tetina blanca",
    "image": "./images/13.jpg",
    "variants": {
      "Ambar": {
        "10ML": 942,
        "15ML": 968,
        "20ML": 1021,
        "30ML": 1046,
        "50ML": 1153,
        "100ML": 1259
      },
      "Claro": {
        "10ML": 1021,
        "15ML": 1046,
        "20ML": 1075,
        "30ML": 1140,
        "50ML": 1232,
        "100ML": 1311
      },
      "Verde/Azul": {
        "10ML": 1087,
        "15ML": 1127,
        "20ML": 1179,
        "30ML": 1219,
        "50ML": 1324,
        "100ML": 1483
      }
    }
  },
  {
    "id": 17,
    "name": "Frasco con tapa dorada",
    "image": "./images/17.jpg",
    "variants": {
      "Ambar": {
        "10ML": 942,
        "15ML": 968,
        "20ML": 1021,
        "30ML": 1046,
        "50ML": 1153,
        "100ML": 1259
      },
      "Claro": {
        "10ML": 1021,
        "15ML": 1046,
        "20ML": 1075,
        "30ML": 1140,
        "50ML": 1232,
        "100ML": 1311
      },
      "Verde/Azul": {
        "10ML": 1087,
        "15ML": 1127,
        "20ML": 1179,
        "30ML": 1219,
        "50ML": 1324,
        "100ML": 1483
      }
    }
  },
  {
    "id": 25,
    "name": "Frasco con tapa ciega e inserto",
    "image": "./images/25.jpg",
    "variants": {
      "Ambar": {
        "10ML": 658,
        "15ML": 684,
        "20ML": 737,
        "30ML": 762,
        "50ML": 869,
        "100ML": 974
      },
      "Claro": {
        "10ML": 737,
        "15ML": 762,
        "20ML": 791,
        "30ML": 856,
        "50ML": 948,
        "100ML": 1027
      },
      "Verde/Azul": {
        "10ML": 803,
        "15ML": 842,
        "20ML": 895,
        "30ML": 935,
        "50ML": 1039,
        "100ML": 1199
      }
    }
  },
  {
    "id": 29,
    "name": "Frasco con tapa dorada y tetina blanca",
    "image": "./images/29.jpg",
    "variants": {
      "Ambar": {
        "10ML": 942,
        "15ML": 968,
        "20ML": 1021,
        "30ML": 1046,
        "50ML": 1153,
        "100ML": 1259
      },
      "Claro": {
        "10ML": 1021,
        "15ML": 1046,
        "20ML": 1075,
        "30ML": 1140,
        "50ML": 1232,
        "100ML": 1311
      },
      "Verde/Azul": {
        "10ML": 1087,
        "15ML": 1127,
        "20ML": 1179,
        "30ML": 1219,
        "50ML": 1324,
        "100ML": 1483
      }
    }
  },
  {
    "id": 23,
    "name": "Frasco con tapa plata",
    "image": "./images/23.jpg",
    "variants": {
      "Ambar": {
        "10ML": 942,
        "15ML": 968,
        "20ML": 1021,
        "30ML": 1046,
        "50ML": 1153,
        "100ML": 1259
      },
      "Claro": {
        "10ML": 1021,
        "15ML": 1046,
        "20ML": 1075,
        "30ML": 1140,
        "50ML": 1232,
        "100ML": 1311
      },
      "Verde/Azul": {
        "10ML": 1087,
        "15ML": 1127,
        "20ML": 1179,
        "30ML": 1219,
        "50ML": 1324,
        "100ML": 1483
      }
    }
  },
  {
    "id": 33,
    "name": "Frasco con tapa blanca precintada",
    "image": "./images/33.jpg",
    "variants": {
      "Ambar": {
        "10ML": 739,
        "15ML": 765,
        "20ML": 818,
        "30ML": 843,
        "50ML": 950,
        "100ML": 1056
      },
      "Claro": {
        "10ML": 818,
        "15ML": 843,
        "20ML": 872,
        "30ML": 937,
        "50ML": 1029,
        "100ML": 1108
      },
      "Verde/Azul": {
        "10ML": 884,
        "15ML": 924,
        "20ML": 976,
        "30ML": 1016,
        "50ML": 1121,
        "100ML": 1280
      }
    }
  }
];