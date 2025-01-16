import styled from "styled-components";
import { service } from "./data";
import { FaArrowRight } from "react-icons/fa";

const Service = () => {
  return (
    <ServiceContainer className="wrapper">
      <div className="content">
        <p>Services</p>
        <h3>We provide All-in-one Solution for every IT job</h3>
      </div>
      <Card>
        {service?.map((ser, ind) => {
          return (
            <div className="cardContainer" key={ind}>
              <div className="icon">{ser.icon}</div>
              <h4>{ser.title}</h4>
              <p className="desc">{ser.desc}</p>
              <div className="btn">
                LEARN MORE <FaArrowRight />
              </div>
            </div>
          );
        })}
      </Card>
    </ServiceContainer>
  );
};

export default Service;

const ServiceContainer = styled.div`
  padding: 30px;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      color: #ea5818;
      font-size: 17px;
      line-height: 21px;
      font-weight: 500;
    }
    h3 {
      font-size: 30px;
      font-weight: 900;
      margin-top: 10px;
      width: 460px;
      text-align: center;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  .cardContainer {
    width: 470px;
    margin-top: 15px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    border: 1px solid #69696952;
    padding: 50px;
    .icon {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      background: #fce4da;
    }
    .desc {
      font-size: 12px;
      color: #696969;
      width: 300px;
      text-align: center;
      font-weight: 500;
      line-height: 2;
    }
  }
  .btn {
    font-size: 9px;
    color: #696969;
    display: flex;
    align-items: center;
    gap: 3px;
    font-weight: 700;
    cursor: pointer;
  }
`;
