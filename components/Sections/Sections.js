const Sections = () => {
  const sections = [
    {
      title: 'Your First Step Towards Investment', 
      details: 'Investing can be a great way to build wealth and secure your financial future, but it can also be daunting if you don\'t know where to start. We are here to guide you through this journey. And one of the important thing to do before you start your investing journey in stock market is to have a demat and trading account. We help you choose best trading and demat account based on your financial goals and needs. <br /><br />Please use the link below to open your free demat and trading account. Or get in touch to know more. ',
      cta: 'Open Demat Account',
      cardBorderClass: 'border-info',
      imageBgClass: 'text-bg-info',
      ctaBtnClass: 'btn-info',
    },
    {
      title: 'Know More About Investing In Stocks', 
      details: 'Investing in Indian stocks can be a lucrative opportunity for those who are willing to take calculated risks. The Indian stock market is the fifth largest in the world and offers a diverse range of investment options, from blue-chip stocks to small-cap companies. However, it\'s important to have a good understanding of the Indian economy, politics, and culture before investing. Factors such as GDP growth, inflation rates, and government policies can have a significant impact on the stock market. In addition, investors should conduct thorough research on individual companies and sectors to identify potential opportunities and risks. With the right strategy and approach, investing in Indian stocks can provide long-term growth and diversification to an investment portfolio.',
      cta: 'Start Investing/ Get In Touch',
      cardBorderClass: 'border-secondary',
      imageBgClass: 'text-bg-secondary',
      ctaBtnClass: 'btn-secondary',
    },
    {
      title: 'Want to Start Trading with zero knowledge & free of cost?', 
      details: 'Algorithmic trading, also known as algo trading, is becoming increasingly popular in the Indian stock market. It involves using computer programs and algorithms to automate trades based on pre-set rules and conditions. Algo trading can provide several benefits such as faster and more accurate trade execution, reduced emotional bias, and the ability to analyze large amounts of data quickly. However, it\'s important to note that algo trading also carries certain risks, such as technical glitches or market volatility. It\'s crucial for traders to have a thorough understanding of the algorithms being used and to continuously monitor and adjust their strategies. With the right approach and risk management, algo trading can provide a competitive edge and potentially higher returns in the Indian stock market.',
      cta: 'Know More',
      cardBorderClass: 'border-success',
      imageBgClass: 'text-bg-success',
      ctaBtnClass: 'btn-success',
    },
  ]
  return <div className="sections">
    <div className="row">
      {sections.map((s, index) => {
        if (index % 2 === 0) {
          return <div className="col-sm-12">
              <div className={`card ${s.cardBorderClass}`}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{s.title}</h3>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: s.details}}></p>
                    <a href="#" className={`btn text-white ${s.ctaBtnClass}`}>{s.cta}</a>
                  </div>
                </div>
                <div className={`col-md-4 ${s.imageBgClass}`}></div>
              </div>
            </div>
          </div>
        } else {
          return <div className="col-sm-12">
            <div className={`card ${s.cardBorderClass}`}>
              <div className="row g-0">
              <div className={`col-md-4 ${s.imageBgClass}`}></div>
                <div className="col-md-8">
                  <div className="card-body text-end ">
                    <h3 className="card-title">{s.title}</h3>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: s.details}}></p>
                    <a href="#" className={`btn text-white ${s.ctaBtnClass}`}>{s.cta}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      })}
    </div>
  </div>
}

export default Sections;