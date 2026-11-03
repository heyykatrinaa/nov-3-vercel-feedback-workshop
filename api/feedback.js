
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed."
    });
  }

  const { name, message } = req.body || {};

  if (!name || !message) {
    return res.status(400).json({
      message: "Please complete all fields."
    });
  }

  return res.status(200).json({
    message: `Thank you, ${name}! Feedback received.`
  });
}
