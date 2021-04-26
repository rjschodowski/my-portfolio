import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import headerStyles from './header.module.css'
import { link, header, title, navList, navItem, activeNavItem } from './header.module.css'

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
            <h6>
                <Link className={title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h6>
            <nav>
                <ul className={navList}>
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