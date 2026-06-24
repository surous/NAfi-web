export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "photo",
    },
  },
};
