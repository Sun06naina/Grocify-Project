"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SelectAddressPage() {
  const router = useRouter();

  const [address, setAddress] = useState(null);

  useEffect(() => {
    const savedAddress =
      JSON.parse(localStorage.getItem("address"));

    if (savedAddress) {
      setAddress(savedAddress);
    }
  }, []);

  const deliverHere = () => {
    localStorage.setItem(
      "selectedAddress",
      JSON.stringify(address)
    );

    // Payment page later
    router.push("/payment");
  };

  const addNewAddress = () => {
    router.push("/delivery-address");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#00C853",
          marginBottom: "20px",
        }}
      >
        📍 Select Delivery Address
      </h1>

      {address ? (
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)",
            marginBottom: "20px",
          }}
        >
          <h3>🏠 Saved Address</h3>

          <p>
            <strong>Name:</strong> {address.name}
          </p>

          <p>
            <strong>Apartment:</strong>{" "}
            {address.apartment}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {address.location}
          </p>

          <button
            onClick={deliverHere}
            style={{
              width: "100%",
              padding: "14px",
              background: "#00C853",
              color: "white",
              border: "none",
              borderRadius: "12px",
              marginTop: "15px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Deliver Here
          </button>
        </div>
      ) : (
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h3>No Saved Address Found</h3>
        </div>
      )}

      <button
        onClick={addNewAddress}
        style={{
          width: "100%",
          padding: "14px",
          background: "white",
          color: "#00C853",
          border: "2px solid #00C853",
          borderRadius: "12px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        ➕ Add New Address
      </button>
    </main>
  );
}