module.exports = {
  ok: ({ data, message }) => ({
    data,
    status: 200,
    message: message || "success",
  }),

  created: ({ data, message }) => ({
    data,
    status: 201,
    message: message || "created successfully",
  }),

  badRequest: ({ message }) => ({
    status: 400,
    message: message || "Bad Request",
  }),

  notFound: ({ message }) => ({
    status: 404,
    message: message || "not found",
  }),

  error: ({ data, message }) => ({
    err: data,
    status: 500,
    message: message || "Error on the Server",
  }),
};
