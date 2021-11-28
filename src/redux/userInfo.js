const initialState = {
  userMockUpInfo: {
    imgUrl: '/images/myprofile.jpeg',
    name: '창민 전',
    followNumber: 30,
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
