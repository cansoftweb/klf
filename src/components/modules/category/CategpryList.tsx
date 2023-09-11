import VideoCard from "@/components/ui/article/VideoCard";
import MoreBtn from "@/components/ui/btn/MoreBtn";
import { useEffect, useState } from "react";

const CategpryList = ({
    sort = 'a'
}) => {

    const [listSort, setListSort] = useState('a')
    
    useEffect(() => {
        setListSort(sort)
    }, [sort])

    const data = [0,0,0,0,0,0,0,0,0,0,0]
    
    return (
        <div className="container">
            <div className="list">
                {data.map((e, i) => (
                    <VideoCard 
                    key={`CategpryList${i}`}
                    light={true}  
                    />
                ))}
            </div>
                
            <MoreBtn 
                pressFunc={() => {}}
            />
            

            <style jsx>{`
                .container{
                    padding-bottom: 50px;
                }
                .list{
                    display: grid; 
                    grid-template-columns: 1fr 1fr 1fr 1fr; 
                    gap: 30px; 
                }
               
                @media (max-width: 1400px) {
                    .list {
                        max-width: 960px;
                        margin: 0 auto;
                        grid-template-columns: 1fr 1fr 1fr; /* 3개의 열로 변경 */
                    }
                }
                @media (max-width: 900px) {
                    .list {
                        grid-template-columns: 1fr 1fr; /* 2개의 열로 변경 */
                        gap: 15px;
                        max-width: 530px;
                    }
                }
            `}</style>
        </div>
    );
}

export default CategpryList;