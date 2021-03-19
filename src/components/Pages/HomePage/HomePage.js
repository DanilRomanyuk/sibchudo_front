import React, {Component} from "react";// import CatSlider from "./CatSlider/CatSlider";
import Carousel from 'react-elastic-carousel'
import AbstractPage from "../AbstractPage/AbstractPage";
import TitleH2 from "../../BaseElements/TitleH2/TitleH2";
import './HomePage.css';
import Button from "../../BaseElements/Button/Button";
import axios from "axios";
// import CatSlider from "./CatSlider/CatSlider";

let dataCats;
class HomePage extends Component {
    componentDidMount(){
        
        axios.get('http://45.84.224.17/api/litter?limit=2')
  .then(function (response) {
    
   dataCats=response.data;
   console.log(dataCats);
   console.log(response.data[0].community.name)
  })
    }
    render() {
        console.log(dataCats[0].community.name)
        return (
            <AbstractPage title={'Главная - Питомник «Сибирское Чудо» – Коллективный питомник сибирских кошек'}>
                <TitleH2 text={"О питомнике"}/>
                <div className={"block"}>
                    <p>
                        «Сибирское Чудо» – Коллективный питомник сибирских кошек
                        Мы рады приветствовать вас на сайте сибирских кошек колорных и традиционных окрасов.
                    </p>
                    <p>
                        Наш питомник заслуженно является одним из самых крупных коллективных питомников в России. Он
                        зарегистрирован по двум системам WCF и FIFE.
                    </p>
                </div>

                <div className={'flex'}>
                    <TitleH2 text={"О наших кошках"}/>
                    <Button color={'green'} href={"/cats"}>Все кошки</Button>
                </div>
                <div className={"block"}>
                    <div className={'cat_description'}>
                        Все наши животные привиты и имеют документы. Коты и кошки живут у своих хозяев. Все наши
                        животные социализированы и отлично ладят с другими кошками. Наши
                        кошки снимаются в рекламе и приносят победы на выставках!
                    </div>
                    {/*<CatSlider/>*/}
                </div>

                <div className={'flex'}>
                    <TitleH2 text={"Наши котята"}/>
                    <Button color={'green'} href={"/kittens"}>Все котята</Button>
                </div>
                <div className={'slider'}>
                <Carousel itemsToShow={3}>
                <div>
                <h2>Mother</h2>
                <img src="https://brandlogovector.com/wp-content/uploads/2020/08/React-Logo-Small.png" alt="pic" /></div>
                <div>
                <h2>{dataCats[0].community.name}</h2>
                <img src="https://brandlogovector.com/wp-content/uploads/2020/08/React-Logo-Small.png" alt="pic" /></div>
                <div>
                <h2>Dad</h2>
                <img src="https://brandlogovector.com/wp-content/uploads/2020/08/React-Logo-Small.png" alt="pic" /></div>
                <div><img src="https://brandlogovector.com/wp-content/uploads/2020/08/React-Logo-Small.png" alt="pic" /></div>
                 <div>{dataCats}</div>
                 </Carousel>
                   </div>
                <div className={"block"}>
                </div>

                <TitleH2 text={"Наши достижения"}/>
                <div className={"block"}>
                </div>
            </AbstractPage>
        );
    }
}

export default HomePage;
