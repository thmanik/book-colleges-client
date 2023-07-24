import './Gallery.css'

const Galley = () => {
    return (
     <div className='py-10'>
      <div><h1 className='text-center text-color font-semibold text-3xl py-5' >Graduation Photo Gallery</h1></div>
       <div className='grid md:grid-cols-4 sm:grid-cols-2 px-12 gap-1'>
        <div><img className='image-size' src="https://i.ibb.co/V3WfQch/Graduation-2022-thumbnail-1-700x700.jpg" alt="" /></div>
        <div><img className='image-size' src="https://i.ibb.co/f9ks0ht/graduation.jpg" alt="" /></div>
        <div><img className='image-size' src="https://i.ibb.co/Qn8cFxJ/Graduates-hats-in-air-jpg-SIA-JPG-fit-to-width-INLINE.jpg" alt="" /></div>
        <div><img className='image-size' src="https://i.ibb.co/KxctNQ0/fashion-graduates-on-campus-1920-x-1080-hero.jpg" alt="" /></div>
        <div><img className='image-size' src="https://i.ibb.co/ypgnfss/Im1S.jpg" alt="" /></div>
        <div><img className='image-size' src="https://i.ibb.co/XZ7kbQW/Law-Graduation-Reception-2017-1087.jpg" alt="" /></div>
        <div><img className='image-size' src="https://i.ibb.co/Zx3G5f4/Microsoft-Teams-image-144.jpg" alt="" /></div>
        <div><img className='image-size' src="https://i.ibb.co/Tbs91BV/download.png" alt="" /></div>
        
      </div>
     </div>
    );
};

export default Galley;