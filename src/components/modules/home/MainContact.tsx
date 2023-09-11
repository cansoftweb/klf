import LinkCard from "@/components/ui/article/LinkCard";

const MainContact = () => {
    return (
        <div className="container">
            <div className="inner">
                <LinkCard 
                    title="강의 참여 신청"
                    contents="소상공인시장진흥공단과의 협업을 통해, 더 다양한 판매자분들이 톡스토어을 활용한 판매활동이 더 유익해질 수 있도록 소상공인 지원 프로그램을 준비했습니다. 톡스토어x소진공 지원프로그램 모집내용 톡스토어 전문강사의 코칭 교육참여"
                    btn="강의 참여하기"
                />
                <LinkCard 
                    title="단체 교육 문의"
                    contents="소상공인시장진흥공단과의 협업을 통해, 더 다양한 판매자분들이 톡스토어을 활용한 판매활동이 더 유익해질 수 있도록 소상공인 지원 프로그램을 준비했습니다. 톡스토어x소진공 지원프로그램 모집내용 톡스토어 전문강사의 코칭 교육참여"
                    btn="문의하기"
                />
                <LinkCard 
                    title="제휴 문의"
                    contents="소상공인시장진흥공단과의 협업을 통해, 더 다양한 판매자분들이 톡스토어을 활용한 판매활동이 더 유익해질 수 있도록 소상공인 지원 프로그램을 준비했습니다. 톡스토어x소진공 지원프로그램 모집내용 톡스토어 전문강사의 코칭 교육참여"
                    btn="문의하기"
                />
            </div>
            <style jsx>{`
                .container{background: #292929; padding: 110px 0;}
                .inner{display: flex; gap: 32px; align-items: stretch; justify-content: center;}

                @media (max-width: 1400px) {
                    .container{padding: 80px 0;}
                    .inner{gap: 15px;}
 
                }

                @media (max-width: 900px) {
                    .container{padding: 40px 0;}
                   .inner{flex-direction: column;}
                }

            `}</style>
        </div>
    );
}

export default MainContact;