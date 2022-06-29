export default {
  name: "menuItemSingle",
  title: "Menu item single",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      hidden: ({ parent }) => parent?.hasSizes,
    },
    {
      name: "hasSizes",
      title: "Add Serving Size Price?",
      type: "boolean",
    },
    {
      name: "price_sm",
      title: "Price (SM)",
      type: "number",
      hidden: ({ parent }) => !parent?.hasSizes,
    },
    {
      name: "price_md",
      title: "Price (MD)",
      type: "number",
      hidden: ({ parent }) => !parent?.hasSizes,
    },
  ],
};
