import MypageLayout from "@/components/modules/mypage/MypageLayout";
import VideoCard from "@/components/ui/article/VideoCard";
import MoreBtn from "@/components/ui/btn/MoreBtn";

const MyClassScreen = () => {

    const data = [0,0,1,0,0,1,1,1,0,0,0]

    return (
        <MypageLayout title="수강중인 강의" 
            subTitle={<span>총 <b>(5)개의 수강 중인 강의</b>가 있습니다.</span>}
        >
            <div className="list">
                {data.map((e, i) => (
                    <VideoCard
                    key={`CategpryList${i}`}
                    light={true}  
                    state={e == 0 ? 'n' : 'y'}
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
                grid-template-columns: 1fr 1fr 1fr;
                gap: 50px; 
            }
            
            @media (max-width: 1400px) {
                .list {
                    max-width: 960px;
                    margin: 0 auto;
                    grid-template-columns: 1fr 1fr 1fr; /* 3개의 열로 변경 */
                    gap: 20px;
                }
            }
            @media (max-width: 1130px) {
                .list {
                    grid-template-columns: 1fr 1fr; /* 2개의 열로 변경 */
                    gap: 15px;
                    max-width: 530px;
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
        </MypageLayout>
    );
}

export default MyClassScreen;