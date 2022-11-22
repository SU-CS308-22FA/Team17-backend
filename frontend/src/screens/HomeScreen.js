import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { Link } from 'react-router-dom'




function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state)
    const { error, loading, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {

    }, [dispatch, keyword])

    return (
        <div>
            
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <h2
                        style={{
                            position: "absolute",
                            right: 40,
                            color: "#434343",
                            top: 500,
                            fontWeight: "bold",
                            fontSize: "35px",
                            fontFamily: "Verdana",
                            textAlign: "center",
                            zIndex: 1,
                        }}
                        >
                        Hem Takımını Destekle, Hem Ödülleri Kap
                        <br /> 
                        Futbolu Takip Ederken, Eğlen
                        </h2>
                        
                        <Link to="/fanatika">
                        <button style={{position: "absolute",
                        right: 450,
                        top: 700,
                        width: "250px",
                        height: "65px",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "15px",
                        backgroundColor: "black",
                        borderColor: "red",}}
                        type="button" class="btn btn-info">Öğrenmeye Başla</button>
                        </Link>


                        <Link to="/">
                        <button style={{position: "absolute",
                        right: 1000,
                        top: 1950,
                        width: "250px",
                        height: "65px",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "15px",
                        backgroundColor: "black",
                        borderColor: "red",}}
                        type="button" class="btn btn-info">GÖSTER</button>
                        </Link>

                        <h2
                        style={{
                            position: "absolute",
                            right: 550,
                            color: "#434343",
                            top: 1800,
                            fontWeight: "bold",
                            fontSize: "35px",
                            fontFamily: "Verdana",
                            textAlign: "center",
                            zIndex: 1,
                        }}
                        >
                        Bu Ay Olan Ödüllerİ
                        <br /> 
                        Sıralamanın Nasıl Olduğunu Merak Ediyorsan
                        </h2>
                        
                        
                        

                        <img 
                        style={{position: "absolute",
                        left: 500,
                        top: 1200,
                        width: "1350px",
                        height: "500px",}}
                        
                        src="./71179.png" class="img-thumbnail" alt="..."></img>
                        <img 
                        style={{position: "absolute",
                        left: 250,
                        top: 250,
                        width: "1000px",
                        height: "700px",}}
                        
                        src="./bacground.png" class="img-thumbnail" alt="..."></img>
                        
                        <Paginate page={page} pages={pages} keyword={keyword} />
                        
                        
                    </div>
                    
                    
            }
        </div>
        
    )
}

export default HomeScreen