import Link from "next/link";

const LoginScreen = () => {


    const handleSubmit = (e:any) => {
        e.preventDefault();
    }

    return (
        <div className="inner">
            <div className="container">
                <h3>로그인</h3>
                <div className="input">
                    <form onSubmit={handleSubmit} className="loginForm">
                        <input type="text" placeholder="아이디" required />
                        <input type="password" placeholder="비밀번호" required />
    
                        <button className="mBtn sColor1" type="submit">로그인</button>
                        
                    </form>
                    <div className="link">
                        <Link href={'/login/signup'} className="mBtn wBtn sColor2">회원가입</Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .container{min-height: 80vh; padding: 50px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;}
                h3{font-size: 20px; text-align: center;}
                .input{max-width: 300px; width: 100%; margin: 0 auto;}
                .loginForm{display: flex; flex-direction: column; gap: 10px; margin: 30px 0;}
                .loginForm button{margin-top: 30px;}

            `}</style>
        </div>
    );
}

export default LoginScreen;