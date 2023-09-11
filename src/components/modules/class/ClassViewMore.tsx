import VideoCard from "@/components/ui/article/VideoCard";
import MoreBtn from "@/components/ui/btn/MoreBtn";

const ClassViewMore = () => {

    
    const data = [0,0,0,0]

    return (
        <div className="container">
             <div className="inner">
               <header>
                    <h3><b>가맹사업법령</b> 강의</h3>
               </header>
                 <div className="list">
                    {data.map((e, i) => (
                        <VideoCard
                        key={`CategpryList${i}`}
                        light={true}  
                        />
                    ))}
                </div>
                <MoreBtn 
                    pressFunc={() => {}}
                />
             </div>
            
            <style jsx>{`
                .container{background: #292929; padding:  var(--vertical-padding) 0;}
                header{margin-bottom: 40px;}
                header h3{font-size: 30px; font-weight: 700;}
                header h3 b{color: var(--color1);}

                .list{
                    display: grid; 
                    grid-template-columns: 1fr 1fr 1fr 1fr; 
                    gap: 30px; 
                }
               
                @media (max-width: 1400px) {
                    header{
                        max-width: 960px;
                        margin: 0 auto;
                        margin-bottom: 40px;
                    }
                    .list {
                        max-width: 960px;
                        margin: 0 auto;
                        grid-template-columns: 1fr 1fr 1fr; /* 3개의 열로 변경 */
                    }
                }
                @media (max-width: 900px) {
                    header{
                        max-width: 530px;
                        margin-bottom: 20px;
                    }
                    header h3{font-size: 20px;}
                    .list {
                        grid-template-columns: 1fr 1fr; /* 2개의 열로 변경 */
                        gap: 15px;
                        max-width: 530px;
                    }
                }
            `}</style>
        </div>
    );
}

export default ClassViewMore;