import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid place-items-center h-screen bg-zinc-800">
        {children}
      </body>
    </html>
  );
}
