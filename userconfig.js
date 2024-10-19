// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "New Delhi",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://ashish0kumar.github.io/startpage/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "start",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "comm & social",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.blue,
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
              name: "discord",
              url: "https://discord.com/channels/@me",
              icon: "brand-discord",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "dev & dsa",
          links: [
            {
              name: "github",
              url: "https://github.com/ashish0kumar",
              icon: "brand-github",
              icon_color: palette.teal,
            },
            {
              name: "devdocs",
              url: "https://devdocs.io/",
              icon: "code",
              icon_color: palette.flamingo,
            },
            {
              name: "udemy",
              url: "https://www.udemy.com/home/my-courses/learning/",
              icon: "certificate",
              icon_color: palette.sapphire,
            },
            {
              name: "tuf",
              url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
              icon: "list-details",
              icon_color: palette.red,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com/u/ashish0kumar/",
              icon: "brand-leetcode",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "ai tools",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: palette.teal,
            },
            {
              name: "claude",
              url: "https://claude.ai/new",
              icon: "robot",
              icon_color: palette.peach,
            }
          ]
        }
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
