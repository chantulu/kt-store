const validateTime = (Rule) =>
  Rule.required()
    .max(5)
    .regex(/^[0-9]{2}:[0-9]{2}$/)
    .custom((input = "") => {
      const [hours, minutes] = input.split(":");
      if (!hours || !minutes) {
        return "Incorrect Format, format must be 00:00";
      }
      if (
        parseInt(hours) > 24 ||
        parseInt(minutes) > 59 ||
        parseInt(hours) < 0 ||
        parseInt(minutes) < 0
      ) {
        return "Pleas use a 24hr format from 00:00 to 23:59";
      }
      return true;
    });

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
    {
      name: "hours",
      title: "Hours",
      type: "object",
      fields: [
        {
          name: "weekdaysopen",
          title: "Weekdays Open From",
          type: "string",
          validation: (Rule) => validateTime(Rule),
        },
        {
          name: "weekdaysclose",
          title: "Weekdays Open To",
          type: "string",
          validation: (Rule) => validateTime(Rule),
        },
        {
          name: "saturdayopen",
          title: "Saturday Open From",
          type: "string",
          validation: (Rule) => validateTime(Rule),
        },
        {
          name: "saturdayclose",
          title: "Saturday Open To",
          type: "string",
          validation: (Rule) => validateTime(Rule),
        },
        {
          name: "sundayopen",
          title: "Sunday Open From",
          type: "string",
          validation: (Rule) => validateTime(Rule),
        },
        {
          name: "sundayclose",
          title: "Sunday Open To",
          type: "string",
          validation: (Rule) => validateTime(Rule),
        },
      ],
    },
    {
      name: "holidaylist",
      title: "Holiday Closures",
      type: "array",
      description:
        "If the current date matches a holiday a closure notice will be displayed on the website",
      of: [
        {
          name: "holiday",
          title: "Holiday",
          type: "object",
          fields: [
            { name: "holiday__name", title: "Holiday Name", type: "string" },
            { name: "holiday__date", title: "Holiday Date", type: "date" },
          ],
        },
      ],
    },
    {
      name: "addr_1",
      title: "Address Line 1",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "addr_2",
      title: "Address Line 2",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
