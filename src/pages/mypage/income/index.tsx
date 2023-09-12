import MypageLayout from "@/components/modules/mypage/MypageLayout";
import AlertModal from "@/components/ui/alert/AlertModal";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { alertToggle } from "@/redux/alert";
import MyIncomeList from "@/components/modules/mypage/income/MyIncomeList";
import MyIncomView from "@/components/modules/mypage/income/MyIncomView";
import { Icon } from "@iconify/react/dist/iconify.js";
import MyIncomeNotice from "@/components/modules/mypage/income/MyIncomeNotice";

const MyIncomeScreen = () => {


    const [alertType, setAlertType] = useState('')

    const dispatch = useDispatch();

    const handleToggle = () => dispatch(alertToggle());

    const handleIncome = () => {
        handleToggle();
    }

    const handleAlertConfirm = () => {
        if (alertType == 'del') {
            // 삭제

        } else {
            // 중단

        }

        handleToggle();
    }

    return (
        <MypageLayout title="수익 관리">
            
            <div className="container">
                <div className="topBtn">
                    <button className="nBtn rBtn sColorG">
                        <Icon icon="bxs:edit" />
                        출금계좌 등록
                    </button>
                </div>
                <MyIncomView />
                <div className="tar">
                    <button className="nBtn rBtn sColor1"
                        onClick={handleIncome}
                    >
                        출금신청
                    </button>
                </div>
                <MyIncomeList />
                <MyIncomeNotice />
            </div>
            
            <AlertModal
                title="출금 가능한 수익금"
                child={<>
                    <div className="price">
                        <dl>
                            <dt>판매금액</dt>
                            <dd>100,000원</dd>
                        </dl>
                        <dl>
                            <dt>판매금액</dt>
                            <dd>100,000원</dd>
                        </dl>
                        <dl className="total">
                            <dt>총 수익금</dt>
                            <dd>100,000원</dd>
                        </dl>
                        
                    </div>
                    <p className="bold">출금 신청을 하시겠습니까?</p>
                    <style jsx>{`
                        .price{ width: 100%; padding: 0 20px;}
                        .price dl{display: flex; align-items: center; justify-content: space-between; font-size: 13px; color: #999; margin: 10px 0;}
                        .price dl.total{font-size: 15px; color: #ccc;  margin-top: 20px;}

                        .bold{margin-top: 10px; text-align: center; font-size: 18px; color: #fff; }
                    `}</style>
                </>}
                onConfirm={handleAlertConfirm}
            />
        </MypageLayout>
    );
}

export default MyIncomeScreen;