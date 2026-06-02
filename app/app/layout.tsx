export const metadata = {
  title: "Maintenance AI Hub",
  description: "AI maintenance troubleshooting program"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
