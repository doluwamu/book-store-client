const connectionError = {
  err1: "getaddrinfo ENOTFOUND",
  err2: "buffering timed out",
  err3: `Could not connect to any servers in your MongoDB Atlas cluster.`,
};

const serverErrors = {
  serr1: "Request failed with status code 500",
  serr2: `Could not connect to any servers in your MongoDB Atlas cluster.`,
};

const connectionErrorMessage =
  "Ooops, Something went wrong with your connection :(";

export const getErrors = (error) => {
  const { err1, err2, err3 } = connectionError;
  const { serr1, serr2 } = serverErrors;

  if (
    (error &&
      error.response &&
      error.response.data &&
      error.response.data.message.includes(err2)) ||
    error.response.data.message.includes(err1) ||
    error.response.data.message.includes(err3)
  ) {
    return connectionErrorMessage;
  } else if (
    !error.response.data.message.includes(err1) &&
    !error.response.data.message.includes(err2) &&
    !error.response.data.message.includes(err3) &&
    error.response.data.message.length >= 1
  ) {
    return error.response.data.message;
  } else if (
    (error.message && error.message.includes(serr1)) ||
    error.message.includes(serr2)
  ) {
    return connectionErrorMessage;
  }
  return error.message;
};
