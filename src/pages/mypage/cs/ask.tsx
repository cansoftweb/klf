import MypageLayout from "@/components/modules/mypage/MypageLayout";
import BoardList from "@/components/ui/board/BoardList";
import BoardSearch from "@/components/ui/board/BoardSearch";
import MoreBtn from "@/components/ui/btn/MoreBtn";

const MyCsAsk = () => {
    
    return (
        <MypageLayout title="문의 내역">
            <BoardSearch 

            />
            <BoardList 
                data={[
                    {
                        title: '문의드립니다',
                        date: '2023.08.01',
                    }
                ]}
            />
            <MoreBtn />
        </MypageLayout>
    );
}

export default MyCsAsk;