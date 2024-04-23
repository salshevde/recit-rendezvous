import PrivateNavbar from "@/components/ui/Navbars/PrivateNavbar";

export default function privateInterfaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PrivateNavbar />
      <div className="bg-[#f9f9f9] h-[85vh] ">{children}</div>
    </div>
  );
}
