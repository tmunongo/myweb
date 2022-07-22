import React from 'react'

const Switch = () => {
  // const themes = getFromLS('all-themes')

  const handleToggle = ({ themes }) => {
    // setMode(themes.data.light)
  }
  return (
    <>
      <input
        onClick={handleToggle}
        className="switch"
        id={`new-switch`}
        type="checkbox"
      />
      <label className="switch-label" htmlFor={`new-switch`}>
        <span className={`switch-button`} />
      </label>
    </>
  )
}

export default Switch
