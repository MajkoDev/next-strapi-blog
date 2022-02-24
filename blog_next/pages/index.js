import axios from "axios";

export default function Home({ posts, title }) {
  console.log(posts);

  return (
    <>
      <h2>{posts[0].attributes.title}</h2>
      <h2>{posts[1].attributes.title}</h2>
    </>
  );
}

export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");

  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}
