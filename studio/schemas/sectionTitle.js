export default {
  name: "sectionTitle",
  title: "Section Title",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "SubTitle",
      type: "string",
    },
  ],
};
