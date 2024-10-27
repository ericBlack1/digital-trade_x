'use client'
import Header from "@/components/admin/Header";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
useEffect(()=>{
  // git sucks
  localStorage.setItem('userID','ID-011222')
},[])
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
}
