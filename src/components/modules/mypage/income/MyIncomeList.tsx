const MyIncomeList = () => {
    return (
        <div>
            <h3>수익금 내역</h3>
            <table>
                <colgroup>
                    <col width="120px" />
                </colgroup>
                <tr>
                    <th>출금완료</th>
                    <td>
                        <p className="title">수익금  90,000원</p>
                        <div className="info">
                            <span>2023.08.21</span>
                            <span>판매금액 : 100,000원</span>
                        </div>
                    </td>
                </tr>
            </table>
            <style jsx>{`
                h3{border-bottom: 1px solid #555; margin-bottom: 25px; padding-bottom: 10px}
                table{width: 100%;}
                table tr th,
                table tr td{padding: 25px; border: 1px solid #555;}
                table tr th{font-weight: 500; background-color: #444;}
                .title{font-size: 16px;}
                .info{font-size: 14px; color: #ddd; margin-top :5px}
                .info span + span::before{content: "|"; margin: 0 10px}

                @media (max-width: 900px) {
                    h3{font-size: 16px}
                    table tr th,
                    table tr td{padding: 15px}
                    table tr th{font-size: 14px}
                    .title{font-size: 15px;}
                    .info{font-size: 13px; }
                }
            `}</style>
        </div>
    );
}

export default MyIncomeList;