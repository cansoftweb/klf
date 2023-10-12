import MypageLayout from "@/components/modules/mypage/MypageLayout";
import AlertModal from "@/components/ui/alert/AlertModal";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { alertToggle } from "@/redux/alert";
import MyProfitList from "@/components/modules/mypage/profit/MyProfitList";
import MyProfitView from "@/components/modules/mypage/profit/MyProfitView";
import { Icon } from "@iconify/react/dist/iconify.js";
import MyProfitNotice from "@/components/modules/mypage/profit/MyProfitNotice";
import MyProfitClassList from "@/components/modules/mypage/profit/MyProfitClassList";

const MyProfitScreen = () => {


    const [profitType, setProfitType] = useState(0)
    const tab = ['출금 내역','강의별 수익']

    const [alertType, setAlertType] = useState('')
    const [alertContents, setAlertContents] = useState(<></>)

    const dispatch = useDispatch();

    const handleToggle = () => dispatch(alertToggle());

    const onSetBank = () => {
        setAlertType('bank')
        // 계좌 등록
        setAlertContents(
            <>
                <input type="text" placeholder="예금주" />
                <select >
                    <option value="">은행선택</option>
                </select>
                <input type="text" placeholder="계좌번호" />
                <style jsx>{`
                    input{width: 100%;}
                   select{width: 100%;}
                `}</style>
            </>
        )
        handleToggle();
    }

    const handleIncome = () => {
        setAlertType('profit')
        // 출금신청
        setAlertContents(
        <>
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
        </>
    )
        handleToggle();
    }


    const handleSubmitProfit = () => {
        if (alertType == 'bank') {
            // 계좌 등록

        } else {
            // 출금 신청
         

        }

        handleToggle();
    }

    return (
        <MypageLayout title="수익 관리">
            
            <div className="container">
                <div className="topBtn">
                    <button className="nBtn rBtn sColorG"
                        onClick={onSetBank}
                    >
                        <Icon icon="bxs:edit" />
                        출금계좌 등록
                    </button>
                </div>
                <MyProfitView />
                <div className="tar">
                    <button className="nBtn rBtn sColor1"
                        onClick={handleIncome}
                    >
                        출금신청
                    </button>
                </div>
                <div className="tab">
                    {tab.map((item, i) => <button type="button" key={item} className={`tabBtn ${i == profitType ? 'active' : ''}`} onClick={() => setProfitType(i)}>{item}</button>)}
                </div>
                <div className="row">
                    {profitType == 0 ? (
                        <MyProfitList />
                    ) : (
                        <MyProfitClassList />
                    )}
                    
                </div>

                <MyProfitNotice />
            </div>
            
            <AlertModal
                title={alertType == 'bank' ? "출금 계좌 등록" : "출금 가능한 수익금"}
                child={alertContents}
                onConfirm={handleSubmitProfit}
            />

        

            

            <style jsx>{`
               

                .row{margin: 30px 0;}

                .tabBtn{border: 1px solid #ccc; margin: 0 5px 5px 0; color: #ccc; padding: 10px; font-weight: 700; min-width: 100px; border-radius: 5px;}
                .tabBtn.active{background: var(--color1); color: #333; border-color: var(--color1); }
        
            `}</style>
        </MypageLayout>
    );
}

export default MyProfitScreen;