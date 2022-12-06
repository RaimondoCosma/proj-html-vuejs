import { reactive } from "vue";

export const store = reactive({
  offerts: [
    {
      img: "service6-2x.jpg",
      title: "Crossfit Workout",
      subtitle: "Push your limit",
      isHover: false,
    },
    {
      img: "box1-2x.jpg",
      title: "New gym apparel",
      subtitle: "Look good feel good",
      isHover: false,
    },
    {
      img: "box3-2x.jpg",
      title: "Team training",
      subtitle: "Find a partner",
      isHover: false,
    },
  ],

  playlists: [
    {
      img: "video2-2x.jpg",
      title: "Thights & glute workout",
      subtitle: "Increase your mobility",
    },
    {
      img: "video7-2x.jpg",
      title: "Lift, firm & perk up",
      subtitle: "Feel ypung again",
    },
    {
      img: "video9-2x.jpg",
      title: "Slim & trim your waist",
      subtitle: "Shed those extra pound",
    },
  ],
});
