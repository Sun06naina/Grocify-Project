export async function GET() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=100"
    );

    const data = await response.json();

    return Response.json(data.products);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}