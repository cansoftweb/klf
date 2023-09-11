import ClassCard from "@/components/ui/article/ClassCard";

const MainClass = () => {

    const sample = [0,0,0];

    return (
        <div className="inner">
            <div className="container">
                {sample.map((e, i) => (
                <ClassCard
                    key={`MainClass-ClassCard-${i}`}
                    link="/"
                    img=""
                    title="프랜차이즈 본사 설립 절차 한눈에 보기"
                    maker="변호사 홍길동"
                    min={10}
                />
                ))}
               
    
                <style jsx>{`
                    .container{display: flex; gap: 20px; justify-content: stretch; margin: 60px 0;}

                    @media (max-width: 900px) {
                        .container{flex-direction: column; align-items: center; margin: 30px 0}
              
                    }
                `}</style>
            </div>
        </div>
    );
}

export default MainClass;