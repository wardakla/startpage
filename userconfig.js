// latte / frappe / macchiato / mocha
const palette = mocha;
const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Kathmandu",
    scale: "C",
  },
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
              name: "mail",
              url: "https://mail.proton.me/u/0/inbox",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "protonvpn",
              url: "https://account.proton.me/login",
              icon: "shield",
              icon_color: palette.blue,
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
              name: "protondb",
              url: "https://www.protondb.com",
              icon: "atom",
              icon_color: palette.green,
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
    {
      name: "Extras",
      background_url: `src/img/banners/cbg-10.gif`,
      categories: [
        {
          name: "",
          links: [
            {
              name: "sflix",
              url: "https://sflix.is/",
              icon: "movie",
              icon_color: palette.red,
            },
            {
              name: "netmirror",
              url: "https://netfree2.cc/",
              icon: "brand-netflix",
              icon_color: palette.green,
            },
            {
              name: "popcorn movies",
              url: "https://popcornmovies.to/",
              icon: "brand-pepsi",
              icon_color: palette.yellow,
            },
            {
              name: "watch filmy",
              url: "https://watchfilmy.lat/",
              icon: "brand-amazon",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "dodi-repack",
              url: "https://dodi-repacks.site/",
              icon: "device-gamepad",
              icon_color: palette.red,
            },
            {
              name: "fitgirl-repack",
              url: "https://fitgirl-repacks.site/",
              icon: "device-gamepad-2",
              icon_color: palette.green,
            },
            {
              name: "diakov",
              url: "https://diakov.net/",
              icon: "egg-cracked",
              icon_color: palette.blue,
            },
            {
              name: "get into pc",
              url: "https://getintopc.com/",
              icon: "download",
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "fotmob",
              url: "https://www.fotmob.com/",
              icon: "soccer-field",
              icon_color: palette.yellow,
            },
            {
              name: "efHub",
              url : "https://efootballhub.net/efootball23",
              icon: "ball-football",
              icon_color: palette.blue,
            },
            {
              name: "cricbuzz",
              url: "https://www.cricbuzz.com/",
              icon: "cricket",
              icon_color: palette.peach,
            },
            {
              name: "hoofoot",
              url: "https://www.hoofoot.com/",
              icon: "ball-basketball",
              icon_color: palette.green,
            },
            {
              name: "footem",
              url: "https://footem.site/",
              icon: "ball-football",
              icon_color: palette.red,
            },
          ],
        }
      ],
    }
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
