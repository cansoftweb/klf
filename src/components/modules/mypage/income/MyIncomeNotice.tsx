const MyIncomeNotice = () => {
    return (
        <div className="notice">
            <p>· 본인의 명의로 된 통장으로만 출금이 가능하며, 타인의 명의로된 계좌 출금신청은 출금취소 됩니다.</p>
            <p>· 출금신청은 하루 1번 가능하며, 영업일 기준 1~2일 이내 순차적으로 입금됩니다.</p>
            <p>· 출금 요청일이 공휴일인 경우 다음 출금 요일로 출금이 연기되어 입금됩니다.</p>
            <style jsx>{`
                .notice{background: #444; padding: 23px; font-size: 15px; margin: 50px 0;}
                .notice p + p{margin-top: 5px;}

                @media (max-width: 900px) {
                    .notice{font-size: 13px; margin: 30px 0; padding: 15px}
                }
            `}</style>
        </div>
    );
}

export default MyIncomeNotice;