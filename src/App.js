import React, { useState, useEffect } from "react";
import "./css/App.css";

export default function APP() {
  const [openStatus, setOpenStatus] = useState([
    {
      id: 0,
      status: false,
    },
    {
      id: 1,
      status: false,
    },
    {
      id: 2,
      status: false,
    },
    {
      id: 3,
      status: false,
    },
    {
      id: 4,
      status: false,
    },
  ]);

  const [openIndex, setOpenIndex] = useState(-1);
  const [language, setLanguage] = useState("zh");
  const [backgroundImage, setBackgroundImage] = useState(
    "background-img landing-page border-bottom border-5 border-secondary"
  );
  const [firstPage, setFirstPage] = useState(first);
  const [secondPage, setSecondPage] = useState(second);
  const [landingPage, setLandingPage] = useState(landingContent);
  const [qaContentLan, setQaContentLan] = useState({
    title: qaTitle,
    contents: qaContent,
  });
  const [contactContentLan, setContactContentLan] = useState({
    title: contactTitle,
    contents: contactItems,
  });

  const handleChangeLan = (e) => {
    const lanValue = e.target.value;
    setLanguage(lanValue);
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;

    setBackgroundImage(
      language === "zh"
        ? "background-img landing-page border-bottom border-5 border-secondary"
        : "background-img-eng landing-page border-bottom border-5 border-secondary"
    );
    setFirstPage(language === "zh" ? first : firstEng);

    setSecondPage(language === "zh" ? second : secondEng);

    setLandingPage(language === "zh" ? landingContent : landingContentEng);

    setQaContentLan(
      language === "zh"
        ? {
            title: qaTitle,
            contents: qaContent,
          }
        : {
            title: qaTitleEng,
            contents: qaContentEng,
          }
    );
    setContactContentLan(
      language === "zh"
        ? {
            title: contactTitle,
            contents: contactItems,
          }
        : {
            title: contactTitleEng,
            contents: contactItemsEng,
          }
    );
  }, [language]);

  const pressAlart = () => {
    alert(
      "本頁面為網頁切版demo\x0a使用Netflix服務請連結至: https://www.netflix.com/tw/"
    );
  };

  return (
    <div className="main container-fluid justify-content-center align-items-center text-center">
      {/* first part */}
      <div className={backgroundImage}>
        <div className="container-inner mx-auto">
          {/* header */}
          <div className="row row-cols-3 justify-content-between align-items-start">
            <div className="col p-5 text-start">
              <img
                className=""
                id="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              />
            </div>

            {/* login */}
            <div className="col p-5 text-end">
              <button
                type="button"
                className={firstPage.class}
                onClick={() => pressAlart()}
              >
                {firstPage.login}
              </button>
            </div>
          </div>
          {/* header end */}
          <div className="introduction row mx-auto">
            <div className="row">
              <b className="title mt-5 mb-4">{firstPage.title}</b>
              <p className="text-content mb-3">{firstPage.contents}</p>
            </div>

            <Landing landingPage={landingPage} pressAlart={pressAlart} />
          </div>
        </div>
      </div>

      {/* first part end */}

      {/* second part */}
      {/* Enjoy on your TV */}
      <div className="border-bottom border-5 border-secondary">
        <div className="features container-lg row row-cols-1 row-cols-lg-2 p-2 mt-3 mx-auto">
          <div className="col-11 col-lg-6">
            <b className="sub-title">{secondPage.onTV.title}</b>
            <p className="text-character">{secondPage.onTV.content}</p>
          </div>

          <div className="frame col-5 col-lg-6 mb-5">
            <div className="photo">
              <img
                id="photo"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              />
            </div>
            <div className="video">
              <video muted autoPlay loop id="video">
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Download shows */}
      <div className="border-bottom border-5 border-secondary">
        <div className="features container-lg row row-cols-1 row-cols-lg-2 flex-row-reverse mt-3 p-2 mx-auto">
          <div className="col-11 col-lg-6">
            <b className="sub-title">{secondPage.download.title}</b>
            <p className="text-character">{secondPage.download.content}</p>
          </div>

          <div className="frame col-5 col-lg-6">
            <div className="photo">
              <img
                id="photo"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              />
            </div>
            <div className="downloading">
              <div className="border-self d-flex align-items-center row row-cols-3 p-1 m-0">
                <div className="col-3">
                  <img
                    className="download-poster"
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  />
                </div>
                <div className="col-6 py-1">
                  <p className="download-title m-0">
                    {secondPage.download.posterTitle}
                  </p>
                  <p className="download-text m-0">
                    {secondPage.download.posterDownload}
                  </p>
                </div>
                <div className="col-1 p-auto">
                  <img
                    className="download-photo"
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Watch everywhere */}
      <div className="border-bottom border-5 border-secondary">
        <div className="features container-lg row row-cols-1 row-cols-lg-2 p-2 mt-3 mx-auto">
          <div className="col-11 col-lg-6">
            <b className="sub-title">{secondPage.everywhere.title}</b>
            <p className="text-character">{secondPage.everywhere.content}</p>
          </div>
          <div className="frame col-5 col-lg-6 mb-5">
            <div className="photo">
              <img
                id="photo"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              />
            </div>
            <div className="watch-everywhere">
              <video muted autoPlay loop id="watch-video">
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* second part end */}

      {/* third part Q&A */}
      <div className="border-bottom border-5 border-secondary my-5 py-4">
        <div className="mb-4">
          <b className="title">{qaContentLan.title}</b>
        </div>
        {qaContentLan.contents.map((qa, index) => (
          <div key={qa.question}>
            <QAPad
              question={qa.question}
              answer={qa.answer}
              openStatus={openStatus}
              setOpenStatus={setOpenStatus}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              id={index}
            />
          </div>
        ))}

        <br />
        <br />
        <br />
        <Landing landingPage={landingPage} />
      </div>

      {/* third part Q&A end */}

      {/* forth part contact */}
      <div className="container-lg w-75 mx-auto text-start mb-3 mt-5">
        <div className="my-4">
          <a className="contact-title" onClick={() => pressAlart()}>
            {contactContentLan.title}
          </a>
        </div>

        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 text-start">
          {contactContentLan.contents.map((item, index) => (
            <div className="col" key={index}>
              <ContactPad item={item} pressAlart={pressAlart} />
            </div>
          ))}
        </div>
      </div>
      {/* forth part contact end */}

      {/* language select */}
      <div className="container-lg w-75 text-start my-4">
        <div className="select-box row-3">
          <select onChange={(e) => handleChangeLan(e)}>
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* language select end */}

      {/* footer */}
      <div className="container-lg w-75 mx-auto text-start">
        <footer>
          <p className="footer-text">
            本頁面為網頁切版demo, 使用Netflix服務請連結至:{" "}
            <a href="https://www.netflix.com/tw/">
              https://www.netflix.com/tw/
            </a>
          </p>
        </footer>
        <br />
        <br />
      </div>
    </div>
  );
}

const Landing = (props) => {
  const landingPage = props.landingPage;
  const pressAlart = props.pressAlart;
  return (
    <div>
      <div className="row px-3">
        <p className="text-normal">{landingPage.title}</p>
      </div>

      <div className="row justify-content-center align-items-center text-center">
        <form>
          <input
            className="email"
            type="email"
            placeholder={landingPage.email}
            required
          ></input>
          <button className="start" onClick={() => pressAlart()}>
            {landingPage.start} <i className="fas fa-chevron-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

const QAPad = (props) => {
  const question = props.question;
  const answer = props.answer;
  const openStatus = props.openStatus;
  const setOpenStatus = props.setOpenStatus;
  const openIndex = props.openIndex;
  const setOpenIndex = props.setOpenIndex;
  const id = props.id;

  const [qaController, setQaController] = useState("");
  const [qaBox, setQabox] = useState("closed");

  const handleClick = () => {
    setOpenStatus(statusChange());
    setOpenIndex(!openStatus[id].status ? id : -1);
  };

  const statusChange = () => {
    let newStatus = [...openStatus];

    if (openIndex >= 0 && openIndex != id) {
      newStatus[openIndex] = {
        id: openIndex,
        status: false,
      };
    }

    if (openStatus[id].status) {
      newStatus[id] = {
        id: id,
        status: false,
      };
    } else {
      newStatus[id] = {
        id: id,
        status: true,
      };
    }
    return newStatus;
  };

  useEffect(() => {
    openControl(openStatus[id].status);
  }, [openStatus[id].status]);

  const openControl = (status) => {
    setQaController(status ? "rotated" : "non-rotated");
    setQabox(status ? "open" : "closed");
  };

  return (
    <div className="qa-section mx-auto text-center">
      <div className="d-grid">
        <button
          className="qa-background text-character mb-1"
          onClick={() => handleClick()}
        >
          <div className="row aling-items-center">
            <div className="col text-start m-3 me-0 p-0 ps-3">{question}</div>
            <div className="col controller m-3 ms-0 p-0">
              <div className={qaController}>
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
        </button>
      </div>

      <div className={qaBox}>
        <div className="qa-background mb-3 px-3 py-4 text-start">
          {answer.map((content, index) => (
            <p className="qa-text text-character" key={index}>
              {content}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPad = (props) => {
  const item = props.item;
  const pressAlart = props.pressAlart;
  return (
    <div>
      <div>
        <a className="contact-text" onClick={() => pressAlart()}>
          {item}
        </a>
      </div>
    </div>
  );
};

// Cht content
const first = {
  title: "不限時數的電影與節目，還有更多精彩內容。",
  contents: "隨處都能觀賞，可隨時取消。",
  login: "登入",
  class: "btn-login-cht",
};

const landingContent = {
  title: "準備開心觀賞了嗎？請輸入您的電郵，以建立或重新啟用您的帳戶。",
  email: "電郵地址",
  start: "開始使用",
};

const second = {
  onTV: {
    title: "在電視上觀賞。",
    content:
      "在智慧型電視、PlayStation、Xbox、Chromecast、Apple TV、藍光播放器等多種裝置上觀賞。",
  },
  download: {
    title: "下載您的節目以便離線觀賞。",
    content: "輕鬆儲存您最喜歡的影片，讓您時時都能盡情觀賞。",
    posterTitle: "怪奇物語",
    posterDownload: "下載中……",
  },
  everywhere: {
    title: "隨處都能觀賞。",
    content:
      "隨您在手機、平板電腦、筆記型電腦和電視上串流不限時數的電影與節目，無額外費用。",
  },
};

const qaTitle = "常見問題解答";

const qaContent = [
  {
    question: "Netflix 是什麼？",
    answer: [
      "Netflix 是串流服務，透過數千種可連結網路的行動裝置，提供各種獲獎肯定的節目、電影、動畫、紀錄片等精彩內容。",
      "只要支付一筆經濟實惠的月費，就能隨時隨地，盡情觀賞，毫無廣告。時時都有新的內容供您探索，而且每星期都會加入新的節目與電影！",
    ],
  },
  {
    question: "Netflix 如何計費？",
    answer: [
      "只要支付一筆固定月費，就能用您的智慧型手機、平板電腦、智慧型電視、筆記型電腦或串流裝置觀賞 Netflix。各種方案介於每月 $270 至 $390。無額外費用，不須綁約。",
    ],
  },
  {
    question: "在哪裡觀賞？",
    answer: [
      "在不限數量的裝置上隨時隨地觀賞。登入您的 Netflix 帳戶，就能使用您的個人電腦，或是提供 Netflix App 的任何可上網行動裝置，在 netflix.com 網站上即時觀賞，包括智慧型電視、智慧型手機、平板電腦、串流媒體播放器和遊戲機。",
      "您也能使用 iOS、Android 或 Windows 10 App 下載最喜歡的節目。使用下載功能，就能在外出且沒有網路連線時觀賞。Netflix 時時帶著走。",
    ],
  },
  {
    question: "如何取消？",
    answer: [
      "Netflix 彈性十足。沒有難懂的合約，也不須綁約。點個兩下，就能線上輕鬆取消您的帳戶。無取消費用，可隨時開始或停用您的帳戶。",
    ],
  },
  {
    question: "可以在 Netflix 觀賞什麼內容？",
    answer: [
      "Netflix 擁有豐富的影片內容庫，包括長片、紀錄片、節目、動畫、獲獎肯定的 Netflix 原創作品與更多內容。隨時隨地，盡情觀賞。",
    ],
  },
];

const contactTitle = "有疑問嗎？請聯絡我們。";

const contactItems = [
  "常見問題",
  "說明中心",
  "帳戶",
  "媒體中心",
  "投資人關係",
  "工作機會",
  "觀賞方式",
  "使用條款",
  "隱私權",
  "Cookie設定",
  "企業資訊",
  "聯絡我們",
  "速度測試",
  "法律聲明",
  "Netflix 原創作品",
];

// English content
const firstEng = {
  title: "Unlimited movies, TV shows, and more.",
  contents: "Watch anywhere. Cancel anytime.",
  login: "Sign In",
  class: "btn-login-eng",
};

const landingContentEng = {
  title:
    "Ready to watch? Enter your email to create or restart your membership.",
  email: "Email address",
  start: "Get Start",
};

const secondEng = {
  onTV: {
    title: "Enjoy on your TV.",
    content:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
  },
  download: {
    title: "Download your shows to watch offline.",
    content: "Save your favorites easily and always have something to watch.",
    posterTitle: "Stranger Things",
    posterDownload: "Downloading...",
  },
  everywhere: {
    title: "Watch everywhere.",
    content:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
  },
};

const qaTitleEng = "Frequently Asked Questions";

const qaContentEng = [
  {
    question: "What is Netflix?",
    answer: [
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    ],
  },
  {
    question: "How much does Netflix cost?",
    answer: [
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from TWD270 to TWD390 a month. No extra costs, no contracts.",
    ],
  },
  {
    question: "Where can I watch?",
    answer: [
      "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    ],
  },
  {
    question: "How do I cancel?",
    answer: [
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    ],
  },
  {
    question: "What can I watch on Netflix?",
    answer: [
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    ],
  },
];

const contactTitleEng = "Questions? Contact us.";

const contactItemsEng = [
  "FAQ",
  "Help Center",
  "Account",
  "Media Center",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Netflix Originals",
];
