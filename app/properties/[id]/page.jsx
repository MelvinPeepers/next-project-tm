"use client";

// const PropertyPage = () => {
//   return <div>Property Page</div>;
// };

// export default PropertyPage;

import { useEffect } from "react";

const PropertyPage = () => {
  useEffect(() => {
    // Call the function when the component mounts
    fetch("/.netlify/functions/logRoute")
      .then((response) => response.json())
      .then((data) => console.log(data.message));
  }, []);

  return <div>Property Page ID</div>;
};

export default PropertyPage;
