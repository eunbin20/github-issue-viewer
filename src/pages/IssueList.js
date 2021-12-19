import styled from 'styled-components';

export default function IssueList() {
  return (
    <Main>
      <Header>
        <h1 className="title">Angular / Angular-cli</h1>
      </Header>
      <Item>
        <div className="content">
          <h3 className="issue-title">#111 issue title</h3>
          <p className="issue-info">작성자: name 작성일: 2019년 12월 31일</p>
        </div>
        <div className="comments">코멘트: 67</div>
      </Item>
      <Item>
        <div className="content">
          <h3 className="issue-title">#111 issue title</h3>
          <p className="issue-info">작성자: name 작성일: 2019년 12월 31일</p>
        </div>
        <div className="comments">코멘트: 67</div>
      </Item>
      <Item>
        <div className="content">
          <h3 className="issue-title">#111 issue title</h3>
          <p className="issue-info">작성자: name 작성일: 2019년 12월 31일</p>
        </div>
        <div className="comments">코멘트: 67</div>
      </Item>
      <Item>
        <div className="content">
          <h3 className="issue-title">#111 issue title</h3>
          <p className="issue-info">작성자: name 작성일: 2019년 12월 31일</p>
        </div>
        <div className="comments">코멘트: 67</div>
      </Item>
      <Item>
        <div className="content">
          <h3 className="issue-title">#111 issue title</h3>
          <p className="issue-info">작성자: name 작성일: 2019년 12월 31일</p>
        </div>
        <div className="comments">코멘트: 67</div>
      </Item>
      <img src="https://via.placeholder.com/500x100?text=ad" />
      <Item>
        <div className="content">
          <h3 className="issue-title">#111 issue title</h3>
          <p className="issue-info">작성자: name 작성일: 2019년 12월 31일</p>
        </div>
        <div className="comments">코멘트: 67</div>
      </Item>
    </Main>
  );
}

const Main = styled.main`
  height: 100vw;
  overflow: scroll;
`;

const Header = styled.header`
  text-align: center;

  .title {
    font-weight: 400;
    margin: 1rem;
  }
`;

const Item = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .issue-title {
    font-weight: 400;
    margin: 0.2rem 0;
  }
  .issue-info {
  }
  .comments {
  }
`;
