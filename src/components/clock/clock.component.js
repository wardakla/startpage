class DigitalClock extends Component {
  refs = {
    digitalClock: "#digitalClock"
  };

  constructor() {
    super();
  }

  imports() {
    return [this.resources.fonts.roboto];
  }

  style() {
    return `
      .digital-clock.catppuccin-mocha {
        font-family: 'JetBrains Mono', 'Fira Mono', 'Roboto Mono', monospace;
        font-size: 1rem;
        color: #cdd6f4;
        background: linear-gradient(90deg, #1e1e2e 80%, #313244 100%);
        border-radius: 0.6rem;
        box-shadow: 0 2px 12px #18182566;
        margin: 1.5em 1em 1em 1em;
        padding: 0.2em 0.5em;
        letter-spacing: 0.08em;
        border: 1.5px solid #45475a;
        text-shadow: 0 1px 6px #585b7088;
        height: 20px;
        min-width: 120px;
        position: absolute;
        top: 105px;
        right: 40px;
        transition: box-shadow 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .digital-clock.catppuccin-mocha:hover {
        box-shadow: 0 2px 12px #b4befe66;
        border-color: #b4befe;
      }
    `;
  }

  template() {
    return `
      <div class="digital-clock catppuccin-mocha" id="digitalClock"></div>
    `;
  }

  updateDigitalClock() {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    h = h.toString().padStart(2, '0');
    this.refs.digitalClock.textContent = `${h}:${m}:${s} ${ampm}`;
  }

  connectedCallback() {
    this.render().then(() => {
      // Initialize clock
      this.updateDigitalClock();
      setInterval(() => this.updateDigitalClock(), 1000);
    });
  }
}
