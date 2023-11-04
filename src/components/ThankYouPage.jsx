import ThankYouSvg from "/icon-thank-you.svg";

function ThankYouPage() {
  return (
    <div className="thank-you-container">
      <img className="thank-you-image" src={ThankYouSvg} alt="" />
      <h1 className="thank-you-text">Thank You!</h1>
      <p className="thank-you-paragraph">
        Thanks for confirming you subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to mail us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYouPage;
