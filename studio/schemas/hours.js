export default {
  name: "hours",
  title: "Hours",
  type: "object",
  fields: [
    {
      name: "hoursTitle",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hoursSubtitle",
      title: "SubTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return { title: "Hours of operation" };
    },
  },
};
