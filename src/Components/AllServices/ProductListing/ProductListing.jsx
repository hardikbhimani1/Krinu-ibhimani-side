import React, { useState } from "react";
import "../../AllServices/AliBabaMiniSite/AliBabaMiniSite.css";
import AliBabaMiniSiteBG from "../../../assets/iphone16.jpg";
import Navbar from "../../Navbar/Navbar";
import serviceImage1 from "../../../assets/fc_creativity.jpg";
import serviceImage2 from "../../../assets/fc_entertainment.jpg";
import serviceImage3 from "../../../assets/fc_learning.jpg";
import serviceImage4 from "../../../assets/fc_productivity.jpg";
import serviceImage5 from "../../../assets/iphone-teb.jpg";
import usaIcon from "../../../assets/usa.png";
import MiniSiteModel from "../../MiniSiteModel/MiniSiteModel";
import Business from "../../MiniComponents/Business/Business";
import MinisiteBlog from "../../MiniComponents/MinisiteBlog/MinisiteBlog";
import ServiceBlogImage from "../../MiniComponents/ServiceBlogImage/ServiceBlogImage";
import MiniTextBlog from "../../MiniComponents/MiniTextBlog/MiniTextBlog";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";
import CommanService from "../../CommanComponet/CommanService/CommanService"
import ServiceBlog from "../../CommanComponet/ServiceBlog/ServiceBlog";

const ProductListing = () => {
  const services = [
    {
      id: 1,
      title: "Shiva Enterprise",
      icon: usaIcon,
      image: serviceImage1,
    },
    {
      id: 2,
      title: "Shiva Enterprise",
      icon: usaIcon,
      image: serviceImage2,
    },
    {
      id: 3,
      title: "Shiva Enterprise",
      icon: usaIcon,
      image: serviceImage3,
    },
    {
      id: 4,
      title: "Shiva Enterprise",
      icon: usaIcon,
      image: serviceImage4,
    },
    {
      id: 5,
      title: "Shiva Enterprise",
      icon: usaIcon,
      image: serviceImage5,
    },
  ];

  const [popupVisible, setPopupVisible] = useState(false);
  const [expandedStates, setExpandedStates] = useState([false, false]);
  const content1 = (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </>
  );

  const content2 = (
    <>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </>
  );

  const toggleContent = (index) => {
    console.log(index, "index");
    setExpandedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  return (
    <>
      <Navbar Header={true} />
      <CommanService
        AliBabaMiniSiteBG={AliBabaMiniSiteBG}
        CommanServiceTitle={"Alibaba Product Listing"}
      />
      <MiniTextBlog />
      <ServiceBlogImage />
      <ServiceBlog
        title={"Alibaba Product Listing"}
        desc={"The Design That Speaks"}
        cardTitle={"Get to know iPad."}
        services={services}
      />

      <div className="description">
        <div className="content-box">
          <h3 className="minisite-title-of-desc">
            <span className="highlight">A next-level</span> digital experience
            crafted with beautiful, game-changing Mini-site design.
          </h3>
          <h4>What is Lorem Ipsum?</h4>
          <p>
            {expandedStates[0]
              ? content1
              : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's..."}
          </p>
          <span className="read-more" onClick={() => toggleContent(0)}>
            {expandedStates[0] ? " Read Less" : " ... Read More"}
          </span>
        </div>

        <div className="content-box">
          <h3 className="minisite-title-of-desc">
            <span className="highlight">Transforming</span> the ordinary
            business into the extraordinary with{" "}
            <span className="highlight">Revolutionary</span> Mini-site
          </h3>
          <h4>Why do we use it?</h4>
          <p>
            {expandedStates[1]
              ? content2
              : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..."}
          </p>
          <span className="read-more" onClick={() => toggleContent(1)}>
            {expandedStates[1] ? " Read Less" : " ... Read More"}
          </span>
        </div>
      </div>

      <div>
        <h3 className="minisite-of-desc">
          Experience the benefits of our exceptional{" "}
          <span className="green-highlight">Minisite Designs.</span>
        </h3>
      </div>

      <Business />
      <MinisiteBlog />
      {popupVisible && <MiniSiteModel onClose={() => setPopupVisible(false)} />}
      <Contact />
      <Footer />
    </>
  );
};

export default ProductListing;
