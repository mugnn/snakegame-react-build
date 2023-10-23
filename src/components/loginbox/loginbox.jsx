import './index.css'
import LinkButton from './loginbox-components/anchor-button/button'
import InputBox from './loginbox-components/input-box/inputBox'
import ProfilePic from './loginbox-components/profile-pic/pfp'
import SwitchRequest from './loginbox-components/switch/switchRequest'

const LoginBox = () => {
  return(
    <div id='login-box'>
      {/* profile-pic-section: */}
      <ProfilePic />
      {/* switch-login-register-button: */}
      <SwitchRequest />
      {/* input-box-name: */}
      <InputBox />
      {/* anchor-button: */}
      <LinkButton />
    </div>
  )
}

export default LoginBox