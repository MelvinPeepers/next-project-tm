// const AddPropertyPage = () => {
//   return <div>Add Property Page</div>;
// };

// export default AddPropertyPage;

"use client";

// import { useEffect } from "react";

// const AddPropertyPage = () => {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // This ensures the code only runs in a client-side environment
//       console.log("Current route:", window.location.pathname);
//     }
//   }, []);

//   return <div>Add Property Page</div>;
// };

// export default AddPropertyPage;

import { useEffect } from "react";

const AddPropertyPage = () => {
  useEffect(() => {
    // Call the function when the component mounts
    fetch("/.netlify/functions/logRoute")
      .then((response) => response.json())
      .then((data) => console.log(data.message));
  }, []);

  return <div>Add Property Page</div>;
};

export default AddPropertyPage;
