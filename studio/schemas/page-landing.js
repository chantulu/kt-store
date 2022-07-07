import location from "./location";
import MenuSection from "./MenuSection";
import productFeature from "./productFeature";
import tileMenu from "./tileMenu";

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
    {
      name: "landingHeroElement",
      title: "Hero element",
      type: "heroElement",
    },
    {
      name: "body",
      title: "Page Body",
      type: "array",
      of: [
        {
          name: "landingHours",
          title: "Landing Page Hours",
          type: "hours",
        },
        {
          type: "block",
        },
        {
          type: "image",
        },
        tileMenu,
        location,
        productFeature,
        MenuSection,
      ],
    },
  ],
};
