import sanity from "../../lib/sanity";

export default async function handler(req, res) {
  if (req.method != "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const { task, done, dueDate } = req.body;

  if (!task || !done || !dueDate) {
    return res.status(400).json({
      error: "Missing required fields",
    });
  }

  await sanity
    .create({
      _type: "Todo",
      Task: task,
      Done: done,
      DueDate: dueDate,
    })
    .then((e) => {
      return res.status(201).json({
        message: "Todo created",
      });
    })
    .catch((e) => {
      return res.status(500).json({
        error: e.message,
      });
    });
}
