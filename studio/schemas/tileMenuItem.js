export default {
  name: "tileMenuItem",
  title: "Tile menu",
  type: "object",
  fields: [
    {
      name: "tag",
      title: "Tag",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
