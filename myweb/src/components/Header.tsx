import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className='nav-container'>
		<div className="logo">
			<img src="avatar.png" className='logoImg'></img>
			<span className='logoName'>Trang Pham</span>
		</div>

		<ul className='nav-links'>
			<li><NavLink to="/">About</NavLink></li>
			<li><NavLink to="/projects">Projects</NavLink></li>
			<li><NavLink to="/blog">Blog</NavLink></li>
		</ul>
       
      </nav>
    </header>
  )
}
