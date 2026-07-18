export default function PortfolioRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full *:min-h-screen flex flex-col relative">
      <div className="w-full h-full fixed -z-10 opacity-50 bg-[url('/images/portfolio-bg.png')] bg-no-repeat bg-cover bg-center"></div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
