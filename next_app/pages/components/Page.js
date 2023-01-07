import Layout from "../Layout/Layout";

function Page({ response }) {
  return (
    <div>
      <Layout>
        {response.title}

        <p>{response.description}</p>
      </Layout>
    </div>
  );
}

export default Page;

export async function getServerSideProps() {
  const response = { title: "new posts", description: "hello" };

  return {
    props: {
      response,
    },
  };
}
