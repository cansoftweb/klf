const MoreBtn = ({
    pressFunc = () => {}
}) => {
    return (
        <div className="more">
            <button onClick={pressFunc}>더보기</button>
            <style jsx>{`
                .more{text-align: center;}
                .more button{width: 100%; max-width: 385px; margin: 70px auto; height: 40px; font-size: 15px; background-color: #232323; color: #fff; border-radius: 5px;}
                .more button:hover{background-color: #292929;}
                @media (max-width: 900px) {
                    .more button{font-size: 13px;}
                }
            `}</style>
        </div>
    );
}

export default MoreBtn;