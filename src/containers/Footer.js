import React from 'react';
import styled from 'styled-components';
import linkedInLogo from '../assets/logo/linkedin.png';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { Button } from "../styles/Button";
// import { motion } from "framer-motion";
// import main from "../assets/logo/overvue_trans.png";

export const Footer = () => {
  return (
    <FooterEle>
      <Socials>
        <a
          className='social-link'
          href='https://github.com/open-source-labs/OverVue'>
          <GitHubIcon fontSize='large' />
        </a>
        <a
          className='social-link'
          href='https://www.linkedin.com/company/overvue-10/'>
          <img alt='linkedIn logo' src={linkedInLogo}></img>
        </a>
      </Socials>
      <h4>OverVue is licensed under the MIT License.</h4>
      <h4 className='OSLabs-line'>
        OverVue is an open-source project developed under tech accelerator
        <a href='https://opensourcelabs.io/'>&nbsp;OS Labs</a>.
      </h4>
    </FooterEle>
  );
};

const Socials = styled.div`
  display: flex;
  justify-content: center;
  a {
    margin: 0.5em;
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
  img {
    height: 2em;
  }
`;

const FooterEle = styled.div`
  // background-color: rgb(243, 245, 246);
  > * {
    margin: 0.7em;
  }
  display: inline;
  flex-direction: column;
  justify-self: flex-end;
  padding: 2.5em;

  h4 {
    color: grey;
    font-size: 1em;
  }

  .OSLabs-line,
  .OSLabs-line > a {
    display: inline;
    flex-direction: row;
    justify-content: center;
    font-size: 1em;
  }
`;
