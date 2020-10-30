import menu from 'data/menu'

import Link from 'components/link'

const FooterMenu = () => (
  <div className="flex flex-col sm:flex-row justify-between text-base">
    {menu.footerLinks.map((tree, index) => (
      <nav key={`tree-${index}`} className="flex-grow">
        <ul>
          {tree.map((item, i) => (
            <li key={`item-${i}`}>
              <Link
                className="block py-1 text-current text-sm hover:text-teal-300"
                href={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    ))}
  </div>
)

export default FooterMenu
