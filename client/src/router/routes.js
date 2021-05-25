import Homepage from "@/components/pages/Homepage";
import Credit from "@/components/pages/Credit";
import Discord from "@/components/pages/Discord";
import TrainingPacks from "@/components/pages/TrainingPacks";

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
