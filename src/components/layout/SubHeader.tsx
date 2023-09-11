// import { css } from "@emotion/css";

// const subTitle = css`
//     font-size: 50px;
//     font-weight: 700;
//     color: #222;
//     display: flex;
//     align-items: flex-start;
//     padding-bottom: 55px;
//     text-shadow: 0 0 1px #222;
//     i.plus{
//         display: inline-block;
//         width: 22px;
//         height: 22px;
//         position: relative;
//         top: -10px;
//         margin-right: 10px;
   
//         &::before,
//         &::after{content: ''; display: inline-block; background-color: var(--color1-light); border-radius: 10px; position: absolute;}
//         &::before{width: 100%; height: 6px; left: 0; top: 50%; transform: translateY(-50%)}
//         &::after{height: 100%; width: 6px; top: 0; left: 50%; transform: translateX(-50%)}
//     }

//     @media (max-width: 900px) {
//         font-size: 25px;
//         padding-bottom: 30px;
//         i{transform: scale(0.8);}
//     }
// `

const SubHeader = ({ title }: {
    title: string;
}) => {
    return (
        <div className="inner">
            <h2 >
                <i className="plus"></i>
                {title}
            </h2>
        </div>
    );
}

export default SubHeader;