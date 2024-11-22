
const management = [
  {
    id: "group-management",
    type: "group",
    title: "Management",
    url: "/",
    children: [
      {
        id: "card",
        title: "Cards",
        type: "item",
        url: "/cards",
        icon: '',
      },
      {
        id: "loaders",
        title: "Loaders",
        type: "item",
        url: "/loaders",
        icon: '',
      },
      {
        id: "games",
        title: "Games",
        type: "item",
        url: "/games",
        icon: '',
      },
      {
        id: "chatsUI",
        title: "Chat UI",
        type: "item",
        url: "/chat-ui",
        icon: '',
      },
      // {
      //   id: "colors",
      //   title: "Colors",
      //   type: "item",
      //   url: "/colorsShades",
      //   icon: '',
      // },
      // {
      //   id: "calendars",
      //   title: "Calendars",
      //   type: "item",
      //   url: "/calendars",
      //   icon: '',
      // },
    ],
  },
];

const dashboard = [
  {
    id: "item-dashboard",
    type: "item",
    title: "Dashboard",
    url: "/dashboard",
    icon: '',
  },
];

// const options = [
//   {
//     id: "options",
//     type: "menu",
//     title: "Options",
//     url: "",
//     children: [
//       {
//         id: "menu-about",
//         title: "About",
//         type: "item",
//         url: "/dashboard/about",
//         icon: <InfoIcon />,
//       },
//       {
//         id: "menu-contact",
//         title: "Contact",
//         type: "item",
//         url: "/dashboard/contact",
//         icon: <ContactMailIcon />,
//       },
//     ],
//   },
// ];

const sideMenuItems = [...dashboard, ...management];

export default sideMenuItems;
