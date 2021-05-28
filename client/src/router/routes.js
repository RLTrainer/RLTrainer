import Homepage from "@/views/Homepage";
import Credit from "@/views/Credit";
import Discord from "@/views/Discord";
import TrainingPacks from "@/views/TrainingPacks";

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
    component: Discord,
    name: "RLTrainer - Discord",
    beforeEnter() {
      window.location.replace("https://discord.gg/Vp6FSzheUP");
    },
  },
  {
    path: "/packs",
    component: TrainingPacks,
    name: "RLTrainer - Training Packs",
  },
];
