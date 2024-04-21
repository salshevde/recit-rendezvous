import PublicNavbar from "@/components/ui/Navbars/PublicNavbar";


export default function publicInterfaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PublicNavbar />

      <div className="mt-[15vh]  h-auto bg-gray-100">{children}</div>
    </div>
  );
}
