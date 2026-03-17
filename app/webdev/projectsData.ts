export const projectsData: Record<
  string,
  {
    title: string;
    focus: string;
    media: { type: "image" | "video"; src: string }[];
    link: string;
  }
> = {
  flybook: {
    title: "FlyBook - Flight Booking App",
    focus: 
      "A full-stack flight booking web application designed to simplify travel planning. " +
      "Built with Django for the backend and React Vite for the frontend, FlyBook allows users " +
      "to search flights, view airline schedules, book tickets, manage baggage information, " +
      "and access special offers. The project demonstrates robust user authentication and " +
      "a smooth, responsive interface for an optimal user experience.",
    media: [
      { type: "video", src: "/images/flybook.mp4" } // add your video file in public/videos
    ],
    link: "https://github.com/AMNAH3844/FlyBook_.git",
  },

  shopsie: {
    title: "Shopsie - Shopping & Delivery App",
    focus: 
      "Currently in active development, Shopsie is a cross-platform shopping and delivery " +
      "assistant app aimed at improving in-person and online shopping efficiency. Built with " +
      "React Native and Next.js, it addresses common shopping challenges by offering smart " +
      "shopping lists, shopkeeper registration, price comparison, seamless user connections, " +
      "and optional delivery tracking. This project emphasizes real-time problem solving for " +
      "busy consumers and shopkeepers, optimizing both convenience and efficiency.",
    media: [
      { type: "image", src: "/images/signupShopsie.jpg" },
      { type: "image", src: "/images/shopkeeper.jpg" },
      // { type: "image", src: "/images/shopsie3.png" }
    ],
    link: "https://github.com/yourusername/shopsie", // update your actual link
  },
};