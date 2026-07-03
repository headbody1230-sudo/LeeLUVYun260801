'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { weddingConfig } from '../../config/wedding-config';

const watermarkId = weddingConfig.meta._jwk_watermark_id || 'JWK-NonCommercial';

const MainSection = () => {
  return (
    <MainSectionContainer className={`wedding-container jwk-${watermarkId.slice(0, 8)}-main`}>
      {}
      <BackgroundImage 
        src={weddingConfig.main.image}
        alt="웨딩 배경 이미지"
        fill
        priority
        sizes="100vw"
        quality={100}
        style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
      />
      <Overlay />
      
      {/* 상단: 메인 타이틀 */}
      <TopContent>
        <MainTitle>{weddingConfig.main.title}</MainTitle>
      </TopContent>

      {/* 하단: 이름, 날짜, 장소 */}
      <BottomContent>
        <NamesText>이상화 <span> · </span> 윤홍주</NamesText>
        <DateText>
          2026년 8월 1일 토요일 오후 3시 20분
        </DateText>
        <VenueText>웨딩스퀘어 강변</VenueText>
        
        <HiddenWatermark aria-hidden="true">
          {watermarkId}
        </HiddenWatermark>
      </BottomContent>
      
      <ScrollIndicator>
        <i className="fas fa-chevron-down"></i>
      </ScrollIndicator>
    </MainSectionContainer>
  );
};

const MainSectionContainer = styled.section`
  position: relative;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 3.5vh;
  text-align: center;
  color: white;
  overflow: hidden;
  background: #f8f6f2;

  @media (min-width: 768px) and (min-height: 780px) {
    aspect-ratio: 9 / 16;
    max-width: calc(100vh * 9 / 16);
    width: auto;
    margin: 0 auto;
    border-radius: 24px;
    box-shadow: 0 0 32px rgba(0,0,0,0.08);
  }
`;

const BackgroundImage = styled(Image)`
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%);
  z-index: 1;
`;

const TopContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  margin-top: 2vh;
`;

const BottomContent = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 2%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NamesText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
  letter-spacing: 2px;
  
  span {
    font-size: 1rem;
    margin: 0 0.5rem;
    vertical-align: middle;
  }
`;

/* 🚀 유동적 타이포그래피가 적용된 메인 타이틀 */
const MainTitle = styled.h1`
  font-family: 'Yeongwol', 'PlayfairDisplay', 'Times New Roman', serif;
  font-style: normal;
  
  /* clamp(최소 크기, 권장 크기(화면 너비 비례), 최대 크기) */
  /* 화면 가로폭의 11.5% 크기를 유지하되, 아무리 작아도 2rem, 아무리 커도 5.5rem을 넘지 않게 제어합니다. */
  font-size: clamp(2rem, 11.5vw, 5.5rem); 
  min-height: clamp(2rem, 11.5vw, 5.5rem);
  
  letter-spacing: 0px; 
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.1;
  
  /* 완벽한 1줄 유지를 위한 3가지 안전장치 */
  white-space: nowrap; /* 절대 줄바꿈 금지 */
  max-width: 94vw; /* 양옆 여백을 남기기 위해 화면 너비의 94%까지만 허용 */
  margin-left: auto;
  margin-right: auto;
  
  /* 세로 길이가 짧은 기기(ex. 구형 아이폰 등)를 위한 하단 여백 미세 조정 */
  @media (max-height: 700px) { margin-bottom: 0.8rem; }
  @media (max-height: 550px) { margin-bottom: 0.5rem; }
`;

const DateText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  
  @media (min-width: 769px) and (max-height: 700px) { margin-bottom: 0.4rem; }
  @media (min-width: 769px) and (max-height: 600px) { margin-bottom: 0.3rem; }
  @media (max-width: 768px) { font-size: 1.2rem; min-height: 0.3rem; }
  @media (max-width: 768px) and (max-height: 650px) { margin-bottom: 0.4rem; }
  @media (max-width: 768px) and (max-height: 550px) { margin-bottom: 0.3rem; }
  @media (max-width: 450px) { font-size: 1.1rem; margin-bottom: 0.15rem; }
  @media (max-width: 450px) and (max-height: 600px) { margin-bottom: 0.1rem; }
  @media (max-width: 450px) and (max-height: 500px) { margin-bottom: 0.05rem; }
  @media (max-width: 360px) { font-size: 1rem; margin-bottom: 0.1rem; }
  @media (max-width: 360px) and (max-height: 550px) { margin-bottom: 0.05rem; }
  @media (max-width: 360px) and (max-height: 450px) { margin-bottom: 0.02rem; }
  @media (max-width: 295px) { font-size: 0.9rem; margin-bottom: 0.05rem; }
  @media (max-width: 295px) and (max-height: 500px) { margin-bottom: 0.02rem; }
  @media (max-width: 295px) and (max-height: 400px) { margin-bottom: 0rem; }
`;

const VenueText = styled.p`
  font-size: 1rem;
  @media (max-width: 768px) { font-size: 0.95rem; }
  @media (max-width: 450px) { font-size: 0.9rem; }
  @media (max-width: 360px) { font-size: 0.85rem; }
  @media (max-width: 295px) { font-size: 0.75rem; }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-20px); }
    60% { transform: translateX(-50%) translateY(-10px); }
  }
`;

const HiddenWatermark = styled.span`
  position: absolute;
  opacity: 0.01;
  font-size: 1px;
  color: rgba(255, 255, 255, 0.01);
  pointer-events: none;
  user-select: none;
  z-index: -9999;
  bottom: 0;
  right: 0;
`;

export default MainSection;