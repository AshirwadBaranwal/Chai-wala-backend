const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    const err = {
      status: 400,
      message: "please fill input properly",
      extradetails: error.errors[0].message,
    };
    // res.status(400).json({ msg: msgResponse });
    next(err);
  }
};

export default validate;
