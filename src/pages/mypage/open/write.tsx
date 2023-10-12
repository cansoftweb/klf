import MypageLayout from "@/components/modules/mypage/MypageLayout";
import EditorIntroduce from "@/components/modules/mypage/open/EditorIntroduce";
import QuillEditor from "@/components/modules/mypage/open/QuillEditor";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from 'react';

const MyOpenWriteScreen = () => {

    const [tagKeyword, setTagKeyword] = useState<string>('');
    const [tagKeywordList, setTagKeywordList] = useState<string[]>([]);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event:any) => {
      const file = event.target.files[0];
      setSelectedFile(file?.name);
    };

    const addTagKeyword = () => {
        tagKeyword ? setTagKeywordList([...tagKeywordList, tagKeyword]) : '';
        setTagKeyword('')
    }

    
    const handleKeyPress = (event:any) => {
        if (event.key === 'Enter') {
        // Enter 키를 눌렀을 때 폼 제출 또는 다른 작업을 수행합니다.
        // handleSubmit(event);
        console.log(event.target.value)
        addTagKeyword();
        }
    };


    const handleSubmit = (event:any) => {
        event.preventDefault();
        // 폼 데이터를 서버로 전송 또는 처리할 로직을 작성합니다.
        // console.log(formData);
    };
    
    return (
        <MypageLayout title="강의 등록">
            <form onSubmit={handleSubmit}>
                <div className="horizontal-form">
                    <article>
                        <h5>제목</h5>
                        <div className="input">
                            <input type="text" placeholder="제목을 입력해주세요" />
                        </div>
                    </article>
                    <article>
                        <h5>카테고리</h5>
                        <div className="input">
                            <select>
                                <option value="">카테고리 선택</option>
                            </select>
                        </div>
                    </article>
                    <article>
                        <h5>키워드</h5>
                        <div className="right">
                            <div className="inline">
                                <input type="text" placeholder="키워드를 입력해주세요"
                                
                                value={tagKeyword}
                                onChange={e => setTagKeyword(e.target.value)}
                                onKeyUp={handleKeyPress}
                                />
                                <span className="count">{`${tagKeywordList.length}/5`}</span>
                                {tagKeywordList.length < 5 && (
                                <button type="button" 
                                className="addBtn"
                                onClick={addTagKeyword}>추가</button>
                                )}
                            </div>
                            {tagKeywordList.length > 0 && (
                            <div className="tagArea">
                                { tagKeywordList?.map((word:string) => (
                                    <span key={word} className="tag">
                                        {word}
                                        <button type="button"
                                            onClick={() => {
                                                const newArr = tagKeywordList.filter((k:string) => k != word);
                                                setTagKeywordList(newArr);
                                            }}
                                        >
                                        <Icon icon="carbon:close-outline" color="#eee" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                             )}
                        </div>
                    </article>
                    <article>
                        <h5>금액</h5>
                        <div className="inline">
                            <input type="number" placeholder="금액을 입력해주세요" />
                            원
                        </div>
                    </article>
                    <article>
                        <h5>강의 소개</h5>
                        {/* <div className="edior">
                            <EditorIntroduce />
                        </div> */}
                        <div className="input">
                          
                            <textarea placeholder="강의 소개를 입력해주세요" ></textarea>
                        </div>
                    </article>
                    <article>
                        <h5>강의 내용</h5>
                        {/* <div className="edior">
                            <EditorIntroduce />
                        </div> */}
                        <div className="input">
                            <textarea placeholder="강의 내용를 입력해주세요" ></textarea>
                        </div>
                    </article>
                    <article>
                        <h5>강의 첨부파일</h5>
                        <div className="input">
                         
                            <input id="addFile" type="file" onChange={handleFileChange} />
                            
                            {selectedFile ? (
                                <p className="fileName">
                                    {selectedFile} 
                                    <button onClick={() => setSelectedFile(null)}>
                                        <Icon icon="material-symbols:close" fontSize={18} color="#ccc" />
                                    </button>
                                </p>
                            ) : (
                                <label htmlFor="addFile" className="file">
                                    <span><Icon icon="tdesign:plus" fontSize={25} color="#ccc" /> 파일첨부</span>
                                </label>
                            )}
                          
                        </div>
                    </article>
                    <div className="bottomBtn">
                        <button className="mBtn sColor1">등록하기</button>
                    </div>
                </div>
            </form>
            <style jsx>{`
                .addBtn{border: 1px solid #ccc; color: #eee; border-radius: 5px; padding: 3px 8px;}

                .edior{background-color: #fff; width: 100%; color: #111}

                .count{color: #999; padding: 0 10px;}

                .inline{padding-right: 10px;}

                .tagArea{display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px;}
                .tag{display: inline-flex; align-items: center; gap: 5px; padding: 5px 10px; background-color: #555; font-size: 12px; border-radius: 3px; line-height: 1;}
            `}</style>
        </MypageLayout>
    );
}

export default MyOpenWriteScreen;