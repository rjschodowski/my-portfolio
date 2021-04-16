import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import headerStyles from './header.module.scss'
import { link, header, title, navList, navItem, activeNavItem } from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
    `)

    return (
        <header className={header}>
            <h3>
                <Link className={title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h3>
            <nav>
                <ul className={navList}>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header