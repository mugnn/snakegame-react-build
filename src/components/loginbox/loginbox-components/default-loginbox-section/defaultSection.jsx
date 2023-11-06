import './index.css'
import LinkButton from '../anchor-button/button'
import InputBox from '../input-box/inputBox'
import ProfilePic from '../profile-pic/pfp'
import SwitchRequest from '../switch/switchRequest'

const DefaultLoginBoxSection = () => {
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