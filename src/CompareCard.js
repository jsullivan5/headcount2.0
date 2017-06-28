import React from 'react';

const CompareCard = ({data, compareAverage}) => {
  const averageData = compareAverage(data)

  return (
    <div>
      <h1>{averageData.location1}</h1>
      <p>Average {averageData.city1Avg}</p>
      <p>Compared Average {averageData.comparedAverages}</p>
      <h1>{averageData.location2}</h1>
      <p>Average {averageData.city2Avg}</p>
    </div>
  )
}

export default CompareCard