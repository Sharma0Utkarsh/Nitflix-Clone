import Frame1 from '../assets/Frame1.webp'
import Frame2 from '../assets/Frame2.webp'
import Frame3 from '../assets/Frame3.webp'
import Frame4 from '../assets/Frame4.webp'
import Frame5 from '../assets/Frame5.webp'
import Frame6 from '../assets/Frame6.webp'
import Frame7 from '../assets/Frame7.webp'
function Trends(){

    const movies = [
    {
        "id":1,
        "url":Frame1
    },
    {
        "id":2,
        "url":Frame2
    },
    {
        "id":3,
        "url":Frame3
    },
    {
        "id":4,
        "url":Frame4
    },
    {
        "id":5,
        "url":Frame5
    },
    {
        "id":6,
        "url":Frame6
    },
    {
        "id":7,
        "url":Frame7
    },
    
    ]
    return(
        <div className="py-10 ">

            <div className="font-bold text-2xl">Trending Now </div>
                <div className='flex gap-10  overflow-scroll hide-scrollbar'>
                
                {movies.map((movie,index)=>{
                    return(
                        <div key={index} className='pt-5 relative'>
                <img className='rounded-2xl min-w-[180px]' src={movie.url} alt='' />
                <div className='text-9xl font-bold absolute bottom-0 left-[-25px] text-stroke-white'>
                    {movie.id}
                </div>
                </div>
                    )
                })}
             
            </div>
        </div>
    )
}

export default Trends