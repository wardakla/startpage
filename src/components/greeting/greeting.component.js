class Greeting extends Component {
  refs = {
    greeting: "#greeting"
  };

  constructor() {
    super();
    this.name = "Swops";
    this.greetings = [
      `Hey, ${this.name}!🤍`,
      `Welcome back, ${this.name}!`,
      `Hope you have a great day, ${this.name}!`,
      `Good to see you, ${this.name}!`,
      `Ready to be productive, ${this.name}?`,
      `Let's make today awesome, ${this.name}!`,
      `Hello, ${this.name}! 😊`,
      `Did you just teleport here, ${this.name}? 🛸`,
      `${this.name} detected. Initiating awesomeness protocol.`,
      `Alert: ${this.name} has entered the building! 🚨`,
      `${this.name}, your keyboard missed you.`,
      `${this.name}, are you ready to break the internet?`,
      `${this.name}, unleash your inner coding ninja! 🥷`,
      `${this.name}, don't forget to blink while coding.`,
      `${this.name}, the bugs are scared now.`,
      `${this.name}, did you bring snacks for the code?`,
      `${this.name}, your code called—it wants a hug.`,
      `${this.name}, time to outsmart the computer (again).`,
      `${this.name}, caffeine levels: sufficient?`,
      `${this.name}, let's make some digital magic! ✨`,
      `${this.name}, the code is watching you... 👀`,
      `${this.name}, did you hear that whisper from the terminal?`,
      `${this.name}, your code just blinked at me.`,
      `${this.name}, the bugs are plotting something strange tonight.`,
      `${this.name}, the matrix is glitching—did you do that?`,
      `${this.name}, your keyboard typed by itself while you were gone.`,
      `${this.name}, the pixels are rearranging themselves for you.`,
      `${this.name}, reality.exe has encountered an unexpected error.`,
      `${this.name}, the code dreams of electric sheep.`,
      `${this.name}, welcome to the twilight zone of programming.`,
      `${this.name}, your code is ready for a wild ride!`,
      `${this.name}, the universe is waiting for your next commit.`,
      `${this.name}, did you just summon the coding spirits?`,
      `${this.name}, your code is now sentient.`,
      `${this.name}, the code gods are pleased with your presence.`,
      `${this.name}, let's conquer the digital realm together!`
    ];
  }

  imports() {
    return [this.resources.fonts.roboto];
  }

  style() {
    return `
      .greeting {
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
        min-width: 100px;
        position: absolute;
        top: 105px;
        left: 40px;
        transition: box-shadow 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .greeting:hover {
        box-shadow: 0 2px 12px #b4befe66;
        border-color: #b4befe;
      }
    `;
  }

  template() {
    return `
      <div class="greeting" id="greeting"></div>
    `;
  }

  setRandomGreeting() {
    this.refs.greeting.textContent = this.greetings[Math.floor(Math.random() * this.greetings.length)];
  }

  connectedCallback() {
    this.render().then(() => {
      // Initialize greeting
      this.setRandomGreeting();
      this.refs.greeting.addEventListener('click', () => this.setRandomGreeting());
    });
  }
}
