export default function clerkLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-full flex items-center justify-center">{children}</div>
    );
  }
  