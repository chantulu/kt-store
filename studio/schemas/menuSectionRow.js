import menuItemSingle from "./menuItemSingle";

export default {
  name: "menuSectionRow",
  title: "Menu section row",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "menuItemList",
      title: "Menu item List",
      type: "array",
      of: [menuItemSingle],
    },
  ],
};
