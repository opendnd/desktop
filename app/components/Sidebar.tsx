import * as React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import LabelIcon from '@material-ui/icons/Label';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import HistoryIcon from '@material-ui/icons/History';
import BusinessIcon from '@material-ui/icons/Business';
import TodayIcon from '@material-ui/icons/Today';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import LanguageIcon from '@material-ui/icons/Language';
import CommentIcon from '@material-ui/icons/Comment';
import MessageIcon from '@material-ui/icons/Message';
import LayersIcon from '@material-ui/icons/Layers';
import ListIcon from '@material-ui/icons/List';
import SatelliteIcon from '@material-ui/icons/Satellite';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import AndroidIcon from '@material-ui/icons/Android';
import FlagIcon from '@material-ui/icons/Flag';
import StarsIcon from '@material-ui/icons/Stars';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import HighlightIcon from '@material-ui/icons/Highlight';
import TextsmsIcon from '@material-ui/icons/Textsms';
import WarningIcon from '@material-ui/icons/Warning';
import BrushIcon from '@material-ui/icons/Brush';
import HealingIcon from '@material-ui/icons/Healing';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import GavelIcon from '@material-ui/icons/Gavel';
import PetsIcon from '@material-ui/icons/Pets';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';

export const dashboardRoutes:({
  path: string;
  sidebarName: string;
  icon: any;
})[] = [
  {
    path: '/',
    sidebarName: 'Dashboard',
    icon: <DashboardIcon />,
  },{
    path: '/artwork',
    sidebarName: 'Artwork',
    icon: <BrushIcon />,
  },{
    path: '/backgrounds',
    sidebarName: 'Backgrounds',
    icon: <HistoryIcon />,
  },{
    path: '/buildings',
    sidebarName: 'Buildings',
    icon: <BusinessIcon />,
  },{
    path: '/calendars',
    sidebarName: 'Calendars',
    icon: <TodayIcon />,
  },{
    path: '/campaigns',
    sidebarName: 'Campaigns',
    icon: <SettingsInputComponentIcon />,
  },{
    path: '/classes',
    sidebarName: 'Classes',
    icon: <SettingsEthernetIcon />,
  },{
    path: '/cultures',
    sidebarName: 'Cultures',
    icon: <LanguageIcon />,
  },{
    path: '/dialogs',
    sidebarName: 'Dialogs',
    icon: <CommentIcon />,
  },{
    path: '/diseases',
    sidebarName: 'Diseases',
    icon: <HealingIcon />,
  },{
    path: '/dna',
    sidebarName: 'DNA',
    icon: <FingerprintIcon />,
  },{
    path: '/domains',
    sidebarName: 'Domains',
    icon: <SatelliteIcon />,
  },{
    path: '/dungeons',
    sidebarName: 'Dungeons',
    icon: <LayersIcon />,
  },{
    path: '/dynasties',
    sidebarName: 'Dynasties',
    icon: <SupervisorAccountIcon />,
  },{
    path: '/encounters',
    sidebarName: 'Encounters',
    icon: <SurroundSoundIcon />,
  },{
    path: '/factions',
    sidebarName: 'Factions',
    icon: <FlagIcon />,
  },{
    path: '/familiars',
    sidebarName: 'Familiars',
    icon: <PetsIcon />,
  },{
    path: '/features',
    sidebarName: 'Features',
    icon: <FeaturedPlayListIcon />,
  },{
    path: '/items',
    sidebarName: 'Items',
    icon: <MoveToInboxIcon />,
  },{
    path: '/languages',
    sidebarName: 'Languages',
    icon: <SpeakerNotesIcon />,
  },{
    path: '/monsters',
    sidebarName: 'Monsters',
    icon: <AndroidIcon />,
  },{
    path: '/names',
    sidebarName: 'Names',
    icon: <LabelIcon />,
  },{
    path: '/persons',
    sidebarName: 'Persons',
    icon: <PersonIcon />,
  },{
    path: '/races',
    sidebarName: 'Races',
    icon: <PersonPinCircleIcon />,
  },{
    path: '/quests',
    sidebarName: 'Quests',
    icon: <ListIcon />,
  },{
    path: '/religions',
    sidebarName: 'Religions',
    icon: <StarsIcon />,
  },{
    path: '/sayings',
    sidebarName: 'Sayings',
    icon: <MessageIcon />,
  },{
    path: '/sigils',
    sidebarName: 'Sigils',
    icon: <StarHalfIcon />,
  },{
    path: '/spells',
    sidebarName: 'Spells',
    icon: <HighlightIcon />,
  },{
    path: '/stories',
    sidebarName: 'Stories',
    icon: <TextsmsIcon />,
  },{
    path: '/titles',
    sidebarName: 'Titles',
    icon: <GavelIcon />,
  },{
    path: '/traps',
    sidebarName: 'Traps',
    icon: <WarningIcon />,
  },{
    path: '/vehicles',
    sidebarName: 'Vehicles',
    icon: <DirectionsCarIcon />,
  }
];

export interface IProps {
  open: boolean,
}

export default class Sidebar extends React.Component<IProps> {
  render() {
    return (
      <div>
        <Drawer id="sidebar" open={this.props.open} variant="persistent" anchor="left">
          <List id="sidebar-list">
            {dashboardRoutes.map((route, index) => {
              const selected = (window.location.hash.replace('#/', '/') === route.path) ? 'sidebar-selected' : '';
              return (
                <Link to={route.path} key={index}>
                  <ListItem button className={selected}>
                    <ListItemIcon>{route.icon}</ListItemIcon>
                    <ListItemText primary={route.sidebarName} />
                  </ListItem>
                </Link>
              )
            })}
          </List>
        </Drawer>
      </div>
    );
  }
}
