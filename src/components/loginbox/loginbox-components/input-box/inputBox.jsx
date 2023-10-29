import './index.css'

const InputBox = () => {
  return(
    <div id='input-label-section'>
      <p id='label-input-box'></p> 
      <div className='input-box'>
        <input id='input-section' type='text' placeholder='name' maxLength="8" />
      </div>
    </div>
  )
}

export default InputBox