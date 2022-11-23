import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'



function FanatikaScreen({ history }) {
    return (
    <>
            <h2
                style={{
                  fontWeight: "regular",
                  fontSize: "25px",
                  position: "absolute",
                  left: 110,
                  top: 320,
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "60px",
                    color: "Green",
                  }}
                >
                  Fanatika Nedir?
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "44px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  <br />
                  Taraftarında Futbolun içinde
                  <br />
                  Olduğu Hem Ligi Takip Ederken
                  <br />
                  Hem Hediyeler Kazandığı Futbol Sitesidir
                </p>
                <p
                  style={{
                    fontWeight: "regular",
                    fontSize: "36px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  Taraftaların
                  <br />
                  Hem takımlar - Hem Federasyon
                  <br/>
                  Hakkında Fikirlerini Tartışabildiği Bir Ortam
                </p>

              </h2>

              <h2
                style={{
                  fontWeight: "regular",
                  fontSize: "25px",
                  position: "absolute",
                  right: 110,
                  top: 1300,
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "60px",
                    color: "Green",
                  }}
                >
                  Quiz
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "44px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  <br />
                  Türkiye Futbol Ligi Hakkında Sorular
                  <br />
                  Hem O Haftanın Ligi Hakkında
                  <br />
                  Hem Desteklediğin Takım Hakkında Sorular
                </p>
                <p
                  style={{
                    fontWeight: "regular",
                    fontSize: "36px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  Lig Hakkında 8
                  <br />
                  Takımın Hakkında 7 Soru
                  <br/>
                  Doğru Cevap Kadar Süreninde Önemi Var
                </p>

              </h2>

              <h2
                style={{
                  fontWeight: "regular",
                  fontSize: "25px",
                  position: "absolute",
                  left: 65,
                  top: 2200,
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "60px",
                    color: "green",
                  }}
                >
                  Ödüller
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "44px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  <br />
                  Ödüller Her Ay Başı Belli Olur
                  <br />
                  Her Takım İçin Ödüller Farklı Olabilir
                  <br />
                  Ödülleri Takım Sahipleri Belirler
                </p>
                <p
                  style={{
                    fontWeight: "regular",
                    fontSize: "36px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  Her Takımın İlk 3 Taraftarı Hediye Kazanır
                  <br />
                  Quizde Kazandığın Puanlara Göre Sıralaman Belirlenir
                  <br/>
                  Futbol Bilgine Ve Hızına Güveniyorsan 
                  <br/>
                  Bedava Hediyenin Tadını Çıkar
                </p>

              </h2>

              <h2
                style={{
                  fontWeight: "regular",
                  fontSize: "25px",
                  position: "absolute",
                  right: 20,
                  top: 3100,
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "60px",
                    color: "green",
                  }}
                >
                  Blog - Chat
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "44px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  <br />
                  Takımın Ve Lig Hakkında 
                  <br />
                  Düşüncelerini Belirt, Federasyon Ne Hakkında
                  <br />
                   Daha İyi Olabilir, Yorumlarını Yaz
                </p>
                <p
                  style={{
                    fontWeight: "regular",
                    fontSize: "36px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  Blog Kısmında Diğer Taraftarlar İle Ligi Tartış
                  <br />
                  Chat Kısmında Maçlar Hakkında Düşüncelerini Belirt
                  <br/>
                  Hem Ligi Takip Et, Hem Sosyalleş
                </p>

              </h2>


              <img 
                        style={{position: "absolute",
                        right: 100,
                        top: 200,
                        width: "900px",
                        height: "800px",}}
                        
                        src="./logo.png" class="img-thumbnail" alt="..."></img>
              <img 
                        style={{position: "absolute",
                        left: 230,
                        top: 1195,
                        width: "700px",
                        height: "700px",}}
                        
                        src="./quiz.png" class="img-thumbnail" alt="..."></img>
                <img 
                        style={{position: "absolute",
                        right: 160,
                        top: 2100,
                        width: "800px",
                        height: "700px",}}
                        
                        src="./asd.png" class="img-thumbnail" alt="..."></img>
                <img 
                        style={{position: "absolute",
                        left: 220,
                        top: 3000,
                        width: "800px",
                        height: "700px",}}
                        
                        src="./comment.png" class="img-thumbnail" alt="..."></img></>
    )
}

export default FanatikaScreen