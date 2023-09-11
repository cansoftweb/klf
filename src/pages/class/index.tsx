import CategorySub from "@/components/modules/category/CategorySub";
import ClassViewContents from "@/components/modules/class/ClassViewContents";
import ClassViewHeader from "@/components/modules/class/ClassViewHeader";
import ClassViewList from "@/components/modules/class/ClassViewList";
import ClassViewMore from "@/components/modules/class/ClassViewMore";

const ClassScreen = () => {
    return (
        <>
           <CategorySub />
            <div className="inner">
                <div className="container">
                    <div className="header">
                        <ClassViewHeader />
                    </div>
                    <div className="contents">
                        <ClassViewContents />
                    </div>
                    <div className="list">
                       <div className="fix">
                       <ClassViewList />
                       </div>
                    </div>
                </div>
            </div>
            <ClassViewMore />
            
            <style jsx>{`
                .container{
                    padding: var(--vertical-padding) 0; 
                    display: grid;
                    grid-template-areas:
                    "header header header"
                    "contents contents list";
                    grid-template-columns: repeat(3, 1fr); /* 4개의 열로 시작 */
                }
                .container .header{grid-area: header; background: #333; position: sticky; z-index: 5; top: 0; }
                .container .contents{grid-area: contents; padding-right: 50px;}
                .container .list{grid-area: list; }
                .container .list .fix{position: sticky; top: 130px;}

                @media (max-width: 1400px) {
                    .container{
                        grid-template-areas:
                        "header header header header"
                        "contents contents contents list";
                        grid-template-columns: repeat(4, 1fr); /* 4개의 열로 시작 */
                    }

                    .container .contents{padding-right: 20px;}
                    .container .list .fix{top: 101px;}
                }

                @media (max-width: 900px) {
                    .container{display: block; padding-top: 0;}
                    .container .contents{padding-right: 0;}
                    .container .list .fix{position: inherit;}
                }
            `}</style>
            <style jsx global>{`
                #header{position: relative;}
            `}</style>
        </>
    );
}

export default ClassScreen;