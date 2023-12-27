import '../styles/header.css'
import burgerMenu from '../assets/icon-menu.svg'
import logo from '../assets/logo.svg'
import cart from '../assets/icon-cart.svg'


export const Header = () => {


    return (
        <header className='container flex justify-between px-5'>
            <div className='left-side flex'>
                <button>
                    <img src={burgerMenu}/>
                </button>
                <img className='px-3.5' src={logo}/>
            </div>
            <div className='right-side flex'>
                <img className='px-4' src={cart} />
                <div className='img-ball bg-red-600 w-5 h-5 rounded-xl'></div>
            </div>
        </header>
    )
}