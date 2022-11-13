//
//
const name = "The Window";

const alpha = {
  name: "My Alpha",
  getNameFunc: function () {
    return function () {
      return alpha.name;
    };
  },
};
