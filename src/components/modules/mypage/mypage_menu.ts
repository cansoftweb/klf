
// 마이페이지 메뉴
export const navigationItems =[
    {
        "path": "/mypage/info",
        "label": "내 정보 수정"
    },
    {
        "path": "/mypage/class",
        "label": "수강중인 강의"
    },
    {
        "path": "/mypage/wish",
        "label": "찜한 강의"
    },
    {
        "path": "/mypage/open",
        "label": "강의 관리",
        "subItems": [
            {
                "path": "/mypage/open/write",
                "label": "강의 등록"
            },
            {
                "path": "/mypage/open",
                "label": "전체 (3)"
            },
            {
                "path": "/mypage/open?type=100",
                "label": "판매중 (1)"
            },
            {
                "path": "/mypage/open?type=200",
                "label": "승인대기중 (1)"
            },
            {
                "path": "/mypage/open?type=300",
                "label": "판매중지 (1)"
            }
        ]
    },
    {
        "path": "/mypage/profit",
        "label": "수익 관리"
    },
    {
        "path": "/mypage/cs",
        "label": "고객센터",
        "subItems": [
            {
                "path": "/mypage/cs",
                "label": "공지사항"
            },
            {
                "path": "/mypage/cs/faq",
                "label": "자주 묻는 질문"
            },
            {
                "path": "/mypage/cs/ask",
                "label": "문의 내역"
            }
        ]
    }
];