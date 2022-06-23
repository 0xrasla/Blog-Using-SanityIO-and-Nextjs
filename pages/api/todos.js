import sanity from "../../lib/sanity";

export default async function handler(req, res) {
  if (req.method == "POST") {
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

  if (req.method == "DELETE") {
    const { id } = JSON.parse(req.body);

    if (!id) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    await sanity
      .delete(id)
      .then((e) => {
        return res.status(200).json({
          message: "Todo deleted",
        });
      })
      .catch((e) => {
        return res.status(500).json({
          error: e.message,
        });
      });
  }
}
