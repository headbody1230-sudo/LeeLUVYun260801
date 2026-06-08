const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "이상화 ❤️ 윤홍주의 결혼식에 초대합니다",
    description: "결혼식 초대장",
    ogImage: "/images/ha0h-1fsi-bqt3.jpg",
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 메인 화면
  main: {
    title: "Wedding Invitation",
    image: "/images/ha0h-1fsi-bqt3.jpg",
    date: "2026년 8월 1일 토요일\n오후 3시 20분",
    venue: "웨딩스퀘어 강변"
  },

  // 소개글
  intro: {
    title: "",
    text: "온 세상을 물들이는 노을처럼\n서로의 삶에 스며들었습니다.\n\n가장 아름다운 순간에 약속합니다.\n저희의 첫걸음에 함께해주세요."
  },

  // 결혼식 일정
  date: {
    year: 2026,
    month: 8,
    day: 1,
    hour: 15,
    minute: 20,
    displayDate: "2026.08.1 SAT PM 03:20",
  },

  // 장소 정보
  venue: {
    name: "웨딩스퀘어 강변\n3층 루시드홀",
    address: "서울특별시 광진구 광나루로56길 85\n웨딩스퀘어 강변",
    tel: "02-3424-7000",
    naverMapId: "웨딩스퀘어 강변", // 네이버 지도 검색용 장소명
    coordinates: {
      latitude: 37.535726,
      longitude: 127.095709,
    },
    placeId: "31761747", // 네이버 지도 장소 ID
    mapZoom: "17", // 지도 줌 레벨
    mapNaverCoordinates: "14141300,4507203,15,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
    transportation: {
      subway: "강변역 1번, 2번 출구 방면\n지하통로 연결",
      bus: "동서울 종합터미널\n2224, 1112, 1117, 1650, 5600, 5700\n광진 01, 03, 04",
    },
    parking: "건물 지하 주차장 이용 가능 (2시간 무료)",
    // 신랑측 배차 안내
    groomShuttle: {
      location: "신랑측 배차 출발지",
      departureTime: "오전 10시 30분 출발",
      contact: {
        name: "담당자명",
        tel: "010-1234-5678"
      }
    },
    // 신부측 배차 안내
    brideShuttle: {
      location: "신부측 배차 출발지",
      departureTime: "오전 11시 출발",
      contact: {
        name: "담당자명",
        tel: "010-9876-5432"
      }
    }
  },

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "bottom" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
    images: [
      "/images/gallery/image1.jpg",
      "/images/gallery/image2.jpg",
      "/images/gallery/image3.jpg",
      "/images/gallery/image4.jpg",
      "/images/gallery/image5.jpg",
      "/images/gallery/image6.jpg",
      "/images/gallery/image7.jpg",
      "/images/gallery/image8.jpg",
      "/images/gallery/image9.jpg",
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message: "온 세상을 물들이는 노을처럼\n서로의 삶에 스며들었습니다.\n\n가장 아름다운 순간에 약속합니다.\n저희의 첫걸음에 함께해주세요.",
    groom: {
      name: "이상화",
      label: "첫째아들",
      father: "이웅로",
      mother: "송혜숙",
    },
    bride: {
      name: "윤홍주",
      label: "셋째딸",
      father: "윤종영",
      mother: "김경란",
    },
  },

  // 계좌번호
  account: {
    groom: {
      bank: "은행명",
      number: "123-456-789012",
      holder: "신랑이름",
    },
    bride: {
      bank: "은행명",
      number: "987-654-321098",
      holder: "신부이름",
    },
    groomFather: {
      bank: "은행명",
      number: "111-222-333444",
      holder: "신랑아버지",
    },
    groomMother: {
      bank: "은행명",
      number: "555-666-777888",
      holder: "신랑어머니",
    },
    brideFather: {
      bank: "은행명",
      number: "999-000-111222",
      holder: "신부아버지",
    },
    brideMother: {
      bank: "은행명",
      number: "333-444-555666",
      holder: "신부어머니",
    }
  },

  // RSVP 설정
  rsvp: {
    enabled: false, // RSVP 섹션 표시 여부
    showMealOption: false, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  slack: {
    webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    channel: "#wedding260801-전체",
    compactMessage: true, // 슬랙 메시지를 간결하게 표시
  },
}; 
