import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import MyProfileScreen from './screens/MyProfileScreen'
import MyBlogScreen from './screens/MyBlogScreen'
import BlogListScreen from './screens/BlogListScreen'
import CreateBlogScreen from './screens/CreateBlogScreen'
import BlogDetailScreen from './screens/BlogDetailScreen'
import FanatikaScreen from './screens/FanatikaScreen'
import GiftScreen from './screens/GiftScreen'
import Leaderboard from './screens/Leaderboard'
import Hakkımızda from './screens/Hakkımızda'
import Sıksorulanlar from './screens/Sıksorulanlar'
import AddCategory from './screens/AddCategory'
import CategoryListScreen from './screens/CategoryList'
import QuizAddScreen from './screens/QuizAddScreen'
import AnswerList from './screens/AnswerList'
import QuizCategory from './screens/QuizCategory'
import QuizAttemptScreen from './screens/QuizAttemptScreen'
import ResultPage from './screens/ResultPage'
import AdminPrizeAdd from './screens/AdminPrizeAdd'
import PrizeWinner from './screens/PrizeWinner'
import PlayerRatings from './screens/PlayerRatings'
import TeamStatistics from './screens/TeamStatistics'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/playerratings' component={PlayerRatings} />
          <Route path='/teamstatistics' component={TeamStatistics} />
          <Route path='/my/profile' component={MyProfileScreen} />
          <Route path='/my/blog' component={MyBlogScreen} />
          <Route path='/createblog' component={CreateBlogScreen} />
          <Route path='/bloglist' component={BlogListScreen} />
          <Route path='/categorylist' component={CategoryListScreen} />
          <Route path='/quizlist' component={QuizCategory} />
          <Route path='/resultpage/:id/:point/:arr' component={ResultPage} />
          <Route path='/attemptquiz/:id' component={QuizAttemptScreen} />
          <Route path='/post/:slug' component={BlogDetailScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/addCategory' component={AddCategory} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/answer/list/:id/edit' component={AnswerList} />
          <Route path='/category/list/:id/edit' component={QuizAddScreen} />
          <Route path='/fanatika' component={FanatikaScreen} />
          <Route path='/leaderboard' component={Leaderboard}/>
          <Route path='/gift' component={GiftScreen}/>
          <Route path='/FAQ' component={Sıksorulanlar} />
          <Route path='/about' component={Hakkımızda} />
          <Route path='/adminPrizeAdd' component={AdminPrizeAdd} />
          <Route path='/PrizeWinner' component={PrizeWinner} />

        </Container>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
