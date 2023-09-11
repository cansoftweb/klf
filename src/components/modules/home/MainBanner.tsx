// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import styles from './dist/MainBanner.module.css';
import { useQuery } from 'react-query';
import { getMainBanner } from '@/pages/api/get';
import Link from 'next/link';


interface Banner {
    idx: number;
    link: string;
    img: string;
    title1: string;
    title2: string;
  }

 

const MainBanner = () => {

    
    const getBanner = useQuery('getMainBanner', getMainBanner, {
        onSuccess: res => {
            // console.log(res)
        }
    })


    if(getBanner.isLoading){
        return <div className={styles.container}><div className={styles.empty}></div></div>
    }

    if (getBanner.isError) {
        return <p>배너를 가져오는 동안 문제가 발생했습니다</p>;
    }
    

    return (
        <div className={`${styles.container}`}>
            {/* 
                autoplay={getBanner?.data?.data.length > 1 ? {
                delay: 5000,
                pauseOnMouseEnter: true,
            } : false}
            */}
            <div className='inner'>
                {getBanner?.data?.data && (
                <Swiper
              
                style={{overflow: 'visible'}}
                spaceBetween={35}
                slidesPerView={1}
                loopedSlides={2}
                speed={1500}
            
                modules={[Autoplay ]}
                breakpoints={{
                    0:{
                        spaceBetween: 10             
                    },
                    900:{
                        spaceBetween: 25             
                    },
                    1400:{
                        spaceBetween: 35             
                    },
                   
                }}
              >
                {getBanner?.data?.data.map(({
                    idx, link, img, title1, title2, newWinYN
                }:any) => (
                <SwiperSlide key={idx} >
          
                    <div className={styles.slide} key={idx} style={{backgroundImage: `url(${img})`}}>
                        <Link href={link ? link : '/'} target={newWinYN == 'y' ? '_blank' : '_self'}>
                         
                                <h3>가맹사업법령 강의 오픈</h3>
                                <p className={styles.sub}>
                                    프렌차이즈 로펌 단독오픈 <br />
                                    홍길동 변호사 특강
                                </p>
                                <p className={styles.info}>
                                프랜차이즈 로펌에서는 가맹본부와 가맹점사업자가 법을 준수하여 <br />
                                함께 성장할 수 있는 기업문화를 만들어 가는데 도움이 될 수 있도록 노력하겠습니다.
                                </p>
                        </Link>
                    </div>
                   
                </SwiperSlide>
                 ))}
    
              
    
            
                </Swiper>
                )}
            </div>
        </div>
    );
}

export default MainBanner;