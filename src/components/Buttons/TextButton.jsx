import React from 'react'


const btnStyle = {
}

function TextButton({text}) {
  return (
    <div className=''>
        <a className='fs-1 fw-medium' href="#" style={{ textDecoration:'none', color:'inherit' }}>{text} <i className='bx bx-right-arrow-circle align-middle'></i></a>
    </div>
  )
}

export default TextButton