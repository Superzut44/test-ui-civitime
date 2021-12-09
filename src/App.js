import React from 'react'
import './App.css';
import lightSkinned from './assets/color-FCD7B8.svg';
import fairSkinned from './assets/color-E0A39A.svg';
import tanSkinned from './assets/color-FCCC84.svg';
import darkSkinned from './assets/color-533724.svg';
import lightBlueColor from './assets/color-B2C7C7.svg';
import greenColor from './assets/color-88C10F.svg';
import redColor from './assets/color-FF1414.svg';
import marineColor from './assets/color-striped.svg';
import man from './assets/man.svg';
import woman from './assets/woman.svg';
import skin from './assets/skin.svg';
import shirt from './assets/t-shirt.svg';

const App = () => {
    return <figure className="card"> 
                <div className="card-header">
                    <h2 className="card-title">PROFIL</h2>
                </div>
                <div className="card-body">
                    <p className="card-question">Lequel de ces deux avatars préférez-vous ?</p>
                    <div className="card-people">
                        <img src={man} alt="a man"/>
                        <img src={woman} alt="a woman"/>
                    </div>
                    <div className="card-skin-and-shirt">
                        <div className="card-skin">
                            <img src={skin} alt="a skin"/>
                            <img src={lightSkinned} alt="a light-skinned"/>
                            <img src={fairSkinned} alt="a fair-skinned"/>
                            <img src={tanSkinned} alt="a tan-skinned"/>
                            <img src={darkSkinned} alt="a dark-skinned"/>
                        </div>
                        <div className="card-shirt">
                            <img src={shirt} alt="a t-shirt"/>
                            <img src={lightBlueColor} alt="a light-blue color"/>
                            <img src={greenColor} alt="a green color"/>
                            <img src={redColor} alt="a red color"/>
                            <img src={marineColor} alt="a marine color"/>
                        </div>
                    </div>
                    <div className="card-button-div">
                        <button className="card-button">VALIDER</button>
                    </div>
                </div>
            </figure>
}

export default App;