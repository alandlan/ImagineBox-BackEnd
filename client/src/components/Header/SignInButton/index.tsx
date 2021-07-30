import {MdFingerprint} from 'react-icons/md'
import styles from './styles.module.scss'

export function SignInButton(){
    return (
        <button type="button" className={styles.signInButton}>
            <MdFingerprint/>
            Login
        </button>
    )
}