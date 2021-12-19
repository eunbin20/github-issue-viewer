import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import IssueList from './pages/IssueList';

export default function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/issues" element={<IssueList />} />
          <Route path="/" element={<Navigate to="/issues" />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  margin: 0 auto;
  position: relative;
  overflow: scroll;
  border: 1px solid #ddd;
}
`;
