import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'



function Hakkımızda({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state)
    const { error, loading, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {

    }, [dispatch, keyword])

    return (
        <div>
            <h2 style= {{position:'absolute', left:500, top:180}}><a href="#" class="text-danger">BİZ KİMİZ?</a></h2>

            <p style= {{position:'absolute', left:490, top:230}}>2022 - 2023 Güz Dönemi</p>
            <p style= {{position:'absolute', left:500, top:250}}>CS 308 Öğrencileriyiz.</p>

            <h4 style= {{position:'absolute', left:465, top:340}}><a href="#" class="text-info">Takım ÜYELERİMİZ</a></h4>

            <p style= {{position:'absolute', left:530, top:380}}> Arda Göktaş</p>
            <p style= {{position:'absolute', left:505, top:400}}> Melike Sena Özgen</p>
            <p style= {{position:'absolute', left:490, top:420}}> Mustafa Sergen Haysal</p>
            <p style= {{position:'absolute', left:535, top:440}}> Ufuk Atay</p>
            


            
            <img  style= {{position:'absolute', left:420, top:520}} src="TFF_logo.png" class="img-fluid" alt="..."></img>
          

        

           
            <h5 style= {{position:'absolute', left:275, top:880}} class="font-weight-bold"> <a href="#" class="text-warning"> Vİzyonumuz</a></h5>
            <h5 style= {{position:'absolute', left:750, top:880}} class="font-weight-bold"> <a href="#" class="text-warning">Mİsyonumuz</a></h5>

            <div style= {{position:'absolute', top:930}} class="container text-center">
                    
                   
                    <div class="row">
                        <div class="col">
                        Taraftarlar İçin 
                        </div>
                        <div class="col">
                        Kullanıcı Dostu Ve Eğlenceli Ürünümüzle 
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="col">
                        Quiz Sistemi İle Birlikte
                        </div>
                        <div class="col">
                        Taraftarların Futbolu Daha Sıkı
                        </div>
                        
                    </div>   

                    <div class="row ">
                        <div class="col">
                        Futobol Sitesi Hizmeti Veren
                        </div>
                        <div class="col">
                         Takip Etmesini Sağlamak Bunu Yaparken 
                        </div>
                        
                    </div>   
                    <div class="row ">
                        <div class="col">
                        Siteler İçerisinde
                        </div>
                        <div class="col">
                        Kullanıcılarımızı Eğlendirmek Ve Aynı 
                        </div>
                        
                    </div>   

                    <div class="row ">
                        <div class="col">
                        1 Numara Olmak!
                        </div>
                        <div class="col">
                        Zamanda Ödüller Kazandırmaktır.
                        </div>
                        
                    </div>   


            </div>
                        
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>

                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
        </div>

        
    )
}

export default Hakkımızda