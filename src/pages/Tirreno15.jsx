import React from 'react'

import Records from '../lib/records.json'

export default function Tirreno15() {
  return (
    <div>Tirreno15

        {
            Records && Records.map(record =>
                {
                    return(
                        <img src={record.ciao.image} alt="" />
                    )
                })
        }
    </div>
  )
}
