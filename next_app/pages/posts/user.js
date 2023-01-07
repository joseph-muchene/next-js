import useSwr from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Users({ users }) {
  const { data, error } = useSwr("http://localhost:3000/api/users", fetcher);

  if (error) {
    return <div>error</div>;
  }
  if (!data) return <div>Loading..</div>;
  return (
    <article>
      {users.map((user) => (
        <>
          <h1>{user.id}</h1>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </>
      ))}
    </article>
  );
}

export async function getStaticProps() {
  const res = fetch("http://localhost:3000/api/users");
  const users = await (await res).json();

  return {
    props: {
      users,
    },
  };
}
