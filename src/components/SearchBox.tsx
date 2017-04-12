import * as React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
`;

interface SearchBoxProps {
    value: string;
}

export default function SearchBox({ value = "" }: SearchBoxProps) {
    return <SearchInput value={value} type="text" name="search" />;
}