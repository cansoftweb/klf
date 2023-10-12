import ReactQuill from "react-quill";
import QuillEditor from "./QuillEditor";
import { useEffect, useMemo, useRef, useState } from 'react';

const EditorIntroduce = () => {
    const quillInstance = useRef<ReactQuill>(null);
 
    // 내용
    const [editorContents, setEditorContents] = useState();

    const onChangeContents = (contents:any) => {
        console.log(contents)
        setEditorContents(contents)
    }

    // 이미지
    const imageHandler = () => {
        const input:any = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
    
        input.addEventListener('change', async () => {
          const file = input.files[0];
    
          try {
            if (quillInstance != null) {
                const editor: any = quillInstance?.current?.getEditor();
                const range = editor.getSelection();
          
                // 이미지 파일을 base64로 인코딩
                const reader = new FileReader();
                reader.onload = () => {
                    const dataURL = reader.result;
            
                    // 이미지 태그를 생성하고 Quill에 삽입
                    editor.insertEmbed(range.index, 'image', dataURL);
            
                    // 커서 이동
                    editor.setSelection(range.index + 1);

                };
          
                reader.readAsDataURL(file);
              }

        
          } catch (error) {
            console.log(error);
          }
        });
    };


    // 옵션    
    const modules = useMemo(() => (
        {
            toolbar: {
                container:  [
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'font': [] }],
                    [{ 'align': [] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
                    [{ 'color': [ '#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background':  ['transparent', '#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }],
                    ['image', 'video'],
                ],
                handlers: { image: imageHandler },
            },
         
          }
    ) ,[]);
    
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'color', 'background',
        'link', 'image'
    ];

    return (
        <div className="container">
            <QuillEditor
            forwardedRef={quillInstance}
            style={{height: '300px'}}
            value={editorContents}
            onChange={onChangeContents}
            modules={modules}
            theme="snow"
            placeholder="내용을 입력해주세요."
            />
             <style jsx>{`
                .container{padding-bottom: 50px;}
            `}</style>
            <style jsx global>{`
            {/* .ql-container.ql-snow{height: auto}     */}
            `}</style>
        </div>
    );
}

export default EditorIntroduce;