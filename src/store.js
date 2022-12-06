import { reactive } from "vue";

export const store = reactive({
  offerts: [
    {
      img: "service6-2x.jpg",
      title: "Crossfit Workout",
      subtitle: "Push your limit",
      isVisible: true,
    },
    {
      img: "box1-2x.jpg",
      title: "New gym apparel",
      subtitle: "Look good feel good",
      isVisible: true,
    },
    {
      img: "box3-2x.jpg",
      title: "Team training",
      subtitle: "Find a partner",
      isVisible: true,
    },
  ],
});
