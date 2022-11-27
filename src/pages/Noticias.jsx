import CNoticia1 from "../components/CNoticia1";
import CNoticia2 from "../components/CNoticia2";
import LoggedNavBar from "../components/CLoggedNavBar";
import CTextoGrande from "../components/CTextoGrande";
import CTextoPequeno from "../components/CTextoPequeno";
import moment from "moment-timezone";
import api from "../api";
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
        text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fu."
        class="pl-5 fw-lighter mb-20"
      />
      <div className="container">
        {newsList.map((news) => {
          return (
            <>
              <CNoticia1
                key={news.idNews}
                titulo={news.newsTitle}
                subTitulo={news.news}
                textoPostagem={`Postado em ${moment(news.insertDate).format('DD/MM/YYYY')} às ${moment(news.insertDate).format('HH:mm')}`}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
