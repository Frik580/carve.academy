// "use client";

import "./TopNews.css";
import { TopImage } from "@/entities/TopImage/TopImage";
import { TOP_NEWS_COVER, TOP_NEWS_COVER_LITE } from "@/shared/Constants";
import Image from "next/image";

export const TopNews = () => {
    return (
        <section className="top-news">
            <TopImage src={TOP_NEWS_COVER} srclite={TOP_NEWS_COVER_LITE} />
            {/* <div className="top-news__conteiner"> */}
            <Image
                className="top-news__image"
                src="/logo1.png"
                width={1000}
                height={300}
                alt="Picture of the author"
            />
            {/* </div> */}
        </section>
    );
};
