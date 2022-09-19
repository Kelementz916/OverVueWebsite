import React, { useState } from "react";
// import HeadTwoStyle from "../styles/HeadTwoStyle";
import styled from "styled-components";

import 'bootstrap/dist/css/bootstrap.min.css';



export const Body = () => {
  const gifList = [
    'https://media.giphy.com/media/MHqQTb5Vdtewlra4pG/giphy.gif',
    'https://media.giphy.com/media/YyPpNuH86r25JZNd46/giphy.gif',
    'https://media.giphy.com/media/3eKBo9Qfi16mVdGIz4/giphy.gif',
    'https://media.giphy.com/media/1ttTOYNOTYBSOoWtG1/giphy.gif',
    'https://media.giphy.com/media/aXMkIStyTE0jkNlRtO/giphy.gif',
    'https://media.giphy.com/media/Q0DYBMnuMLXoo5buvW/giphy.gif',
    'https://media.giphy.com/media/3j42CzkMDEpEFFbJZT/giphy.gif',
    'https://media.giphy.com/media/vncIbdxJ36uU7a1bk3/giphy.gif',
    'https://media.giphy.com/media/JLCUOmKfQpOmdWUf4l/giphy.gif',
    'https://media.giphy.com/media/v8IbYTVrgFboHgpxBB/giphy.gif',
  ]

  
  const gifListObj = {
    1: {
      link: "https://media.giphy.com/media/MHqQTb5Vdtewlra4pG/giphy.gif",
      header: "Create Components",
      description: "Quickly start your project by creating and naming your first component. Interact with it in the CSS Container.",
    },
    2: {
      link: "https://media.giphy.com/media/YyPpNuH86r25JZNd46/giphy.gif",
      header: "Add and change HTML Elements",
      description: "Add HTML elements inside your component. You can now modify the specifications of your prototype.",
    },
    3: {
      link: "https://media.giphy.com/media/3eKBo9Qfi16mVdGIz4/giphy.gif",
      header: "Add attributes to components",
      description: "Add a class and/or an ID attribute to the component to tailor it to your needs.",
    },
    4: {
      link: "https://media.giphy.com/media/1ttTOYNOTYBSOoWtG1/giphy.gif",
      header: "Add Notes",
      description: "You can add personalized messages to help you keep track of your components.",
    },
    5: {
      link: "https://media.giphy.com/media/aXMkIStyTE0jkNlRtO/giphy.gif",
      header: "Add Two-Way Binding or other Attributes",
      description: "Options to add attributes to add specific functionality such as two way binding and class is now available.",
    },
    6: {
      link: "https://media.giphy.com/media/Q0DYBMnuMLXoo5buvW/giphy.gif",
      header: "Style HTML Elements",
      description: "Stylize HTML elements to visualize your product. Adjustable style options to include height, width, color, and size.",
    },
    7: {
      link: "https://media.giphy.com/media/3j42CzkMDEpEFFbJZT/giphy.gif",
      header: "Child Components",
      description: "Child components can be easily incorporated into the code snippet. Child components will be available to be added from the HTML element list.",
    },
    8: {
      link: "https://media.giphy.com/media/vncIbdxJ36uU7a1bk3/giphy.gif",
      header: "Visualize Prototype",
      description: "Note the project's high level overview by visiting the Project Tree tab to observe the component's hierarchy.",
    },
    9: {
      link: "https://media.giphy.com/media/JLCUOmKfQpOmdWUf4l/giphy.gif",
      header: "Code Snippet",
      description: "The boilerplate code is visible at every step of prototyping and dynamically updates according to new edits.",
    },
    10: {
      link: "https://media.giphy.com/media/v8IbYTVrgFboHgpxBB/giphy.gif",
      header: "Export boilerplate",
      description: "Export the prototype's code in a lightweight boilerplate and develop the product further in an IDE.",
    }
  }

  const [gifImage, setGifImage] = useState(gifList[0]);

  // const handleChange = (val) => setGifImage(gifList[val]);
  // const [value, setValue] = useState();
  const handleChange = (event) => {
    console.log('hi')
    console.log(event);
    console.log(event.currentTarget.id);
    console.log(event.currentTarget.value);

    // console.log(typeof(event.currentTarget));

    // setGifImage(gifList[val]);
  };
  
  return (
    <OvervuePreview>
      <ImageContainer>
        <img
              alt="Gif of exporting the prototype's boilerplate"
              className="shadow"
              src={gifImage}
        />
      </ImageContainer>
      <ToggleButtonContainer>
        <ToggleButton>
          <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" onClick={(event)=>console.log(event.currentTarget.id)}/>
          <label class="btn btn-secondary" for="option1">Button1</label>
        </ToggleButton>
        
        <ToggleButton>
          <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
          <label class="btn btn-secondary" for="option2">Button2</label>
        </ToggleButton>

        <ToggleButton>
          <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" />
          <label class="btn btn-secondary" for="option3">Button3</label>
        </ToggleButton>
      </ToggleButtonContainer>
    </OvervuePreview>
  );
};

// export const Body = () => {
//   return (
//     <SectionContainer>
//       <Section>
//           <HeadTwoStyle>
            
//               <h1>Create Components</h1>
//               <p className="p">
//                 Quickly start your project by creating and naming your first
//                 component. Interact with it in the CSS Container.
//               </p> 

//           </HeadTwoStyle>
//           <img
//             alt="Add html element Gif"
//             className="shadow"
//             src="https://media.giphy.com/media/MHqQTb5Vdtewlra4pG/giphy.gif"
//           />
//       </Section>

//       <Section>
        
//           <HeadTwoStyle>
//               <h1>Add and change HTML Elements</h1>
//               <p className="p">
//                 Add HTML elements inside your component. You can now modify the
//                 specifications of your prototype.
//               </p>
//           </HeadTwoStyle>
//           <img
//             alt="Add html element Gif"
//             className="shadow"
//             src="https://media.giphy.com/media/YyPpNuH86r25JZNd46/giphy.gif"
//           />
        
//       </Section>

//       <Section>
        
//           <HeadTwoStyle>
//               <h1>Add attributes to components </h1>
//               <p className="p">
//                 Add a class and/or an ID attribute to the component to tailor it
//                 to your needs.
//               </p>
//           </HeadTwoStyle>
//           <img
//             alt="Add component attribute Gif"
//             className="shadow"
//             src="https://media.giphy.com/media/3eKBo9Qfi16mVdGIz4/giphy.gif"
//           />
        
//       </Section>

//       <Section>
        
//           <HeadTwoStyle>
            
//               <h1>Add Notes</h1>
//               <p className="p">
//                 You can add personalized messages to help you keep track of your
//                 components.
//               </p>
            
//           </HeadTwoStyle>
//           <img
//             alt="Notes Gif"
//             className="shadow"
//             src="https://media.giphy.com/media/1ttTOYNOTYBSOoWtG1/giphy.gif"
//           />
        
//       </Section>

//       <Section>
        
//           <HeadTwoStyle>
            
//               <h1>Add Two-Way Binding or other Attributes</h1>
//               <p className="p">
//                 Options to add attributes to add specific functionality such as
//                 two way binding and class is now available.
//               </p>
            
//           </HeadTwoStyle>
//           <img
//             alt="Add html element attribute Gif"
//             className="shadow"
//             src="https://media.giphy.com/media/aXMkIStyTE0jkNlRtO/giphy.gif"
//           />
        
//       </Section>

//       <Section>
        
//           <HeadTwoStyle>
            
//               <h1>Style HTML Elements</h1>
//               <p className="p">
//                 Stylize HTML elements to visualize your product. Adjustable
//                 style options to include height, width, color, and size.
//               </p>
            
//           </HeadTwoStyle>
//           <img
//             alt="Style html elements Gif"
//             className="shadow"
//             src="https://media.giphy.com/media/Q0DYBMnuMLXoo5buvW/giphy.gif"
//           />
        
//       </Section>

//       <Section>
        
//           <HeadTwoStyle>
            
//               <h1>Child Components</h1>
//               <p className="p">
//                 Child components can be easily incorporated into the code
//                 snippet. Child components will be available to be added from the
//                 HTML element list.
//               </p>
            
//           </HeadTwoStyle>
//           <img
//             alt="Gif of adding child components"
//             className="shadow"
//             src="https://media.giphy.com/media/3j42CzkMDEpEFFbJZT/giphy.gif"
//           />
        
//       </Section>

//       <Section>
        
//           <HeadTwoStyle>
            
//               <h1>Visualize Prototype</h1>
//               <p className="p">
//                 Note the project's high level overview by visiting the Project
//                 Tree tab to observe the component’s hierarchy.
//               </p>
            
//           </HeadTwoStyle>
//           <img
//             alt="Gif of visualizing the prototype project tree"
//             className="shadow"
//             src="https://media.giphy.com/media/vncIbdxJ36uU7a1bk3/giphy.gif"
//           />
        
//       </Section>

//       <Section>
        
//           <HeadTwoStyle>
            
//               <h1>Code Snippet</h1>
//               <p className="p">
//                 The boilerplate code is visible at every step of prototyping and
//                 dynamically updates according to new edits.
//               </p>
            
//           </HeadTwoStyle>
//           <img
//             alt="Gif of live rendering of code snippet"
//             className="shadow"
//             src="https://media.giphy.com/media/JLCUOmKfQpOmdWUf4l/giphy.gif"
//           />
        
//       </Section>

//       <Section>
        
//           <HeadTwoStyle>
            
//               <h1>Export boilerplate</h1>
//               <p className="p">
//                 Export the prototype's code in a lightweight boilerplate and
//                 develop the product further in an IDE.
//               </p>
            
//           </HeadTwoStyle>
//           <img
//             alt="Gif of exporting the prototype's boilerplate"
//             className="shadow"
//             src="https://media.giphy.com/media/v8IbYTVrgFboHgpxBB/giphy.gif"
//           />
        
//       </Section>
//     </SectionContainer>
//   );
// };

const OvervuePreview = styled.div`
  margin: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;

`

const ImageContainer = styled.div`
  margin: 1em;
  color: #000000;
`

const ToggleButtonContainer = styled.div`
  margin: 1em;
  color: #000000;
  display: flex;
  flex-direction: column;

  input {
    margin: 1fr;
  }
`

const ToggleButton = styled.div`
  margin: 1em;
  border-radius: 50px;
  
`

// const SectionContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   padding: 60px 32px;
// `

// const Section = styled.div`
//   display: flex;
//   width: 100%;
//   max-width: 1300px;
//   justify-content: space-between;
//   margin-bottom: 120px;

//   div {
//     color: #000000
//   }

//   h1 {
//     margin-bottom: 1.5rem;
//     color: #666666 !important;
//   }
//   p {
//     color: #666666 !important;
//     font-size: 1.5rem;
//     font-weight: 300;
//   }
//   h1::after {
//     background: hsla(0, 0%, 56.5%, 0.5);
//     content: "";
//     display: block;
//     height: 1.5px;
//     margin: 20px 0px;
    
//   }

//   img {
//     max-width: 500px;
//     width: 100%;
//     margin-right: 60px;
//   }

//   @media only screen and (max-width: 900px) {
//     flex-direction: column;
//     align-items: center;
//     img {
//       max-width: unset;
//       margin: 0px;
//       margin-bottom: 32px;
//     }
//   }
// `