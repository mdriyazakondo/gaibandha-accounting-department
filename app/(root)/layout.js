import Navbar from "@/components/Navbar/Navbar";

// layout.jsx example
export default function RootLayout({ children }) {
  return (
    <html >
      {/* Ensure the font variable and your custom classes are both included */}
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
