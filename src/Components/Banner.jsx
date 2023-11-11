import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const Banner = () => {

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div >
      <AutoplaySlider className='h-[600px]'
        play={true}
        cancelOnInteraction={false} 
        interval={3000}
      >


        <div data-src="https://i.ibb.co/FJ6gnfS/495698793.jpg"> 
        
        </div>


        <div data-src="https://i.ibb.co/FJ6gnfS/495698793.jpg"> 
        
        </div>

        
        <div data-src="https://cf2.bstatic.com/xdata/images/hotel/max1024x768/487273308.jpg?k=74888cd4b506917e45ad6f4ca5059305737596e277b1d37d73a8529c121df2ba&o=&hp=1"> 
        
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Banner;