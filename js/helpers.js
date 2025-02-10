import { personIcon, homeIcon, jobIcon, goToIcon, parkIcon } from "./constants.js";

// Note'un status değeri için düzenleme yapan fonksiyon
const getStatus = (status) => {
  switch (status) {
    case "goto":
      return "visit";
    case "home":
      return "home";
    case "park":
      return "parking";
    case "job":
      return "work";
    default:
      return "undefined status";
  }
};

// Her status için gerekli icona karar veren fonskiyo

const getNoteIcon = (status) => {
  switch (status) {
    case "goto":
      return goToIcon;
    case "home":
      return homeIcon;
    case "park":
      return parkIcon;
    case "job":
      return jobIcon;
    default:
      return null;
  }
};

export { getStatus, getNoteIcon };