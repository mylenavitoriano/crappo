import './styles.scss';

import IconInvestment from '../../assets/icons/icon-investment.svg'
import IconInvestor from '../../assets/icons/icon-investor.svg'
import IconWorld from '../../assets/icons/icon-world.svg'
import ImageWhyCrappo from '../../assets/why-crappo.png'

export default function WhyCrappo () {
    return(
        <section className='why-crappo'>
            <div className="container">
                <div className="cards-number">
                    <div className="card">
                        <div className="img">
                            <img src={IconInvestment} alt="Icon Investment" />
                        </div>
                        <div className="texts">
                            <h1>$30B</h1>
                            <p>Digital Currency Exchanged</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img">
                            <img src={IconInvestor} alt="Icon Investor" />
                        </div>
                        <div className="texts">
                            <h1>10M+</h1>
                            <p>Trusted Wallets Investor</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img">
                            <img src={IconWorld} alt="Icon World" />
                        </div>
                        <div className="texts">
                            <h1>195</h1>
                            <p>Countries Supported</p>
                        </div>
                    </div>
                </div>

                <div className='block-why-crappo'>
                    <img src={ImageWhyCrappo} alt="Why you should choose CRAPPO" />

                    <div className='texts-why-crappo'>
                        <h1>Why you should choose CRAPPO</h1>
                        <p>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}