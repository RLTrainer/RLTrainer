import Homepage from "../components/pages/Homepage";
import Credit from "../components/pages/Credit";

export default [
  {
    path: "/",
    component: Homepage
  },
  {
    path: "/credit",
    component: Credit,
    name: 'RLTrainer - Credit'
  },
];
