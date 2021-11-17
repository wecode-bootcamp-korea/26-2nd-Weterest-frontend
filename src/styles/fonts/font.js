import { createGlobalStyle } from 'styled-components';
import NotoSansBlack from './NotoSansKR-Black.otf';
import NotoSansBold from './NotoSansKR-Bold.otf';
import NotoSansMedium from './NotoSansKR-Medium.otf';
import NotoSansRegular from './NotoSansKR-Regular.otf';
import NotoSansLight from './NotoSansKR-Light.otf';
import NotoSansThin from './NotoSansKR-Thin.otf';

export default createGlobalStyle`
    @font-face {
        font-family: "Noto Sans";
        src: local("Noto Sans"),
        url(${NotoSansBlack}) format('otf');
        font-weight: 900;
        font-style: black;
    }
    @font-face {
        font-family: "Noto Sans";
        src: local("Noto Sans"),
        url(${NotoSansBold}) format('otf');
        font-weight: 700;
        font-style: bold;
    }
    @font-face {
        font-family: "Noto Sans";
        src: local("Noto Sans"),
        url(${NotoSansMedium}) format('otf');
        font-weight: 500;
        font-style: medium;
    }
    @font-face {
        font-family: "Noto Sans";
        src: local("Noto Sans"),
        url(${NotoSansRegular}) format('otf');
        font-weight: 400;
        font-style: regular;
    }
    @font-face {
        font-family: "Noto Sans";
        src: local("Noto Sans"),
        url(${NotoSansLight}) format('otf');
        font-weight: 300;
        font-style: light;
    }
`;
