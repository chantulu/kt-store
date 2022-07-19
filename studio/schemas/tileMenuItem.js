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
    {
      name: "url",
      title: "Link URL",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .regex(/^(https?:|\/[a-zA-Z0-9])/)
          .error(
            "Menu link must be internal or external eg. http(s)://page.com or /internalpage/123"
          ),
    },
  ],
};
