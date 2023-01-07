import { useRouter } from "next/router";

export default function Post({ posts }) {
  const router = useRouter();

  const { id }   = router.query;
  return (
    <div>
      {
        <article>
          {posts.map((p) => {
            return (
              <div>
                <h1>{p.id}</h1>
                <h1>{p.title}</h1>
                <h1>{p.description}</h1>
              </div>
            );
          })}
        </article>
      }
    </div>
  );
}

export async function getStaticProps({ params }) {
  let posts = [
    { id: 1, title: "new posts", description: "hello" },
    { id: 2, title: "new posts 2", description: "hello world" },
  ];

  posts = posts.filter((post) => post.id === Number(params.id));
  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  const posts = [
    { id: 1, title: "new posts", description: "hello" },
    { id: 2, title: "new posts 2", description: "hello world" },
  ];

  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
