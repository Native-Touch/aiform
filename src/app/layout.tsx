import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "~/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "FormMatic",
  description: "FormMatic is a form builder with AI :) 🚀",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex h-screen overflow-hidden">
            <Toaster position="top-right" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
