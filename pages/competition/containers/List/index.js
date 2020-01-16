import React from 'react';
import dynamic from 'next/dynamic'


export const CompetitionList = () =>{

  const CompetitionListTable = dynamic(import("../../components/List/CompetitionListTable"))
  return (
    <div className="CompetitionList">
      <div className="competition-content">
        <CompetitionListTable />
      </div>
      <style jsx>{`
        .CompetitionList{
          border: 1px solid #ddd;
          box-shadow: 2px 3px 20px 2px #ddd;
          min-height: 100vh;
          margin: 3vh 0;
          text-align: center;
          line-height: 3;
          animation: shakeLeft .8s 1;
          background: #ffffff;
          z-index: 1
        }
        .CompetitionList-content{
          width: 90%;
          margin: auto;
        }
        @keyframes shakeLeft{
          0%{
            transform: translateX(-100vw);
          }
          50%{
            transform: translateX(5vw);
          }
          100%{
            transform: translateX(0);    
          }
        }
      `}</style>
    </div>
    )
}


