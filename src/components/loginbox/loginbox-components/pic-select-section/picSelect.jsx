import './index.css'
import images from './images'
import LinkButton from '../anchor-button/button'

const PicSelectSection = () => {
  return(
    <div id='pic-section'>
      <div className='pic-row'>
        <img className='image' src={ images.cat1 } alt='pic1'/>
        <img className='image' src={ images.cat2 } alt='pic2'/>
        <img className='image' src={ images.sonic1 } alt='pic3'/>
      </div>
      <div className='pic-row'>
        <img className='image' src={ images.sonic2 } alt='pic4'/>
        <img className='image' src={ images.sonic3 } alt='pic5'/>
        <img className='image' src={ images.mario1 } alt='pic6'/>
      </div>
      <div className='pic-row'>
        <img className='image' src={ images.mario2 } alt='pic7'/>
        <img className='image' src={ images.squirtle } alt='pic8'/>
        <img className='image' src={ images.spongebob } alt='pic9'/>
      </div>
      <div className='pic-row'>
        <img className='image' src={ images.simp } alt='pic10'/>
        <img className='image' src={ images.pentagonscapades } alt='pic11'/>
        <img className='image' src={ images.monk } alt='pic12'/>
      </div>
      <div className='pic-row'>
        <img className='image' src={ images.knuckles } alt='pic13'/>
        <img className='image' src={ images.gengar } alt='pic14'/>
        <img className='image' src={ images.comunistdoggo } alt='pic15'/>
      </div>
      <div id='select-cancel-button'>
        <LinkButton name='SELECT' />
        <LinkButton name='CANCEL' color='#a0a0a0' />
      </div>
    </div>
  )
}

export default PicSelectSection