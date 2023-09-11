import MypageLayout from "@/components/modules/mypage/MypageLayout";
import BoardList from "@/components/ui/board/BoardList";
import BoardSearch from "@/components/ui/board/BoardSearch";
import MoreBtn from "@/components/ui/btn/MoreBtn";
import Link from "next/link";

const MyCsFaq = () => {
    return (
        <MypageLayout title="자주 묻는 질문">
            <BoardSearch 
            
            />
            <div style={{ textAlign: 'right', margin: '30px 0' }}>
                <Link href={'/mypage/cs/write'} className="mBtn sColor1">문의하기</Link>
            </div>
            <BoardList 
            
            />
            <MoreBtn />
        </MypageLayout>
    );
}

export default MyCsFaq;