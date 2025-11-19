export default function PostCard({ post }) {
  const title = post.attributes.title;
  const content = post.attributes.content;
  const category = post.attributes.category?.data?.attributes?.name;
  const image = post.attributes.cover?.data?.attributes?.url;

  return (
    <div className="card">
      {image && (
        <img
          src={process.env.NEXT_PUBLIC_STRAPI_URL + image}
          alt={title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      )}
      <h2>{title}</h2>
      <p>{content?.substring(0, 120)}...</p>

      {category && (
        <p>
          <strong>Category:</strong> {category}
        </p>
      )}
    </div>
  );
}
