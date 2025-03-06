import { defineType, defineField } from "sanity";

export default defineType({
  name: "logo",
  title: "Logo",
  type: "document",
  fields: [
    defineField({
      name: "label",
      description: "Needed for accessibility",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      description: "Needed if the logo is a link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "logoUrl",
      title: "Logo",
      type: "image",
      validation: (rule) => rule.required(),
    }),
  ],
});
