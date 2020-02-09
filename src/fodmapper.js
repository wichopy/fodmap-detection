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
  }
];

const options = {
  threshold: 0.1,
  keys: ["fullName"]
};

const fuse = new Fuse(dictionary, options);

export default fuse;
