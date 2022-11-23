

function Leaderboard({ history }) {
    return (
        
        <><h1><center>KASIM AYI PUAN TABLOSU</center></h1>
        <br></br>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Kullanıcı Adı</th>
                    <th scope="col">Tuttuğu Takım</th>
                    <th scope="col">Puan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>ardagoktas</td>
                    <td>Galatasaray</td>
                    <td>37</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>melike_bjk</td>
                    <td>Beşiktaş</td>
                    <td>34</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>sergeningo</td>
                    <td>Ümraniyespor</td>
                    <td>29</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>ufukatay</td>
                    <td>Galatasaray</td>
                    <td>29</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>irmakcoban</td>
                    <td>Adana Demirspor</td>
                    <td>26</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>enner_valencia</td>
                    <td>Fenerbahçe</td>
                    <td>23</td>
                </tr>
            </tbody>
        </table></>
    )
}
export default Leaderboard