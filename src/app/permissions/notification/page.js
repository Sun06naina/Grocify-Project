"use client";

import { useRouter } from "next/navigation";

export default function NotificationPermission() {
  const router = useRouter();

  const allow = () => {
    router.push("/delivery-address");
  };

  return (
    <div style={{
  minHeight:"100vh",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  background:"#f5f5f5"
}}>
  <div style={{
    width:"90%",
    maxWidth:"400px",
    background:"white",
    padding:"30px",
    borderRadius:"20px",
    textAlign:"center",
    boxShadow:"0 5px 20px rgba(0,0,0,0.1)"
  }}>

    <div style={{fontSize:"70px"}}>🔔</div>

    <h2>Stay Updated</h2>

    <p style={{color:"#666"}}>
      Receive order updates,
      delivery alerts and exclusive offers.
    </p>

    <button
      onClick={allow}
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
      Enable Notifications
    </button>

  </div>
</div>
  );
}
