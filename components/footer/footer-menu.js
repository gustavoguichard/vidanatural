import Link from 'next/link'

import menu from 'data/menu'

const FooterMenu = () => (
  <div className="flex flex-col sm:flex-row justify-between text-base">
    {menu.footerLinks.map((tree, index) => (
      <nav key={`tree-${index}`} className="flex-grow">
        <ul>
          {tree.map((item, i) => (
            <li key={`item-${i}`}>
              <Link href={item.path}>
                <a className="block py-1 text-current text-sm hover:text-teal-300">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    ))}
  </div>
)

export default FooterMenu
