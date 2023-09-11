const PageHeader = ({
    title = '',
}) => {
    return (
        <header>
            <h3>{title}</h3>
            <p>
                프랜차이즈 로펌에서는 가맹본부와 가맹점사업자가 법을 준수하여 <br />
                함께 성장할 수 있는 기업문화를 만들어 가는데 도움이 될 수 있도록 노력하겠습니다.
            </p>
            <style jsx>{`
                header{border-bottom: 1px solid #555; margin-bottom: 30px; padding:  var(--vertical-padding) 0;}
                header h3{font-size: 35px; font-weight: 700; color: #fff; margin-bottom: 20px;}
                header p{font-size: 15px; color: #fff; opacity: 0.7;}

                @media (max-width: 1400px) {
                    header {
                        max-width: 960px;
                        margin: 0 auto;
                        margin-bottom: 30px;
                    }
                }
                @media (max-width: 900px) {
                    header {
                        max-width: 530px;
                    }
                    header h3{font-size: 25px;}
                    header p{font-size: 13px;}
                    header p br{display: none;}
                }
            `}</style>
        </header>
    );
}

export default PageHeader;