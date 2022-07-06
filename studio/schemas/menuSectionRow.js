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
      name: "hasSizes",
      title: "Add Serving Size Price?",
      type: "boolean",
    },
    {
      name: "hidePrice",
      title: "Hide Price? (products with no price)",
      type: "boolean",
      hidden: ({ parent }) => parent.hasSizes,
    },
    {
      name: "menuItemList",
      title: "Menu item List",
      type: "array",
      of: [menuItemSingle],
    },
  ],
};
