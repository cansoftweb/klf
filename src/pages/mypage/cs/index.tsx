import MypageLayout from "@/components/modules/mypage/MypageLayout";
import BoardList from "@/components/ui/board/BoardList";
import BoardSearch from "@/components/ui/board/BoardSearch";
import MoreBtn from "@/components/ui/btn/MoreBtn";

const MyCsNotice = () => {
    return (
        <MypageLayout title="공지사항">
            <BoardSearch 
            
            />
            <BoardList 
            
            />
            <MoreBtn />
        </MypageLayout>
    );
}

export default MyCsNotice;