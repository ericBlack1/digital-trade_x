import Header from "@/components/admin/Header";

export default function AdminLayout({ children }) {
    const avatarImg = "https://static.vecteezy.com/system/resources/thumbnails/020/381/678/small_2x/aesthetic-cute-muslim-girl-with-hijab-flat-detailed-avatar-illustration-beautiful-muslim-woman-hijabi-cartoon-vector.jpg"

  return (
    <>
      <Header avatar={avatarImg} pageName={"Dashboard"}/>
      <main>{children}</main>
    </>
  );
}
