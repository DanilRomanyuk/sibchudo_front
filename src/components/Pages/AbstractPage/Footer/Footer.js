import React, {Component} from "react";
import './Footer.css';
import Link from "../../../BaseElements/Link/Link";

const PHONE = "+7(921)376-28-67";
const EMAIL = "verliokamaskarad@mail.ru";

class Footer extends Component {
    render() {
        return (
            <div className={'footer'}>
                <div>
                    <div>
                        <Link url={"tel:" + PHONE}>{PHONE}</Link>
                    </div>
                    <div>Санкт-Петербург</div>
                    <div>
                        <Link url={"mailto:" + EMAIL}>{EMAIL}</Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link url={"/about"}>О питомнике</Link>
                    </div>
                    <div>
                        <Link url={"/cats"}>Наши кошки</Link>
                    </div>
                    <div>
                        <Link url={"/kittens"}>Наши котята</Link>
                    </div>
                </div>
                <div>
                    <div>© 2019 «Сибирское Чудо» - Коллективный питомник сибирских кошек.</div>
                </div>
            </div>
        );
    }
}

export default Footer;