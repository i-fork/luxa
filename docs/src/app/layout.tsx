import "@/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import Header from "@/components/header";

config.autoAddCss = false;

export const metadata = {
  metadataBase: new URL("https://www.luxacss.com"),
  title: {
    default: "Luxa CSS",
    template: "%s • Luxa CSS"
  },
  description:
    "The minimalist CSS framework for quickly designing, building and shipping!",
  openGraph: {
    url: "https://www.luxacss.com",
    siteName: "Luxa CSS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.luxacss.com/og.png"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    title: "Luxa CSS",
    card: "summary_large_image"
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport = {
  themeColor: "#0d172c"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>
        <div className="container">
          <Header />
          <main>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
