import SunMoonSwitch from "./sunMoonSwitch";

export const TogglesData = [
  {
    title: "Sun Moon Switch",
    searchKeys: ["Switch", "Son switch"],
    element: <SunMoonSwitch />,
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
      react: ``,
    }
  }
]
