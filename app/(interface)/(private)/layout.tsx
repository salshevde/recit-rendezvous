export default function publicInterfaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
    {/* Back Button */}
    {children}
  </div>;
}
