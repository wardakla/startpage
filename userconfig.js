// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  disabled: [],
  openLastVisitedTab: true,
  localIcons: true,
  tabs: [
    {
      name: "home",
      background_url: `src/img/banners/cbg-8.gif`,
      categories: [
        {
          name: "",
          links: [
            {
              name: "google",
              url: "https://www.google.com",
              icon: "brand-chrome",
              icon_color: palette.red,
            },
            {
              name: "classroom",
              url: "https://classroom.google.com/u/3/",
              icon: "books",
              icon_color: palette.green,
            },
            {
              name: "docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file-text",
              icon_color: palette.blue,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: palette.yellow,
            },
            {
              name: "photos",
              url: "https://photos.google.com/",
              icon: "brand-google-photos",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "whatsapp",
              url: "https://web.whatsapp.com/",
              icon: "brand-whatsapp",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "twitter",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.text,
            },
           {
              name: "instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.pink,
            },
            {
              name: "tik-tok",
              url: "https://www.tiktok.com",
              icon: "brand-tiktok",
              icon_color: palette.pink,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.blue,
            },
            {
              name: "telegram",
              url: "https://web.telegram.org/",
              icon: "brand-telegram",
              icon_color: palette.teal,
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com",
              icon: "brand-linkedin",
              icon_color: palette.blue,
            },
            {
              name: "swops",
              url: "https://swopniladhikari.com.np",
              icon: "home",
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "github",
              url: "https://github.com/swopnil7",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "devdocs",
              url: "https://devdocs.io",
              icon: "code",
              icon_color: palette.blue,
            },
            {
              name: "hacker-news",
              url: "https://news.ycombinator.com",
              icon: "news",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.lavender,
            },

          ],
        },
        {
          name: "",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com/u/swopnil7/",
              icon: "brand-leetcode",
              icon_color: palette.yellow,
            },
            {
              name: "w3schools",
              url: "https://www.w3schools.com/",
              icon: "school",
              icon_color: palette.lavender,
            },
            {
              name: "geeksforgeeks",
              url: "https://www.geeksforgeeks.org/",
              icon: "air-balloon",
              icon_color: palette.green,
            },
            {
              name: "freecodecamp",
              url: "https://www.freecodecamp.org/",
              icon: "code",
              icon_color: palette.red,
            }
          ]
        },
        {
          name: "",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: palette.teal,
            },
            {
              name: "gemini",
              url: "https://gemini.google.com/",
              icon: "brand-google",
              icon_color: palette.red,
            },
            {
              name: "perplexity",
              url: "https://www.perplexity.ai/",
              icon: "asterisk",
              icon_color: palette.green,
            },
            {
              name: "claude",
              url: "https://claude.ai/",
              icon: "cloud",
              icon_color: palette.blue,
            },
            {
              name: "extensions",
              url: "https://addons.mozilla.org/en-US/firefox/",
              icon: "brand-firefox",
              icon_color: palette.blue,
            }
          ]
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
