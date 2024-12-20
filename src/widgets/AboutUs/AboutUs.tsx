// "use client";

import "./AboutUs.css";
import Image from "next/image";

export const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-us__conteiner">
                <div className="about-us__article">
                    <h1 className="title">Учим кататься на горных лыжах</h1>
                    <p className="text">Занятия с инструктором на склонах горнолыжного курорта Шимбулак.</p>
                    <p className="text">Курсы, детские лагеря, VIP-сопровождение.</p>
                    <p className="text">Подберём формат по вашему желанию и уровню.</p>
                </div>
            </div>
        </section>
    );
};
