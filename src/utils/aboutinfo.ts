import { ImageSourcePropType } from "react-native";

interface Info {
  id: number;
  image: ImageSourcePropType;
  heading: string;
  paragraph: string;
}

const aboutInfo: Info[] = [
  {
    id: 1,
    image: require("../assets/undraw_confirmed_c5lo.png"),
    heading: "Discover New Opportunities",
    paragraph:
      "Unlock your potential with tools designed to help you grow and succeed every day.",
  },
  {
    id: 2,
    image: require("../assets/undraw_credit-card-payments_y0vn.png"),
    heading: "Stay on Top of Your Goals",
    paragraph:
      "Easily organize, track, and complete your tasks without missing a single deadline.",
  },
  {
    id: 3,
    image: require("../assets/undraw_pancakes_5hix.png"),
    heading: "Connect and Collaborate",
    paragraph:
      "Work seamlessly with your team, share updates, and achieve more together.",
  },
  {
    id: 4,
    image: require("../assets/undraw_reminder_o9nl.png"),
    heading: "Simplify Your Workflow",
    paragraph:
      "Manage everything in one place with an intuitive design that saves you time and energy.",
  },
];

export default aboutInfo;
