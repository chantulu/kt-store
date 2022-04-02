export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Site Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Site Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      // Fallback image for OG images if the image is not set in the landing page document
      name: "image",
      title: "Default Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
