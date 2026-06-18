"use client";

export default function PaymentPage() {
  return (
    <main
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <h1>💳 Payment</h1>

      <div
        style={{
          background: "white",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Select Payment Method</h3>

        <div style={{ marginTop: "15px" }}>
          <label>
            <input type="radio" name="payment" defaultChecked />
            💵 Cash on Delivery
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            <input type="radio" name="payment" />
            📱 UPI Payment
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            <input type="radio" name="payment" />
            💳 Debit / Credit Card
          </label>
        </div>

        <a
          href="/orders"
          style={{
            display: "block",
            textAlign: "center",
            background: "#00C853",
            color: "white",
            padding: "12px",
            borderRadius: "10px",
            textDecoration: "none",
            marginTop: "25px",
          }}
        >
          Place Order
        </a>
      </div>
    </main>
  );
}