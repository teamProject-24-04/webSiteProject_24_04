'use client';

import React, { useState, useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@mui/material/styles';
import { Button, AppBar, Toolbar, CssBaseline, Box, Typography, Container } from '@mui/material';
import RootTheme from './theme';
import './App.css';

function App() {
  const pages = ['팀소개', '앱 다운로드'];
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const pageLinks = [
    'https://abiding-muse-07f.notion.site/45b909f85c4347d18e86a9cf4a31ae18?pvs=4', // 팀소개 페이지 링크
    // 다른 페이지에 대한 링크가 필요한 경우 여기에 추가
  ];

  const handlePageClick = (index) => {
    if (index === 0) {
      // "팀소개" 페이지로 리다이렉트
      window.location.href = pageLinks[index];
    } else {
      // 다른 페이지의 클릭 처리 필요시
      // 현재는 클릭한 페이지를 콘솔에 로그로 남깁니다
      console.log(`"${pages[index]}"를 클릭했습니다`);
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // 스크롤 이벤트를 처리하는 함수
  const handleScroll = () => {
    const images = document.querySelectorAll('.image-transition');
    let delay = 0; // 초기 지연
    images.forEach((image) => {
      if (isInViewport(image)) {
        setTimeout(() => {
          image.classList.add('visible');
        }, delay);
        delay += 400; // 다음 이미지를 위한 지연 증가
      }
    });
  };
  // 요소가 뷰포트 내에 있는지 확인하는 함수
  const isInViewport = (elem) => {
    const bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    createInfiniteSlider();
  }, []);

  const createInfiniteSlider = () => {
    const container = document.querySelector('.photobanner');
    const images = container.querySelectorAll('.image-container');

    // 이미지를 복제하고 추가하는 함수
    const cloneAndAppendImages = () => {
      images.forEach((image) => {
        const clone = image.cloneNode(true);
        container.appendChild(clone);
      });
    };

    // 초기 복제 및 추가
    cloneAndAppendImages();

    // 이미지를 지속적으로 복제하고 추가하는 간격
    setInterval(() => {
      cloneAndAppendImages();
    }, 3000); // 간격을 필요에 맞게 조정하세요 (밀리초 단위)

    // 지속적으로 이미지를 반복하는 함수 호출
    startContinuousSlide();
  };

  // 이미지를 지속적으로 반복하는 함수
  const startContinuousSlide = () => {
    const container = document.querySelector('.photobanner');
    const images = container.querySelectorAll('.image-container');

    let index = 0;
    const imageCount = images.length;

    setInterval(() => {
      images[index].classList.remove('visible');
      index = (index + 1) % imageCount;
      images[index].classList.add('visible');
    }, 3000); // 간격을 필요에 맞게 조정하세요 (밀리초 단위)

    // 초기에 첫 번째 이미지가 보이도록 함
    images[index].classList.add('visible');
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                flexGrow: 3,
                display: { xs: 'none', md: 'flex' },
                fontSize: '25px',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              GrillMaster
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
              style={{ marginLeft: '40%' }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => handlePageClick(index)}
                  sx={{
                    my: 2,
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 700,
                    display: 'block',
                  }}>
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div
        style={{
          width: '100%',
          height: '2400px',
          backgroundColor: 'black',
          paddingTop: '40px',
          textAlign: 'center',
        }}>
        <div>
          <h3 style={{ fontSize: '50px', margin: '0 auto', color: 'white', marginTop: '100px' }}>
            검증된 바베큐 레시피
          </h3>
          <h3 style={{ fontSize: '50px', margin: '0 auto', color: 'white', marginBottom: '150px' }}>
            나만의 시즈닝 레시피를 공유하세요
          </h3>
        </div>
        <video
          muted
          autoPlay
          loop
          style={{
            width: '70%',
            display: 'block',
            margin: '0 auto',
            borderRadius: '10px',
            overflow: 'hidden',
          }}>
          <source
            src="https://cdn.pixabay.com/video/2023/03/02/152830-804130714_tiny.mp4"
            type="video/mp4"
          />
        </video>
        {/* 이미지 추가 */}
        <div style={{ marginTop: '100px' }}>
          <img
            src="https://i.ibb.co/hVp8dnf/0000-removebg-preview.png"
            alt="Sample Image"
            className={isVisible ? 'image-transition visible' : 'image-transition'}
            style={{ width: '20%', marginRight: '-5%', borderRadius: '10px' }}
          />
          <img
            src="https://i.ibb.co/DQ9GVWs/0000-removebg-preview.png"
            alt="Sample Image"
            className={isVisible ? 'image-transition visible' : 'image-transition'}
            style={{ width: '20%', borderRadius: '10px' }}
          />
        </div>
        <div className={isVisible ? 'image-transition visible' : 'image-transition'}>
          <p style={{ fontSize: '50px', fontWeight: '700', color: 'white', marginTop: '100px' }}>
            바베큐러들의 선택
          </p>
          <p style={{ color: 'white', marginTop: '20px' }}>유명 유튜버들의 바베큐 레시피</p>
          <p style={{ color: 'white', marginTop: '20px' }}>유저들의 바베큐 레시피를 종합하여</p>
          <p style={{ color: 'white', marginTop: '20px' }}>맛있는 바베큐를 만들어보세요!</p>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '900px',
          backgroundColor: 'white',
          paddingTop: '40px',
          textAlign: 'center',
        }}>
        <div>
          <p style={{ fontSize: '250%', fontWeight: '700', marginTop: '20px' }}>
            검증된 유튜버들의
          </p>
          <p style={{ fontSize: '250%', fontWeight: '700', marginTop: '-2%' }}>바베큐 레시피를 </p>
          <p style={{ fontSize: '250%', fontWeight: '700', marginTop: '-2%' }}>모두 모아놨어요!</p>
        </div>
        <div
          className="wrapper"
          style={{ height: '400px', fontSize: '140%', fontWeight: '700', marginTop: '5%' }}>
          <div className="photobanner">
            <div className="image-container">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMTFfNTIg%2FMDAxNzA0OTQ0MjMxNzE2.Wbx2U8JUNvX8AMICUP1yhJTfAr6meUJ-GXAM5BT3Yccg.T1xkyO4diCOE95Tai073Fs153sYm0jNvTuUdKtGEjNog.JPEG.7hansollee%2Fgfgdfgdffg.JPG&type=sc960_832"
                alt=""
              />
              <p>고기남자</p>
            </div>
            <div className="image-container">
              <img
                src="https://i.namu.wiki/i/nQJW2e_q6_y8kEDDoQQm-uqQxcp9kdpEt5GXcdPj5KFGiHLfz5OYnWztz2FYImuC-3S6lUxX7undv90l_8_jPg.webp"
                alt=""
              />
              <p>육식맨</p>
            </div>
            <div className="image-container">
              <img
                src="https://cdn.class101.net/images/ff5fbbb5-35a7-4fee-8540-35a0a120066e"
                alt=""
              />
              <p>정육왕</p>
            </div>
            <div className="image-container">
              <img
                src="https://i.namu.wiki/i/Xp4MMRlKcjkKf5CNoTmUcUjUL5VFfg9FvvWpT4U1XdXgSHqA1K5g2u3HT-n_3aJcsVufREe3GBTw3NBcUPab2g.webp"
                alt=""
              />
              <p>승우아빠</p>
            </div>
            <div className="image-container">
              <img
                src="https://i.namu.wiki/i/LWNmFEecKVs4e0rXZS52gnDvzSZ-PUfNh6zGZCD-1XCLR2bRRX-cpnUGv9KvqvaJLtPTDQPVfCkXgbdHGV0C4Nkr8-a8U-bfITZpgcmrmxPHFDPEQh7aFb-XYFQDo7uhlGmBq0nGJRCF7XAjOF-F3w.webp"
                alt=""
              />
              <p>취요남</p>
            </div>
            <div className="image-container">
              <img
                src="https://americanmeat.co.kr/wp-content/uploads/2020/09/USMEF_%EB%AC%B8%EC%B8%A0101%ED%81%B4%EB%A0%88%EC%8A%A4_img1-1024x1024.png"
                alt=""
              />
              <p>문츠</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '1000px',
          backgroundColor: 'white',
          paddingTop: '40px',
          textAlign: 'center',
        }}>
        <div>
          <p style={{ fontSize: '340%', fontWeight: '700', marginTop: '20px' }}>
            필요한 레시피가 없다면?
          </p>
          <p style={{ fontSize: '340%', fontWeight: '700', marginTop: '-2%' }}>
            직접 만들어 보아요
          </p>
          <p style={{ fontSize: '100%', fontWeight: '700', marginTop: '-50px' }}>
            다양한 레시피를 무제한으로 만들 수 있어요.
          </p>
          <p style={{ fontSize: '100%', fontWeight: '700', marginTop: '0' }}>
            그릴마스터에서는 갯수 제한없이 무료에요.
          </p>
        </div>
        <div
          style={{ lineHeight: '1.2', textAlign: 'left', marginLeft: '30%', marginTop: '5%' }}
          className={isVisible ? 'image-transition visible' : 'image-transition'}>
          <p style={{ margin: '5px 0', padding: '0', fontSize: '140%', fontWeight: '700' }}>
            유튜버들의 레시피와
          </p>
          <p style={{ margin: '5px 0', padding: '0', fontSize: '140%', fontWeight: '700' }}>
            회원들의 레시피를
          </p>
          <p style={{ margin: '5px 0', padding: '0', fontSize: '140%', fontWeight: '700' }}>
            저장해놔요.
          </p>
          <div style={{ marginTop: '1%', position: 'relative' }}>
            <img
              src="https://i.ibb.co/2qwB6n3/1.png"
              alt="Sample Image"
              style={{ width: '20%', borderRadius: '10px' }}
            />
            <div
              style={{
                display: 'absolute',
                width: '300px',
                height: '300px',
                marginTop: '-50%',
                backgroundColor: 'black',
                marginLeft: '32%',
                borderRadius: '20px',
                textAlign: 'center',
              }}>
              <div
                style={{
                  color: 'white',
                  paddingTop: '25%',
                  paddingLeft: '15%',
                  fontWeight: '700',
                  textAlign: 'left',
                }}>
                <p> 나만의 레시피를 작성하고</p>
                <p>회원들에게 공유해요</p>
                <p>댓글을 통해 꿀팁 공유 팍팍!!</p>
              </div>
            </div>
            <div
              style={{
                display: 'absolute',
                width: '300px',
                height: '180px',
                marginTop: '2%',
                backgroundColor: 'khaki',
                marginLeft: '32%',
                borderRadius: '20px',
                textAlign: 'center',
              }}>
              <div
                style={{
                  color: 'black',
                  paddingTop: '10%',
                  fontWeight: '700',
                  textAlign: 'left',
                  paddingLeft: '15%',
                }}>
                <p>유명 유튜버들의 레시피와</p>
                <p>회원들의 레시피를</p>
                <p>평가하고 리뷰를 남겨보세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '1200px',
          backgroundColor: 'white',
          paddingTop: '40px',
          textAlign: 'center',
        }}>
        <div>
          <p style={{ fontSize: '340%', fontWeight: '700', marginTop: '20px' }}>
            캠핑장 및 바베큐장 찾기
          </p>
          <p style={{ fontSize: '100%', fontWeight: '600', marginTop: '-50px' }}>
            내 주변과 장소 목적에 따라 캠핑장을 추천해줘요.
          </p>
          <p style={{ fontSize: '100%', fontWeight: '600', marginTop: '0' }}>
            이대로 진행하면 반드시 원하는 캠핑을 할 수 있어요.
          </p>
        </div>
        <div
          style={{ lineHeight: '1.2', textAlign: 'left', marginLeft: '25%', marginTop: '5%' }}
          className={isVisible ? 'image-transition visible' : 'image-transition'}>
          <div style={{ marginTop: '1%', position: 'relative' }}>
            <img
              src="https://i.ibb.co/SVSCTMM/0000-removebg-preview.png"
              alt="Sample Image"
              style={{
                width: '30%',
                borderRadius: '10px',
                position: 'relative',
                zIndex: '2',
                marginLeft: '-3%',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '80%',
                height: '75%',
                background: 'linear-gradient(to left bottom, paleturquoise, pink)',
                borderRadius: '20px',
                top: '18%',
                left: '-5%',
                zIndex: '1',
              }}>
              <div
                style={{
                  fontSize: '200%',
                  fontWeight: '700',
                  marginLeft: '44%',
                  marginTop: '15%',
                }}>
                <p>우편번호를 통해 내 주변</p>
                <p>캠핑장과 바베큐장을 찾아봐요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '1000px',
          backgroundColor: 'black',
          paddingTop: '8%',
          textAlign: 'center',
        }}>
        <div
          style={{ color: 'white' }}
          className={isVisible ? 'image-transition visible' : 'image-transition'}>
          <p style={{ fontSize: '340%', fontWeight: '700', marginTop: '20px' }}>
            그릴마스터는 회원과 함께 성장해요
          </p>
          <p style={{ fontSize: '100%', fontWeight: '600', marginTop: '-50px' }}>
            레시피로 다양한 경험을 공유해보세요.
          </p>
          <p style={{ fontSize: '100%', fontWeight: '600', marginTop: '0' }}>
            최고의 바베큐 그릴마스터에서 모두 도와드릴게요.
          </p>

          <div style={{ lineHeight: '1.2', textAlign: 'left', marginLeft: '25%', marginTop: '5%' }}>
            <div style={{ marginTop: '1%', position: 'relative' }}>
              <img
                src="https://i.ibb.co/64DBbvn/image.png"
                alt="Sample Image"
                style={{
                  width: '15%',
                  borderRadius: '100%',
                  position: 'relative',
                  zIndex: '2',
                  marginLeft: '3%',
                  marginTop: '10%',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '80%',
                  height: '100%',
                  backgroundColor: 'mediumpurple',
                  borderRadius: '20px',
                  top: '18%',
                  left: '-5%',
                  zIndex: '1',
                }}>
                <div
                  style={{
                    fontSize: '200%',
                    fontWeight: '700',
                    marginLeft: '38%',
                    marginTop: '10%',
                    color: 'black',
                  }}>
                  <p>"새로운 레시피를 알 수 있는 앱이 생겼고,</p>
                  <p>제 레시피를 공유할 수 있어서 좋아요!"</p>
                  <p style={{ fontSize: '50%', marginTop: '-3%' }}>그릴마스터 장민영</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '1480px',
          backgroundColor: 'black',
          paddingTop: '8%',
          textAlign: 'center',
        }}>
        <div style={{ color: 'white' }}>
          <p style={{ fontSize: '340%', fontWeight: '700', marginTop: '20px' }}>
            고기 좋아하는 사람들이
          </p>
          <p style={{ fontSize: '340%', fontWeight: '700', marginTop: '-50px' }}>
            모여서 만들었어요
          </p>
          <p style={{ fontSize: '100%', fontWeight: '500', marginTop: '-3%' }}>
            모든 바베큐를 사랑하는 사람들을 위해
          </p>
          <p style={{ fontSize: '100%', fontWeight: '500', marginTop: '0' }}>
            동료들이 모여 만들었어요.
          </p>
          <div style={{ padding: '20px', backgroundColor: 'black' }}>
            <p
              style={{
                fontSize: '100%',
                fontWeight: '500',
                marginTop: '0',
                color: 'cornflowerblue',
                backgroundColor: 'black',
                cursor: 'pointer',
              }}
              onClick={() => setIsExpanded(!isExpanded)}>
              팀 소개
            </p>
            {isExpanded && (
              <div
                style={{
                  display: 'flex',
                  marginTop: '10px',
                  justifyContent: 'center',
                  marginLeft: '10%',
                }}>
                <div style={{ flex: '1', marginRight: '20px', textAlign: 'left' }}>
                  <img
                    src="https://i.ibb.co/64DBbvn/image.png"
                    alt="Team Member 1"
                    style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                  />
                  <div style={{ color: 'white', fontSize: '14px' }}>
                    <p>조장 : 김선우</p>
                    <p>생년월일 : 97.09.13</p>
                    <p>email : pavico0913@gmail.com</p>
                    <p>전화번호 : 01087936053</p>
                    <a
                      href="https://gitub.com/ksw70913"
                      style={{ color: 'white', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.target.style.color = 'cornflowerblue')}
                      onMouseLeave={(e) => (e.target.style.color = 'white')}>
                      github : gitub.com/ksw70913
                    </a>
                  </div>
                </div>
                <div style={{ flex: '1', marginRight: '20px', textAlign: 'left' }}>
                  <img
                    src="https://i.ibb.co/64DBbvn/image.png"
                    alt="Team Member 2"
                    style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                  />
                  <div style={{ color: 'white', fontSize: '14px' }}>
                    <p>팀원 : 오창진</p>
                    <p>생년월일 : 96.10.02</p>
                    <p>email : tama51@naver.com / codetama51@gmail.com</p>
                    <p>전화번호 : 01098006111</p>
                    <a
                      href="https://github.com/dhckdwls"
                      style={{ color: 'white', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.target.style.color = 'cornflowerblue')}
                      onMouseLeave={(e) => (e.target.style.color = 'white')}>
                      github : github.com/dhckdwls
                    </a>
                  </div>
                </div>
                <div style={{ flex: '1', marginRight: '20px', textAlign: 'left' }}>
                  <img
                    src="https://i.ibb.co/64DBbvn/image.png"
                    alt="Team Member 3"
                    style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                  />
                  <div style={{ color: 'white', fontSize: '14px' }}>
                    <p>팀원 : 장민영</p>
                    <p>생년월일 : 98.07.04</p>
                    <p>email : wkdalsdudqq@gamil.com</p>
                    <p>전화번호 : 01063501392</p>
                    <a
                      href="https://github.com/JANG-MINYOUNG"
                      style={{ color: 'white', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.target.style.color = 'cornflowerblue')}
                      onMouseLeave={(e) => (e.target.style.color = 'white')}>
                      github : github.com/JANG-MINYOUNG
                    </a>
                  </div>
                </div>
                <div style={{ flex: '1', textAlign: 'left' }}>
                  <img
                    src="https://i.ibb.co/64DBbvn/image.png"
                    alt="Team Member 4"
                    style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                  />
                  <div style={{ color: 'white', fontSize: '14px' }}>
                    <p>팀원 : 배승원</p>
                    <p>생년월일 : 98.12.30</p>
                    <p>email : dudcnsaus@gmail.com</p>
                    <p>전화번호 : 01023948792</p>
                    <a
                      href="https://github.com/qotmddnjs"
                      style={{ color: 'white', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.target.style.color = 'cornflowerblue')}
                      onMouseLeave={(e) => (e.target.style.color = 'white')}>
                      github : github.com/qotmddnjs
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div>
              <img
                src="https://i.ibb.co/74QZ13z/image.gif"
                alt="Sample Image"
                style={{
                  width: '70%',
                  height: '1000px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '1200px',
          backgroundColor: 'black',
          paddingTop: '8%',
          textAlign: 'center',
        }}>
        <div
          style={{
            position: 'absolute',
            width: '90%',
            height: '60%',
            backgroundColor: 'white',
            borderRadius: '20px',
            marginLeft: '5%',
          }}>
          <div
            style={{
              fontSize: '150%',
              fontWeight: '700',
              color: 'black',
            }}>
            <p>먹을때 마다 새로운 맛을</p>
            <p style={{ marginTop: '-1%' }}>느끼고 싶다면 지금 당장!</p>
          </div>
          <div
            style={{
              position: 'absolute',
              width: '7%',
              height: '7%',
              backgroundColor: 'cornflowerblue',
              borderRadius: '5px',
              color: 'white',
              fontSize: '70%',
              marginLeft: '46.5%',
              fontWeight: '700',
            }}>
            <p>앱 다운로드</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/xht4B99/dwdwd-0000-removebg-preview.png"
              alt="Sample Image"
              style={{
                width: '23%',
                marginTop: '3.5%',
                marginLeft: '3%',
              }}
              className={isVisible ? 'image-transition visible' : 'image-transition'}
            />
          </div>
          <div
            style={{
              fontSize: '100%',
              fontWeight: '300',
              color: 'white',
              marginTop: '10%',
            }}>
            <p>2024 GrilMaster</p>
            <p style={{ marginTop: '1%' }}>(주) GrilMasterㅣ대표</p>
            <p style={{ marginTop: '1%' }}>이메일 wkdalsdudqq@gamil.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function themeApp() {
  const theme = RootTheme();

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  );
}
