export default {
  name: "Todo",
  type: "document",
  title: "Todo",
  fields: [
    {
      name: "Task",
      type: "string",
      title: "Task",
    },
    {
      name: "Done",
      type: "boolean",
      title: "Done",
    },
    {
      name: "DueDate",
      type: "date",
      title: "Due Date",
    },
  ],
};
