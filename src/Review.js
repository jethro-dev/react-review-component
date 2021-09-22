import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    index <= 0 ? setIndex(people.length - 1) : setIndex((i) => i - 1);
  };

  const nextPerson = () => {
    index >= people.length - 1 ? setIndex(0) : setIndex((i) => i + 1);
  };

  const supriseButton = () => {
    let newIndex = index;
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * 4);
    }
    setIndex(newIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={supriseButton}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
