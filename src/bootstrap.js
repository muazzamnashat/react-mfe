const React = require('react');
const { createRoot } = require('react-dom/client');

const packageJson = require('../../../package.json');

function App() {
  return React.createElement(
    'section',
    {
      style: {
        fontFamily: 'Helvetica, Arial, sans-serif',
        padding: '24px',
        border: '1px solid #d0d7de',
        borderRadius: '12px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f6f8fa 100%)',
        color: '#0f172a'
      }
    },
    React.createElement(
      'p',
      {
        style: {
          margin: '0 0 8px',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#0369a1'
        }
      },
      'React micro frontend'
    ),
    React.createElement(
      'h1',
      {
        style: {
          margin: '0 0 12px',
          fontSize: '28px',
          lineHeight: 1.2
        }
      },
      'MFE5'
    ),
    React.createElement(
      'p',
      {
        style: {
          margin: '0 0 8px',
          fontSize: '15px',
          lineHeight: 1.6
        }
      },
      'This remote is exposed through Module Federation and mounted in the Angular shell via a custom element.'
    ),
    React.createElement(
      'p',
      {
        style: {
          margin: 0,
          fontSize: '14px',
          color: '#475569'
        }
      },
      `React version: ${packageJson.devDependencies.react}`
    )
  );
}

class Mfe5Element extends HTMLElement {
  connectedCallback() {
    if (!this.rootNode) {
      this.mountPoint = document.createElement('div');
      this.rootNode = createRoot(this.mountPoint);
      this.appendChild(this.mountPoint);
    }

    this.rootNode.render(React.createElement(App));
  }

  disconnectedCallback() {
    if (this.rootNode) {
      this.rootNode.unmount();
      this.rootNode = null;
    }
  }
}

if (!customElements.get('mfe5-web-component')) {
  customElements.define('mfe5-web-component', Mfe5Element);
}
