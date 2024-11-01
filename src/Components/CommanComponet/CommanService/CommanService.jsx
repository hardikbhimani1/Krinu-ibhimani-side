import React, { useRef, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import serviceImage1 from "../../../assets/fc_creativity.jpg";
import serviceImage2 from "../../../assets/fc_entertainment.jpg";
import serviceImage3 from "../../../assets/fc_learning.jpg";
import serviceImage4 from "../../../assets/fc_productivity.jpg";
import serviceImage5 from "../../../assets/iphone-teb.jpg";
import usaIcon from "../../../assets/usa.png";


const CommanService = ({AliBabaMiniSiteBG,CommanServiceTitle}) => {
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

  const [expandedStates, setExpandedStates] = useState([false, false]);
  const scrollContainerRef = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const toggleContent = (index) => {
    console.log(index, "index");
    setExpandedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
      updateButtonStates();
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
      updateButtonStates();
    }
  };

  const updateButtonStates = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsLeftDisabled(scrollLeft === 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };
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

  return (
    <>
      <Navbar Header={true} />
      <div className="minisite-container">
        <div className="image-wrapper">
          <img src={AliBabaMiniSiteBG} alt="Banner" className="minisite-bg" />
          <div className="minisite-overlay" />
        </div>
        <h1 className="minisite-title">{CommanServiceTitle}</h1>
      </div>
    </>
  );
};

export default CommanService;
