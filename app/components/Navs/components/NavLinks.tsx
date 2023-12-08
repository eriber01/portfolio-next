import Link from "next/link";
import styles from '../style.module.css'
import { nav } from "../data";

export default function NavLinks() {

  return (
    <main className="md:w-4/12">
      <nav>
        <ul className="flex justify-between">
          {
            nav.map(item => (
              <li key={item.id}>
                <Link className={`${styles.links}`} href={`#${item.id}`}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </main>
  )
}
