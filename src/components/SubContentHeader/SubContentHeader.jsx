import React from 'react'

function SubContentHeader({subtitle,description}) {
  return (
    <>
    <h2>
       {subtitle}
    </h2>
    <p>
        {description}
    </p>
    </>
  )
}

export default SubContentHeader