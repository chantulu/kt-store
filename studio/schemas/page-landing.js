//page-landing.js
export default {
  name: "page-landing",
  title: "Landing Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "slug (url)",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      // Image to be used as OG image for reacthelmet
      name: "image",
      title: "Preview Image",
      type: "image",
      description: "Image preview for social media sharing",
    },
  ],
};
