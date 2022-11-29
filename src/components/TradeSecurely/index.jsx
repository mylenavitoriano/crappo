import './styles.scss'
import IconBitcoin from '../../assets/icons/icon-bitcoin.svg'
import IconEthereum from '../../assets/icons/icon-ethereum.svg'
import IconLitecoin from '../../assets/icons/icon-litecoin.svg'
import IconArrow from '../../assets/icons/icon-arrow-button.svg'

export default function TradeSecurely(){

    const listCryptocurrencies = [
        {
            "icon": IconBitcoin,
            "name": "Bitcoin",
            "abbreviation": "BTC",
            "description": "Digital currency in which a record of transactions is maintained."
        },
        {
            "icon": IconEthereum,
            "name": "Ethereum",
            "abbreviation": "ETH",
            "description": "Blockchain technology to create and run decentralized digital applications."
        },
        {
            "icon": IconLitecoin,
            "name": "Litecoin",
            "abbreviation": "LTC",
            "description": "Cryptocurrency that enables instant payments to anyone in the world."
        }
    ]

    return(
        <section className='trade-securely'>
            <div className='container'>
                <h1>Trade securely and market the high growth cryptocurrencies.</h1>

                <div className='blocks'>
                    {listCryptocurrencies.map((item, index) => (
                        <div className='block' key={index}>
                            <img src={item.icon} alt={item.name} />

                            <p className='title'>
                                {item.name} <span>{item.abbreviation}</span>
                            </p>

                            <p className='description'>{item.description}</p>

                            <button>
                                <p>Start mining</p>
                                <div className='icon-arrow'><img src={IconArrow} alt="Flecha"/></div>
                            </button>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}