import MypageLayout from "@/components/modules/mypage/MypageLayout";
import styles from "@/components/modules/login/dist/signup.module.css";

const MypageScreen = () => {

    const handleSubmit = (e:any) => {
        e.preventDefault();
    }


    return (
        <div>
            <MypageLayout title="내 정보 수정">
                <form onSubmit={handleSubmit} className={styles.container}>
                    {/* <article>
                        <h5>이메일</h5>
                        <div className="input">
                            <input type="text" placeholder="이메일" />
                            <button className="sColor1" type="button">중복확인</button>
                        </div>
                    </article> */}
                    <article>
                        <h5>이메일</h5>
                        <div className="txt">
                            test@test.com
                        </div>
                    </article>
                    <article>
                        <div className="input">
                            <input type="text" placeholder="닉네임" />
                            <button className="sColor1" type="button">중복확인</button>
                        </div>
                
                        <div className="input">
                            <input type="password" placeholder="비밀번호" />
                        </div>
        
                        <div className="input">
                            <input type="password" placeholder="비밀번호 확인" />
                        </div>
                    </article>
                    <div className={styles.bottomBtn}>
                        <button className="sColor1 mBtn wBtn">회원정보 수정</button>
                    </div>
                    <div className={styles.withdraw}>
                        <button type="button">회원탈퇴</button>
                    </div>
                </form>
            </MypageLayout>
        </div>
    );
}

export default MypageScreen;