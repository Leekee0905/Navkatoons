import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import Header from "@/components/Header";
import RecoilRootWrapper from "@/states/RecoilWrapper";

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
    <RecoilRootWrapper>
      <html lang="en">
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <Header />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </RecoilRootWrapper>
  );
}
