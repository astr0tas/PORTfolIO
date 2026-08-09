export default function PortfolioRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="w-full h-full fixed -z-10 bg-[url('/images/portfolio-bg.png')] bg-no-repeat bg-cover bg-center"></div>
      <div className="w-full h-full fixed -z-5 flex flex-col justify-end items-end p-5">
        <h1
          id="ownerName"
          className="text-5xl text-white opacity-20 select-none font-purgatory"
        >
          astr0tas
        </h1>
      </div>
      <div className="w-full h-full relative">{children}</div>
    </div>
  );
}
