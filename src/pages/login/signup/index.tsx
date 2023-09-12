import styles from "@/components/modules/login/dist/signup.module.css";


const SignUpScreen = () => {

    const handleSubmit = (e:any) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <h3 className={styles.title}>회원가입</h3>
            <article>
                <h5>이메일</h5>
                <div className="input">
                    <input type="text" placeholder="이메일" />
                    <button className="bColorF" type="button">중복확인</button>
                </div>
            </article>
            <article>
                <h5>닉네임</h5>
                <div className="input">
                    <input type="text" placeholder="닉네임" />
                    <button className="bColorF" type="button">중복확인</button>
                </div>
            </article>
            <article>
                <h5>비밀번호</h5>
                <div className="input">
                    <input type="password" placeholder="비밀번호" />
                </div>
            </article>
            <article>
                <h5>비밀번호 확인</h5>
                <div className="input">
                    <input type="password" placeholder="비밀번호 확인" />
                </div>
            </article>
            <div className={styles.bottomBtn}>
                <button className="sColor1 mBtn wBtn">회원가입</button>
            </div>
        </form>
    );
}

export default SignUpScreen;