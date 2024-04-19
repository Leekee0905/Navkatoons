import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import Header from "@/components/Header";
import RecoilRootWrapper from "@/lib/RecoilWrapper";
import Footer from "@/components/Footer";
import QueryProvider from "@/lib/QueryProvider";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "네브카툰",
  description:
    "네이버 웹툰, 카카오페이지, 카카오 웹툰을 통합으로 볼 수 있는 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <RecoilRootWrapper>
            <StyledComponentsRegistry>
              <GlobalStyles />
              <Header />
              <main>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </main>
              <Footer />
            </StyledComponentsRegistry>
          </RecoilRootWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
