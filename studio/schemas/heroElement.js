export default {
  name: "heroElement",
  title: "Hero Element",
  type: "object",
  description: "Big bold letters with an image",
  fields: [
    {
      name: "heroText",
      title: "Hero text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroImage",
      title: "Hero image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hasMarketingBlock",
      title: "Want a marketing Block?",
      type: "boolean",
      description:
        "A marketing block would split the hero into two. Allowing you to have extra information and another image next to it",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroMarketingText",
      title: "Hero Marketing Text",
      type: "string",
      validation: (Rule) => Rule.required(),
      hidden: ({ parent }) => !parent?.hasMarketingBlock,
    },
    {
      name: "heroMarketingImage",
      title: "Hero marketing image",
      type: "image",
      validation: (Rule) => Rule.required(),
      hidden: ({ parent }) => !parent?.hasMarketingBlock,
    },
    {
      name: "heroMarketingSubtitle",
      title: "Hero marketing subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
      hidden: ({ parent }) => !parent?.hasMarketingBlock,
    },
    {
      name: "heroMarketingLinkText",
      title: "Hero marketing link text",
      type: "string",
      validation: (Rule) => Rule.required(),
      hidden: ({ parent }) => !parent?.hasMarketingBlock,
    },
    {
      name: "heroMarketingLinkURL",
      title: "Hero marketing linkURL",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .regex(/^(https?:|\/[a-zA-Z0-9])/)
          .error(
            "Menu link must be internal or external eg. http(s)://page.com or /internalpage/123"
          ),
      hidden: ({ parent }) => !parent?.hasMarketingBlock,
    },
  ],
};
