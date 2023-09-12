import MypageLayout from "@/components/modules/mypage/MypageLayout";
import AlertModal from "@/components/ui/alert/AlertModal";
import MyVideoArticle from "@/components/ui/article/MyVideoArticle";
import BottomAddBtn from "@/components/modules/mypage/open/BottomAddBtn";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { alertToggle } from "@/redux/alert";

const MyOpenClassScreen = () => {

    const sample = [0,0,0,0,0]


    const [alertType, setAlertType] = useState('')

    const [selectIdx, setSelectIdx] = useState('')

    const dispatch = useDispatch();

    const handleToggle = () => dispatch(alertToggle());

    const handleAlertConfirm = () => {
        if (alertType == 'del') {
            // 삭제

        } else {
            // 중단

        }

        handleToggle();
    }

    return (
        <MypageLayout title="강의 관리">
            <div className="list">
                {sample.map((e, i) => (  
                <MyVideoArticle
                    key={`myOpenVideo${i}`}
                    idx={i.toString()}
                    onDel={val => {
                        setAlertType('del')
                        setSelectIdx(val)
                    }}
                    onStop={val => {
                        setAlertType('stop')
                        setSelectIdx(val)
                    }}
                />
                ))}
            </div>
            <BottomAddBtn />
            <AlertModal
                title={
                    alertType == 'del' ? 
                    "강의를 삭제하시겠습니까?" : 
                    "강의 판매를 중지하시겠습니까?"
                }
                info={alertType == 'del' ? 
                    "삭제한 강의는 다시 되돌릴수 없습니다." : 
                    "판매를 재개하시려면 강의 승인을 다시 받아야 합니다."
                }
                onConfirm={handleAlertConfirm}
            />

            <style jsx>{`
                @media (max-width: 900px) {
                    .list{
                        display: grid;  
                        grid-template-columns: 1fr 1fr 1fr;
                        gap: 10px; 
                    }
                }
                @media (max-width: 750px) {
                    .list{
                        display: grid;  
                        grid-template-columns: 1fr 1fr;
                    }
                }
            `}</style>
        </MypageLayout>
    );
}

export default MyOpenClassScreen;