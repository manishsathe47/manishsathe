import { TypeAnimation } from 'react-type-animation';
import bannerImg from '../assets/banner.png'


const Home = () => {
  
  const cvUrl = 'https://drive.google.com/file/d/1Qo_aHiYFfd1I6_Eo7u3fbaftTtBc5iwm/view?usp=sharing';

  const handleDownloadClick = () => {
    window.open(cvUrl, '_blank');
  };

  return(
    <div className="mt-20 bg-bgShade">

       <div className="lg:px-12 px-4 flex flex-col md:flex-row items-center justify-between py-24 gap-5">
         <div className='md:w-1/2 w-full mt-5'>
         <h3 className="text-xl text-headingcolor font-semibold mb-5">Hey, I am Manish</h3> 
         <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I Am Software Developer.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I Am Front End Developer.',
        1000,
        'I Am React js Developer.',
        1000,
        'I Am Programmer. ',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3rem', display: 'inline-block', fontFamily:'semibold', color:'#DFBC04' }}
      repeat={Infinity}
    />        
     <p className='text-body text-2xl leading-9 mb-8'>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things. </p>
         <button  className='btn-primary px-8 py-4 hover:bg-black transition-all duration-300 hover:-translate-y-4 text-white text-xl rounded-md' onClick={handleDownloadClick}>Check Resume</button>
        </div> 
        <div className='md:w-1/2 w-full'>
        <img src={bannerImg} alt="" className='w-full' />
       </div>   
       </div>
    </div>
  );
};

export default Home;
// video stop at 23:57