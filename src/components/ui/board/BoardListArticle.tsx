import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react'

const BoardListArticle = ({
    idx,
    title,
    date,
}:{
    idx?:string,
    title?:string,
    date?:string, 
}) => {

    const  [toggle, setToggle] = useState(false)

    const onToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='container'>
            <button className='header' onClick={onToggle}>
                {title && <h5 className='ellipsis1'>{title}</h5>}
                <span className='date'>
                    {date && date}
                    <Icon icon={`ep:arrow-${toggle ? 'up' : 'down'}`} fontSize={20} color="#ccc" />
                </span>
            </button>
            {toggle && (
                <div className="contents">
                    내용
                </div>
            )}

            <style jsx>{`
                .container{ border-bottom: 1px solid #555;}
                .header{display: flex; width: 100%; align-items: center;  font-size: 15px; color: #fff; text-align: left; gap: 20px; padding: 20px 0;}
                .header h5{width: 80%; font-size: 15px; font-weight: 400;}
                .header .date{width: 20%; display: flex; align-items: center; justify-content: space-between;}

                .contents{background-color: #444; padding: 20px; font-size: 14px; font-weight: 400; line-height: 1.6;}
                
                @media (max-width: 1400px) {
                    .header{padding: 15px 0; font-size: 13px;}
                    .header h5{font-size: 13px;}
                }
                @media (max-width: 900px) {
                    .header{font-size: 12px;}
                    .header h5{font-size: 12px;}
                }
            `}</style>
        </div>
    );
}

export default BoardListArticle;