import React from 'react';
import dynamic from 'next/dynamic';
import './index.less';

export const CompetitionRank = () =>{
  const CompetitionRankImport = dynamic(import('../../components/Rank/CompetitionRankImport'))

  return (
    <div className="CompetitionRank">
      <h2>排行榜</h2>
      <div className="CompetitionRank-content">
        <CompetitionRankImport></CompetitionRankImport>
      </div>
    </div>
  )
}