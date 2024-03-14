type BaseSection = [string, string][][];
export type FooterItemsType = {
  [category: string]: BaseSection;
};
interface Subsection {
  [key: string]: string[][] | string[][][];
}
interface Category {
  section: string;
  subsection: Subsection;
}
export interface NavbarItemsType {
  [category: string]: Category;
}

export const footerItems = {
  news: [
    [
      "Home Page",
      "World",
      "Coronavirus",
      "U.S.",
      "Politics",
      "New York",
      "Business",
      "Tech",
      "Science",
      "Sports",
    ],
    [
      "Wildfire Tracker",
      "Obituaries",
      "Today's Paper",
      "Corrections",
      "Trending",
    ],
  ],
  opinion: [
    ["Today's Opinion", "Columnists", "Editorials", "Guest Essays"],
    ["Letters", "Sunday Opinion", "Opinion Video"],
  ],
  arts: [
    [
      "Today's Arts",
      "Art & Design",
      "Books",
      "Best Sellers Book List",
      "Dance",
      "Movies",
    ],
    ["Music", "Pop Culture", "Television", "Theater", "Video: Arts"],
  ],
  living: [
    ["Automotive", "Games", "Education", "Food", "Health", "Jobs", "Love"],
    ["Magazine", "Parenting", "Real Estate", "Style", "T Magazine", "Travel"],
  ],
  "listings & more": [
    [
      "Reader Center",
      "The Athletic",
      "Wirecutter",
      "Cooking",
      "Headway",
      "Live Events",
      "The Learning Network",
      "Podcasts",
    ],
    [
      "Video",
      "Graphics",
      "TimesMachine",
      "Times Store",
      "Manage My Account",
      "Gift Articles",
      "NYTLicensing",
    ],
  ],
};

// [
//   arts, --
//   automobiles,
//   books / review,
//   business, --
//   fashion,
//   food,
//   health,
//   home,
//   insider,
//   magazine,
//   movies,
//   nyregion, --
//   obituaries,
//   opinion, --
//   politics,
//   realestate,
//   science,
//   sports,
//   sundayreview,
//   technology,
//   theater,
//   t-magazine,
//   travel,
//   upshot,
//   us, --
//   world, --
// ];

export const navbarItems: NavbarItemsType[] = [
  {
    "U.S.": {
      section: "us",
      subsection: {
        sections: [
          [
            ["U.S.", "", ""],
            ["Politics", "", "politics"],
            ["New York", "nyregion", ""],
            ["Education", "science", ""],
            ["Health", "health", ""],
            ["Obituaries", "obituaries", ""],
            ["Science", "science", ""],
          ],
          [
            ["Climate", "", ""],
            ["Sports", "sports", ""],
            ["Business", "business", ""],
            ["Tech", "technology", ""],
            ["The Upshot", "upshot", ""],
            ["The Magazine", "magazine", ""],
          ],
        ],
      },
    },
    World: {
      section: "world",
      subsection: {
        sections: [
          [
            ["World", "", ""],
            ["Africa", "", "africa"],
            ["Americas", "", "americas"],
            ["Asia", "", "asia"],
            ["Australia", "", "australia"],
            ["Canada", "", "canada"],
          ],
          [
            ["Europe", "", "europe"],
            ["Middle East", "", "middleeast"],
            ["Science", "science", ""],
            ["Climate", "", ""],
            ["Health", "health", ""],
            ["Obituaries", "obituaries", ""],
          ],
        ],
      },
    },

    Bussiness: {
      section: "business",
      subsection: {
        sections: [
          [
            ["Bussiness", "", ""],
            ["Tech", "technology", ""],
            ["Economy", "", ""],
            ["Media", "movies", ""],
            ["Finance and Markets", "", ""],
          ],
          [
            ["DealBook", "", ""],
            ["Personal Tech", "technology", ""],
            ["Energy Transition", "", ""],
            ["Your Money", "", ""],
          ],
        ],
      },
    },
    Arts: {
      section: "arts",
      subsection: {
        section: [
          [
            ["Todays Arts", "", ""],
            ["Books", "books", ""],
            ["Best Sellers", "review", ""],
            ["Dance", "", ""],
            ["Movies", "movies", ""],
            ["Music", "", ""],
          ],
          [
            ["Television", "", ""],
            ["Theater", "theater", ""],
            ["Pop Culture", "", ""],
            ["T Magazine", "t-magazine", ""],
            ["Visual Arts", "", ""],
          ],
        ],
      },
    },
    Lifestyle: {
      section: "health",
      subsection: {
        section: [
          [
            ["Lifestyle", "", ""],
            ["Well", "", ""],
            ["Travel", "travel", ""],
            ["Style", "", ""],
            ["Real State", "realestate", ""],
            ["Food", "food", ""],
          ],
          [
            ["Fashion", "fashion", ""],
            ["Love", "", ""],
            ["Your Money", "", ""],
            ["Personal Tech", "technology", ""],
            ["T Magazine", "t-magazine", ""],
          ],
        ],
      },
    },
    Opinion: {
      section: "opinion",
      subsection: {
        section: [
          [
            ["Opinion", "", ""],
            ["Guest Essays", "", ""],
            ["Editorials", "", ""],
            ["Op-Docs", "", ""],
            ["Videos", "", ""],
            ["Letters", "", ""],
          ],
        ],
        topics: [
          [
            ["Politics", "politics", ""],
            ["World", "world", ""],
            ["Business", "business", ""],
            ["Tech", "technology", ""],
            ["Climate", "", ""],
            ["Health", "health", ""],
            ["Culture", "arts", ""],
          ],
        ],
      },
    },
  },
  {
    Audio: {
      section: "",
      subsection: {
        listen: [
          [
            ["The Headlines", "", ""],
            ["The Daily", "", ""],
            ["Hard Fork", "", ""],
            ["The Ezra Klein Show", "", ""],
            ["Matter of Opinion", "", ""],
          ],
          [
            ["Serial Productions", "", ""],
            ["The Book Review Podcast", "", ""],
            ["Modern Love", "", ""],
            ["The Run-Up", "", ""],
            ["Popcast", "", ""],
            ["Reporter Reads", "", ""],
            ["The Sunday Read", "", ""],
          ],
        ],
      },
    },
    Cooking: {
      section: "",
      subsection: {
        recipes: [
          [
            ["Easy", "", ""],
            ["Dinner", "", ""],
            ["Quick", "", ""],
            ["Healthy", "", ""],
            ["Breakfast", "", ""],
          ],
          [
            ["Vegetarian", "", ""],
            ["Vegan", "", ""],
            ["Chicken", "", ""],
            ["Pasta", "", ""],
            ["Dessert", "", ""],
          ],
        ],
        "editor's pick": [
          [
            ["Soups and Stews", "", ""],
            ["Easy Weeknight", "", ""],
            ["Newest Recipes", "", ""],
            ["One-Pot Meals", "", ""],
            ["Slow Cooker Recipes", "", ""],
            ["Comfort Food", "", ""],
            ["Party Recipes", "", ""],
          ],
        ],
      },
    },
    Wirecutter: {
      section: "",
      subsection: {
        reviews: [
          [
            ["Kitchen", "", ""],
            ["Tech", "", ""],
            ["Sleep", "", ""],
            ["Appliances", "", ""],
            ["Home and Garden", "", ""],
            ["Moving", "", ""],
          ],
          [
            ["Travel", "", ""],
            ["Gifts", "", ""],
            ["Deals", "", ""],
            ["Baby and Kid", "", ""],
            ["Health and Fitness", "", ""],
          ],
        ],
        "the best...": [
          [
            ["Air Purifier", "", ""],
            ["Electric Toothbrush", "", ""],
            ["Pressure Washer", "", ""],
            ["Cordless Stick Vacuum", "", ""],
            ["Office Chair", "", ""],
            ["Robot Vacuum", "", ""],
          ],
        ],
      },
    },
    "The Athletico": {
      section: "",
      subsection: {
        leagues: [
          [
            ["NFL", "", ""],
            ["MLB", "", ""],
            ["NBA", "", ""],
            ["Premier League", "", ""],
            ["NCAAF", "", ""],
            ["NCAAM", "", ""],
          ],
          [
            ["NHL", "", ""],
            ["NCAAW", "", ""],
            ["MLS", "", ""],
            ["Formula 1", "", ""],
            ["NWSL", "", ""],
            ["Golf", "", ""],
          ],
        ],
        "top stories": [
          [
            ["Must-Read Stories", "", ""],
            ["Today's News", "", ""],
            ["2024 NFL Draft", "", ""],
            ["MLB Free Agency", "", ""],
          ],
        ],
      },
    },
  },
];

export const footerItems1 = {
  news: [
    [
      ["Home Page", "#"],
      ["World", "#"],
      ["Coronavirus", "#"],
      ["U.S.", "#"],
      ["Politics", "#"],
      ["New York", "#"],
      ["Business", "#"],
      ["Tech", "#"],
      ["Science", "#"],
      ["Sports", "#"],
    ],
    [
      ["Wildfire Tracker", "#"],
      ["Obituaries", "#"],
      ["Today's Paper", "#"],
      ["Corrections", "#"],
      ["Trending", "#"],
    ],
  ],
  opinion: [
    [
      ["Today's Opinion", "#"],
      ["Columnists", "#"],
      ["Editorials", "#"],
      ["Guest Essays", "#"],
    ],
    [
      ["Letters", "#"],
      ["Sunday Opinion", "#"],
      ["Opinion Video", "#"],
    ],
  ],
  arts: [
    [
      ["Today's Arts", "#"],
      ["Art & Design", "#"],
      ["Books", "#"],
      ["Best Sellers Book List", "#"],
      ["Dance", "#"],
      ["Movies", "#"],
    ],
    [
      ["Music", "#"],
      ["Pop Culture", "#"],
      ["Television", "#"],
      ["Theater", "#"],
      ["Video: Arts", "#"],
    ],
  ],
  living: [
    [
      ["Automotive", "#"],
      ["Games", "#"],
      ["Education", "#"],
      ["Food", "#"],
      ["Health", "#"],
      ["Jobs", "#"],
      ["Love", "#"],
    ],
    [
      ["Magazine", "#"],
      ["Parenting", "#"],
      ["Real Estate", "#"],
      ["Style", "#"],
      ["T Magazine", "#"],
      ["Travel", "#"],
    ],
  ],
  "listings & more": [
    [
      ["Reader Center", "#"],
      ["The Athletic", "#"],
      ["Wirecutter", "#"],
      ["Cooking", "#"],
      ["Headway", "#"],
      ["Live Events", "#"],
      ["The Learning Network", "#"],
      ["Podcasts", "#"],
    ],
    [
      ["Video", "#"],
      ["Graphics", "#"],
      ["TimesMachine", "#"],
      ["Times Store", "#"],
      ["Manage My Account", "#"],
      ["Gift Articles", "#"],
      ["NYTLicensing", "#"],
    ],
  ],
};
