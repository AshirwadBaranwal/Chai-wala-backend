import Contact from "../models/contact.model.js";

Contact;
const contactControl = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(201).json({ message: "message sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "message not sent" });
  }
};

export default contactControl;
