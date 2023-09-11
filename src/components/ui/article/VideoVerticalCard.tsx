import Link from "next/link";
import styles from "./dist/VideoVerticalCard.module.css";

const VideoVerticalCard = ({
    light = false
}) => {
    return (
        <Link href={'/class'} className={styles.container}>
            <div className={styles.img}></div>
            <div className={styles.txt}>
                <h5 className="ellipsis2">정보공개서 등 제공의무의 존재 정보공개서 등 제공의무의 존재 정보공개서 등 제공의무의 존재 정보공개서 등 제공의무의 존재</h5>
                <p className={styles.min}>2:45</p>
             
            </div>
        </Link>
    );
}

export default VideoVerticalCard;
