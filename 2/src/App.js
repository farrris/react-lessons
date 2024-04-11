import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';
import AlisaImg from './images/Alisa_Logo.png';

function App() {
  return (
      <div>
          <section className="hero  is-primary">
              <div className="hero-body">
                  <p className="title">Digital Assistants</p>
              </div>
          </section>
          <section className="container section">
              <div className="columns">
                  <div className="column is-4">
                      <ProfileCard img={AlexaImg} title="Alexa"  handle="@alexa99" description="It's Alexa..." />
                  </div>
                  <div className="column is-4">
                      <ProfileCard img={CortanaImg} title="Cortana" handle="@cortana13" description="It's Cortana..."/>
                  </div>
                  <div className="column is-4">
                      <ProfileCard img={SiriImg} title="Siri" handle="@siri77" description="It's Siri..."/>
                  </div>
                  <div className="column is-4">
                      <ProfileCard img={AlisaImg} title="Alisa" handle="@alisa11" description="It's Alisa..."/>
                  </div>
              </div>
          </section>
      </div>
  );
}

export default App;
