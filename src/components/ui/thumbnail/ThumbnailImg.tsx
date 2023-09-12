import Image from "next/image";

const ThumbnailImg = ({
    img
}:{
    img?:string
}) => {
    return (
        <div className="container">
            {img && (
                <i style={{ backgroundImage: `url(${img})` }}></i>
            )}
            <style jsx>{`
                i{display: block; width: 100%; padding-top: 58%;}
            `}</style>
        </div>
    );
}

export default ThumbnailImg;