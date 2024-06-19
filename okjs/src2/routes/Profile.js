import logo from './logo.svg';
import './Profile.css';
import { useEffect, useState } from 'react';
import Aside from './Aside.js';

function Profile() {

  return (
    <main className='main-class'>
    <div className='main-box'>
    <div className='main-container'>

        <Aside></Aside>
                <form className='member-information'>

                  <div className='right-main-box1'>
                    <div className='main-left-box'>
                      <div className='main-box'>
                        <div className='main-subbox'>
                          <div className='name-box'>
                            <h2 className='member-information_font'>회원정보</h2>
                            <label className='name-font'>이름</label>
                            <input type='text' className='name-input'></input>
                          </div>
                          <div className='nickname-box'>
                            <label className='nickname-font'>닉네임</label>
                            <input type='text' className='nickname-input'></input>
                          </div>
                          <label className='work-font'>대표직무</label>
                          <div className='work-box'>
                            <select  className='work-input'>
                              <option value='-1'>직군을 선택해주세요.</option>
                              <option value='1'>개발</option>
                              <option value='2'>기획</option>
                              <option value='3'>디자인</option>
                              <option value='4'>마케팅</option>
                              <option value='5'>기타</option>
                              <option value='6'>무직</option>
                            </select>
                            <select className='work-input' >
                              <option value='-1'>직무을 선택해주세요.</option>
                            </select>
                          </div>
                          <div className='tag-box'>
                            <label className='tag-font'>관심있는 기술 태그 입력</label>
                            <p className='tag-font2'>사용중인 기술이나 관심있는 기술 태그를 선택해주세요.</p>
                            <div className='tag-input'>
                              <div className='tag-container'>
                                <span className='tag-container2'></span>
                                <span aria-live='polite' aria-atomic='false' aria-relevant='additions text' className='tag-container2'></span>
                                <div className='tag-control'>
                                  <div className='tag-control2'>
                                    <div className='select-sTag'>스킬 태그를 선택해주세요.</div>
                                    <div className='tag-pLeft' data-value>
                                      <input autoComplete='off' autoCapitalize='none' autoCorrect='off' spellCheck='false' tabIndex='0' type='text' aria-autocomplete='list' aria-expanded='false' aria-haspopup='true' role='combobox' className='tag-input-box'></input>
                                    </div>
                                  </div>
                                <div className='arrow'>
                              <span className='arrow-span'></span>
                              <div className='arrow-div' aria-hidden='true'>
                                <svg height='20' width='20' viewBox='0 0 20 20' aria-hidden='true' focusable='false' className='svg-class'></svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='introduce-box'>
                    <div className='introduce-container'>
                      <label className='introduce-font'>한 줄 소개</label>
                      <div>
                        <span className='introduce-textCount'>0/150</span>
                      </div>
                    </div>
                    <textarea autoComplete='off' placeholder='나를 소개해주세요.' rows='4' maxLength='150' className='introduce-textarea'></textarea>
                  </div>
                  <div className='link-box'>
                    <label className='link-font'>링크</label>
                    <div className='link-container'>
                      <div className='link-container1'>
                        <div className='link-img-box'>
                          <img src={require('./img/linkImg.png')} alt='link' className='link-class'></img>
                        </div>
                        <input type='text' placeholder='Link to social profile' className='link-input-box'></input>
                      </div>
                      <div className='link-container1'>
                        <div className='link-img-box'>
                          <img src={require('./img/linkImg.png')} alt='link' className='link-class'></img>
                        </div>
                        <input type='text' placeholder='Link to social profile' className='link-input-box'></input>
                        
                      </div>
                      <div className='link-container1'>
                        <div className='link-img-box'>
                          <img src={require('./img/linkImg.png')} alt='link' className='link-class'></img>
                        </div>
                        <input type='text' placeholder='Link to social profile' className='link-input-box'></input>
                        
                      </div>
                    </div>
                  </div>

                        </div>
                        <div>
                          <div className='profile-box'>
                          <p className='profile-photo-font'></p>
                          <div className='profile-photo-box'>
                            <div className='profile-photo-box-hidden'>
                              <div className='pbox-1'>
                                <div className='pbox-2' aria-hidden='true'>
                                  <img className='profile-photo' src={require('./img/OKKY.png')}></img>
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  <div className='under-box'>
                  <div className='under-text-box'>
                    <div>
                      <div className='under-text1-box'>
                        <h2 className='under-text1'>광고 정보 수신 동의</h2>
                        <button role='switch' type='button' tabIndex='0' aria-checked='true' className='under-but1-box'>
                          <span aria-hidden='true' className='under-but1-span'></span>
                        </button>
                      </div>
                      <p className='under-text1-font'>
                        <div>
                          OKKY에서 발행하는 뉴스레터 및 이벤트/프로모션 혜택 정보를 이메일로 보내드립니다.
                        </div>
                        <div>
                          서비스 알림과 정책은 광고 정보 수신 동의와 관계없이 발송됩니다.
                        </div>
                        </p>
                    </div>
                  </div>
                  <div className='under-text-box2'>
                    <div>
                      <div className='under-text1-box'>
                        <h2 className='under-text1'>푸시 알림 동의</h2>
                        <button role='switch' type='button' tabIndex='0' aria-checked='true' className='under-but1-box'>
                          <span aria-hidden='true' className='under-but1-span'></span>
                        </button>
                      </div>
                      <p className='under-text1-font'>
                        <div>
                        OKKY 콘텐츠, 커뮤니티 리액션, 유저 활동 내역 등을 푸시 알림으로 보내드립니다.

                        </div>
                        <div>
                        알림이 오지 않을 경우 [휴대폰 &gt; 설정 &gt; 알림 &gt; OKKY] 에서 기기 설정을 확인해 주세요.
                        </div>
                        </p>
                    </div>
                  </div>
                  <div className='save-box'>
                    <button className='save-but'>저장</button>
                  </div>


                  </div>
                  </div>

                  </form>
                  </div>
                  </div>

                </main>
  );
}

export default Profile;
