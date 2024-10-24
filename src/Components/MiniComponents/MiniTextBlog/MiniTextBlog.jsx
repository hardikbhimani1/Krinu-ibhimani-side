import React from "react";
import miniTextBlogImage from "../../../assets/hero_camera.jpg";
import './MiniTextBlog.css'; // Import the CSS file

function MiniTextBlog() {
  return (
    <div className="mini-text-blog"> {/* Add class name for styling */}
      <div>
        <h4 className="mini-text-min-title mini-text-title"  aria-hidden="true">
          New camera system.
        </h4>
        <h4 className="mini-text-min-title" aria-hidden="true">
          Go to great lengths to get <br/> the perfect shot.
        </h4>
        <p className="">
          The <strong>versatile new iPhone&nbsp;16 camera system</strong>{" "}
          captures beautiful photos — from up close or far away. The two-in-one
          48MP Fusion camera lets you take stunning super-high-resolution
          images, or zoom in with the 2x optical-quality Telephoto. The Ultra
          Wide camera shoots extreme close-up macro photos or wider, more
          expansive pictures. Altogether, it’s like having{" "}
          <strong>four lenses in your pocket</strong>. And with spatial capture,
          you can even take photos and videos in 3D, which you can watch with
          Apple&nbsp;Vision&nbsp;Pro.
        </p>
      </div>
      <div className="mini-image-blog">
        <img src={miniTextBlogImage} alt="miniTextBlogImage" />
      </div>
    </div>
  );
}

export default MiniTextBlog;
