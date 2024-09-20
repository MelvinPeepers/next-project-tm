// const PropteriesPage = () => {
//   return <div>Properties Page</div>;
// };

// export default PropteriesPage;

import React from "react";

const PropertiesPage = ({ data }) => {
  return (
    <div>
      <h1>Properties Page</h1>
      <p>This is a static page, pre-rendered at build time.</p>
      <p>Data: {data}</p>{" "}
      {/* Displaying some static data passed via getStaticProps */}
    </div>
  );
};

export default PropertiesPage;

// This function gets called at build time on the server-side.
export async function getStaticProps() {
  // Here you can simulate fetching data or just provide static data.
  const data = "Example static data for the properties page.";

  // By returning { props: { data } }, the PropertiesPage component
  // will receive `data` as a prop at build time
  return {
    props: {
      data,
    },
  };
}
