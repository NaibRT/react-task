import React from "react";
import Button from "../components/button";
import Section from "../components/section";
import Slider from "../components/slider";
import Accordion from '../components/accardion';

const Home = () => {
  return (
    <div className="home-page">
      <section className="main-section">
        <div className="ms-left">
          <div className="chip">
            <span>yeni</span>
            Technest 2021-ci ildən start götürüb
          </div>
          <h1>POTENSİALINIZA GÜVƏNİN GƏLƏCƏYİNİZİ QURUN</h1>
          <p>
            “Technest” Təqaüd proqramının məqsədi informasiya texnologiyaları
            üzrə milli kadrların yetişdirilməsini sürətləndirmək, bu sahədə
            mövcud çatışmazlıqları aradan qaldırmaq və ölkədə rəqəmsal inkişafa
            töhfə verməkdir...
          </p>
          <div className="button-group">
            <Button text="Müraciət et" />
            <Button text="Daha ətraflı" />
          </div>
        </div>

        <div className="ms-right">
          <img src={require("../assets/images/girl.png")} alt="girl" />
        </div>
      </section>

      <section className="about-technest">
        <img src={require("../assets/images/about.png")} alt="about" />
        <div className="at-rigt">
          <div className="at-rigt-warpper">
            <h1>Haqqımızda</h1>
            <p>
              “Technest” Təhsil Proqramı Rəqəmsal İnkişaf və Nəqliyyat
              Nazirliyinin İnnovasiya və Rəqəmsal İnkişaf Agentliyi tərəfindən
              həyata keçirilir. Bu proqram Rəqəmsal İnkişaf və Nəqliyyat
              Nazirliyinin təşəbbüsü ilə 2021-ci ildən start götürüb. “Technest”
              Təqaüd proqramının məqsədi informasiya texnologiyaları üzrə milli
              kadrların yetişdirilməsini sürətləndirmək, bu sahədə mövcud
              çatışmazlıqları aradan qaldırmaq və ölkədə rəqəmsal inkişafa töhfə
              verməkdir.{" "}
            </p>
            <Button clas="color-blue bg-white br-blue" text="Ətraflı" />
          </div>
        </div>
      </section>

      <section className="about-technest technet-club">
        <img src={require("../assets/images/technest-club.png")} alt="about" />
        <div className="at-rigt">
          <div className="at-rigt-warpper">
            <h1>Technest klubu</h1>
            <p>
              Technest Klubu - “Technest” Təqaüd Proqramının təşəbbüsü ilə
              təqaüdçülərin səmərəli zaman keçirməsi, şəbəkələşməsi, rəsmi və
              qeyri-rəsmi tədbirlər vasitəsilə faydalı biliklər qazanması,
              sosial çevrələrinin genişləndirilməsi, həmçinin proqram və
              tələbələr arasında səmimi bağın yaradılması üçün fəaliyyətə
              başlamışdır.
            </p>
          </div>
          <div className="statistics">
            <div className="statistics-item">
              <img src={require("../assets/icons/edu.svg").default} alt="edu" />
              <div className="statistic-info">
                <strong>500+</strong>
                <span>Təqaüd verilib</span>
              </div>
            </div>

            <div className="statistics-item">
              <img
                src={require("../assets/icons/partner.svg").default}
                alt="edu"
              />
              <div className="statistic-info">
                <strong>30+</strong>
                <span>Tərəfdaş</span>
              </div>
            </div>

            <div className="statistics-item">
              <img
                src={require("../assets/icons/partner.svg").default}
                alt="edu"
              />
              <div className="statistic-info">
                <strong>11-42</strong>
                <span>Yaş aralığı</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="success-career">
        <div className="sc-wrapper">
          <div className="sc-info">
            <h1>Uğurlu karyeraya gedən yolda ilk addımını indi at!</h1>
            <p>
              Təqaüdlü təhsil proqramından yararlanmaq istəyənlər sorğunu
              cavablandıraraq qeydiyyatdan keçə bilərlər.
            </p>
          </div>
          <Button text="Müraciət et" />
        </div>
      </section>

      <Section title="Təhsil tərəfdaşlarımız">
        <Slider
          option={[
            require("../assets/images/edu-mins.png"),
            require("../assets/images/code-more.png"),
            require("../assets/images/code-academy.png"),
            require("../assets/images/abb-innovaion.png"),
            require("../assets/images/ikt-lap.png"),
          ]}
          renderItem={(src, index) => (
            <div className="slider-item">
              <img src={src} alt="" />
            </div>
          )}
        />
      </Section>

      <Section title="Tez-tez verilən suallar ">
        <Accordion option={[
            {
                question:'Technest nədir?',
                answer:'Proqram ödənişsizdir, seçim mərhələsində göstərdiyiniz nəticələrə əsasən seçdiyiniz ixtisas üzrə sizə müəyyən edilmiş təqaüd ayrılır.'
            },
            {
                question:'Technest nədir?',
                answer:'Proqram ödənişsizdir, seçim mərhələsində göstərdiyiniz nəticələrə əsasən seçdiyiniz ixtisas üzrə sizə müəyyən edilmiş təqaüd ayrılır.'
            },            {
                question:'Technest nədir?',
                answer:'Proqram ödənişsizdir, seçim mərhələsində göstərdiyiniz nəticələrə əsasən seçdiyiniz ixtisas üzrə sizə müəyyən edilmiş təqaüd ayrılır.'
            },
        ]}/>
      </Section>

      <Section title="Galereya ">
        <Slider
          option={[
            require("../assets/images/gallery1.png"),
            require("../assets/images/gallery1.png"),
            require("../assets/images/gallery1.png"),
            require("../assets/images/gallery1.png"),
            require("../assets/images/gallery1.png"),
          ]}
          renderItem={(src, index) => (
              <img src={src} alt="" />
          )}
        />
      </Section>
    </div>
  );
};

export default Home;
