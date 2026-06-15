"use client";

export default function CategoriesPage() {
  const categories = [
    {
      title: "🥬 Grocery & Kitchen",
      items: [
        "Fruits & Vegetables",
        "Atta, Rice & Dal",
        "Oil & Ghee",
        "Dairy, Bread & Eggs",
        "Biscuits & Bakery",
        "Dry Fruits & Cereals",
        "Chicken, Meat & Fish",
        "Kitchenware & Appliances",
      ],
    },
    {
      title: "🍟 Snacks & Drinks",
      items: [
        "Chips & Namkeen",
        "Sweets & Chocolates",
        "Drinks & Juices",
        "Tea & Coffee",
        "Instant Food",
        "Sauces & Spreads",
        "Paan Corner",
        "Ice Creams",
      ],
    },
    {
      title: "💄 Beauty & Personal Care",
      items: [
        "Bath & Body",
        "Hair Care",
        "Skin & Face Care",
        "Beauty & Cosmetics",
        "Feminine Hygiene",
        "Baby Care",
        "Health & Pharma",
      ],
    },
    {
      title: "🏠 Household Essentials",
      items: [
        "Home & Lifestyle",
        "Cleaners & Repellents",
        "Electronics",
        "Stationery & Games",
      ],
    },
  ];

  return (
    <main style={{ padding: "20px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1>📂 Categories</h1>

      {categories.map((cat, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h2>{cat.title}</h2>

          {cat.items.map((item, i) => (
            <p key={i}>• {item}</p>
          ))}
        </div>
      ))}
    </main>
  );
}