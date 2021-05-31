import Image from './Image'

function App() {
  return (
    <div className="App">
      <main className="container">
        <section className="card">
          <Image />
          <aside className="card-stats">
            {/* Stats container for the text */}
            <div className="stats-c-text">
              <h1 className="stats-title">
                Get <span>insights</span> that helps
              your business grow.
              </h1>
              <p className="stats-description">
                Discover the benefits of data analytics
                and make better decisions regarding
                revenue, customer expirience and overall
                efficiency.
              </p>
            </div>
            {/* Stats container for stats */}
            <div className="stats-c-stats">
              <aside className="stats">
                <h2>10k+</h2>
                <p>COMPANIES</p>
              </aside>

              <aside className="stats">
                <h2>314</h2>
                <p>TEMPLATES</p>
              </aside>

              <aside className="stats">
                <h2>12M+</h2>
                <p>QUERIES</p>
              </aside>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
