import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

export default function IssueList({ issues, onIssueClick }) {
  return (
    <div>
      <Header />
      <List>
        {issues?.map((issue) => (
          <Item
            to={`/issues/${issue.id}`}
            key={issue.id}
            onClick={() => onIssueClick(issue)}
          >
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
        ))}
        <AdWrapper>
          <img src="https://via.placeholder.com/500x100?text=ad" />
        </AdWrapper>
      </List>
    </div>
  );
}

const List = styled.div`
  height: 100vw;
  overflow: scroll;
`;

const AdWrapper = styled.div`
  text-align: center;
`;

const Item = styled(NavLink)`
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
