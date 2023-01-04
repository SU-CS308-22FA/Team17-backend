import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { USER_UPDATE_MYPROFILE_RESET } from '../constants/profileConstants'
import { getMyUserDetails,updateMyUserProfile} from '../actions/profileActions'

function ProfilePage({ history }) {

    const dispatch = useDispatch()

    const usermyDetails = useSelector(state => state.usermyDetails)

    const { error, loading, Myuser } = usermyDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const usermyUpdateProfile = useSelector(state => state.usermyUpdateProfile)
    const {success: successUpdate  } = usermyUpdateProfile


    useEffect(() => {
        if (userInfo) {

            dispatch(getMyUserDetails(`profile/${userInfo._id}`))

        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo])
    return (

        <div>

        <div>
        {(() => {
        if (Myuser?.team === "galatasaray") {
            return (
                <div
                >
                <h2
                                style={{
                                    fontWeight: "regular",
                                    fontSize: "25px",
                                    position: "absolute",
                                    left: 150,
                                    top: 90,
                                    textAlign: "center",
                                    color:"red"
                                  }}>HOŞGELDİN {userInfo.name}!</h2>

                <img
                        style={{position: "absolute",
                        left: 800,
                        top: 600,
                        width: "800px ",
                        height: "627px",}}

                        src="./static/galatasaray.png" class="img-thumbnail" alt="..."></img>


                        <><h1 style={{color:"red"}}><center>Ocak Ayı Maç tablosu</center></h1>
        <br></br>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Karşı Takım</th>
                    <th scope="col">Saha ismi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Ankaragücü</td>
                    <td>Nef Stadium</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Fenerbahçe</td>
                    <td>Şükrü Saracoğlu Stadium</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>HataySpor</td>
                    <td>Nef Stadium</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>AlanyaSpor</td>
                    <td>Bahçesehir Okullari Stadium</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Antalya Spor</td>
                    <td>Nef Stadium</td>
                </tr>

            </tbody>
        </table></>
                        </div>

                                )
                            } else if (Myuser?.team === "fenerbahce") {
                                return (
                                    <div
                                    >
                                    <h2
                                                    style={{
                                                        fontWeight: "regular",
                                                        fontSize: "25px",
                                                        position: "absolute",
                                                        left: 150,
                                                        top: 90,
                                                        textAlign: "center",
                                                        color:"red"
                                                      }}>HOŞGELDİN {userInfo.name}!</h2>

                                    <img
                                            style={{position: "absolute",
                                            left: 800,
                                            top: 600,
                                            width: "800px ",
                                            height: "627px",}}

                                            src="./static/fenerbahce.png" class="img-thumbnail" alt="..."></img>


                                            <><h1 style={{color:"red"}}><center>Ocak Ayı Maç tablosu</center></h1>
                            <br></br>
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Karşı Takım</th>
                                        <th scope="col">Saha ismi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Galatasaray</td>
                                        <td>Şükrü Saracoğlu Stadium</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Gaziantep FK</td>
                                        <td>Gaziantep Stadium</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Rizespor</td>
                                        <td>Şükrü Saracoğlu Stadium</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Ümraniyespor</td>
                                        <td>Ümraniye Belediyesi Sehir Stadi</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Kasımpaşa</td>
                                        <td>Şükrü Saracoğlu Stadium</td>
                                    </tr>

                                </tbody>
                            </table></>
                                            </div>
                                )

                            }
                            else {
                                return (
                                  <div>catch all</div>
                                )
                            }

                            })()}
                        </div>

        </div>


    )

}

export default ProfilePage
