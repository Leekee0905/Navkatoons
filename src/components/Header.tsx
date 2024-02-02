"use client";
import {
  HeaderContainer,
  HeaderTitle,
  SearchContainer,
  SearchIconContainer,
  SearchInputField,
} from "@/styles/Header";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <HeaderTitle onClick={() => router.push("/")}>네브카툰</HeaderTitle>
      <SearchContainer>
        <SearchInputField type="text" placeholder="제목, 작가를 입력하세요." />
        <SearchIconContainer>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIconContainer>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
