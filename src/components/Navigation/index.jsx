import './styles.scss'
import LogoCrappo from '../../assets/logo.svg'

export default function Navigation(){
    return(
        <nav>
            <div className='container-nav'>
                <div>
                    <img src={LogoCrappo} alt="Logo Crappo" />
                </div>

                <div className='itens-right'>
                    <div className='list-nav'>
                        <ul>
                            <li>Products</li>
                            <li>Features</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='buttons-login'>
                        <p>Login</p>
                        <button>Register</button>
                    </div>
                </div>

            </div>
        </nav>
    )
}