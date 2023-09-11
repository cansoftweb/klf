import Link from 'next/link';
import styles from './dist/MainCategory.module.css';

const MainCategory = () => {

    const sapmle = [0,0,0,0,0,0,0,0];

    return (
        <div className="inner">
            <div className={styles.container}>
                {sapmle.map((e, i) => (
                <Link href={'/category'} key={`main-category-${i}`}>
                    <div className={styles.icon}>
                        <i className='icon-idea' />
                    </div>
                    <p>가맹사업법령</p>
                </Link>
                ))}
            </div>
        </div>
        
    );
}

export default MainCategory;