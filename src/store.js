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

  articles: [
    {
      img: "blog4-2x.jpg",
      title: "The best protein shake",
      subtitle: "By admin | November 26th 2019 | Gym",
    },
    {
      img: "blog1-2x.jpg",
      title: "Ultimate cardio workout",
      subtitle: "By admin | November 26th 2019 | Gym",
    },
    {
      img: "blog3-2x.jpg",
      title: "New juices available now",
      subtitle: "By admin | November 26th 2019 | Gym",
    },
  ],

  collaborators: [
    {
      img: "sponsor-1-2x.png",
      description:
        "Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.",
      link: "Visit Yoga Studio",
    },
    {
      img: "sponsor-2-2x.png",
      description:
        "Feugiat etiam dui mauris pharetra mauris sed pharetra. Convallis sapien ornare cras faucibus nulla porta dui a.",
      link: "Join Fitness Center",
    },
    {
      img: "sponsor-3-2x.png",
      description:
        "Nisl aliquam adipiscing montes, nec, adièiscing commodo aliquam tincidunt. Ligula in habitant et sagittis imperdiet.",
      link: "Learn about FC",
    },
    {
      img: "sponsor-4-2x.png",
      description:
        "Proin in viverra maecenas et mattis ut nibh enim. Gravida ultricies mi porta lacus. Et posuere velit sed nec eleifend.",
      link: "Visit Power Gym",
    },
  ],
});
