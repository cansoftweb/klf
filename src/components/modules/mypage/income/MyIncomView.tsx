const MyIncomView = () => {
    return (
        <div className="container">
            <dl>
                <dt>출금 가능 수익금</dt>
                <dd>0원</dd>
            </dl>
            <dl>
                <dt>출금 완료 수익금</dt>
                <dd>0원</dd>
            </dl>
            <style jsx>{`
                .container{margin: 30px 0; display: flex; align-items: stretch; border: 1px solid #ccc; border-radius: 10px; padding: 15px 0;}
                .container dl{flex: 1 50%; padding: 0 60px;}
                .container dl + dl{border-left: 1px solid #ccc;}
                .container dl dt{font-size: 15px; color: #aaa; margin-bottom: 10px;}
                .container dl dd{font-size: 20px; color: #fff; font-weight: 700;}

                @media (max-width: 900px) {
                    .container{display: block; padding: 0;}
                    .container dl{padding: 15px;}
                    .container dl + dl{border: none; border-top: 1px solid #ccc;}
                    .container dl dt{font-size: 13px;}
                    .container dl dd{font-size: 15px;}
                }
            `}</style>
        </div>
    );
}

export default MyIncomView;