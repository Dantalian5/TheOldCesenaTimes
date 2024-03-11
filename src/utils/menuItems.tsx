type BaseSection = string[][];

interface BaseCategory {
  [key: string]: BaseSection | undefined;
}

export type FooterItemsType = {
  [category: string]: BaseSection;
};

type NavbarCategory = BaseCategory & {
  sections?: BaseSection;
};

export type NavbarItemsType = {
  [key: string]: NavbarCategory;
}[];

export const navbarItems: NavbarItemsType = [
  {
    "U.S.": {
      sections: [
        [
          ["U.S.", "us"],
          "Politics",
          "New York",
          "California",
          "Education",
          "Health",
          "Obituaries",
          "Science",
        ],
        ["Climate", "Sports", "Business", "Tech", "The Upshot", "The Magazine"],
      ],
      ["U.S. Politics"]: [
        ["2024 Elections", "Supreme Court", "Congress", "Biden Administration"],
      ],
    },
    World: {
      sections: [
        ["World", "Africa", "Americas", "Asia", "Australia", "Canada"],
        ["Europe", "Middle East", "Science", "Climate", "Health", "Obituaries"],
      ],
    },
    Bussiness: {
      sections: [
        ["Bussiness", "Tech", "Economy", "Media", "Finance and Markets"],
        ["DealBook", "Personal Tech", "Energy Transition", "Your Money"],
      ],
    },
    Arts: {
      section: [
        ["Todays Arts", "Books", "Best Sellers", "Dance", "Movies", "Music"],
        ["Television", "Theater", "Pop Culture", "T Magazine", "Visual Arts"],
      ],
    },
    Lifestyle: {
      section: [
        ["Lifestyle", "Well", "Travel", "Style", "Real State", "Food"],
        ["Fashion", "Love", "Your Money", "Personal Tech", "T Magazine"],
      ],
      columns: [["Modern Love", "The Hunt", "Social Qs", "The Ethicist"]],
      well: [["Eat", "Move", "Mind", "Family", "Live", "Ask Well"]],
    },
    Opinion: {
      section: [
        [
          "Opinion",
          "Guest Essays",
          "Editorials",
          "Op-Docs",
          "Videos",
          "Letters",
        ],
      ],
      topics: [
        [
          "Politics",
          "World",
          "Business",
          "Tech",
          "Climate",
          "Health",
          "Culture",
        ],
      ],
    },
  },
  {
    Audio: {
      listen: [
        [
          "The Headlines",
          "The Daily",
          "Hard Fork",
          "The Ezra Klein Show",
          "Matter of Opinion",
        ],
        [
          "Serial Productions",
          "The Book Review Podcast",
          "Modern Love",
          "The Run-Up",
          "Popcast",
          "Reporter Reads",
          "The Sunday Read",
        ],
      ],
    },
    Cooking: {
      recipes: [
        ["Easy", "Dinner", "Quick", "Healthy", "Breakfast"],
        ["Vegetarian", "Vegan", "Chicken", "Pasta", "Dessert"],
      ],
      ["editor's pick"]: [
        [
          "Soups and Stews",
          "Easy Weeknight",
          "Newest Recipes",
          "One-Pot Meals",
          "Slow Cooker Recipes",
          "Comfort Food",
          "Party Recipes",
        ],
      ],
    },
    Wirecutter: {
      reviews: [
        ["Kitchen", "Tech", "Sleep", "Appliances", "Home and Garden", "Moving"],
        ["Travel", "Gifts", "Deals", "Baby and Kid", "Health and Fitness"],
      ],
      ["the best..."]: [
        [
          "Air Purifier",
          "Electric Toothbrush",
          "Pressure Washer",
          "Cordless Stick Vacuum",
          "Office Chair",
          "Robot Vacuum",
        ],
      ],
    },
    ["The Athletico"]: {
      leagues: [
        ["NFL", "MLB", "NBA", "Premier League", "NCAAF", "NCAAM"],
        ["NHL", "NCAAW", "MLS", "Formula 1", "NWSL", "Golf"],
      ],
      ["top stories"]: [
        [
          "Must-Read Stories",
          "Today's News",
          "2024 NFL Draft",
          "MLB Free Agency",
        ],
      ],
    },
  },
];
export const footerItems: FooterItemsType = {
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
