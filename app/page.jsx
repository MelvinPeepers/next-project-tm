import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="txt-3xl">Homepage</h1>
      <Link href="/properties">Go to Properties</Link>
    </div>
  );
};

export default HomePage;
