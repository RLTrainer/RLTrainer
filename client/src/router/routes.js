import Homepage from "../components/pages/Homepage";
import Credit from "../components/pages/Credit";

export default [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/theteam",
    component: Credit,
    name: "RLTrainer - The Team",
  },
  {
    path: "/discord",
    beforeEnter() {
      window.location.replace("https://discord.gg/Vp6FSzheUP");
    },
    name: "RLTrainer - Discord",
  },
];
