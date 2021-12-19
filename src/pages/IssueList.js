import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function IssueList() {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://api.github.com/repos/angular/angular-cli/issues',
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_PERSONAL_TOKEN}`,
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
    <div>
      <Header>
        <h1 className="title">Angular / Angular-cli</h1>
      </Header>
      <List>
        {issues.map((issue) => (
          <Item to={issue.url} key={issue.id}>
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

const Header = styled.header`
  display: fixed;

  .title {
    font-weight: 400;
    margin: 1rem auto;
  }
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
