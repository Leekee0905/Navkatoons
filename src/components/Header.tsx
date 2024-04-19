"use client";
import {
  HeaderContainer,
  HeaderLink,
  HeaderTitle,
  SearchContainer,
  SearchIconButton,
  SearchInputField,
} from "@/styles/Header";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Header = () => {
  const router = useRouter();
  const [text, setText] = useState<string>("");
  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("search") as string;
    router.push("/search" + "?" + createQueryString("key", searchQuery));
    setText("");
  };
  const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <HeaderContainer>
      <HeaderTitle onClick={() => router.push("/")}>네브카툰</HeaderTitle>
      <HeaderLink onClick={() => router.push("/webtoons")}>
        한눈에 보기
      </HeaderLink>
      <SearchContainer onSubmit={handleSearch}>
        <SearchInputField
          type="text"
          name="search"
          value={text}
          onChange={handleSearchText}
          placeholder="제목, 작가를 입력하세요."
        />
        <SearchIconButton type="submit" value="Submit">
          <FontAwesomeIcon icon={faSearch} style={{ cursor: "pointer" }} />
        </SearchIconButton>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
