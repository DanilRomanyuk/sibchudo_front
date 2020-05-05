import React, {Component} from "react";
import './Footer.css';
import CatLink from "../../../BaseElements/Link/CatLink";

const PHONE = "+7(921)376-28-67";
const EMAIL = "verliokamaskarad@mail.ru";

class Footer extends Component {
    render() {
        return (
            <div className={'footer'}>
                <div>
                    <div>
                        <CatLink url={"tel:" + PHONE} ext>{PHONE}</CatLink>
                    </div>
                    <div>Санкт-Петербург</div>
                    <div>
                        <CatLink url={"mailto:" + EMAIL} ext>{EMAIL}</CatLink>
                    </div>
                </div>
                <div>
                    <div>
                        <CatLink url={"/about"}>О питомнике</CatLink>
                    </div>
                    <div>
                        <CatLink url={"/cats"}>Наши кошки</CatLink>
                    </div>
                    <div>
                        <CatLink url={"/kittens"}>Наши котята</CatLink>
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
