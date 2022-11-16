import './styles.scss'

import { CaretRight } from 'phosphor-react'
import ImageHome from '../../assets/image-home.png'
import Navigation from '../Navigation'

export default function Home () {
    return(
        <section className='home'>
            <Navigation />

            <div className="container">
                <div className="block-left">
                    <div className="block-save">
                        <p>
                            <span>75% SAVE</span>
                            For the Black Friday weekend
                        </p>
                    </div>

                    <h1 className='title'>Fastest & secure platform to invest in crypto</h1>
                    <p className='subtitle'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>

                    <button className="button-try">
                        Try for FREE <div className='arrow'><CaretRight weight="bold" /></div>
                    </button>
                </div>

                <div className="block-right">
                    <img src={ImageHome} alt="" />
                </div>
            </div>
        </section>
    )
}