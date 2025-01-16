import styled from "styled-components";
import backgroundImage from "../images/background.png";
import hero from "../images/hero.png";
import { heroCard } from "./data";

const Hero = () => {
  return (
    <Section>
      <HeroContainer className="wrapper">
        <div className="heroContent">
          <div className="content">
            <p className="heading">Solution For Your Business</p>
            <h1>Designs Tech Innovative Solution.</h1>
            <ul>
              <li>Poster</li>
              <li>Payment</li>
              <li>Inspiration</li>
            </ul>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using making it look
              like readable English.
            </p>
          </div>
          <img src={hero} alt="HeroImage" />
        </div>
        <Card>
          {heroCard?.map((item, ind) => {
            return (
              <div className="item" key={ind}>
                <h3>{item.number}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </Card>
      </HeroContainer>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  background: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* @media (max-width: 1023px) {
    height: calc(100vh + 400px);
  } */
`;
const HeroContainer = styled.div`
  .heroContent {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 500ms;
    img {
      transition: all 500ms;
    }
    .content {
      width: 600px;
      .heading {
        color: #ea5818;
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
      }
      h1 {
        margin: 20px 0;
        font-weight: 900;
        font-size: 60px;
        transition: all 500ms;
      }
      ul {
        width: 100%;
        display: flex;
        list-style: none;
        justify-content: space-around;
        padding-inline-start: 0;
        transition: all 500ms;
        li {
          cursor: pointer;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          padding: 10px 20px;
        }
        li:hover {
          background: #ea5818;
          color: white;
        }
      }
      p:last-child {
        font-weight: 500;
        font-size: 15px;
        transition: all 500ms;
        margin: 20px 0;
        line-height: 2;
      }
      @media (max-width: 1350px) {
        h1 {
          font-size: 50px;
        }
      }
      @media (max-width: 1230px) {
        h1 {
          font-size: 45px;
        }
        ul {
          li {
            font-size: 14px;
            padding: 8px 16px;
          }
        }
        p:last-child {
          font-size: 14px;
        }
      }
    }

    @media (max-width: 1800px) {
      img {
        width: 500px;
      }
    }
    @media (max-width: 1130px) {
      img {
        width: 400px;
      }
    }
    /* @media (max-width: 1023px) {
      height: 750px;
      flex-direction: column;
      justify-content: space-around;
    } */
  }
  /* @media (max-width: 1023px) {
    height: calc(100vh - 90px);
  } */
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .item {
    transition: all 500ms;
    margin-top: 30px;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #211e3b21;
    max-width: 29%;
    flex-basis: 29%;
    p {
      margin: 10px 0;
    }
  }
  .item:nth-child(2) {
    margin: 30px 30px 0 30px; /* Apply margin to the second item */
  }
`;
