import React, { useState } from 'react'
import Link from 'next/link';
import logo from '/public/images/logo-gray.png';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { getFooterInfo } from '@/pages/api/get';
import styles from './dist/Footer.module.css';


const Footer = () => {

    const getFooter = useQuery('getFooterInfo', getFooterInfo, {
        onSuccess: res => {
            // console.log(res.data)
        }
    })

    if(getFooter.isLoading){
        return  <footer className={styles.footer}></footer>;
    }

    if (getFooter.isError) {
        return <p>사이트정보 가져오는 동안 문제가 발생했습니다</p>;
    }

    

    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className='inner'>
                    <div className={styles.inner}>
                        <div className='left'>
                            <Link href={'/policy?type='}>공지사항</Link>
                            <Link href={'/policy?type=B'}>이용약관</Link>
                            <Link href={'/policy?type=A'}>개인정보취급방침</Link>
                        </div>
                        <ul className="right">
                            <li><Link href={'/faq'}>자주묻는 질문</Link></li>
                            <li><Link href={'/notice'}>기업/단체 교육문의</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className='inner'>
                    <div className={styles.inner}>
                        <div className={styles.footerLogo}>
                            <Image
                                src={logo}
                                alt="FCLAW"
                                height={65}
                            />
                        </div>
                        <div className={styles.info}>
                            <p className={styles.company}>{getFooter?.data?.data?.companyName ?? '-'}</p>
                            <div className={styles.info}>
                                <span>대표이사: {getFooter?.data?.data?.companyCeo ?? '-'}</span>
                                <span>개인정보보호책임자: {getFooter?.data?.data?.companyInformationManager ?? '-'}</span>
                                <br />
                                <span>사업자등록번호: {getFooter?.data?.data?.companyBusinessNumber ?? '-'}</span>
                                <br />
                                <span>email: {getFooter?.data?.data?.companyEmail ?? '-'}</span>
                                <span>개인정보보호책임자 이메일: {getFooter?.data?.data?.companyInformationManagerEmail ?? '-'}</span>
                                <br />
                                <span>주소: {getFooter?.data?.data?.companyAddress ?? '-'}</span>
                            </div>
                            <p className={styles.copyright}>© Cubefc Corp. All Rights Reserved.</p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


