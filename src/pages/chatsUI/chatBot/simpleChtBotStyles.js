import styled from 'styled-components';
export const BotIcon = styled.div`
  position: fixed;
  bottom: 15px;
  left: 15px;
  z-index: 9999;
`;

export const IconInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 2em;
  height: 2em;
  font-size: 1.7em;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  background: linear-gradient(to left, #00dbde, #fc00ff, #00dbde, #fc00ff);
  background-position: 50%;
  background-size: 300%;
`;

export const BotSubject = styled.div`
  display: none;
`;

export const Messages = styled.div`
  display: none;
`;

export const BotIconContainer = styled.div`
  &.showBotSubject,
  &.showMessenger {
    display: none;
  }
`;

export const BotMessages = styled.div`
  display: flex;
  flex-grow: 1;

  &.Messages_list {
    flex-grow: 1;
  }
`;

export const ChatCloseIcon = styled.div`
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  right: 12px;
  z-index: 9;
`;

export const ChatOn = styled.div`
  background-color: #8a57cf;
  color: #fff;
  display: block;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 15px;
  z-index: 10;
  width: 45px;
  height: 45px;
  padding: 9px;
  box-shadow: 
    0 2px 4px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
`;

export const ChatOnIcon = styled.div`
  color: #fff;
  font-size: 25px;
  text-align: center;
`;

export const Layout = styled.div`
	-webkit-animation: appear 0.15s cubic-bezier(0.25, 0.25, 0.5, 1.1);
	-ms-animation: appear 0.15s cubic-bezier(0.25, 0.25, 0.5, 1.1);
	animation: appear 0.15s cubic-bezier(0.25, 0.25, 0.5, 1.1);
	-webkit-animation-fill-mode: forwards;
	-ms-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
	background-color: rgb(63, 81, 181);
	bottom: 20px;
	border-radius: 10px;
	box-shadow: 5px 0 20px 5px rgba(0, 0, 0, 0.1);
	box-sizing: content-box !important;
	color: rgb(255, 255, 255);
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: end;
	-webkit-justify-content: flex-end;
	-ms-flex-pack: end;
	justify-content: flex-end;
	max-height: 30px;
	max-width: 300px;
	min-width: 50px;
	opacity: 0;
	pointer-events: auto;
	position: fixed;
	-webkit-transition: right 0.1s cubic-bezier(0.25, 0.25, 0.5, 1),
		bottom 0.1s cubic-bezier(0.25, 0.25, 0.5, 1),
		min-width 0.2s cubic-bezier(0.25, 0.25, 0.5, 1),
		max-width 0.2s cubic-bezier(0.25, 0.25, 0.5, 1),
		min-height 0.2s cubic-bezier(0.25, 0.25, 0.5, 1),
		max-height 0.2s cubic-bezier(0.25, 0.25, 0.5, 1),
		border-radius 50ms cubic-bezier(0.25, 0.25, 0.5, 1) 0.15s,
		background-color 50ms cubic-bezier(0.25, 0.25, 0.5, 1) 0.15s,
		color 50ms cubic-bezier(0.25, 0.25, 0.5, 1) 0.15s;
	-ms-transition: right 0.1s cubic-bezier(0.25, 0.25, 0.5, 1),
		bottom 0.1s cubic-bezier(0.25, 0.25, 0.5, 1),
		min-width 0.2s cubic-bezier(0.25, 0.25, 0.5, 1),
		max-width 0.2s cubic-bezier(0.25, 0.25, 0.5, 1),
		min-height 0.2s cubic-bezier(0.25, 0.25, 0.5, 1),
		max-height 0.2s cubic-bezier(0.25, 0.25, 0.5, 1),
		border-radius 50ms cubic-bezier(0.25, 0.25, 0.5, 1) 0.15s,
		background-color 50ms cubic-bezier(0.25, 0.25, 0.5, 1) 0.15s,
		color 50ms cubic-bezier(0.25, 0.25, 0.5, 1) 0.15s;
	transition: right 0.1s cubic-bezier(0.25, 0.25, 0.5, 1),
		bottom 0.1s cubic-bezier(0.25, 0.25, 0.5, 1),
		min-width 0.2s cubic-bezier(0.25, 0.25, 0.5, 1),
		max-width 0.2s cubic-bezier(0.25, 0.25, 0.5, 1),
		min-height 0.2s cubic-bezier(0.25, 0.25, 0.5, 1),
		max-height 0.2s cubic-bezier(0.25, 0.25, 0.5, 1),
		border-radius 50ms cubic-bezier(0.25, 0.25, 0.5, 1) 0.15s,
		background-color 50ms cubic-bezier(0.25, 0.25, 0.5, 1) 0.15s,
		color 50ms cubic-bezier(0.25, 0.25, 0.5, 1) 0.15s;
	z-index: 999999999;
`