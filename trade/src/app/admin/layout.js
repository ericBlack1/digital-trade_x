import Header from "@/components/admin/Header";

export default function AdminLayout({ children }) {

  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
}
