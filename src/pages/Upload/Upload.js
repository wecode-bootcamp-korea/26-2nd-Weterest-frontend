import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MdUpload } from 'react-icons/md';
import { API } from '../../Config';

const Upload = () => {
  const [imgFile, setImgFile] = useState(null);
  const [title, setTitle] = useState('');
  const [intro, setIntro] = useState('');
  const [renderUrl, setRenderUrl] = useState('');
  const userMockUpInfo = useSelector(state => state.userInfo.userMockUpInfo);

  const uploadMyImage = e => {
    setImgFile(e.target.files[0]);
  };

  const deleteMyImage = () => {
    setImgFile(null);
  };

  const saveImg = () => {
    const formData = new FormData();
    formData.append('filename', imgFile);
    formData.append('title', title);
    formData.append('description', intro);
    formData.append('source', renderUrl);

    fetch(`${API.upload}`, {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('back_token') },
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'CREATE_SUCCESS') {
          alert('마이페이지에 핀이 추가되었습니다.');
          setImgFile(null);
          setTitle('');
          setIntro('');
          setRenderUrl('');
        } else {
          alert('제목 혹은 이미지를 확인해주세요.');
        }
      });
  };

  return (
    <Main>
      <Wrap>
        <Inner>
          <Top>
            <Delete onClick={() => deleteMyImage()}>삭제</Delete>
            <Save disabled={true} onClick={saveImg}>
              저장
            </Save>
          </Top>
          <Mid>
            <LeftMid>
              <UploadCover>
                {imgFile ? (
                  <img
                    className="img"
                    alt="sample"
                    src={URL.createObjectURL(imgFile)}
                    style={{
                      position: 'absolute',
                      top: '0',
                      width: '100%',
                      borderRadius: '8px',
                    }}
                  />
                ) : (
                  <>
                    <UploadInner>
                      <MdUpload style={{ width: `30px`, height: `30px` }} />
                      <ClickUpload>클릭하여 업로드</ClickUpload>
                      <ImgUpload
                        onChange={uploadMyImage}
                        type="file"
                        accept="image/bmp, image/gif, image/jpeg, image/png, image/tiff, image/webp"
                        aria-hidden="true"
                      />
                    </UploadInner>
                    <UploadInnerBottom>
                      권장 사항: 20MB 이하 고화질 .jpg 파일
                    </UploadInnerBottom>
                  </>
                )}
              </UploadCover>
            </LeftMid>
            <RightMid>
              <Title
                onChange={e => setTitle(e.target.value)}
                placeholder="제목 추가"
                value={title}
              />
              <User>
                <Myprofile alt="myprofile" src={userMockUpInfo.imgUrl} />
                <UserName>{userMockUpInfo.name}</UserName>
              </User>
              <Intro
                onChange={e => setIntro(e.target.value)}
                placeholder="사람들에게 회원님의 핀에 대해 설명해 보세요"
                value={intro}
              />
              <Landing
                onChange={e => setRenderUrl(e.target.value)}
                placeholder="랜딩 페이지 링크 추가"
                value={renderUrl}
              />
            </RightMid>
          </Mid>
        </Inner>
      </Wrap>
    </Main>
  );
};

export default Upload;

const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px;
  background-color: ${props => props.theme.background};
`;

const Wrap = styled.div`
  width: 880px;
  margin-top: 60px;
`;

const Inner = styled.div`
  height: 650px;
  padding: 40px;
  border-radius: 8px;
  background-color: ${props => props.theme.background};
  box-shadow: ${props => props.theme.shadow};
`;

const Top = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 20px;
`;

const Delete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 14px;
  border: none;
  border-radius: 8px;
  background-color: #efefef;
  color: grey;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;

const Save = styled.button`
  position: absolute;
  right: 0;
  padding: 0 14px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: #efefef;
  color: grey;
  font-size: 16px;
  cursor: default;
`;

const Mid = styled.div`
  display: flex;
  height: 550px;
`;

const LeftMid = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 380px;
  height: 510px;
  padding: 10px 20px;
`;

const UploadCover = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #efefef;
  overflow: hidden;
  &:active {
    background-color: white;
  }
`;

const ImgUpload = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
`;

const UploadInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.searchBar};
  color: ${props => props.theme.deepGrey};
`;

const UploadInnerBottom = styled.div`
  position: absolute;
  height: 100%;
  transform: translate(25%, 90%);
  z-index: 1;
  color: grey;
  font-size: 14px;
`;

const RightMid = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 510px;
  padding: 0 20px;
`;

const Title = styled.input`
  position: absolute;
  top: 10%;
  width: 380px;
  height: 46px;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid lightgrey;
  background-color: ${props => props.theme.background};
  outline: none;
  font-size: 36px;
  font-weight: 600;
`;

const User = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 30%;
  width: 388px;
  height: 48px;
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.background};
`;

const Myprofile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const UserName = styled.div`
  padding: 10px;
  font-size: 14px;
`;

const Intro = styled.input`
  position: absolute;
  top: 45%;
  width: 380px;
  height: 25px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid lightgrey;
  background-color: ${props => props.theme.background};
  outline: none;
  font-size: 16px;
`;

const Landing = styled.input`
  position: absolute;
  bottom: 10px;
  width: 380px;
  height: 24px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid lightgrey;
  background-color: ${props => props.theme.background};
  outline: none;
  font-size: 18px;
`;

const ClickUpload = styled.div``;
