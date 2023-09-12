import MypageLayout from "@/components/modules/mypage/MypageLayout";
import { navigationItems } from "@/components/modules/mypage/mypage_menu";
import Link from "next/link";
import { useRouter } from "next/router";

const MypageScreen = () => {

    const router = useRouter()

    return (
        <div className="inner">
            <h3>마이페이지</h3>
            <ul className="myMenu">
                {navigationItems.map((item) => (
                    <li
                        key={item.path}
                    >
                        <Link href={item.path}>{item.label}</Link>

                        
                    </li>
                ))}

            </ul>
            <style jsx>{`
                h3{font-size: 18px; font-weight: 500; margin: 30px 0; text-align: center;}
            `}</style>
            <style jsx global>{`
                ul.myMenu{margin: 30px auto; max-width: 400px; min-height: 60vh}
                ul.myMenu li{border-bottom: 1px solid #666;}
                ul.myMenu li a{display: block; width: 100%; padding: 10px; font-size: 14px;}
            `}</style>
        </div>
    );
}

export default MypageScreen;