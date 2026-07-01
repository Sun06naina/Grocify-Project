"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaHome, FaPlus, FaEdit } from "react-icons/fa";

export default function SelectAddressPage() {
  const router = useRouter();

  const [address, setAddress] = useState(null);

  useEffect(() => {
    const savedAddress = JSON.parse(localStorage.getItem("address"));

    if (savedAddress) {
      setAddress(savedAddress);
    }
  }, []);

  const deliverHere = () => {
    localStorage.setItem(
      "selectedAddress",
      JSON.stringify(address)
    );

    router.push("/payment");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f7f7",
        padding: "20px",
      }}
    >
      {/* Header */}

      <h1
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#00C853",
          marginBottom: "25px",
        }}
      >
        <FaMapMarkerAlt />
        Select Delivery Address
      </h1>

      {/* Saved Address */}

      {address ? (
        <div
          style={{
            background: "#fff",
            borderRadius: "18px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,.08)",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "15px",
            }}
          >
            <FaHome
              size={28}
              color="#00C853"
            />

            <div>
              <h3
                style={{
                  margin: 0,
                }}
              >
                Home
              </h3>

              <p
                style={{
                  color: "#777",
                  margin: 0,
                  fontSize: "14px",
                }}
              >
                Saved Address
              </p>
            </div>
          </div>

          <p>
            <strong>Name:</strong> {address.name}
          </p>

          <p>
            <strong>Apartment:</strong> {address.apartment}
          </p>

          <p>
            <strong>Location:</strong> {address.location}
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <button
              onClick={deliverHere}
              style={{
                flex: 1,
                background: "#00C853",
                color: "#fff",
                border: "none",
                padding: "14px",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Deliver Here
            </button>

            <button
              onClick={() =>
                router.push("/delivery-address")
              }
              style={{
                width: "55px",
                border: "2px solid #00C853",
                background: "#fff",
                color: "#00C853",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              <FaEdit />
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            background: "#fff",
            borderRadius: "18px",
            padding: "30px",
            textAlign: "center",
            marginBottom: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,.08)",
          }}
        >
          <h3>No Address Found</h3>

          <p
            style={{
              color: "#777",
            }}
          >
            Add your first delivery address.
          </p>
        </div>
      )}

      {/* Add Address */}

      <button
        onClick={() =>
          router.push("/delivery-address")
        }
        style={{
          width: "100%",
          background: "#fff",
          border: "2px dashed #00C853",
          color: "#00C853",
          padding: "18px",
          borderRadius: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          fontSize: "16px",
        }}
      >
        <FaPlus />
        Add New Address
      </button>
    </main>
  );
}