import './index.css'
import Variables from '../../../loginbox/user-data'

const RightSideComponents = () => {
  return(
    <div id='user-historic-column'>
      <div id='user-info'>
        <img id='user-main-section-pic' alt='user-pfp' src={ Variables.pic_id } />
        <p id='user-main-section-name'>@{ Variables.user_name }</p>
      </div>
    </div>
  )
}

export default RightSideComponents