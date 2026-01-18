const BestFeature = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4 sm:p-10 md:p-12 lg:p-16 bg-white overflow-hidden">
            
           
            <div className="bg-primary text-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-xl h-full flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center md:text-left mb-4">
                    Our Best Features
                </h2>
                <p className="text-base sm:text-lg opacity-90 text-center md:text-left mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolore quaerat velit quos laboriosam ullam dolores dignissimos.
                </p>

                
                <div className="space-y-8">
                    
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <img className="w-14 h-14 rounded-full border-2 border-white/20 p-1 object-cover flex-shrink-0" src="https://i.ibb.co/zGLBhN2/multi-college.png" alt="" />
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">Multi-College Application Submission</h3>
                            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam natus explicabo voluptatibus magni.
                            </p>
                        </div>
                    </div>

                    
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <img className="w-14 h-14 rounded-full border-2 border-white/20 p-1 object-cover flex-shrink-0" src="https://i.ibb.co/DGSPWvv/testimonials.jpg" alt="" />
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">Student Testimonials and Reviews</h3>
                            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam natus explicabo voluptatibus magni.
                            </p>
                        </div>
                    </div>

                   
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <img className="w-14 h-14 rounded-full border-2 border-white/20 p-1 object-cover flex-shrink-0" src="https://i.ibb.co/rb3jK1w/accessibility.png" alt="" />
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">Accessibility Features</h3>
                            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam natus explicabo voluptatibus magni.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="flex justify-center items-center py-8">
                <style>
                    {`
                        @keyframes moveUpDown {
                            0% { transform: translateY(-15px); }
                            100% { transform: translateY(0px) scale(1.05); }
                        }
                        .animate-float {
                            animation: moveUpDown 3s infinite ease alternate;
                        }
                    `}
                </style>
                <img 
                    className="w-full max-w-md lg:max-w-full h-auto object-contain rounded-2xl animate-float shadow-2xl md:shadow-none" 
                    src="https://i.ibb.co/55tBk2t/best-feature.jpg" 
                    alt="Best Features" 
                />
            </div>
        </div>
    );
};

export default BestFeature;