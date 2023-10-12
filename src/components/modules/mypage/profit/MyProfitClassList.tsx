import Pagination from "@/components/ui/pagination/Pagination";

const MyProfitClassList = () => {
    return (
        <div>
            <header>
                <h3>강의별 수익금 내역</h3>
                <p className="priceDate">기준일 2020-01-01</p>
            </header>
            <table>
                <colgroup>
                    <col  />
                    <col width="120px" />
                    <col width="120px" />
                </colgroup>
                <tr>
                    <th rowSpan={2}>강의 정보</th>
                    <th colSpan={2}>정산 금액</th>
                </tr>
                <tr>
                    <th className="profit">공급가액</th>
                    <th className="profit">실제수입</th>
                </tr>
                <tr>
                    <td>
                        <p className="title">누구나 알기쉬운 가맹거래사법</p>
                        <div className="info">
                            <span>총 판매 : 10건</span>
                            <span>총 누적 공급가액 : 100,000원</span>
                        </div>
                    </td>
                    <td>45,000원</td>
                    <td>34,000원</td>
                </tr>
            </table>
            <Pagination
                currentPage={1}
                totalPages={10}
            />
            <style jsx>{`
                header{border-bottom: 1px solid #555; margin-bottom: 25px; padding-bottom: 10px; display: flex; align-items: center; justify-content: space-between}
                h3{}
                .priceDate{color: #ccc; font-size: 14px; margin-top: 5px}
                table{width: 100%;}
                table tr th,
                table tr td{ border: 1px solid #555;}
                table tr td{padding: 20px;}
                table tr th{padding: 5px 10px; font-weight: 500; background-color: #444; font-size: 14px}
                .title{font-size: 16px;}
                .info{font-size: 14px; color: #ddd; margin-top :5px}
                .info span + span::before{content: "|"; margin: 0 10px}
                .mobile{display: none}
                
                @media (max-width: 1200px) {
                    .web{display: none}
                    .mobile{display: block}
                }

                @media (max-width: 900px) {
                    h3{font-size: 16px}
                    table tr td{padding: 15px}
                    table tr th{font-size: 14px; padding: 5px}
                    .title{font-size: 15px;}
                    .info{font-size: 13px; }
                }
            `}</style>
        </div>
    );
}

export default MyProfitClassList;