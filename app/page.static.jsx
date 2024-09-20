// app/properties/page.static.jsx
import React from "react";

export default function PropertiesPage({ data }) {
  return (
    <div>
      <h1>Properties Page</h1>
      <p>This is a static page, pre-rendered at build time.</p>
      <p>Data: {data}</p>
    </div>
  );
}

// Static data fetching
export async function getStaticProps() {
  const data = "Example static data for the properties page.";
  return {
    props: {
      data,
    },
  };
}
