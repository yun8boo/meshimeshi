import { NextPage } from "next";
import styled from "styled-components";
import { useState } from "react";

const search: NextPage = () => {
  const [budget, setBudget] = useState();
  const handleSetBudget = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setBudget(e.target.value);
  };
  return (
    <SearchContainer>
      <H1>Search</H1>
      <Label>
        <Span>キーワード</Span>
        <TextInput
          type="number"
          value={budget}
          placeholder="和食、個室、店名"
          onChange={handleSetBudget}
        />
      </Label>
      <Label>
        <Span>予算</Span>
        <TextInput type="number" value={budget} onChange={handleSetBudget} />
      </Label>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 44px;
  padding: 0 18px;
`;

const H1 = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Span = styled.span`
  color: #8a8a8a;
  width: 100%;
`;

const TextInput = styled.input`
  border-bottom: 1px solid #b5b5b5;
  width: 100%;
`;

export default search;
