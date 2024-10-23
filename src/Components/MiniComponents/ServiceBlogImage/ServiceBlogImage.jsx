import React, { useEffect, useState } from "react";
import AliBabaMiniSiteBG from "../../../assets/tv-home_start.jpg";
import colorsLifestyle from "../../../assets/colors_lifestyle_fallback.jpg";
import appleWatchUltra from "../../../assets/apple-watch-ultra.jpg";
import './ServiceBlogImage.css';

function ServiceBlogImage() {
    const blogImage = [
        {
            id: 1,
            desc: "The first iPhone built for <br/> Apple Intelligence. Personal, private, <br/> powerful.",
            image: appleWatchUltra,
        },
        {
            id: 2,
            desc: "Camera Control. Get the <br/> perfect photo. While barely lifting <br/> a finger.",
            image: colorsLifestyle,
        },
        {
            id: 3,
            desc: "The all-new chip that <br/> empowers Apple Intelligence. <br/> And you.",
            image: AliBabaMiniSiteBG,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % blogImage.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [blogImage.length]);

    return (
        <div className="service-image-container">
            {blogImage.map((blog, index) => (
                <div
                    className="service-image-wrapper"
                    key={blog.id}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    <img src={blog.image} alt={`Blog ${blog.id}`} className="service-image-bg" />
                    <div className="service-image-overlay" />
                    <h1 className="service-image-title" dangerouslySetInnerHTML={{ __html: blog.desc }} />
                </div>
            ))}
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    {blogImage.map((_, index) => (
                        <li
                            key={index}
                            className={`hero-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ServiceBlogImage;
