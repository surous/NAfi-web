export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (rule: any) => rule.required().min(30),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (rule: any) => rule.required().min(1).max(5),
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "clientName",
      subtitle: "company",
      media: "avatar",
    },
  },
};
