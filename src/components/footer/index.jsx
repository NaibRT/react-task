import React, { useState } from "react";
import Checkbox from "../checkbox";
import Input from '../input';
import  Button from '../button';
import Navbar from '../navbar';
import LangSelect from '../lang-select'

const Index = () => {
  const [ form, setFrom ] = useState({
    category: "",
    fullName: "",
    email: "",
    topic: "",
    message: "",
  });

  const categories = [
    { id: 1, name: "UI/UX dizayn" },
    { id: 2, name: "Kibertəhlükəsizlik" },
    { id: 3, name: "Bulud inzibatçılığı" },
    { id: 4, name: "Proqramlaşdırma" },
    { id: 5, name: "Avtomatika" },
    { id: 6, name: "Elektronika" },
    { id: 7, name: "Digər" },
  ];

  function categorySelectHandler(name, value) {
    setFrom({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="contact-wrapper">
          <div className="contact-head">
            <span>Əlaqə</span>
            <h1>Sualınız var? Biz sizə zəng edək</h1>
          </div>
          <div className="contact-info">
            <div className="ci-head">Əlaqə məlumatları</div>
            <div className="contact-info-body">
              <div className="contact-info-item">
                <img
                  src={require("../../assets/icons/Call.svg").default}
                  alt="call"
                />
                <a href="tel:994 12 310 14 00">+994 12 310 14 00</a>
              </div>
              <div className="contact-info-item">
                <img
                  src={require("../../assets/icons/Message.svg").default}
                  alt="Message"
                />
                <a href="mailto:support@technest.az">support@technest.az</a>
              </div>
              <div className="contact-info-item">
                <img
                  src={require("../../assets/icons/Location.svg").default}
                  alt="Location"
                />
                <a href="">2h Mikayıl Müşfiq küç., Bakı, Azerbaijan</a>
              </div>
            </div>
          </div>

          <div className="sosila-media">
            <div className="sm-head">Sosyal mediada biz</div>
            <div className="sm-links">
              <div className="sml-item">
                <a href="#">
                  <img
                    src={require("../../assets/icons/facebook.svg").default}
                    alt=""
                  />
                </a>
              </div>
              <div className="sml-item">
                <a href="#">
                  <img
                    src={require("../../assets/icons/instagram.svg").default}
                    alt=""
                  />
                </a>
              </div>
              <div className="sml-item">
                <a href="#">
                  <img
                    src={require("../../assets/icons/youtube.svg").default}
                    alt=""
                  />
                </a>
              </div>
              <div className="sml-item">
                <a href="#">
                  <img
                    src={require("../../assets/icons/linkedin.svg").default}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="contact-form-wrapper">
            <h1 className="cf-head">Maraqlanıram?</h1>
            <div className="cf-options">
                {categories.map((x, i) => (
                  <Checkbox
                    key={`category-${i}`}
                    click={() => categorySelectHandler("category", x.id)}
                    text={x.name}
                    clas={form.category === x.id && "color-white br-white"}
                  />
                ))}
            </div>
            <Input clas='bg-dark-blue' type='text' name='fullName' placeholder='Ad soyad'/>
            <Input clas='bg-dark-blue' type='email' name='email' placeholder='Email'/>
            <Input clas='bg-dark-blue' type='text' name='topic' placeholder='Mövzu'/>
            <Input clas='bg-dark-blue' type='text' name='message' placeholder='Mesaj'/>
            <div className="cf-footer">
            <Button text='Müraciət et'/>
            </div>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
         <div className="fb-nav">
           <img src={require('../../assets/icons/logo.svg').default} alt='logo'/>
           <Navbar/>
            <LangSelect clas='br-white bg-light-blue' option={[
                {id:1, name:'Az'},
                {id:2, name:'En'},
                {id:3, name:'Ru'}
            ]}/>
         </div>
         <p className="fb-copyright">
         © 2022.  Baku City Residence Bütün hüquqlar qorunur
         </p>
      </div>
    </div>
  );
};

export default Index;
