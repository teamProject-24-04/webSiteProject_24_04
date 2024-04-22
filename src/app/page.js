'use client';

import React, { useState, useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@mui/material/styles';
import { Button, AppBar, Toolbar, CssBaseline, Box, Typography, Container } from '@mui/material';
import RootTheme from './theme';
import './App.css'; // Import CSS file for animations

function App() {
  const pages = ['팀소개', '레시피 리스트', '앱 다운로드'];
  const [isVisible, setIsVisible] = useState(false);

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
  // Function to check if element is in viewport
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

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 1,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 3,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              GrillMaster
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
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
        <div className="one" style={{ marginTop: '8%' }}>
          <div className="wrapper">
            <div className="photobanner">
              <div className="image-container">
                <img
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMTFfNTIg%2FMDAxNzA0OTQ0MjMxNzE2.Wbx2U8JUNvX8AMICUP1yhJTfAr6meUJ-GXAM5BT3Yccg.T1xkyO4diCOE95Tai073Fs153sYm0jNvTuUdKtGEjNog.JPEG.7hansollee%2Fgfgdfgdffg.JPG&type=sc960_832"
                  alt=""
                />
              </div>
              <div className="image-container">
                <img
                  src="https://i.namu.wiki/i/Poyl8CgBm0-zJs25TMdpdyBqF7JT7_9ikSkUKPZUnNY8YwQjRhoZ9o8xt1psfwm0Kn_M8PUJggnvrNmjAST5R1mlvifMbx2GuKhuDHDI5B_NVipYK-KhrH5LldRUR7oyYmhqf4Dm-TgCfoEXvF5L1A.webp"
                  alt=""
                />
              </div>
              <div className="image-container">
                <img
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjRfMTE1%2FMDAxNjIxODM3NjA3MTU4.CWEgZmmBdyLZ9PGR4K37qhuwPhDoQ2P_Njb51H98hMog.73BEYZNOzTFP5CuROUWaS1n_fgVhla0z_liN8_1tQBUg.JPEG.zestncom%2F20210413_class101_1165.jpg&type=sc960_832"
                  alt=""
                />
              </div>
              <div className="image-container">
                <img
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5415%2F2023%2F02%2F04%2F0000188663_004_20230204140202134.png&type=sc960_832"
                  alt=""
                />
              </div>
              <div className="image-container">
                <img
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F609%2F2023%2F07%2F17%2F202307171642515710_2_20230717164905597.jpg&type=a340"
                  alt=""
                />
              </div>
              <div className="image-container">
                <img src="https://i.ytimg.com/vi/0jfdHsDoJwg/maxresdefault.jpg" alt="" />
              </div>
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
          height: '1000px',
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
              style={{ width: '30%', borderRadius: '10px', position: 'relative', zIndex: '2' }}
            />
            <div
              style={{
                position: 'absolute',
                width: '80%',
                height: '70%',
                backgroundColor: 'red',
                borderRadius: '10px',
                top: '28%',
                left: 0,
                zIndex: '1',
              }}></div>
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
