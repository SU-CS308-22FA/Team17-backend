import React from 'react';


function GiftScreen({ history }) {
    return (
        <div>
        <div>
            <div>
            <h1 style={{color: "grey"}}><center>ÖDÜLLER</center></h1>
            <br></br>
            <h3 style={{color: "red"}}>
                Quiz ve Tahmin oyunu sonucunda her ay sonunda en çok puanı toplayan ilk üç kişiye verilecek ödüller aşağıdaki gibidir.
            </h3>
            <br></br>
            <h4>
                <p>
                1.ye Tuttuğu Takımın Lisanslı Forması
                </p>
                <br></br>
                <img src = "./forma.png"  alt="..."></img>
            </h4>
            </div>
            <br></br>
        </div>
        <div>
            <div>
            <h4>
                <p>
                2.ye Orijinal Spor Toto Süper Lig Futbol Topu 
                </p>
                <img src = "./top.png"  alt="..."></img>
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
                <img src = "./kupa.png"  alt="..."></img>
            </h4>
            </div>
            <div>
            </div>
        </div>
        </div>
    )
}

export default GiftScreen