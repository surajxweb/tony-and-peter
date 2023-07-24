import { request, gql } from "graphql-request";

export default function Home({ authors }) {
  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const endpoint = process.env.GRAPHQL_ENDPOINT; // Replace this with your actual GraphQL API endpoint
  const query = gql`
    query Test {
      authors {
        id
        name
      }
    }
  `;

  const data = await request(endpoint, query);

  return {
    props: {
      authors: data.authors,
    },
    revalidate: 10,
  };
}
