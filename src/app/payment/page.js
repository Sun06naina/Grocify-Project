"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaMoneyBillWave,
  FaCreditCard,
  FaUniversity,
} from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";

export default function PaymentPage() {
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [itemsTotal, setItemsTotal] = useState(0);
  const [address, setAddress] = useState(null);

  const deliveryFee = 40;
  const platformFee = 5;
  const discount = 20;

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    setItemsTotal(total);

    const savedAddress = JSON.parse(
      localStorage.getItem("selectedAddress")
    );

    if (savedAddress) {
      setAddress(savedAddress);
    }
  }, []);

  const grandTotal =
    itemsTotal + deliveryFee + platformFee - discount;

  const placeOrder = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: grandTotal,
      paymentMethod,
      status: "Order Placed",
      date: new Date().toLocaleString(),
      address,
    };

    orders.unshift(newOrder);

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    localStorage.removeItem("cart");

    alert("Your order has been placed successfully.");

    router.push("/orders");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "20px",
        paddingBottom: "40px",
      }}
    >
      <h1
        style={{
          color: "#00C853",
          marginBottom: "20px",
        }}
      >
        Payment
      </h1>

      {address && (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,.08)",
          }}
        >
          <h3>Delivery Address</h3>

          <p>
            <strong>{address.name}</strong>
          </p>

          <p>{address.flat}</p>

          <p>{address.apartment}</p>

          <p>{address.location}</p>
        </div>
      )}

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        }}
      >
        <h3>Select Payment Method</h3>

        <PaymentOption
          icon={<FaMoneyBillWave />}
          title="Cash on Delivery"
          selected={paymentMethod}
          setSelected={setPaymentMethod}
        />

        <PaymentOption
          icon={<SiGooglepay />}
          title="UPI"
          selected={paymentMethod}
          setSelected={setPaymentMethod}
        />

        <PaymentOption
          icon={<FaCreditCard />}
          title="Debit / Credit Card"
          selected={paymentMethod}
          setSelected={setPaymentMethod}
        />

        <PaymentOption
          icon={<FaUniversity />}
          title="Net Banking"
          selected={paymentMethod}
          setSelected={setPaymentMethod}
        />
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        }}
      >
        <h3>Order Summary</h3>

        <Row label="Items Total" value={itemsTotal} />

        <Row label="Delivery Fee" value={deliveryFee} />

        <Row label="Platform Fee" value={platformFee} />

        <Row
          label="Discount"
          value={`-₹${discount}`}
          green
        />

        <hr style={{ margin: "15px 0" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <span>Grand Total</span>

          <span style={{ color: "#00C853" }}>
            ₹{grandTotal}
          </span>
        </div>
      </div>

      <button
        onClick={placeOrder}
        style={{
          width: "100%",
          marginTop: "25px",
          background: "#00C853",
          color: "#fff",
          border: "none",
          padding: "16px",
          borderRadius: "12px",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </main>
  );
}

function PaymentOption({
  icon,
  title,
  selected,
  setSelected,
}) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "15px",
        marginTop: "15px",
        border:
          selected === title
            ? "2px solid #00C853"
            : "1px solid #ddd",
        borderRadius: "12px",
        cursor: "pointer",
      }}
    >
      <input
        type="radio"
        checked={selected === title}
        onChange={() => setSelected(title)}
      />

      <span
        style={{
          fontSize: "22px",
          color: "#00C853",
        }}
      >
        {icon}
      </span>

      <span>{title}</span>
    </label>
  );
}

function Row({ label, value, green }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "12px",
      }}
    >
      <span>{label}</span>

      <span
        style={{
          color: green ? "#00C853" : "#000",
          fontWeight: "600",
        }}
      >
        {typeof value === "number" ? `₹${value}` : value}
      </span>
    </div>
  );
}