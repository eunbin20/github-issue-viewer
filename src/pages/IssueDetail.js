import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';

export default function IssueDetail({ issues }) {
  const { issue_id } = useParams();
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    const [issue] = issues.filter((issue) => {
      if (String(issue.id) === issue_id) return true;
    });

    setIssue(issue);
  }, [issues]);

  return (
    <Wrapper>
      <Header />
      {issue && (
        <>
          <Item to={`/issues/${issue.id}`} key={issue.id}>
            <div className="content">
              <h3 className="issue-title">
                #{issue.number} {issue.title}
              </h3>
              <p className="issue-info">
                작성자: {issue.user.login} 작성일: {issue.created_at}
              </p>
            </div>
            <div className="comments">코멘트: {issue.comments}</div>
          </Item>
          {issue.body}
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vw;
  overflow: scroll;
`;

const Item = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: black;

  .issue-title {
    font-weight: 400;
    margin: 0.2rem 0;
  }
  .issue-info {
  }
  .comments {
  }
`;
