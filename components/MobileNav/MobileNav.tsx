import NavItems from '../NavItems/NavItems'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Mobilenav.module.scss'

interface IMobileNavProps {
  onClick: () => void
  mobileNavVisible: boolean
  activePage: string
}

export default function MobileNav(props: IMobileNavProps) {
  return (
    <nav
      className={`${styles['mobile-nav']} ${
        props.mobileNavVisible ? '' : styles['left-100']
      } xl:hidden black`}
    >
      <div
        className={`flex items-center justify-between py-3 px-1`}
        style={{ marginBottom: '2rem' }}
      >
        <Link href="/">
          <a className="pointer">
            <Image
              src="/assets/Logo-White.webp"
              alt="logo"
              height="24px"
              width="155px"
            />
          </a>
        </Link>
        <span onClick={props.onClick} className={styles['cross-sign']}>
          <Image
            src={'/assets/crossicon.webp'}
            width={16}
            height={16}
            alt=""
            loading="eager"
          />
        </span>
      </div>
      <NavItems activePage={props.activePage} onClick={props.onClick} />
    </nav>
  )
}
