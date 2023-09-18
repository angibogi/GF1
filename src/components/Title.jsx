import React from 'react'

const Title = ({children}) => {
  return (
<>
    <div>   
    <div className="text-center">
    <h2 className="text-main text-[37px] font-bold my-5 ">{children}</h2>
    </div>
</div>  
</>
  )
}

export default Title;