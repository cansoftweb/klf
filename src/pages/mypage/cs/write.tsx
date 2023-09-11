import MypageLayout from "@/components/modules/mypage/MypageLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from 'react';

const MyCsWriteScreen = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event:any) => {
      const file = event.target.files[0];
      setSelectedFile(file?.name);
    };

    
    return (
        <MypageLayout title="문의하기">
            <form>
                <div className="horizontal-form">
                    <article>
                        <h5>제목</h5>
                        <div className="input">
                            <input type="text" placeholder="제목을 입력해주세요" />
                        </div>
                    </article>
                    <article>
                        <h5>내용</h5>
                        <div className="input">
                            <textarea placeholder="자세한 내용을 입력해 주세요 (최대 1000자)" ></textarea>
                        </div>
                    </article>
                    <article>
                        <h5>파일첨부</h5>
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
                        <button className="mBtn sColor1">문의하기</button>
                    </div>
                </div>
            </form>
        </MypageLayout>
    );
}

export default MyCsWriteScreen;