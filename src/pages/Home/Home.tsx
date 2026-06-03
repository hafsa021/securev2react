import homeHero from '../../assets/home-hero.png'
import { pillars } from '../../config/pillars'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__content">
          <h1>
            Securing Your <span>Digital Future</span>
          </h1>

          <p>
            Having worked with top cybersecurity leaders like IBM,
            Computer Associates, Checkmarx, Palo Alto, and Trend
            Micro for over 2 decades, we have honed our expertise
            and embarked on a cybersecurity journey that prioritizes
            a layered 4 Pillar Product approach.
          </p>
        </div>

        <div className="hero__image">
          <img
            src={homeHero}
            alt="Four Pillared Approach To Cybersecurity"
          />
        </div>
      </section>

      <section className="pillars" aria-labelledby="pillars-heading">
        <h2 id="pillars-heading" className="pillars__title">
          Our Four Pillared Approach
        </h2>

        <div className="pillars__grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="pillars__card">
              <h3 className="pillars__card-title">{pillar.title}</h3>

              <div className="pillars__graphic">
                <img src={pillar.image} alt="" />
              </div>

              <p className="pillars__description">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
