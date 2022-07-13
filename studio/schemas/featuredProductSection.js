export default {
  name: "featuredProductSection",
  title: "Featured product section",
  type: "object",
  fields: [
    {
      name: "sectionName",
      title: "Section name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sectionSubtitle",
      title: "section Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
