export default {
  name: "productFeature",
  title: "Product feature",
  type: "object",
  fields: [
    {
      name: "productFeatureList",
      title: "Product feature list",
      type: "array",
      description:
        "A static list of products to showcase popular or on sale items",
      of: [
        {
          name: "productFeatureItem",
          title: "Product Item",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Product Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              title: "Product Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
