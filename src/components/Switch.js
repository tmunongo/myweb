import React from 'react'

const Switch = () => {
  return (
    <>
      <input className="switch" id={`new-switch`} type="checkbox" />
      <label className="switch-label" htmlFor={`new-switch`}>
        <span className={`switch-button`} />
      </label>
    </>
  )
}

export default Switch
