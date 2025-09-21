import frontedMentorLogo from '@assets/images/contact/frontend-mentor-logo.png'
import linkedinLogo from '@assets/images/contact/LI-In-Bug.png'
import githubLogo from '@assets/images/contact/github-logo-72.png'
import gmailLogo from '@assets/images/contact/gmail-logo-72.png'

import styles from './Contact.module.css'

function Contact() {
    return (
        <aside className={styles.contact}>
            <a href="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer">
                <img src={frontedMentorLogo} alt="Frontend Mentor logo" title='Challenge by Frontend Mentor'/>
                <span>Challenge by Frontend Mentor</span>
            </a>
            <a href="https://www.linkedin.com/in/hamza-doukkali-26434a335/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn logo" title='HaDo Dev LinkedIn'/>
                <span>Coded by HaDo Dev</span>
            </a>
            <a href="https://github.com/hadodev" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="github logo" title='HaDo Dev github profile'/>
                <span>HaDo Dev github profile</span>
            </a>
            <a href="mailto:hado.dev.app@gmail.com">
                <img src={gmailLogo} alt="mail" title='HaDo Dev gmail'/>
                <span>HaDo Dev gmail</span>
            </a>
    </aside>
    )
}

export default Contact