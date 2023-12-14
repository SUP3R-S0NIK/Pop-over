class MenuBot extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="settings-toolbar">
          <h2 class="settings-heading">Paramètres</h2>
          <ul class="settings-list">
            <li class="settings-item">
              <button popovertarget="profile-settings-popover">
                <span aria-hidden="true">👤</span>
                <span class="sr-only">Profil</span>
              </button>
            </li>
            <li class="settings-item">
              <button popovertarget="theme-settings-popover">
                <span aria-hidden="true">🎨</span>
                <span class="sr-only">Apparence</span>
              </button>
            </li>
            <li class="settings-item">
              <button popovertarget="region-settings-popover">
                <span aria-hidden="true">🌎</span>
                <span class="sr-only">Pays</span>
              </button>
            </li>
          </ul>
        </div>
      `;
    this.render();
  }

  render() {
    this.rendered = true;
  }
}

customElements.define("menu-bot", MenuBot);
