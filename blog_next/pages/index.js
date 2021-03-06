import axios from "axios";
import HomeHeader from "../components/HomeHeader";
import HomeLatestPosts from "../components/HomeLatestPosts";

export default function Home({ posts }) {
  return (
    <>
      <HomeHeader />

      {/* <h2>{posts[0].attributes.title}</h2> */}

      <HomeLatestPosts posts={posts} />
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
