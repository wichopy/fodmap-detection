import Fuse from "fuse.js";

const dictionary = [
  {
    id: "1",
    scale: "green",
    maxUse: "100g",
    category: "fruit",
    fullName: "Banana, common, firm"
  },
  {
    id: "2",
    scale: "red",
    maxUse: "0g",
    category: "fruit",
    fullName: "Lychee"
  },
  {
    id: "3",
    scale: "green",
    maxUse: "free use",
    category: "fresh vegetables",
    fullName: "Choy sum"
  }
];

const options = {
  threshold: 0.2,
  keys: ["fullName"]
};

const fuse = new Fuse(dictionary, options);

export default fuse;
