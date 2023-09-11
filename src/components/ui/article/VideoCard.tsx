import Link from "next/link";
import styles from "./dist/VideoCard.module.css";

const VideoCard = ({
    light = false,
    state = null
}:any) => {
    return (
        <Link href={'/class'} className={`${styles.container} ${light ? styles.light : ''}`}>
            <div className={styles.img}>
                {state !== null && (
                    <span className={`${styles.state} ${state == 'y' ? styles.end : styles.ing}`}>{state == 'y' ? '수강완료' : '수강중'}</span>
                )}
            </div>
            <div className={styles.txt}>
                <h5 className="ellipsis2">상가임대차보호법 #환산보증금 #계약갱신 #환산보증금 #계약갱신 상가임대차보호법 #환산보증금 #계약갱신 #환산보증금 #계약갱신</h5>
                <p className={styles.user}>홍길동 변호사</p>
                {!light && (
                <>
                    <ul>
                        <li>지식재산권</li>
                        <li>지식재산권</li>
                    </ul>
                    <div className={styles.price}>
                        <span>56,500원</span>
                        <b>49,500원</b>
                    </div>
                </>
                )}
            </div>
        </Link>
    );
}

export default VideoCard;