import menuSectionRow from "./menuSectionRow";

export default {
  name: "productpricemenu",
  title: "Product Price Menu",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "menuSection",
      title: "Menu section",
      type: "array",
      of: [menuSectionRow],
    },
  ],
  preview: {
    prepare() {
      return { title: "Product Price Menu" };
    },
  },
};
