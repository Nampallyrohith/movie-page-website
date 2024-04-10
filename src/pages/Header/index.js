import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";

import './index.css'

const Header = props => {
    const {onChangeSearchInput, toggleMenu, isMenuOpen} = props
    let input;
    const searchInputFunc = event => {
        input = event.target.value
    }

    
    return (
        <>
        {/* laptop view */}
            <nav className='laptop-nav'>
                <h1><Link className='nav-link nav-text-color-1' to='/'>MovieDb</Link></h1>
                
                <ul>
                    <li><Link className='nav-link nav-text-color-1' to='/'>Popular</Link></li>
                    <li><Link className='nav-link nav-text-color-1' to='/top-rated'>Top Rated</Link></li>
                    <li><Link className='nav-link nav-text-color-1' to='/upcoming'>Upcoming</Link></li>
                </ul>
                <div className='input-container'>
                    <input type='search' onChange={searchInputFunc} placeholder='Search Movie...' />
                    <button type="button" onClick={() => onChangeSearchInput(input)}>Search</button>
                </div>
            </nav>

            {/* mobile view */}
            <nav className='mobile-nav'>
                <h1><Link className='nav-link nav-text-color-1' to='/'>MovieDb</Link></h1>
                <button className='menu' onClick={() => toggleMenu()}>
                    <GiHamburgerMenu style={{width: '28px', height:"30px"}} />
                </button>
                {
                    isMenuOpen && (
                        <div className='side-bar'>
                            <button className='close-btn' onClick={() => toggleMenu()}>
                                <IoIosCloseCircleOutline style={{width: '28px', height:"32px"}} />
                            </button>
                            <ul className='side-bar-links'>
                                <li><Link className='nav-link nav-text-color-2' to='/'>Popular</Link></li>
                                <li><Link className='nav-link nav-text-color-2' to='/top-rated'>Top Rated</Link></li>
                                <li><Link className='nav-link nav-text-color-2' to='/upcoming'>Upcoming</Link></li>                            
                            </ul>
                        </div>
                    )
                }
            </nav>
        </>
        
    );
}

export default Header