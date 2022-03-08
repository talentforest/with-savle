import { useBreakpoint } from "@/hooks/useBreakpoint";
import Arrow from "public/layout/ic_arrow_next.svg";
import One from "public/layout/ic_number.svg";
import Check from "public/layout/ic_package_check.svg";
import css from "styled-jsx/css";
import Circle from "./Circle";
const style = css`
  .wrap {
    width: 272px;
    margin: 0 auto 31px;
    padding-top: 24px;
  }
  .number {
    display: flex;
    justify-content: space-between;
    width: 218px;
    margin: 0 auto 8px;
  }

  .text {
    display: flex;
    font-weight: 500;
    font-size: 12px;
    color: #b3b3b3;
  }
  .text div {
    margin-left: 31px;
  }
  .text div:first-child {
    margin-left: 0%;
    color: #3178ff;
  }
  @media (min-width: 576px) {
    .wrap {
      width: 328px;
      margin: 0 auto 18px;
      padding-top: 90px;
    }
    .number {
      width: 274px;
      margin: 0 auto 11px;
    }
    .text {
      font-size: 13px;
    }
    .text div {
      margin-left: 50px;
    }
  }
  @media (min-width: 1200px) {
    .wrap {
      width: 645px;
      margin: 0 auto 35px;
      padding-top: 67px;
    }
    .number {
      width: 538px;
      margin: 0 auto 21px;
    }
    .text {
      font-size: 24px;
    }
    .text div {
      margin-left: 113px;
    }
  }
`;
const SavingCalcStep = ({ state }) => {
  const { next, result, done } = state;
  const { sm: isMobile, md: isTablet } = useBreakpoint();
  return (
    <div className="wrap">
      <div className="number">
        {!next ? <One width={isMobile ? "16px" : isTablet ? "20px" : "40px"} /> : <Check width={isMobile ? "16px" : isTablet ? "20px" : "40px"} />}
        <Arrow width={isMobile ? "68px" : isTablet ? "86px" : "172px"} />
        {!result ? (
          <Circle width={isMobile ? "16px" : isTablet ? "20px" : "40px"} stroke={next ? "#3178FF" : "#B3B3B3"} fill={next ? "#3178FF" : "none"}>
            <path
              d="M14.5211 26.1335L21.1393 19.6366C21.6726 19.1194 22.0928 18.6022 22.3999 18.085C22.7231 17.5517 22.8848 16.9457 22.8848 16.2669C22.8848 15.4588 22.6181 14.8204 22.0847 14.3517C21.5676 13.8669 20.9211 13.6244 20.1454 13.6244C19.3211 13.6244 18.6585 13.9073 18.1575 14.4729C17.6565 15.0224 17.3494 15.7174 17.2363 16.5578L14.3999 16.1214C14.4807 15.4103 14.6827 14.7558 15.006 14.1578C15.3292 13.5598 15.7413 13.0426 16.2423 12.6063C16.7433 12.1699 17.3252 11.8305 17.9878 11.5881C18.6666 11.3295 19.4019 11.2002 20.1938 11.2002C20.9373 11.2002 21.6484 11.3052 22.3272 11.5153C23.0221 11.7254 23.6363 12.0487 24.1696 12.485C24.7029 12.9052 25.1231 13.4305 25.4302 14.0608C25.7534 14.6749 25.9151 15.3941 25.9151 16.2184C25.9151 16.7679 25.8423 17.285 25.6969 17.7699C25.5514 18.2386 25.3494 18.683 25.0908 19.1032C24.8484 19.5234 24.5575 19.9275 24.2181 20.3153C23.8949 20.6871 23.5393 21.0507 23.1514 21.4063L18.206 26.1335H25.9393V28.8002H14.5211V26.1335Z"
              fill={next ? "#fff" : "#B3B3B3"}
            />
          </Circle>
        ) : (
          <Check width={isMobile ? "16px" : isTablet ? "20px" : "40px"} />
        )}
        <Arrow width={isMobile ? "68px" : isTablet ? "86px" : "172px"} />
        {!done ? (
          <Circle width={isMobile ? "16px" : isTablet ? "20px" : "40px"} stroke={result ? "#3178FF" : "#B3B3B3"} fill={result ? "#3178FF" : "none"}>
            <path
              d="M18.6816 18.5099H19.4386C19.8644 18.5099 20.2823 18.4783 20.6924 18.4152C21.1182 18.3364 21.5046 18.2023 21.8515 18.0131C22.1985 17.8239 22.4745 17.5715 22.6795 17.2561C22.9003 16.9249 23.0107 16.4991 23.0107 15.9787C23.0107 15.6002 22.9397 15.2611 22.7978 14.9615C22.6558 14.6618 22.4587 14.4095 22.2064 14.2045C21.9698 13.9995 21.6859 13.8418 21.3547 13.7314C21.0393 13.621 20.7081 13.5658 20.3612 13.5658C19.6673 13.5658 19.0917 13.7629 18.6343 14.1572C18.177 14.5515 17.8616 15.0719 17.6881 15.7185L15.015 15.0325C15.1569 14.4647 15.3935 13.9522 15.7246 13.4948C16.0716 13.0217 16.4816 12.6195 16.9547 12.2884C17.4436 11.9414 17.9877 11.6733 18.587 11.4841C19.1863 11.2948 19.8171 11.2002 20.4795 11.2002C21.2049 11.2002 21.8909 11.3027 22.5375 11.5077C23.1999 11.697 23.7755 11.9887 24.2644 12.383C24.7691 12.7615 25.1633 13.2346 25.4472 13.8023C25.7311 14.3701 25.873 15.0325 25.873 15.7894C25.873 16.6884 25.597 17.4927 25.0451 18.2023C24.5089 18.8963 23.7834 19.3536 22.8687 19.5744V19.6217C23.8938 19.8267 24.7218 20.292 25.3526 21.0174C25.9992 21.7271 26.3225 22.6023 26.3225 23.6432C26.3225 24.5106 26.149 25.2676 25.8021 25.9142C25.4709 26.5608 25.0214 27.097 24.4537 27.5228C23.9017 27.9486 23.2788 28.264 22.5848 28.469C21.8909 28.6898 21.1891 28.8002 20.4795 28.8002C19.7698 28.8002 19.0995 28.7213 18.4687 28.5636C17.8379 28.4217 17.2544 28.193 16.7182 27.8776C16.1978 27.5622 15.7325 27.1522 15.3225 26.6475C14.9282 26.1429 14.6207 25.5436 14.3999 24.8497L17.0494 24.0217C17.2544 24.6841 17.6329 25.2439 18.1848 25.7013C18.7526 26.1586 19.4859 26.3873 20.3848 26.3873C20.7476 26.3873 21.1103 26.34 21.473 26.2454C21.8515 26.135 22.1827 25.9694 22.4666 25.7486C22.7662 25.5278 23.0028 25.2439 23.1762 24.897C23.3655 24.55 23.4601 24.1242 23.4601 23.6196C23.4601 23.0834 23.3261 22.6339 23.058 22.2712C22.8056 21.8927 22.4823 21.6009 22.0881 21.3959C21.6938 21.1751 21.2522 21.0174 20.7633 20.9228C20.2902 20.8282 19.8329 20.7808 19.3913 20.7808H18.6816V18.5099Z"
              fill={result ? "#fff" : "#B3B3B3"}
            />
          </Circle>
        ) : (
          <Check width={isMobile ? "16px" : isTablet ? "20px" : "40px"} />
        )}
      </div>
      <div className="text">
        <div>목표 입력하기</div>
        <div>금액 입력하기</div>
        <div>결과 확인하기</div>
      </div>
      <style jsx>{style}</style>
      <style jsx>{`
        .text div:nth-child(2) {
          color: ${next && " #3178ff"};
        }
        .text div:last-child {
          color: ${result && " #3178ff"};
        }
      `}</style>
    </div>
  );
};

export default SavingCalcStep;
