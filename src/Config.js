const BASE_URL = 'http://15.165.158.132:8000';

export const API = {
  pin: `${BASE_URL}/boards/pin`,
  detail: `${BASE_URL}/boards/`,
  main: `${BASE_URL}/boards`,
  upload: `${BASE_URL}/boards`,
  getMyImage: `${BASE_URL}/boards/board/me`,
  getMyPin: `${BASE_URL}/boards/pin`,
  baseUrl: `${BASE_URL}`,
  token: localStorage.getItem('back_token'),
};

export const MockUp = {
  main: '/data/mockUp/main.json',
  search: '/data/mockUp/main.json',
  detail: '/data/mockUp/detail.json',
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NX0.jugJgM3JP9XFInnwQJbQt02wCRW_aUnWnv5HWNC0X_g',
};
