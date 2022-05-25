import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 100px;
  /* background: #595959; */
  background: ${(props) => props.theme.footerBackground};
  color: #fff;
  min-height: 600px;
`;
const Content = styled.div`
  width: 95%;
  margin: 20px auto;
  /* margin: 80px auto; */
  padding: 80px auto;
  display: flex;
  justify-content: space-between;
  .title {
    color: ${(props) => props.theme.accent};
    font-weight: bold;
    border-bottom-style: dotted;
    margin-bottom: 30px;
    font-size: 20px;
  }
  ul {
    list-style: none;
    font-size: 20px;
    font-weight: 700;
  }
  li {
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;

    align-items: center;
    width: 100%;
    /* justify-content: center;
    align-items: center; */

    margin: 0px;
    padding: 0px;
    /* .title {
      text-align: center;
    } */

    ul {
      width: 100%;
      font-size: 18px;
      padding: 20px;
    }
    li {
      font-size: 14px;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <ul className="learn-more">
          <li>
            <p className="title"> SASHIMEOMEO SHOP</p>
          </li>
          <li>Địa Chỉ :73 Đường ĐHT 31 - phường Tân Hưng Thuận - Q12 - TPHCM</li>
          <li>Hot Line: 0978531164</li>
          <li>Chuyên cung cấp thức ăn và các vật dụng cho mèo</li>
          <li>Dev:NC</li>
        </ul>
        {/* <ul className="api">API</ul> */}
        <ul className="fan-page">
          <li>
            <p className="title">FACEBOOK FANPAGE</p>
          </li>

          <li>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSashimeomeo-100849721948917%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=410715053650842"
              width={340}
              height={300}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </li>
        </ul>
        <ul className="youtube">
          <li>
            <p className="title">YOUTUBE</p>
          </li>
          <li>
            <iframe width={340} height={300} src="https://www.youtube.com/embed/dJq_O-AZ_Ag" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </li>
        </ul>

        <ul className="google-maps">
          <li>
            <p className="title">BẢN ĐỒ</p>
          </li>
          <li>
            <iframe
              width={340}
              height={300}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6547065599484!2d106.62337121525766!3d10.83771449227995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a2b2507363b%3A0xf23e5e1ac9fbbc1!2zNzMgxJDDtG5nIEjGsG5nIFRodeG6rW4gMzEsIMSQw7RuZyBIxrBuZyBUaHXhuq1uLCBRdeG6rW4gMTIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1653460071302!5m2!1svi!2s"
            ></iframe>
          </li>
        </ul>
      </Content>
    </Wrapper>
  );
};

export default Footer;
