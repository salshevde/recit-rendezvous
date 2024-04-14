import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

export default function publicInterfaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
