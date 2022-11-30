import CNoticia1 from "../components/CNoticia1";
import CNoticia2 from "../components/CNoticia2";
import LoggedNavBar from "../components/CLoggedNavBar";
import CTextoGrande from "../components/CTextoGrande";
import CTextoPequeno from "../components/CTextoPequeno";
// import img1 from "../assets/pexels-christina-morillo-1181675";
// import img2 from "../assets/pexels-kevin-ku-577585";
// import img3 from "../assets/pexels-luis-gomes-546819";
// import img4 from "../assets/pexels-pixabay-373543";
// import img5 from "../assets/pexels-thisisengineering-3861972";
// import img6 from "../assets/pexels-xxss-is-back-777001";
import moment from "moment-timezone";
import api from "../api";
import newsBackground from "../assets/newsback.jpeg"
import { useEffect, useState } from "react";

export function Noticias() {
  const [newsList, setNewsList] = useState([]);

  async function getNews() {
    try {
      var result = await api.get(`/news`);
      setNewsList(result.data);
    } catch (error) {
      console.log("[ERROR] - getNews: ", error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <LoggedNavBar title={"Notícias"} />
      <CTextoGrande text="Notícias" class="pl-5 fw-bold pt-5" />
      <CTextoPequeno
        text="Acompanhe as últimas novidades no mundo Linux."
        class="pl-5 fw-lighter mb-20"
      />
      <div className="container">
        {newsList.reverse().map((news) => {
          return (
            <>
              <CNoticia1
                key={news.idNews}
                titulo={news.newsTitle}
                subTitulo={news.news}
                imagem={newsBackground}
                textoPostagem={`Postado em ${moment(news.insertDate).format('DD/MM/YYYY')} às ${moment(news.insertDate).format('HH:mm')}`}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
