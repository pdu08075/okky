import { Button, Container, Navbar , Nav} from 'react-bootstrap';
import './App.css';
import bg from './img/bg.jpg';
import data from './data.js';
import { createContext, useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';
import Cart from './routes/Cart.js';
import Profile from './routes/Profile.js';
import Account from './routes/Account.js';
import Career from './routes/Career.js';
import Talent from './routes/Talents.js';
import Bookmarks from './routes/Bookmarks.js';
import Contract from './routes/Contract.js';
import Aside from './routes/Aside.js';
import Main from './routes/Main.js';

export let Context1 = createContext();

function App() {
  let [href1] = useState();
  let [stock] = useState([10,11,12]);
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <body className='body-class'>
        <div className='_next_'>
          <header className='header-box'>
            <nav aria-label='Global' className='nav-box'>
              <div className='nav-div1'>
                <div className='head-first-box'>
                  <a className='head-logo-box' href='/'>
                    <span className='head-logo-span'>OKKY Jobs</span>
                    <img className='head-logo' alt='OKKY Logo' src={require('./img1/logo4.PNG')}/>
                  </a>
                  <div className='head-words-box space-x-7'>
                    <div className='shrink-0'>
                      <a className='words-box1' href='/contract'>계약직</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='words-box1' href='/fulltime'>정규직</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='words-box1' href='/talents'>Talent</a>
                    </div>
                    <div className='shrink-1'>
                      <a className='words-box1' href='/evalcom'>좋은회사/나쁜회사</a>
                    </div>
                    <div className='words-box-space'></div>
                    <div className='words-box-mid-space'>
                      <span className='left-margin'>공지사항</span>
                      <div className='search-bar'>
                        <button className='search-but' >
                          <span className='search-span'>Search bar</span>
                          <img className='search-pic' src={require('./img1/search.png')}></img>
                        </button>
                        <input className='search-input'></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='head-second-box'>
                  <div className='head-second-box1'>
                    <a href='/products/01010301'>
                      <button className='buyForShow'>열람권 구매</button>
                    </a>
                    <a href='/products/01010101'>
                      <button className='buyForShow'>등록권 구매</button>
                    </a>
                  </div>
                </div>
                <div className='head-third-box'>
                  <a href='/recruits/drafts'>
                    <button className='company-but'>
                      <img className='company-pic' src={require('./img1/company.png')}></img>
                      <span className='company'>회사 등록</span>  
                    </button>
                  </a>
                </div>
                <div className='head-forth-box'>
                  <button type='button' aria-haspopup='true' aria-expanded='false'  className='profile-but'>
                    <span className='head-profile-span'>Open user menu</span>
                    <span className='head-profile'>
                      <img className='profile-part' alt='프로필 사진' src={require('./profile.png')}/>
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </header>
                <Routes>
                  <Route path='/' element={<Main></Main>}></Route>
                  <Route path='/settings/profile' element={<Profile></Profile>}></Route>
                  <Route path='/settings/account' element={<Account></Account>}></Route>
                  <Route path='/settings/career' element={<Career></Career>}></Route>
                  <Route path='/settings/talents' element={<Talent></Talent>}></Route>
                  <Route path='/settings/bookmarks' element={<Bookmarks></Bookmarks>}></Route>
                  <Route path='/settings/contract' element={<Contract></Contract>}></Route>
                  <Route path='/about' element={<About></About>}>
                    <Route path='member' element={<div>조직도</div>}></Route>
                    <Route path='location' element={<div>위치</div>}></Route>
                  </Route>
                  <Route path='/*' element={<div>존재하지 않는 페이지입니다.</div>}></Route>
                </Routes>
        </div>
      </body>
       {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
          <Nav className="me-auto"> */}
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link> */}
            {/* <Link to="/" style={{color: "white", textDecoration: "none", padding: "5px"}}>홈</Link>
            <Link to="/detail" style={{color: "white", textDecoration: "none", padding: "5px"}}>상세페이지</Link> */}
            {/* <Nav.Link onClick={() => {navigate("/")}} style={{color: "white", textDecoration: "none", padding: "5px"}}>홈</Nav.Link>
            <Nav.Link onClick={() => {navigate("/detail")}} style={{color: "white", textDecoration: "none", padding: "5px"}}>상세페이지</Nav.Link>
            <Nav.Link onClick={() => {navigate("/cart")}} style={{color: "white", textDecoration: "none", padding: "5px"}}>Cart</Nav.Link> */}
            {/* <Nav.Link onClick={() => {navigate(1)}} style={{color: "white", textDecoration: "none", padding: "5px"}}>앞</Nav.Link>
            <Nav.Link onClick={() => {navigate(-1)}} style={{color: "white", textDecoration: "none", padding: "5px"}}>뒤</Nav.Link> */}
            
          {/* </Nav>
        </Container>
      </Navbar> */}



      <div className='footer-box'>
        <div className='footer'>
          <div className='cat-box'>
            <div className='cat'>
              <img className='footer-cat' src={require('./img/cat.png')}/>
            </div>
          </div>
          <div className='footer-bar'>
            <button type='button'>1</button>
          </div>

          <div className='footer2-box'>
            <div className='footer2'>
              <div className='footer-logo'>
                <div className='ok-logo-box'>
                  <img className='ok-logo' src={require('./img/logo.png')}/>
                </div>
                <h2>All That Developer</h2>
                <div className='logo-container'>
                  <div>
                    <img className='facebook' src={require('./img/facebook.png')}/>
                  </div>
                  <div>
                    <img className='youtube' src={require('./img/youtube.png')}/>
                  </div>
                  <div>
                    <img className='email' src={require('./img/email_under.png')}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer2-box-fonts'>
              <div className='footer-middle-box'>
                <div className='footer-middle'>
                  <div className='footer-btn'>
                    <div className='button-one'>
                      <button>회사소개</button>
                    </div>
                    <div className='button-two'>
                      <button>공지사항</button>
                    </div>
                    <div className='button-three'>
                      <button>FAQ</button>
                    </div>
                    <div className='button-four'>
                      <button>통합 서비스 이용약관</button>
                    </div>
                    <div className='button-five'>
                      <button>개인정보 처리방침</button>
                    </div>
                  </div>
                </div>

            </div>
            <div className='footer-text'>
                <div className='text-one'>
                  <span>상호명:(주)오키코리아|대표명:노상범, 장기진</span>
                </div>
                <div className='text-two'>
                  <span>사업자등록번호: 592-87-02037 | 통신판매업신고번호: 제 2022-서울강남-04742호 | 직업정보 제공사업 신고번호: J1200020230009</span>
                </div>
                <div className='text-three'>
                  <span>주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103) | 고객센터 : jobs@okky.kr (영업시간 평일 10:00~17:00) 주말 · 공휴일 휴무</span>
                </div>
                <div className='text-four'>
                  <span>© 2024 (주)오키코리아, Inc. All rights reserved.</span>
                </div>
              </div>
            </div>
            <div className='foot-middle-box2'>
              <div className='last-footer-box'>
                <div className='last-footer'>
                  <h2>SPONSORED BY</h2>
                </div>
                <div className='last-footer-img'>
                  <img className='iname' src={require('./img/inames.png')}/>
                  <img className='ncloud' src={require('./img/ncloud.png')}/>
                </div>
              </div>
           </div>


        </div>
      </div>
    </div>

  </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}


function Card(props){
  return(
      <div className='col-md-4'>
    <img src={require('./img/신발' + (props.i + 1) + '.jpeg')} height="200px"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
  </div>
  )
}


export default App;
