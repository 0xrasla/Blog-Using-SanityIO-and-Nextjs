export default {
  name: "Blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "author",
      type: "string",
      title: "Author",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "poster",
      type: "image",
      title: "Poster",
    },
    {
      name: "slug",
      type: "string",
      title: "Slug",
    },
    {
      name: "dueDate",
      type: "date",
      title: "Due Date",
    },
  ],
  initialValue: {
    dueDate: () => getFormatedDate(),
    author: "Unknown",
  },
};

const getFormatedDate = () => {
  const d = new Date();
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};
