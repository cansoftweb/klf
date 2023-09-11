import Link from "next/link";

const CategorySub = () => {

    const sapmle = [0,0,0,0,0,0,0,0];
    
    return (
        <div className="inner">
            <div className="container">
                {sapmle.map((e, i) => (
                <Link href={'/category'} key={`sub-category-${i}`}><span className="btn">가맹사업법령</span></Link>
                ))}
            </div>

            <style jsx>{`
                .container{display: flex; gap: 15px; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; padding: 40px 0}
                .btn{font-size: 18px; color: #aaa}
                .btn.active{color: var(--color1)}
                .btn:hover{color: var(--color1)}
                @media (max-width: 1400px) {
                    .container{justify-content: center; }
                    .btn{font-size: 15px;}
                }
                @media (max-width: 900px) {
                    .inner{padding: 0 !important;}
                    .container{overflow-x: auto; flex-wrap: nowrap; justify-content: flex-start; padding: 15px 20px; background-color: #444;}
                    .btn{font-size: 13px; white-space: nowrap;}
                }
            `}</style>
        </div>
    );
}

export default CategorySub;