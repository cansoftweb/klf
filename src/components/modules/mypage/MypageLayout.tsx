import { useRouter } from "next/router";
import styles from './dist/MypageLayout.module.css';
import Link from "next/link";
import { getUserStorage, logout } from "@/pages/api/auth";
import { useState, useEffect } from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";

const MypageLayout = ({ 
    title = '', 
    subTitle = '', 
    children 
}:any) => {

    const router = useRouter()

    const onLogout = () => {
        if(confirm('로그아웃 하시겠습니까?')){
            logout();
            router.push('/')
        }
        // location.href = '/';
    }


    // 고객센터 토글
    const  [csToggle, setCsToggle] = useState(true)
    

    // 마이페이지 메뉴
    const navigationItems = [
        { path: '/mypage', label: '내 정보 수정' },
        { path: '/mypage/class', label: '수강중인 강의' },
        { path: '/mypage/wish', label: '찜한 강의' },
        {
            path: '/mypage/open',
            label: '강의 관리',
            subItems: [
                { path: '/mypage/open/write', label: '강의 등록' },
                { path: '/mypage/open', label: '전체 (3)' },
                { path: '/mypage/open?type=100', label: '판매중 (1)' },
                { path: '/mypage/open?type=200', label: '승인대기중 (1)' },
                { path: '/mypage/open?type=300', label: '판매중지 (1)' },
            ],
        },
        { path: '/mypage/income', label: '수익 관리' },
        {
            path: '/mypage/cs',
            label: '고객센터',
            subItems: [
                { path: '/mypage/cs', label: '공지사항' },
                { path: '/mypage/cs/faq', label: '자주 묻는 질문' },
                { path: '/mypage/cs/ask', label: '문의 내역' },
            ],
        },
    ];

    return (
        <div className="inner">
            <div className={styles.wrap}>
            
                <div className={styles.container}>
                    <nav>
                        <h3>마이페이지</h3>
                        <ul>
                        {navigationItems.map((item) => (
                            <li
                                key={item.path}
                                className={router.asPath === item.path ? styles.active : ''}
                            >
                                {item.subItems ? (
                                    <button onClick={() => setCsToggle(!csToggle)}>
                                        {item.label}{' '}
                                        <Icon icon={`ep:arrow-${csToggle ? 'down' : 'up'}`} />
                                    </button>
                                ) : (
                                    <Link href={item.path}>{item.label}</Link>
                                )}

                                {item.subItems && csToggle && (
                                    <ol>
                                        {item.subItems.map((subItem) => (
                                            <li
                                                key={subItem.path}
                                                className={
                                                    router.asPath === subItem.path ? styles.active : ''
                                                }
                                            >
                                                <Link href={subItem.path}>{subItem.label}</Link>
                                            </li>
                                        ))}
                                    </ol>
                                )}
                            </li>
                        ))}

                        </ul>
                    </nav>
                    <div className={styles.contents}>
                       <header className={styles.header}>
                        <h4>{title}</h4>
                            {subTitle && <p className={styles.subTitle}>| {subTitle}</p>}
                       </header>

                        <div className={styles.myContents}>
                            {children}
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default MypageLayout;