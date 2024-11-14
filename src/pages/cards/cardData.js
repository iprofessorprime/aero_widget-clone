import SwipeContentOnHover from "./swipeContentHover";
import ThreeWarriorHover from "./threeWarriorHover";

export const CardsList = [
  {
    title: "3D Warrior on hover",
    searchKeys: ["Warrior", "Warrior on hover"],
    element: <ThreeWarriorHover index={0} />,
    code: {
      html: `<div class="warrior-hover">Warrior</div>`,
      css: `:root {
  --card-height: 300px;
  --card-width: calc(var(--card-height) / 1.5);
}

.warriorCardWrapper {
  width: auto;
  /* height: calc(var(--card-height) * 2) ; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* background: #191c29; */
}
.warriorCardWrapper .card {
  width: var(--card-width);
  height: var(--card-height);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 36px;
  perspective: 2500px;
  padding: 50px 0 0 20px;
}

.warriorCardWrapper .cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.warriorCardWrapper .wrapper {
  transition: all 0.5s;
  height: var(--card-height);
  position: absolute;
  z-index: -1;
}

.warriorCardWrapper .card:hover .wrapper {
  transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
  box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
}

.warriorCardWrapper .wrapper::before,
.warriorCardWrapper .wrapper::after {
  content: "";
  opacity: 0;
  width: 100%;
  height: 80px;
  transition: all 0.5s;
  position: absolute;
  left: 0;
}
.warriorCardWrapper .wrapper::before {
  top: 0;
  height: 100%;
  background-image: linear-gradient(
    to top,
    transparent 46%,
    rgba(12, 13, 19, 0.5) 68%,
    rgba(12, 13, 19) 97%
  );
}
.warriorCardWrapper .wrapper::after {
  bottom: 0;
  opacity: 1;
  background-image: linear-gradient(
    to bottom,
    transparent 46%,
    rgba(12, 13, 19, 0.5) 68%,
    rgba(12, 13, 19) 97%
  );
}

.warriorCardWrapper .card:hover .wrapper::before,
.warriorCardWrapper .wrapper::after {
  opacity: 1;
}

.warriorCardWrapper .card:hover .wrapper::after {
  height: 120px;
}
.warriorCardWrapper .title {
  width: 100%;
  transition: transform 0.5s;
}
.warriorCardWrapper .card:hover .title {
  transform: translate3d(0%, -50px, 100px);
}

.warriorCardWrapper .character {
  width: 100%;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  z-index: -1;
}

.warriorCardWrapper .card:hover .character {
  opacity: 1;
  transform: translate3d(0%, -30%, 100px);
}
`,
      react: `
import React from "react";
import './warrior.css'; 

const WarriorCard = ({ coverImage, titleImage, characterImage }) => {
  return (
    <div className="warriorCardWrapper">
      <div className="card">
        <div className="wrapper">
          <img src={coverImage} alt="cover" className="cover-image" />
        </div>
        <img src={titleImage} alt="title" className="title" />
        <img src={characterImage} alt="character" className="character" />
      </div>
    </div>
  )
}

export default WarriorCard;
`,
    },
  },
  // {
  //   title: "3D Warrior on hover 1",
  //   element: <ThreeWarriorHover index={1} />,
  //   code: {
  //     html: `<div class="warrior-hover">Warrior 1</div>`,
  //     css: `.warrior-hover { color: blue; }`,
  //     react: `const ThreeWarriorHover = () => { return <div>Warrior 1</div>; };`,
  //   },
  // },
  
//   {
//     title: "Swipe on hover",
//     element: <SwipeContentOnHover />,
//     code: {
//       html: `<body>
//   <div class="card-hover">
//     <div class="card-hover__content">
//       <h3 class="card-hover__title">
//         Make your <span>choice</span> right now!
//       </h3>
//       <p class="card-hover__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>
//       <a href="#" class="card-hover__link">
//         <span>Learn How</span>
//         <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//         </svg>        
//       </a>
//     </div>
//     <div class="card-hover__extra">
//       <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
//     </div>
//     <img src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60" alt="">
//   </div>
// </body>`,
//       css: `@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600&display=swap");
// html {
//   box-sizing: border-box;
//   font-size: 100%;
// }

// html,
// body {
//   height: 100%;
// }

// *, *:before, *:after {
//   box-sizing: inherit;
// }

// img {
//   max-width: 100%;
//   height: auto;
// }

// body {
//   -webkit-text-size-adjust: 100%;
//   font-variant-ligatures: none;
//   text-rendering: optimizeLegibility;
//   -moz-osx-font-smoothing: grayscale;
//   -webkit-font-smoothing: antialiased;
//   font-size: 100%;
//   font-family: "Fira Sans", sans-serif;
// }

// h1,
// h2,
// h3,
// h4,
// h5 {
//   font-weight: 800;
//   margin-top: 0;
//   margin-bottom: 0;
// }

// body {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0;
//   padding: 0;
//   height: 100vh;
//   color: #1F1D42;
//   background-color: #F0F8E1;
// }

// .card-hover {
//   width: 360px;
//   height: 500px;
//   position: relative;
//   overflow: hidden;
//   box-shadow: 0 0 32px -10px rgba(0, 0, 0, 0.08);
// }
// .card-hover:has(.card-hover__link:hover) .card-hover__extra {
//   transform: translateY(0);
//   transition: transform 0.35s;
// }
// .card-hover:hover .card-hover__content {
//   background-color: #DEE8C2;
//   bottom: 100%;
//   transform: translateY(100%);
//   padding: 50px 60px;
//   transition: all 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97);
// }
// .card-hover:hover .card-hover__link {
//   opacity: 1;
//   transform: translate(-50%, 0);
//   transition: all 0.3s 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97);
// }
// .card-hover:hover img {
//   transform: scale(1);
//   transition: 0.35s 0.1s transform cubic-bezier(0.1, 0.72, 0.4, 0.97);
// }
// .card-hover__content {
//   width: 100%;
//   text-align: center;
//   background-color: #86B971;
//   padding: 0 60px 50px;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   transform: translateY(0);
//   transition: all 0.35s 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97);
//   will-change: bottom, background-color, transform, padding;
//   z-index: 1;
// }
// .card-hover__content::before, .card-hover__content::after {
//   content: "";
//   width: 100%;
//   height: 120px;
//   background-color: inherit;
//   position: absolute;
//   left: 0;
//   z-index: -1;
// }
// .card-hover__content::before {
//   top: -80px;
//   -webkit-clip-path: ellipse(60% 80px at bottom center);
//           clip-path: ellipse(60% 80px at bottom center);
// }
// .card-hover__content::after {
//   bottom: -80px;
//   -webkit-clip-path: ellipse(60% 80px at top center);
//           clip-path: ellipse(60% 80px at top center);
// }
// .card-hover__title {
//   font-size: 1.5rem;
//   margin-bottom: 1em;
// }
// .card-hover__title span {
//   color: #2d7f0b;
// }
// .card-hover__text {
//   font-size: 0.75rem;
// }
// .card-hover__link {
//   position: absolute;
//   bottom: 1rem;
//   left: 50%;
//   transform: translate(-50%, 10%);
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   text-decoration: none;
//   color: #2d7f0b;
//   opacity: 0;
//   padding: 10px;
//   transition: all 0.35s;
// }
// .card-hover__link:hover svg {
//   transform: translateX(4px);
// }
// .card-hover__link svg {
//   width: 18px;
//   margin-left: 4px;
//   transition: transform 0.3s;
// }
// .card-hover__extra {
//   height: 50%;
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   width: 100%;
//   font-size: 1.5rem;
//   text-align: center;
//   background-color: #86b971;
//   padding: 80px;
//   bottom: 0;
//   z-index: 0;
//   color: #dee8c2;
//   transform: translateY(100%);
//   will-change: transform;
//   transition: transform 0.35s;
// }
// .card-hover__extra span {
//   color: #2d7f0b;
// }
// .card-hover img {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   -o-object-fit: cover;
//      object-fit: cover;
//   -o-object-position: center;
//      object-position: center;
//   z-index: -1;
//   transform: scale(1.2);
//   transition: 0.35s 0.35s transform cubic-bezier(0.1, 0.72, 0.4, 0.97);
// }`,
//       react: `import React from 'react'
// import './swipeContentHover.css'

// const SwipeContentOnHover = () => {
//   return (
//     <div className='SwipeContentOnHover'>
//       <div className="card-hover">
//       <div className="card-hover__content">
//         <h3 className="card-hover__title">
//           Make your <span>choice</span> right now!
//         </h3>
//         <p className="card-hover__text">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
//           quisquam doloremque nostrum laboriosam, blanditiis libero corporis
//           nulla a aut?
//         </p>
//         <a href="#" className="card-hover__link">
//           <span>Learn How</span>
//           <svg
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//             />
//           </svg>
//         </a>
//       </div>
//       <div className="card-hover__extra">
//         <h4>
//           Learn <span>now</span> and get <span>40%</span> discount!
//         </h4>
//       </div>
//       <img
//         src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60"
//         alt=""
//       />
//     </div>
//     </div>
//   )
// }

// export default SwipeContentOnHover`,
//     },
//   },
];
