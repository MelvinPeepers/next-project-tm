exports.handler = async function (event, context) {
  console.log("Function is invoked at:", new Date().toISOString());

  // Example of logging the path
  console.log("Path:", event.path);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Log recorded" }),
  };
};
