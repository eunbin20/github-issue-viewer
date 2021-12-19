import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import IssueList from './pages/IssueList';
import IssueDetail from './pages/IssueDetail';

export default function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://api.github.com/repos/angular/angular-cli/issues',
        {
          headers: {
            Authorization: `token${process.env.REACT_APP_PERSONAL_TOKEN}`,
          },
        },
      );
      const data = await res.json();
      const mostComments = data.sort((issueA, issueB) => {
        return issueB.comments - issueA.comments;
      });

      setIssues(mostComments);
    })();
  }, []);

  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path="/issues"
            element={<IssueList issues={issues} onIssueClick="" />}
          />
          <Route
            path="/issues/:issue_id"
            element={<IssueDetail issues={issues} />}
          />
          <Route path="/" element={<Navigate to="/issues" />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  margin: 0 auto;
  position: relative;
  border: 1px solid #ddd;
}
`;
