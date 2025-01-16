import styled from "styled-components";
import aboutImg from "../images/about.png";
import { FaArrowRight } from "react-icons/fa";
import { about } from "./data";

const About = () => {
  return (
    <AboutContainer className="wrapper">
      <img src={aboutImg} alt="AboutImage" />
      <div className="content">
        <p>Solution For Your Business</p>
        <h2>Easy Solution For Your Tech Problem.</h2>
        <p>
          Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium
          doloremque laudantium totam rem aperiamea queipsa quae abillo
          inventore veritatis. voluptatem accusa ntium doloremque laudantium
          totam rem aperiamea
        </p>
        <ul>
          {about?.map((item, ind) => {
            return (
              <li key={ind}>
                {item.icon}
                {item.text}
              </li>
            );
          })}
        </ul>
        <Button>
          Get In Touch <FaArrowRight />
        </Button>
      </div>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 130px;
  padding: 30px;
  transition: all 500ms;
  img {
    height: 500px;
    width: 750px;
  }
  @media (max-width: 1230px) {
    img {
      transition: all 500ms;
      height: 500px;
      width: 480px;
    }
  }
  @media (max-width: 1130px) {
    gap: 100px;
    img {
      height: 500px;
      width: 430px;
    }
  }
  .content {
    height: 520px;
  }
  p:first-child {
    color: #ea5818;
    font-size: 17px;
    line-height: 21px;
    font-weight: 500;
  }
  h2 {
    margin-top: 10px;
    font-weight: 600;
    font-size: 45px;
    transition: all 500ms;
  }
  p:last-of-type {
    margin-top: 10px;
    font-weight: 500;
    font-size: 14px;
    color: #696969;
    transition: all 500ms;
    line-height: 2;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding-inline-start: 0;
    transition: all 500ms;
    margin: 25px 0;
    li {
      padding: 8px 0;
      font-size: 17px;
      line-height: 1;
    }
  }
`;

const Button = styled.div`
  background: #ea5818;
  width: fit-content;
  border-radius: 5px;
  padding: 20px 30px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
