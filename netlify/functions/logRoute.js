// exports.handler = async function (event, context) {
//   console.log("Function is invoked at:", new Date().toISOString());

//   // Example of logging the path
//   console.log("Path:", event.path);

//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: "Log recorded" }),
//   };
// };

exports.handler = async function (event, context) {
  console.log("Function is invoked at:", new Date().toISOString());

  // Log the path which is the part of the URL where the function is accessed
  console.log("Path:", event.path);

  // If you want to log the full URL, you might need to reconstruct it from headers and path
  const host = event.headers["host"];
  const protocol = event.headers["x-forwarded-proto"] || "http";
  const fullUrl = `${protocol}://${host}${event.path}`;

  console.log("Full URL:", fullUrl);

  // Optionally log more details
  console.log("HTTP Method:", event.httpMethod);
  console.log("Headers:", JSON.stringify(event.headers));
  console.log("Query Parameters:", JSON.stringify(event.queryStringParameters));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Log recorded" }),
  };
};
