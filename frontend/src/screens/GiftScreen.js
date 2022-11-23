import React from 'react';


function GiftScreen({ history }) {
    return (
        <div>
        <div>
            <div>
            <h1 style={{color: "grey",}}><center>ÖDÜLLER</center></h1>
            <br></br>
            <h3 style={{color: "red",textAlign: "center",}}>
                Quiz ve Tahmin oyunu sonucunda her ay sonunda en çok puanı toplayan ilk üç kişiye verilecek ödüller aşağıdaki gibidir.
            </h3>
            <br></br>
            <h4>
                <p style={{textAlign: "center",}}>
                1.ye Tuttuğu Takımın Lisanslı Forması
                </p>
                <br></br>
                <img src = "./static/forma.png"  alt="..."></img>
            </h4>
            </div>
            <br></br>
        </div>
        <div>
            <div>
            <h4>
                <p style={{textAlign: "center",}} >
                2.ye Orijinal Spor Toto Süper Lig Futbol Topu 
                </p>
                <img src = "./static/top.png"  alt="..."></img>
            </h4>
            </div>
            <div>
            <br></br>
            </div>
        </div>
        <div>
            <div>
            <h4>
                <p>
                3.ye Tuttuğu Takımın Ambleminin Olduğu Lisanslı Kupa
                </p>
                <img src = "./static/kupa.png"  alt="..."></img>
            </h4>
            </div>
            <div>
            </div>
        </div>
        </div>
    )
}

export default GiftScreen