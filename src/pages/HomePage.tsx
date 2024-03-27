import mockup from '../assets/mockup.png';
import down from '../assets/down.png';

const HomePage = () => {
    return(
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Tuck into a takeway today
                </h1>
                <span className="text-xl">For this is just a click away</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={mockup} alt='Mockup' />
                <div className='flex flex-col items-center justify-center gap-4 text-center'>
                    <span className='text-bold text-3xl tracking-tighter'>
                        Order takeway even faster!
                    </span>
                    <span>
                        Download the App for faster ordering and recommendations
                    </span>
                    <img src={down} alt='down'/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;