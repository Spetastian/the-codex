import * as React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  width: 360px;
  background: #fff;
  color: grey;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 22px 18px;
`;

interface SearchBoxProps {
  onSearch: (value: string) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  return (
    <SearchInput
      onChange={(e: any) => onSearch(e.target.value)}
      type="text"
      name="search"
    />
  );
}
