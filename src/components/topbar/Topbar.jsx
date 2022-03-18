import './topbar.scss';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active') }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>M|D</a>
                    <div className="itemContainer">
                        <EmailIcon className='icon' />
                        <span>matiasdelorenzi1997@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
