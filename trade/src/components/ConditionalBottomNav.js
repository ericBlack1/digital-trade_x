// components/ConditionalBottomNav.js
"use client";
import { usePathname } from "next/navigation";
import { BottomNav } from "@/components/profile/BottomNav";

const ConditionalBottomNav = () => {
  const pathname = usePathname();
  return !pathname.startsWith("/admin") ? <BottomNav /> : null;
};

export default ConditionalBottomNav;
