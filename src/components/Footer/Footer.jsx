import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import {
    FaTelegram,
    FaFacebook,
    FaInstagram,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import {
    StyleFooter,
    FooterList,
    FooterItem,
    FooterLink,
} from './Footer.styled';

const Footer = () => {
    return (
        <StyleFooter>
            <FooterList>
                <FooterItem>
                    <FooterLink
                        href="https://github.com/StanislavGusak"
                        target="_blank"
                    >
                        <GoMarkGithub size={20} />
                    </FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink
                        href="https://www.linkedin.com/in/stanislav-gusak-354508268/"
                        target="_blank"
                    >
                        <BsLinkedin size={20} />
                    </FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink href="https://t.me/StanislavGusak" target="_blank">
                        <FaTelegram size={20} />
                    </FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink
                        href="https://www.facebook.com/profile.php?id=100058696877923"
                        target="_blank"
                    >
                        <FaFacebook size={20} />
                    </FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink
                        href="https://instagram.com/gusak7395/"
                        target="_blank"
                    >
                        <FaInstagram size={20} />
                    </FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink
                        href="mailto:g.slavik89@gmail.com"
                        target="_blank"
                    >
                        <AiOutlineMail size={20} />
                    </FooterLink>
                </FooterItem>
            </FooterList>
        </StyleFooter>
    );
};

export default Footer;