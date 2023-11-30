import { useImages } from "../context/ImagesContext"

interface ImageProps {
    src: string
}

export default function BgImage({src} : ImageProps) {

    const {width, offsetY, sameRatio} = useImages();

    return (
        <>
            <div className='w-full h-full bg-transparent border-surface border-x-[3vw] border-y-[4vh] inner-border absolute z-10'></div>
            <div className="absolute z-0 w-full">
            <img className="h-[100vh] w-screen relative transition-all ease-linear duration-500" src={src} style={{
            objectFit: width >= 1920 && !sameRatio
                ? "contain"
                : "cover",
            objectPosition: offsetY === 0
                ? ""
                : offsetY > 0 && width >= 540 && width < 1024
                ? "75%"
                :  offsetY > 0 && width >= 1024 && width < 1920
                    ? "200%"
                    : offsetY > 0 && width >= 1920 && !sameRatio
                    ? "-200%"
                    : "65%",
            left: offsetY > 0 && sameRatio
                ? "-40%"
                : "0%"
            }}/>
      </div>
        </>
    )
}