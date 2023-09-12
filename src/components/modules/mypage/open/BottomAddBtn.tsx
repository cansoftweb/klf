import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const BottomAddBtn = ({
    txt = '',
}) => {
    return (
        <div className="container">
            <Link href={'/mypage/open/write'}>
                <div className="link">
                    <Icon icon="tdesign:plus" fontSize={30} color="#ccc" />
                    <p>강의 등록하기</p>
                </div>
            </Link>
            <style jsx>{`
                .container{margin-top: 50px;}
                .container .link{width: 100%; text-align: center; display: block; border: 1px solid #ccc; border-radius: 50px; padding: 20px 10px; line-height: 1;}
                .container .link:hover{background-color: rgba(255,255,255,0.1);}
                .container .link p{font-size: 17px;}

                    
                @media (max-width: 1400px) {
                    .container .link{padding: 10px;}
                    .container .link p{font-size: 14px;}
                }
              
                @media (max-width: 900px) {
                    .container .link{display: flex; align-items: center; justify-content: center;}
                }
            `}</style>
            <style jsx global>{`
                 @media (max-width: 1400px) {
                    .container .link svg{font-size: 20px;}
                }
            `}</style>
        </div>
    );
}

export default BottomAddBtn;