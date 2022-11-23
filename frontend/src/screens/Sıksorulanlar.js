import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'



function Sıksorulanlar({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state)
    const { error, loading, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {

    },[dispatch, keyword])

    

    return (

        <div id="accordion">
        <div class="card">
            <div class="card-header" id="headingOne">
            <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Fanatika Hesabı Nasıl Oluştururum?
                </button>
            </h5>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion" >
            <div class="card-body">
                Fanatika hesabını ana sayfada yer alan Kayıt Ol kısmından kullanıcı bilgilerin ve takım bilgilerinle yapabilirsin. Aramıza katılmana çok sevindik!
            </div>
            </div>

            <div class="card-header" id="headingOne" >
            <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                Fanatika Hesabımla Neler Yapabilirim?
                </button>
            </h5>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion" >
            <div class="card-body" >
                Fanatika hesabınla maçları canlı olarak takip edebilir, maç esnasında taraftarlarla konuşabilir, haftalık quizlere katılarak ödüller kazanabilirsin.
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Fanatika Takım Bilgilerimi Nasıl Değiştiririm?
                </button>
            </h5>
            </div>
            <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
                Takım bilgilerini kişisel profil sayfasından değiştirebilir ve diğer takımlar için tasarladığımız arayüzleri inceleyebilirsin.  
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Kullanıcı Olarak Bilgilerim Güvenli Saklanıyor Mu?
                </button>
            </h5>
            </div>
            <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
                Kullanıcı bilgilerin Fanatika altyapısıyla güvenle saklanmaktadır. Kullandığımız yöntemler sayesinde dışarıdan yapılacak cyber saldırılara karşı güvenlikli bir databesimiz bulunmaktadır. 
            </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Diğer Kullanıcılarla Nasıl Etkileşime Geçebilirim?
                </button>
            </h5>
            </div>
            <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
                Fanatika da bulunan Blog üzerinden yorumlarını paylaşabilir ve diğer kullanıcıların yorumlarını görebilirsin. Aynı zamanda kullanıcılarımız için oluşturduğumuz live chatbox dan maç esnasında yorumlar yapabilir ve maçları yayındayken yorumlayabilirsin.
            </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Ödül Kazanırsam Ödülüm Bana Nasıl Ulaşacak?
                </button>
            </h5>
            </div>
            <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
                Ödül kazandığın taktirde sana bir tebrik maili göndereceğiz ve bu mailde adres bilgilerini girmeni isteyeceğiz. Seçeceğin anlaşmalı firmalarımızdan kargonun teslimat sürecini takip edebilirsin.  
            </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Takım Bilgilerim Neden gerekli?
                </button>
            </h5>
            </div>
            <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
                Fanatika tuttuğun takıma özgü kişiselleştirilmiş profil sayfaları sunar. Daha iyi bir kullanıcı deneyimi ve kişiselleştirilmiş tasarımlarımızı görmeniz için takım bilgilerinizle giriş yapmanizi tavsiye ederiz.
            </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Fanatika Gündeminden Nasıl Haberdar Olurum?
                </button>
            </h5>
            </div>
            <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
                Fanatika sadece bir websitesi olmaktan öte sürekli futbol gündemiyle iç içe kalmanızı da hedefler. Bu amacımız doğrultusunda üyelik oluştururken bülten haberleri almak istiyorum seçeneğini seçerek günlük mail alabilir, futbolu yakından takipte kalabilirsiniz.
            </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Fanatika Hesabimi Nasıl Kapatabilirim?
                </button>
            </h5>
            </div>
            <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
                Aramızdan ayrılmana çok üzüldük! Fanatika hesabını kullanıcı profilinden hesabımı sil kısmından kapatabilirsin. Kendimizi geliştirmemiz için site hakkında yorumunu bizlerle paylaşabilirsin. 
            </div>
            </div>
        </div>


        </div>



        
    )
}

export default Sıksorulanlar