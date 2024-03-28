import React, { useState } from 'react';
import HeadTwoStyle from '../styles/HeadTwoStyle';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Body = () => {
  const gifListObj = {
    1: {
      link: 'https://media.giphy.com/media/MHqQTb5Vdtewlra4pG/giphy.gif',
      header: 'Create Components',
      description:
        'Quickly start your project by creating and naming your first component. Interact with it in the CSS Container.',
    },
    2: {
      link: 'https://media.giphy.com/media/YyPpNuH86r25JZNd46/giphy.gif',
      header: 'Add and change HTML Elements',
      description:
        'Add HTML elements inside your component. You can now modify the specifications of your prototype.',
    },
    3: {
      link: 'https://media.giphy.com/media/3eKBo9Qfi16mVdGIz4/giphy.gif',
      header: 'Add attributes to components',
      description:
        'Add a class and/or an ID attribute to the component to tailor it to your needs.',
    },
    4: {
      link: 'https://media.giphy.com/media/1ttTOYNOTYBSOoWtG1/giphy.gif',
      header: 'Add Notes',
      description:
        'You can add personalized messages to help you keep track of your components.',
    },
    // 5: {
    //   link: "https://media.giphy.com/media/aXMkIStyTE0jkNlRtO/giphy.gif",
    //   header: "Add Two-Way Binding or other Attributes",
    //   description: "Options to add attributes to add specific functionality such as two way binding and class is now available.",
    // },
    // 6: {
    //   link: "https://media.giphy.com/media/Q0DYBMnuMLXoo5buvW/giphy.gif",
    //   header: "Style HTML Elements",
    //   description: "Stylize HTML elements to visualize your product. Adjustable style options to include height, width, color, and size.",
    // },
    // 7: {
    //   link: "https://media.giphy.com/media/3j42CzkMDEpEFFbJZT/giphy.gif",
    //   header: "Child Components",
    //   description: "Child components can be easily incorporated into the code snippet. Child components will be available to be added from the HTML element list.",
    // },
    // 8: {
    //   link: "https://media.giphy.com/media/vncIbdxJ36uU7a1bk3/giphy.gif",
    //   header: "Visualize Prototype",
    //   description: "Note the project's high level overview by visiting the Project Tree tab to observe the component's hierarchy.",
    // },
    // 9: {
    //   link: "https://media.giphy.com/media/JLCUOmKfQpOmdWUf4l/giphy.gif",
    //   header: "Code Snippet",
    //   description: "The boilerplate code is visible at every step of prototyping and dynamically updates according to new edits.",
    // },
    // 10: {
    //   link: "https://media.giphy.com/media/v8IbYTVrgFboHgpxBB/giphy.gif",
    //   header: "Export boilerplate",
    //   description: "Export the prototype's code in a lightweight boilerplate and develop the product further in an IDE.",
    // }
  };

  const [gifImage, setGifImage] = useState(gifListObj[1].link);

  const handleChange = (event) => {
    setGifImage(gifListObj[event.currentTarget.id].link);
  };

  const toggleButtonArray = [];
  for (let i = 1; i <= Object.keys(gifListObj).length; i++) {
    toggleButtonArray.push(
      <ToggleButton>
        <input
          type='radio'
          class='btn-check'
          name='options'
          id={i}
          autocomplete='off'
          onClick={(event) => handleChange(event)}
        />
        <label class='btn btn-light' for={i}>
          <h1>{gifListObj[i].header}</h1>
          <p>{gifListObj[i].description}</p>
        </label>
      </ToggleButton>
    );
  }

  return (
    <div>
      {' '}
      <Divider className='divider'></Divider>
      <BodyHeader className='new-header'>
        What's new in OverVue 11.0?
      </BodyHeader>
      <SectionContainer>
        <Section>
          <HeadTwoStyle>
            <h1>Boilerplate Code Generation</h1>
            <p className='p'>
              Toggle between Options and Composition API displayed in the
              boilerplate code generator!{''}
              <img
                alt='options-compAPI'
                className='shadow num2'
                src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWxoMnNoaHp4MThoOWtvem45b2c2MDVzcmd2ZngxbTBvNm5zYXV0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Knz7Otco4dAPV89Enh/giphy.gif'
                style={{ 'max-width': '250px' }}
              />
            </p>
            <br />
          </HeadTwoStyle>
        </Section>

        <Section>
          <ReverseLayout>
            <HeadTwoStyle>
              <div className='num1'>
                <h1>Pinia State Library Integration</h1>
                <p className='p'>
                  Under the hood, Pinia leverages Vue 3's Composition API,
                  offering a more flexible and intuituve approach to state
                  management.
                </p>
              </div>
            </HeadTwoStyle>
          </ReverseLayout>
        </Section>
        <div className='aurora-2'></div>
        <div className='aurora-3'></div>
        <br />
        <br />
        <Section>
          <HeadTwoStyle>
              <h1>Windows Users Rejoice!</h1>
              <p className='p'>
                Windows users now have the ability to download and set up
                OverVue. With OverVue 11.0, Teams with members using various
                operating systems can collaborate effectively without
                compatiblity issues.
              </p>
          </HeadTwoStyle>
        </Section>
      </SectionContainer>
      {/* <AdditionalFeature>
        <BodyHeader className='additional-feature-header'>
          Additional Features
        </BodyHeader>
        <div className='feature-toggle'>
          <ImageContainer>
            <img
              alt="Gif of exporting the prototype's boilerplate"
              className='shadow'
              src={gifImage}
            />
          </ImageContainer>
          <ToggleButtonContainer className='toggle-button-container'>
            {toggleButtonArray}
          </ToggleButtonContainer>
        </div>
      </AdditionalFeature> */}
    </div>
  );
};

const AdditionalFeature = styled.div`
  
  padding-top: 2em;
  padding-bottom: 6em;
  overflow: hidden;
  background: linear-gradient(
    107deg,
    rgb(52, 73, 94) 0%,
    rgb(1, 4, 31) 70%
  );
  .feature-toggle{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .additional-feature-header {
    color: white;
  }
  .toggle-button-container::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 900px) {
   
    .feature-toggle {
      display:flex;
      flex-direction: column;
      align-items: center;
    }


`;

const Divider = styled.div`
  // border-bottom: solid gray 0.05em;
  padding: 0.5em;
  margin-bottom: 5em;
`;

const BodyHeader = styled.h1`
  color: black;
  // border-top: solid rgba(51, 129, 86, 0.48) 0.05em;
  margin: 1em 0 1em 0;
  padding-top: 0.5em;
  color: #e3e3e3;
  text-shadow: #dbdbdb 1px 0 5px;
  font-size: 3em;
  font-weight: 300;
`;

const ImageContainer = styled.div`
  margin: 1em;
  color: #000000;
  width: 40em;
  justify-self: end;
  align-self: center;
  max-height: 50vh;
  img {
    max-width: 35em;
    border-radius: 0.25em;
  }
`;

const ToggleButtonContainer = styled.div`
  justify-self: start;
  align-self: center;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 40vh;
  width: 35em;
  whitespace: no-wrap;
`;

const ToggleButton = styled.div`
  // height: 100%;
  transition: all .2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }

  label {
    padding: 1em;
    border-style: solid;
    border-width: 1px;
    border-color: lightgrey;
    margin: 1em;
    width: 35em;
  }
  h1 {
    font-size: 1.25em;
    color: #0f1730;
  }
  p {
    font-size .75em;
    color: grey;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 32px;
  h1 {
    color: black;
  }
`;

const Section = styled.div`
  display: flex;

  max-width: 100vw;
  justify-content: space-between;
  margin-bottom: 80px;

  div {
    color: #000000;
  }

  h1 {
    margin-bottom: 1.5rem;
    color: #e3e3e3;
    font-weight: 300;
  }
  p {
    color: #919191 !important;
    font-size: 1.5rem;
    font-weight: 300;
  }
  h1::after {
    background: hsla(0, 0%, 56.5%, 0.5);
    content: '';
    display: block;
    height: 1.5px;
    margin: 20px 0px;
  }

  img {
    max-width: 500px;
    width: 100%;
    margin-right: 60px;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    img {
      max-width: unset;
      margin: 0px;
      margin-bottom: 32px;
    }
  }
`;

const ReverseLayout = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  justify-content: space-between;
  margin-bottom: 80px;

  div {
    color: #000000
  }

  h1 {
    margin-bottom: 1.5rem;
    color: #e3e3e3 !important;
    font-weight: 300;
  }
  p {
    color: #919191 !important;
    font-size: 1.5rem;
    font-weight: 300;
  }
  h1::after {
    background: hsla(0, 0%, 56.5%, 0.5);
    content: "";
    display: block;
    height: 1.5px;
    margin: 20px 0px;
    
  }

  .num2 {
    max-width: 500px;
    width: 100%;
    margin-right: 60px;
  }

  @media only screen and (max-width: 900px) {

  
  
    display: grid;
    grid-template-rows: auto ;
    grid-template-areas: 
    "num1"
    "num2"
    ;
  }
  .num1{
    grid-area: num1;
  }
  
  .num2{
    grid-area: num2;
  }
    img {
      max-width: unset;
      margin: 0px;
      margin-bottom: 32px;
    }
  }
`;
