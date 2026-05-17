import React from 'react'

const EarningList = ( {earning} ) => {
  return (
      <div className="earning_lists">

            {earning.map((item) => (
              <div className="earning_list" key={item.id}>
                <h5>{item.money} BDT</h5>
                <h5>{item.way}</h5>
                <h5>{item.date}</h5>
              </div>
            ))}
          
      </div>
  )
}

export default EarningList
