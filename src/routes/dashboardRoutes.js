import Dashboard from '../pages/dashboard';
import Layout from '../layouts';
import AllCards from '../pages/cards';
import AllLoaders from '../pages/loaders';
import ColorsPage from '../pages/colorsShades';
import Calendars from '../pages/calenders';
import Games from '../pages/games';
import TypingGame from '../pages/games/typingGame';
import GamesList from '../pages/games/gameList';
import CarRacingGame from '../pages/games/carRacing';
import ChatsUI from '../pages/chatsUI';
import ToggleSwitchPage from '../pages/toggleSwitch';
import AudioPage from '../pages/audioBase';
import MusicPlayer from '../pages/audioBase/musicPlayer';
import AudioListPage from '../pages/audioBase/audioList';
import MessangerPage from '../pages/chatting';
import MobileAudioReceiver from '../pages/audioBase/broadcast/mobileAudioReciver';
import MobileAudioSender from '../pages/audioBase/broadcast/mobileAudioSender';

const DashboardRoutes = {
  id: "group-management",
  type: "group",
  title: "Dashboard",
  path: '/',
  element: <Layout />,
  children: [
    {
      id: "dashboard-home",
      type: "",
      title: "Dashboard",
      path: '',
      element: <Dashboard />
    },
    {
      id: "dashboard-page",
      type: "item",
      title: "Dashboard",
      path: 'dashboard',
      element: <Dashboard />
    },
    {
      id: "card",
      title: "Cards",
      type: "item",
      path: 'cards',
      element: <AllCards />
    },
    {
      id: "loaders",
      title: "Loaders",
      type: "item",
      path: 'loaders',
      element: <AllLoaders />
    },
    {
      id: "colors",
      title: "Colors & Shades",
      type: "item",
      path: 'colorsShades',
      element: <ColorsPage />
    },
    {
      id: "calendars",
      title: "Calendars",
      type: "item",
      path: 'calendars',
      element: <Calendars />
    },
    {
      id: "toggle-switch",
      title: "Toggle-switch",
      type: "item",
      path: 'toggle-switch',
      element: <ToggleSwitchPage />
    },
    {
      id: "dropdowngames",
      title: "Games dropdown",
      type: "dropdown",
      path: 'gamesdropdown',
      element: <Games />,
      children: [
        {
          id: "games-list",
          title: "Games List",
          type: "item",
          path: '',
          element: <GamesList />
        },
        {
          id: "typing-game",
          title: "Typing Game",
          type: "item",
          path: 'typing-game',
          element: <TypingGame />
        },
        {
          id: "car-racing",
          title: "Car Racing",
          type: "item",
          path: 'car-racing',
          element: <CarRacingGame />
        },
      ]
    },
    {
      id: "chats",
      title: "Chats UI",
      type: "item",
      path: 'chat-ui',
      element: <ChatsUI />
    },
    {
      id: "messanger",
      title: "Messanger",
      type: "item",
      path: 'messanger',
      element: <MessangerPage />
    },
    {
      id: "audio",
      title: "Audio",
      type: "item",
      path: 'audio',
      element: <AudioPage />,
      children: [
        {
          id: "audio-music-player",
          title: "Music Player",
          path: '',
          element: <AudioListPage />
        },
        {
          id: "audio-music-player",
          title: "Music Player",
          type: "item",
          path: 'music-player',
          element: <MusicPlayer />
        },
        {
          id: "audio-audio-reciever",
          title: "audio-reciever",
          type: "item",
          path: 'audio-reciever',
          element: <MobileAudioReceiver />
        },
        {
          id: "audio-audio-sender",
          title: "audio-sender",
          type: "item",
          path: 'audio-sender',
          element: <MobileAudioSender />
        },
      ],
    },
  ]
};

export default DashboardRoutes;
