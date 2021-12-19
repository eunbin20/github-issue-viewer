import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Wrapper>
      <h1 className="title">Angular / Angular-cli</h1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: fixed;

  .title {
    font-weight: 400;
    margin: 1rem auto;
  }
`;
