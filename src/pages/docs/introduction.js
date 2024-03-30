import React from 'react';
import { DocsLayout } from '../../layouts';
import '../../styles/docs.css';

export default function Introduction() {
  return (
    <DocsLayout>
      <div className='docs__content'>
        <h3>Introduction</h3>
        <p>
          OverVue is a prototyping tool that enables developers to seamlessly
          create and visualize Vue applications through a dynamically rendered
          tree display of routing and component hierarchy, and live-generated,
          exportable boilerplate code.
        </p>
        <p>
          The best way to get started is by following our new in-app user
          tutorial!
        </p>
        <img
          alt='getting started'
          src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnY0MXprOWE5b2hsOWFvemhoa3g0a3lobXJiaGFmemVscTdzYzBtYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6JcTGjOqBndt954kpj/giphy.gif'
          style={{ maxWidth: 300 }}></img>
        <br />
        <h3>Key Features</h3>​
        <ul className='minusMargin'>
          <li>
            Create components that you can reposition in the tree interface via
            dragging & dropping
          </li>
          <li>Add nested, draggable HTML elements and Vuetensils components</li>
          <li>Preview your working component boilerplate code</li>
          <li>Save, import, and export project functionality</li>
        </ul>
      </div>
    </DocsLayout>
  );
}
