// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import VideoCard from '@/components/ui/article/VideoCard';

const MainVideo = ({
    title = ''
}) => {

    const getBanner = {
        data: {
            data: [0,0,0,0,0,0,0,0,0]
        }
    }

    return (
        <div className="container">
            <div className="inner">
            <h3>
                <b>{title}</b> <br />
                지금 들어보세요!
            </h3>
            <Swiper
              
              style={{overflow: 'visible'}}
              spaceBetween={20}
              slidesPerView={4.3}
              loopedSlides={2}
              speed={300}
          
              breakpoints={{
                0:{
                    spaceBetween: 10,
                    slidesPerView: 1.2           
                },
                530:{
                    spaceBetween: 10,
                    slidesPerView: 2.2            
                },
                780:{
                    spaceBetween: 10,
                    slidesPerView: 3.5            
                },
                900:{
                    spaceBetween: 10,
                    slidesPerView: 4            
                },
                1400:{
                    spaceBetween: 15,
                    slidesPerView: 4.3             
                },
                 
              }}
            >
                 {getBanner?.data?.data.map(({
                    idx, link, img, title1, title2, newWinYN
                }:any, i) => (
                <SwiperSlide key={`MainVideo-${i}`} >
                    <VideoCard light={title == '무료 강의' ? true : false} />
                </SwiperSlide>
                 ))}
    
            </Swiper>
            </div>

            <style jsx>{`
                .container{overflow: hidden; margin: 60px 0;}
                .container h3{margin-bottom: 38px; font-size: 30px; line-height: 1.2;}
                .container h3 b{color: var(--color1)}

                @media (max-width: 1400px) {
                    .container h3{font-size: 28px;}
 
                }

                @media (max-width: 900px) {
                    .container{margin: 30px 0;}
                    .container h3{font-size: 22px; margin-bottom: 20px;}
 
                }

            `}</style>
        </div>
    );
}

export default MainVideo;