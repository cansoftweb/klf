import VideoVerticalCard from "@/components/ui/article/VideoVerticalCard";

const ClassViewList = () => {

    const data = [0,0,0,0,0,0,0];

    return (
        <div>
            <h4>강의 목록</h4>
            <div className="list">
                {data.map((e, i) => (
                <VideoVerticalCard key={`ClassViewList${i}`} />
                ))}
            </div>

            <style jsx>{`
                h4{font-size: 26px; font-weight: 500; margin-bottom: 30px;}
                .list{display: flex; flex-direction: column; gap: 20px; max-height: 60vh; overflow-y: auto;}

                @media (max-width: 1400px) {
                    h4{font-size: 22px; margin-bottom: 20px;}
                }

                @media (max-width: 900px) {
                    h4{font-size: 16px; margin-bottom: 15px;}
                }
            `}</style>
        </div>
    );
}

export default ClassViewList;