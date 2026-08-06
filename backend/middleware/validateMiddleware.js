const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.issues.map((e) => e.message);
    res.status(400);
    return next(new Error(errors.join(", ")));
  }

  req.body = result.data; // replaces req.body with the validated/parsed data
  next();
};

module.exports = validate;
