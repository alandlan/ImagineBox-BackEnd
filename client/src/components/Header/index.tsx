import { SignInButton } from './SignInButton'
import styles from './styles.module.scss'

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <span className={styles.logo}>
                    Imagine<br/>
                    Box
                </span>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Categorias</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}