import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyAUzU0v-9Y3fVaKHcqZjfr-t6IkSnKZ-3k',
  authDomain: 'fir-init-a336b.firebaseapp.com',
  projectId: 'fir-init-a336b',
  storageBucket: 'fir-init-a336b.appspot.com',
  messagingSenderId: '1097917014111',
  appId: '1:1097917014111:web:8d2c5da9f6b9addc24bbea',
};

export const auth = firebase.auth();

export const db = firebase.firestore();

const settings = {};
db.settings(settings);

export const storage = firebase.storage().ref();
