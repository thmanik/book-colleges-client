
import './BestFeature.css'


const BestFeature = () => {
    return (
        <div className="grid best-featureSection sm:grid-cols-1 md:grid-cols-2 gap-5 text-white p-12">
         
            <div className=" py-5 ms-1 backround-color">
                <h2 className="best-featuretitle ps-16">Our Best Features</h2>
                <p className='py-2 px-14 feature-des'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolore quaerat velit quos laboriosam ullam dolores dignissimos suscipit quis et, adipisci laudantium veniam assumenda explicabo.</p>

                <div className='py-4 '><div className='flex sub-BfeatureTitle ms-12'><img className='feature-class' src="https://i.ibb.co/zGLBhN2/multi-college.png" alt="" /><h2 className='ms-3 mt-3 sub-title'>Multi-College Application Submission</h2></div>
                <p className='px-20 mt-2 main-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam natus explicabo voluptatibus magni blanditiis. Id maiores inventore sed corporis dolores autem deserunt totam iste.</p>
                </div>
                <div className='py-4'><div className='flex sub-BfeatureTitle ms-12'><img className='feature-class' src="https://i.ibb.co/DGSPWvv/testimonials.jpg" alt="" /><h2 className='ms-3 mt-3 sub-title'>Student Testimonials and Reviews</h2></div>
                <p className='px-20 mt-2 main-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam natus explicabo voluptatibus magni blanditiis. Id maiores inventore sed corporis dolores autem deserunt totam iste.</p>
                </div>
                <div className='py-4'><div className='flex sub-BfeatureTitle ms-12'><img className='feature-class ' src="https://i.ibb.co/rb3jK1w/accessibility.png" alt="" /><h2 className='ms-3 mt-3 sub-title'>Accessibility Features</h2></div>
                <p className='px-20 mt-2 main-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam natus explicabo voluptatibus magni blanditiis. Id maiores inventore sed corporis dolores autem deserunt totam iste.</p>
                </div>

            </div>
            <div className='px-5 py-8 mt-5'>
                <img className='image' src="https://i.ibb.co/55tBk2t/best-feature.jpg" alt="" />
            </div>
        </div>
    );
};

export default BestFeature;