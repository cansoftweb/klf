
import BoardListArticle from "./BoardListArticle";

const BoardList = ({
    data = []
}: {
    data: any[],
}) => {
    return (
        <div className="container">
            {data && data.length > 0 ? (
            <>
                <header>
                    <span className="title">제목</span>
                    <span className="date">등록일</span>
                </header>
                {data.map(({
                    title,
                    date,
                }) => (
                    <BoardListArticle 
                    title={title}
                    date={date}
                    />
                ))}
            </>
            ) : (<p className="nothing">등록된 글이 없습니다.</p>)}
           

         

            <style jsx>{`
                .container{width: 100%;}    
                header{display: flex; align-items: center; padding: 20px 0; border: 1px solid #eee; border-width: 1px 0;}
                header .title{width: 80%; padding-left: 20px}
                header .date{width: 20%;}

                @media (max-width: 1400px) {
                    header{padding: 10px 0; font-size: 14px;}
                }
                @media (max-width: 900px) {
                    header{font-size: 13px;}
                }
            `}</style>
        </div>
    );
}

export default BoardList;