const Gallery = () => {
    return (
        <div className="bg-[#F4F7FA] pb-20 px-4 md:px-12">
            
            <div className="max-w-7xl mx-auto text-center py-12">
                <h1 className="text-[#FF7350] italic font-bold text-3xl md:text-5xl tracking-tight">
                    Graduation Photo Gallery
                </h1>
                <div className="w-24 h-1 bg-[#FF7350] mx-auto mt-4 rounded-full opacity-50"></div>
            </div>

           
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                
                <div className="grid gap-4">
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <img className="h-auto max-w-full rounded-xl object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer" src="https://i.ibb.co/vzPDFj9/cover-14.jpg" alt="Graduation 1"/>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <img className="h-auto max-w-full rounded-xl object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer" src="https://i.ibb.co/dWkNJSS/cover-10.jpg" alt="Graduation 2"/>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <img className="h-auto max-w-full rounded-xl object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer" src="https://i.ibb.co/Qn8cFxJ/Graduates-hats-in-air-jpg-SIA-JPG-fit-to-width-INLINE.jpg" alt="Graduation 3"/>
                    </div>
                </div>

                
                <div className="grid gap-4">
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <img className="h-auto max-w-full rounded-xl object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer" src="https://i.ibb.co/qR2F6bD/cover-13.jpg" alt="Graduation 4"/>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <img className="h-auto max-w-full rounded-xl object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer" src="https://i.ibb.co/8MC6yNZ/cover-15.jpg" alt="Graduation 5"/>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <img className="h-auto max-w-full rounded-xl object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer" src="https://i.ibb.co/XZ7kbQW/Law-Graduation-Reception-2017-1087.jpg" alt="Graduation 6"/>
                    </div>
                </div>

               
                <div className="grid gap-4">
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <img className="h-auto max-w-full rounded-xl object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer" src="https://i.ibb.co/xMWtSrH/cover-16.jpg" alt="Graduation 7"/>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <img className="h-auto max-w-full rounded-xl object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer" src="https://i.ibb.co/Tbs91BV/download.png" alt="Graduation 8"/>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <img className="h-auto max-w-full rounded-xl object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer" src="https://i.ibb.co/8XhyhBY/cover-1.jpg" alt="Graduation 9"/>
                    </div>
                </div>

              
                <div className="grid gap-4">
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <img className="h-auto max-w-full rounded-xl object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer" src="https://i.ibb.co/Tqdz4rb/cover-2.jpg" alt="Graduation 10"/>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <img className="h-auto max-w-full rounded-xl object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer" src="https://i.ibb.co/YDQJ0wD/cover-12.jpg" alt="Graduation 11"/>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <img className="h-auto max-w-full rounded-xl object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer" src="https://i.ibb.co/f9ks0ht/graduation.jpg" alt="Graduation 12"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;