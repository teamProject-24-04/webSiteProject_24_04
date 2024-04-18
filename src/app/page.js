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
        <div>
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
          height: '1000px',
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
