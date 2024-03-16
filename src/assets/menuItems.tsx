import type { TypeFooterItems, TypeNavbarItems } from "@/types";
export const navbarItems: TypeNavbarItems = {
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
};

export const footerItems: TypeFooterItems = {
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
