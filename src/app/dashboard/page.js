"use client";

import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section") || "overview";

  const renderContent = () => {
    switch (section) {
      case "profile":
        return <h2>Profile Information</h2>;

      case "orders":
        return <h2>My Orders</h2>;

      case "wishlist":
        return <h2>Wishlist</h2>;

      case "addresses":
        return <h2>My Addresses</h2>;

      case "payments":
        return <h2>Payment History</h2>;

      case "reviews":
        return <h2>My Reviews</h2>;

      case "custom-gifts":
        return <h2>Custom Gift Requests</h2>;

      default:
        return <h2>Overview</h2>;
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#f5f5f5",
          padding: "20px",
        }}
      >
        <h2>Dashboard</h2>

        <p><a href="/dashboard?section=overview">Overview</a></p>

        <p><a href="/dashboard?section=profile">Profile</a></p>

        <p><a href="/dashboard?section=orders">Orders</a></p>

        <p><a href="/dashboard?section=wishlist">Wishlist</a></p>

        <p><a href="/dashboard?section=addresses">Addresses</a></p>

        <p><a href="/dashboard?section=payments">Payments</a></p>

        <p><a href="/dashboard?section=reviews">Reviews</a></p>

        <p><a href="/dashboard?section=custom-gifts">Custom Gifts</a></p>
      </div>

      {/* Right Side */}
      <div style={{ flex: 1, padding: "30px" }}>
        {renderContent()}
      </div>
    </div>
  );
}