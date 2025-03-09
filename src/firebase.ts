import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyDyF8TTP8jShMd0An3floPb9Er2iHcrx0M",
    authDomain: "rd-dragon.firebaseapp.com",
    projectId: "rd-dragon",
    storageBucket: "rd-dragon.firebasestorage.app",
    messagingSenderId: "800590494721",
    appId: "1:800590494721:web:4a05775c17cec2c1041400",
    measurementId: "G-KZB2J1R4M5"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
