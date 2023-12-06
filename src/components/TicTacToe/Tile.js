import React from 'react'


const Tile = ({value, handleClick}) => {
  // const [value, setValue] = useState(null)

  //   const handleClick = () => {
  //     window.isStart = !isStart;
  //     isStart ? setValue('X') : setValue('O');
  //   }

  return (
    <>
      <button className='tile' onClick={handleClick} >{value}</button>
    </>
  )
}

export default Tile