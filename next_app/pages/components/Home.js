import React from "react";

function Home({ posts }) {
  return (
    <div>
      <h1>{posts.title}</h1>
      <p>{posts.description}</p>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const posts = { title: "new posts", description: "hello" };
  // get external data from the file system,API, DB etc

  return {
    props: {
      posts,
    },
  };
}
