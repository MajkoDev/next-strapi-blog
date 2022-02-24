export default function PostPreview({ post }) {
  return (
    <>
        <h2>{post.attributes.title}</h2>
        <p>{post.attributes.description}</p>
    </>
  );
}
