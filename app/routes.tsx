import * as React from 'react';
import { Switch, Route } from 'react-router';

import App from './containers/App';
import DashboardPage from './containers/DashboardPage';
import FormPage from './containers/FormPage';

const schemas = {
  artwork: require('./forms/artwork/schema'),
  backgrounds: require('./forms/backgrounds/schema'),
  buildings: require('./forms/buildings/schema'),
  calendars: require('./forms/calendars/schema'),
  campaigns: require('./forms/campaigns/schema'),
  classes: require('./forms/classes/schema'),
  cultures: require('./forms/cultures/schema'),
  dialogs: require('./forms/dialogs/schema'),
  diseases: require('./forms/diseases/schema'),
  dna: require('./forms/dna/schema'),
  domains: require('./forms/domains/schema'),
  dungeons: require('./forms/dungeons/schema'),
  dynasties: require('./forms/dynasties/schema'),
  encounters: require('./forms/encounters/schema'),
  factions: require('./forms/factions/schema'),
  familiars: require('./forms/familiars/schema'),
  features: require('./forms/features/schema'),
  items: require('./forms/items/schema'),
  languages: require('./forms/languages/schema'),
  monsters: require('./forms/monsters/schema'),
  names: require('./forms/names/schema'),
  persons: require('./forms/persons/schema'),
  races: require('./forms/races/schema'),
  quests: require('./forms/quests/schema'),
  religions: require('./forms/religions/schema'),
  sayings: require('./forms/sayings/schema'),
  sigils: require('./forms/sigils/schema'),
  spells: require('./forms/spells/schema'),
  stories: require('./forms/stories/schema'),
  titles: require('./forms/titles/schema'),
  traps: require('./forms/traps/schema'),
  vehicles: require('./forms/vehicles/schema'),
};

const uiSchemas = {
  artwork: require('./forms/artwork/ui-schema'),
  backgrounds: require('./forms/backgrounds/ui-schema'),
  buildings: require('./forms/buildings/ui-schema'),
  calendars: require('./forms/calendars/ui-schema'),
  campaigns: require('./forms/campaigns/ui-schema'),
  classes: require('./forms/classes/ui-schema'),
  cultures: require('./forms/cultures/ui-schema'),
  dialogs: require('./forms/dialogs/ui-schema'),
  diseases: require('./forms/diseases/ui-schema'),
  dna: require('./forms/dna/ui-schema'),
  domains: require('./forms/domains/ui-schema'),
  dungeons: require('./forms/dungeons/ui-schema'),
  dynasties: require('./forms/dynasties/ui-schema'),
  encounters: require('./forms/encounters/ui-schema'),
  factions: require('./forms/factions/ui-schema'),
  familiars: require('./forms/familiars/ui-schema'),
  features: require('./forms/features/ui-schema'),
  items: require('./forms/items/ui-schema'),
  languages: require('./forms/languages/ui-schema'),
  monsters: require('./forms/monsters/ui-schema'),
  names: require('./forms/names/ui-schema'),
  persons: require('./forms/persons/ui-schema'),
  races: require('./forms/races/ui-schema'),
  quests: require('./forms/quests/ui-schema'),
  religions: require('./forms/religions/ui-schema'),
  sayings: require('./forms/sayings/ui-schema'),
  sigils: require('./forms/sigils/ui-schema'),
  spells: require('./forms/spells/ui-schema'),
  stories: require('./forms/stories/ui-schema'),
  titles: require('./forms/titles/ui-schema'),
  traps: require('./forms/traps/ui-schema'),
  vehicles: require('./forms/vehicles/ui-schema'),
};

const formData = {
  artwork: require('./forms/artwork/form-data'),
  backgrounds: require('./forms/backgrounds/form-data'),
  buildings: require('./forms/buildings/form-data'),
  calendars: require('./forms/calendars/form-data'),
  campaigns: require('./forms/campaigns/form-data'),
  classes: require('./forms/classes/form-data'),
  cultures: require('./forms/cultures/form-data'),
  dialogs: require('./forms/dialogs/form-data'),
  diseases: require('./forms/diseases/form-data'),
  dna: require('./forms/dna/form-data'),
  domains: require('./forms/domains/form-data'),
  dungeons: require('./forms/dungeons/form-data'),
  dynasties: require('./forms/dynasties/form-data'),
  encounters: require('./forms/encounters/form-data'),
  factions: require('./forms/factions/form-data'),
  familiars: require('./forms/familiars/form-data'),
  features: require('./forms/features/form-data'),
  items: require('./forms/items/form-data'),
  languages: require('./forms/languages/form-data'),
  monsters: require('./forms/monsters/form-data'),
  names: require('./forms/names/form-data'),
  persons: require('./forms/persons/form-data'),
  races: require('./forms/races/form-data'),
  quests: require('./forms/quests/form-data'),
  religions: require('./forms/religions/form-data'),
  sayings: require('./forms/sayings/form-data'),
  sigils: require('./forms/sigils/form-data'),
  spells: require('./forms/spells/form-data'),
  stories: require('./forms/stories/form-data'),
  titles: require('./forms/titles/form-data'),
  traps: require('./forms/traps/form-data'),
  vehicles: require('./forms/vehicles/form-data'),
};

export default () => (
  <App>
    <Switch>
      <Route path='/artwork' render={(props) => (
        <FormPage
        schema={schemas['artwork']}
        uiSchema={uiSchemas['artwork']}
        formData={formData['artwork']}
        {...props} 
        />
      )} />
      <Route path='/backgrounds' render={(props) => (
        <FormPage
          schema={schemas['backgrounds']}
          uiSchema={uiSchemas['backgrounds']}
          formData={formData['backgrounds']}
          {...props} 
        />
      )} />
      <Route path='/buildings' render={(props) => (
        <FormPage
          schema={schemas['buildings']}
          uiSchema={uiSchemas['buildings']}
          formData={formData['buildings']}
          {...props} 
        />
      )} />
      <Route path='/calendars' render={(props) => (
        <FormPage
          schema={schemas['calendars']}
          uiSchema={uiSchemas['calendars']}
          formData={formData['calendars']}
          {...props} 
        />
      )} />
      <Route path='/campaigns' render={(props) => (
        <FormPage
          schema={schemas['campaigns']}
          uiSchema={uiSchemas['campaigns']}
          formData={formData['campaigns']}
          {...props} 
        />
      )} />
      <Route path='/classes' render={(props) => (
        <FormPage
          schema={schemas['classes']}
          uiSchema={uiSchemas['classes']}
          formData={formData['classes']}
          {...props} 
        />
      )} />
      <Route path='/cultures' render={(props) => (
        <FormPage
          schema={schemas['cultures']}
          uiSchema={uiSchemas['cultures']}
          formData={formData['cultures']}
          {...props} 
        />
      )} />
      <Route path='/dialogs' render={(props) => (
        <FormPage
          schema={schemas['dialogs']}
          uiSchema={uiSchemas['dialogs']}
          formData={formData['dialogs']}
          {...props} 
        />
      )} />
      <Route path='/diseases' render={(props) => (
        <FormPage
          schema={schemas['diseases']}
          uiSchema={uiSchemas['diseases']}
          formData={formData['diseases']}
          {...props} 
        />
      )} />
      <Route path='/dna' render={(props) => (
        <FormPage
          schema={schemas['dna']}
          uiSchema={uiSchemas['dna']}
          formData={formData['dna']}
          {...props} 
        />
      )} />
      <Route path='/domains' render={(props) => (
        <FormPage
          schema={schemas['domains']}
          uiSchema={uiSchemas['domains']}
          formData={formData['domains']}
          {...props} 
        />
      )} />
      <Route path='/dungeons' render={(props) => (
        <FormPage
          schema={schemas['dungeons']}
          uiSchema={uiSchemas['dungeons']}
          formData={formData['dungeons']}
          {...props} 
        />
      )} />
      <Route path='/dynasties' render={(props) => (
        <FormPage
          schema={schemas['dynasties']}
          uiSchema={uiSchemas['dynasties']}
          formData={formData['dynasties']}
          {...props} 
        />
      )} />
      <Route path='/encounters' render={(props) => (
        <FormPage
          schema={schemas['encounters']}
          uiSchema={uiSchemas['encounters']}
          formData={formData['encounters']}
          {...props} 
        />
      )} />
      <Route path='/factions' render={(props) => (
        <FormPage
          schema={schemas['factions']}
          uiSchema={uiSchemas['factions']}
          formData={formData['factions']}
          {...props} 
        />
      )} />
      <Route path='/familiars' render={(props) => (
        <FormPage
          schema={schemas['familiars']}
          uiSchema={uiSchemas['familiars']}
          formData={formData['familiars']}
          {...props} 
        />
      )} />
      <Route path='/features' render={(props) => (
        <FormPage
          schema={schemas['features']}
          uiSchema={uiSchemas['features']}
          formData={formData['features']}
          {...props} 
        />
      )} />
      <Route path='/items' render={(props) => (
        <FormPage
          schema={schemas['items']}
          uiSchema={uiSchemas['items']}
          formData={formData['items']}
          {...props} 
        />
      )} />
      <Route path='/languages' render={(props) => (
        <FormPage
          schema={schemas['languages']}
          uiSchema={uiSchemas['languages']}
          formData={formData['languages']}
          {...props} 
        />
      )} />
      <Route path='/monsters' render={(props) => (
        <FormPage
          schema={schemas['monsters']}
          uiSchema={uiSchemas['monsters']}
          formData={formData['monsters']}
          {...props} 
        />
      )} />
      <Route path='/names' render={(props) => (
        <FormPage
          schema={schemas['names']}
          uiSchema={uiSchemas['names']}
          formData={formData['names']}
          {...props} 
        />
      )} />
      <Route path='/persons' render={(props) => (
        <FormPage
          schema={schemas['persons']}
          uiSchema={uiSchemas['persons']}
          formData={formData['persons']}
          {...props} 
        />
      )} />
      <Route path='/races' render={(props) => (
        <FormPage
          schema={schemas['races']}
          uiSchema={uiSchemas['races']}
          formData={formData['races']}
          {...props} 
        />
      )} />
      <Route path='/quests' render={(props) => (
        <FormPage
          schema={schemas['quests']}
          uiSchema={uiSchemas['quests']}
          formData={formData['quests']}
          {...props} 
        />
      )} />
      <Route path='/religions' render={(props) => (
        <FormPage
          schema={schemas['religions']}
          uiSchema={uiSchemas['religions']}
          formData={formData['religions']}
          {...props} 
        />
      )} />
      <Route path='/sayings' render={(props) => (
        <FormPage
          schema={schemas['sayings']}
          uiSchema={uiSchemas['sayings']}
          formData={formData['sayings']}
          {...props} 
        />
      )} />
      <Route path='/sigils' render={(props) => (
        <FormPage
          schema={schemas['sigils']}
          uiSchema={uiSchemas['sigils']}
          formData={formData['sigils']}
          {...props} 
        />
      )} />
      <Route path='/spells' render={(props) => (
        <FormPage
          schema={schemas['spells']}
          uiSchema={uiSchemas['spells']}
          formData={formData['spells']}
          {...props} 
        />
      )} />
      <Route path='/stories' render={(props) => (
        <FormPage
          schema={schemas['stories']}
          uiSchema={uiSchemas['stories']}
          formData={formData['stories']}
          {...props} 
        />
      )} />
      <Route path='/titles' render={(props) => (
        <FormPage
          schema={schemas['titles']}
          uiSchema={uiSchemas['titles']}
          formData={formData['titles']}
          {...props} 
        />
      )} />
      <Route path='/traps' render={(props) => (
        <FormPage
          schema={schemas['traps']}
          uiSchema={uiSchemas['traps']}
          formData={formData['traps']}
          {...props} 
        />
      )} />
      <Route path='/vehicles' render={(props) => (
        <FormPage
          schema={schemas['vehicles']}
          uiSchema={uiSchemas['vehicles']}
          formData={formData['vehicles']}
          {...props} 
        />
      )} />
      <Route path='/' component={DashboardPage} />
    </Switch>
  </App>
);
