import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

export default function publicInterfaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />

      <div className="mt-[10vh]  bg-[#f9f9f9] h-screen">{children}</div>
    </div>
  );
}
