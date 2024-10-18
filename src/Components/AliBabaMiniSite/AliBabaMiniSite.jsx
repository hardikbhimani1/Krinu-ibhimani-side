import React from "react";
import "./AliBabaMiniSite.css";
import AliBabaMiniSiteBG from "../../assets/alibabaminiside.png";
import serviceLine from "../../assets/line-services.png";
import Navbar from "../Navbar/Navbar";
import serviceImage1 from "../../assets/services-5.jpg";
import serviceImage2 from "../../assets/services-4.jpg";
import serviceImage3 from "../../assets/services-6.jpg";
import plusIcon from "../../assets/Plus-Icon.svg";
import usaIcon from "../../assets/usa.png";

const AliBabaMiniSite = () => {
  const services = [
    {
      id: 1,
      title: "Shiva Enterprice",
      icon: usaIcon,
      image: serviceImage1,
    },
    {
      id: 2,
      title: "Shiva Enterprice",
      icon: usaIcon,
      image: serviceImage2,
    },
    {
      id: 3,
      title: "Shiva Enterprice",
      icon: usaIcon,
      image: serviceImage3,
    },
  ];

  return (
    <>
      <Navbar Header={true} />
      <div className="minisite-container">
        <div className="image-wrapper">
          <img src={AliBabaMiniSiteBG} alt="Banner" className="minisite-bg" />
          <div className="minisite-overlay" />
        </div>
        <h1 className="minisite-title">Service</h1>
        <h3 className="minisite-text">
          Home &gt; Service &gt; AliBaba Minisite
        </h3>
        <img src={serviceLine} alt="Effect" className="minisite-line" />
      </div>
      <div className="minisite-text-container">
        <div className="minisite">
          <h3 className="our-minisite-tag">Alibaba Minisite</h3>
          <h1 className="our-minisite-desc">The Design That Speak</h1>
          <div className="cards-list">
            {services.map((service) => (
              <div className="cards" key={service.id}>
                <div className="image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="title">
                  <h1>{service.title}</h1>
                </div>
                <div className="minisite-desc">
                  <div className="usa-icon">
                    <img className="usa-icon" src={service.icon} />
                  </div>
                </div>
                <div className="plus-icon">
                  <img className="icon" src={plusIcon} />
                </div>
              </div>
            ))}
          </div>

          <div className="description">
            <h3 className="minisite-title-of-desc">
              <span className="highlight">A next-level</span> digital experience
              crafted with beautiful, game-changing Mini-site design.
            </h3>
            <p className="minisite-text-of-desc">
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham. Where can I get some? There are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc. 5 paragraphs words bytes lists Start
              with 'Lorem ipsum dolor sit amet...'
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AliBabaMiniSite;
