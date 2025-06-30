const components = {
  "status-bar": Statusbar,
  "weather-forecast": Weather,
  "tabs-list": Tabs,
  "greeting-module": Greeting,
  "clock-module": DigitalClock,
  "search-overlay": Search,
};

Object.keys(components).forEach((componentName) => {
  if (!CONFIG.disabled.includes(componentName)) customElements.define(componentName, components[componentName]);
});
