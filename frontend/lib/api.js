export async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  });

  const data = await res.json();
  return data.data;
}
