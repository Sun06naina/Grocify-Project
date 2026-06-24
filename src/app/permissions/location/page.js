"use client";

import { useRouter } from "next/navigation";

export default function LocationPermission() {
  const router = useRouter();

  const handleContinue = () => {
  router.push("/permissions/notification");
};
  return (
    <div style={{
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f5f5"
}}>
  <div style={{
    width: "90%",
    maxWidth: "400px",
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
  }}>
    
    <div style={{fontSize:"70px"}}>📍</div>

    <h2>Enable Location</h2>

    <p style={{color:"#666"}}>
      Find nearby stores and get groceries
      delivered faster.
    </p>

    <button
      onClick={handleContinue}
      style={{
        width:"100%",
        padding:"14px",
        background:"#00C853",
        color:"white",
        border:"none",
        borderRadius:"12px",
        fontWeight:"bold",
        marginTop:"15px"
      }}
    >
      Allow Location Access
    </button>

  </div>
</div>
  );
} 
