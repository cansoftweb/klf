import Link from "next/link";

const ClassCard = ({
    link = '',
    img = '',
    title = '',
    maker = '',
    min = 0,
}) => {
    return (
        <>
            <div className="container">
                <Link href={link}>
                    <i className="img"></i>
                    <div className="txt">
                        <h5 className="ellipsis1">{title}</h5>
                        <p>{maker} ・ {min}분</p>
                    </div>
        
                   
                </Link>
            </div>
            <style jsx>{`
                .container{background-color: #fff; border-radius: 10px; overflow: hidden; border: 1px solid #666; width: 100%; max-width: 500px;}
                .img{display: block; height: 220px; background: #ccc no-repeat center center/cover;}
                .txt{padding: 20px;}
                .txt h5{font-size: 16px; font-weight: 500; color: #333}
                .txt p{font-size: 13px; color: #888}

                @media (max-width: 1400px) {
                    .img{height: 180px;}
                    .txt{padding: 15px;}
                }

                @media (max-width: 900px) {
                    .img{height: 150px;}
                    .txt h5{font-size: 14px;}
                    .txt p{font-size: 12px;}
                }
            `}</style>
        </>
    );
}

export default ClassCard;