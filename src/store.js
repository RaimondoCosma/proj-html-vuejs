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
  courses: [
    {
      img: "smartwatch.png",
      title: "Team training",
      subtitle: "Find a partner",
      description:
        "Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique",
      link: "Find a partner",
    },
    {
      img: "dumbbell.png",
      title: "Lift, firm & perk up",
      subtitle: "Feel young again",
      description:
        "Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique",
      link: "Learn about crossfit",
    },
    {
      img: "waist.png",
      title: "Slim & trim your waist",
      subtitle: "Shed those extra pound",
      description:
        "At laoreet senectus volutpat diam vel sed sed amet pellentesque. Lobortis ut aliquam risus purus. A tellus ut etiam.",
      link: "Schedule a workout",
    },
  ],
});
