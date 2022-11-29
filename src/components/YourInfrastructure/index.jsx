import './styles.scss'

import InvestSmart from '../../assets/invest-smart.png'
import DetailedStatistics from '../../assets/detailed-statistics.png'
import TrackInvestment from '../../assets/track-investments.png'

export default function YourInfrastructure(){

    return(
        <section className='your-infrastructure'>
            <div className='container'>
                <h1>Market sentiments, portfolio, and run the infrastructure of your choice</h1>

                <div className='list-features'>
                    <div className='feature feature-invest-smart'>
                        <div className='texts'>
                            <h2>Invest Smart</h2>
                            <p className='description'>
                                Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. 
                            </p>
                            <button>Learn More</button>
                        </div>

                        <img src={InvestSmart} alt="Invest Smart" />
                    </div>

                    <div className='feature feature-detailed-statistics'>
                        <div className='texts'>
                            <h2>Detailed Statistics</h2>
                            <p className='description'>
                                View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.
                            </p>
                            <button>Learn More</button>
                        </div>

                        <img src={DetailedStatistics} alt="Detailed Statistics" />
                    </div>

                    <div className='feature feature-track-investment'>
                        <div className='texts'>
                            <h2>Grow your profit and track your investments</h2>
                            <p className='description'>
                                Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.
                            </p>
                            <button>Learn More</button>
                        </div>

                        <img src={TrackInvestment} alt="Track Investment" />
                    </div>
                </div>
            </div>
        </section>
    )
}