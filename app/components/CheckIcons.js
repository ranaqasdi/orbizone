import React from 'react'
import PropTypes from 'prop-types'

function CheckIcons({children}) {
  return (
    <p className='font-semibold'><span><i className='fa fa-check' style={{lineHeight:'10px', fontSize:'18px', color:'#6A47ED'}}></i></span>&nbsp;&nbsp;{children}</p>
  )
}

CheckIcons.propTypes = {}

export default CheckIcons
