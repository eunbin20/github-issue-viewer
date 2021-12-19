import React from 'react';
import { useParams } from 'react-router-dom';

export default function IssueDetail() {
  const { issue_id } = useParams();
  console.log(issue_id);
  return <div>detail</div>;
}
