export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "icon",
      title: "Icon Name (Lucide React)",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web", value: "Web" },
          { title: "Mobile", value: "Mobile" },
          { title: "Enterprise", value: "Enterprise" },
          { title: "Cloud", value: "Cloud" },
          { title: "AI", value: "AI" },
          { title: "Consulting", value: "Consulting" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
    },
  },
};
