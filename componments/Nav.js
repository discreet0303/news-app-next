import Link from 'next/link';
import {useRouter} from 'next/router'
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  const { pathname } = useRouter();
  
  const HomeNav = () => (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href='/dashboard'>Go to Dashboard</Link>
        </li>
      </ul>
    </nav>
  )

  const DashboardNav = () => (
    <nav className={navStyles.dashboard}>
      <ul>
        <li>
          <Link href='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link href='/dashboard/article/create'>Create</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href='/'>Back To Home</Link>
        </li>
      </ul>
    </nav>
  );

  if (/^\/dashboard/.test(pathname)) return <DashboardNav />
  else return <HomeNav />
}

export default Nav