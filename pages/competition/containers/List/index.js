import React from 'react';
import dynamic from 'next/dynamic'
import './index.less'

export const CompetitionList = () =>{

  const CompetitionListTable = dynamic(import("../../components/List/CompetitionListTable"))
  return (
    <div className="CompetitionList">
      <h3>比赛记录</h3>
      <div className="competition-content">
        <CompetitionListTable></CompetitionListTable>
      </div>
    </div>
  )
}


