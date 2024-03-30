import React from 'react';
import { DocsLayout } from '../../layouts';
import '../../styles/docs.css';
import { downloadLinks } from '../../data/download-links';

export default function Installation() {
  return (
    <DocsLayout>
      <div className='docs__content'>
        <h3>Installation</h3>
        <p>OverVue is compatible with MacOS, Linux, and now Windows.</p>
        <p>
          To test the development version of OverVue, fork and clone our{' '}
          <a href='https://github.com/open-source-labs/OverVue'>
            GitHub repository
          </a>
          !{' '}
        </p>
        <br />
        <h3>Installation Instructions</h3>
        <p>
          1. Download the desktop App for{' '}
          <a href={downloadLinks.macOS}>MacOS</a>,
          <a href={downloadLinks.windows}> Windows</a>, or{' '}
          <a href={downloadLinks.linux}>Linux</a>.
        </p>
        <p>
          2. For Linux: Follow the{' '}
          <a href='https://help.ubuntu.com/kubuntu/desktopguide/C/manual-install.html'>
            {' '}
            installation instructions
          </a>{' '}
          for .deb files.
        </p>
        <p style={{ 'padding-left': '20px' }}>
          For MacOS: Unzip the compressed folder. <br />
          ** Special Note: OverVue 11.0 is currently in beta mode as the team
          currently waiting for their apple ID credential. In the meantime,
          OverVue is ready to use and download, but follow the directions below
          to open the app: <br />
          <br />
          <table>
            <tr>
              <td>
                Hover Over the App, <b>Right Click</b>, select Open, and select
                Open again
              </td>
            </tr>
            <tr>
              <td>
                <img
                  alt='Open App By Right Click, then Open'
                  src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjd5aXU0ZmxmNXhubm9hZTN1eXQ4ZG5jZmV[…]9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R9uICEpMUoJJj8TZQN/giphy.gif'
                  style={{ maxWidth: 300 }}></img>
                <br />
              </td>
            </tr>
          </table>
        </p>
        <p>3. Run OverVue 11.0.</p>​
      </div>
    </DocsLayout>
  );
}
