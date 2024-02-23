const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 400;
  const message = err.message || "Backend error";
  const extradetails = err.extradetails;

  return res.status(status).json({ message, extradetails });
};

export default errorMiddleware;
