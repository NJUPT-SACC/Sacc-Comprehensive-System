import React from 'react';
import dynamic from 'next/dynamic';

export const CompetitionRank = () =>{
  const CompetitionRankImport = dynamic(import('../../components/Rank/CompetitionRankImport'))

  return (
  <div className="CompetitionRank">
    <h2>排行榜</h2>
    <div className="CompetitionRank-content">
      <CompetitionRankImport/>
    </div>
    <style jsx>{
      `.CompetitionRank{
        border: 1px solid #ddd;
        box-shadow: 2px 3px 20px 2px #ddd;
        min-height: 100vh;
        margin: 3vh 0;
        text-align: center;
        line-height: 3;
        animation: shakeRight .8s 1;
      }
      .CompetitionRank-content{
        line-height: 5;
        min-height: 90vh;
        max-height: 90vh
      }
      @keyframes shakeRight{
        0%{
          transform: translateX(100vw);
        }
        50%{
          transform: translateX(-5vw);
        }
        100%{
          transform: translateX(0);
        }
      }`
    }
    </style>
  </div>)
}