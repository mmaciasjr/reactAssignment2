import desktop from './images/bg-intro-desktop.png';
// import mobile from './images/bg-intro-mobile.png';
import './App.css';

function App() {

    return (
        <div className="App">
            <>
                {/*<header>*/}

                {/*</header>*/}

                <main>
                    <img src={desktop}/>
                    {/*<img src={mobile}/>*/}


                <div className="container">

                    <div className="learnCode">
                        <h1 className="learnCodeTitle">Learn to code by watching others</h1>
                        <p className="experienceParagraph"> See how experienced developers solve problems in
                            real-time. Watching scripted
                            tutorials is great, but understanding how developers think is invaluable</p>
                    </div>

                    <div className="infoForm">
                        <div className="trialHeader">
                            <p className="tryFree">Try it free 7 days<span className="thereafter"> then $20/mo. thereafter</span>
                            </p>
                        </div>
                        <form name="Form" className="mainDemoForm">

                            <div className="formFirstName">
                                <input type="text" name="firstName" placeholder="First Name"/>
                            </div>

                            <div className="formLastName">
                                <input type="text" name="lastName" placeholder="Last Name"/>
                            </div>

                            <div className="formEmail">
                                <input type="text" name="emailAddress" placeholder="Email Address"/>
                            </div>
                            <div className="formPassword">
                                <input type="text" name="formPassword" placeholder="Password"/>
                            </div>
                            <div className="trialButton" role="button">
                                Claim your free trial
                            </div>
                            <div className="footerText">
                                <p>By clicking the button, you are agreeing to our <span>Terms and Services</span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                </main>
            </>
        </div>
    );
}

export default App;
