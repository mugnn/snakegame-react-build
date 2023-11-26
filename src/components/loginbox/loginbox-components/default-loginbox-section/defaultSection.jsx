import './index.css'
import LinkButton from '../anchor-button/button'
import InputBox from '../input-box/inputBox'
import ProfilePic from '../profile-pic/pfp'
import SwitchRequest from '../switch/switchRequest'

const DefaultLoginBoxSection = () => {
  // componente pai que reúne os componentes filho na seção de criação e verificação de cadastro 
  return(
    <div id='default-loginbox-section'>
      <ProfilePic />
      <SwitchRequest />
      <InputBox />
      <LinkButton name='START' />
    </div>
  )
}

export default DefaultLoginBoxSection