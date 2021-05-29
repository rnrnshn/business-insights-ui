import smallImage from './images/image-header-mobile.jpg';
import largeImage from './images/image-header-desktop.jpg';


const Image = () => {
  const mobile = smallImage;
  const desktop = largeImage;
  return (
    <img
      srcSet={`
        ${mobile} 2x,
        ${desktop} 1x
      `}
      src={mobile}
      alt="Business Insights"
    />
  )
}

export default Image;