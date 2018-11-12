import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const pinfo = require('../../package.json');
const uuidv1 = require('uuid/v1');
const MUIForm = require('material-ui-jsonschema-form');
const fs = require('fs');
const settings = require('electron-settings');
// const electron = require('electron');
// const { remote } = electron;

const linkedMapping:{[key:string]: string} = {
  'ILinkArtwork': 'artwork',
  'ILinkBackground': 'backgrounds',
  'ILinkBuilding': 'buildings',
  'ILinkCalendar': 'calendars',
  'ILinkCampaign': 'campaigns',
  'ILinkCulture': 'cultures',
  'ILinkDialog': 'dialogs',
  'ILinkDisease': 'diseases',
  'ILinkDNA': 'dna',
  'ILinkDomain': 'domains',
  'ILinkDungeon': 'dungeons',
  'ILinkDynasty': 'dynasties',
  'ILinkEncounter': 'encounters',
  'ILinkFaction': 'factions',
  'ILinkFamiliar': 'familiars',
  'ILinkFeature': 'features',
  'ILinkItem': 'items',
  'ILinkKlass': 'klasses',
  'ILinkLanguage': 'languages',
  'ILinkMonster': 'monsters',
  'ILinkName': 'names',
  'ILinkPerson': 'persons',
  'ILinkQuest': 'quests',
  'ILinkRace': 'races',
  'ILinkReligion': 'religions',
  'ILinkSaying': 'sayings',
  'ILinkSigil': 'sigils',
  'ILinkSpell': 'spells',
  'ILinkStory': 'stories',
  'ILinkTitle': 'titles',
  'ILinkTool': 'tools',
  'ILinkTrap': 'traps',
  'ILinkVehicle': 'vehicles',
};

const styles = () => ({
  root: {},
});

export enum Actions {
  Render = "Render",
  Overview = "Overview",
  New = "New",
  Modify = "Modify",
}

export interface ISchema {
  title: string
  description: string
  type: string
  required: string[]
  properties: any
}

export interface IProps {
  schema: any
  uiSchema: any
  formData: any
  classes: any
  resource: string
  resources: string
}

export interface IState {
  schema: ISchema
  mySchema: ISchema
  uiSchema: any
  formData: any
  myFormData: any
  resource: string
  resources: string
  action: Actions
  resourceData: IResourceLink[]
}

export interface IResourceLink {
  uuid: string
  name: string
}

export interface IResources {
  [uuid:string]: IResourceLink
}

export interface IMUIForm {
  formData: any
}

class Form extends React.Component<IProps> {
  state:IState

  constructor(props:IProps) {
    super(props);

    const { schema, uiSchema, formData, resource, resources } = props;

    this.state = {
      schema,
      mySchema: this.cloneSchema(schema, resources),
      uiSchema,
      formData,
      myFormData: this.cloneFormData(formData),
      action: Actions.Overview,
      resource,
      resources,
      resourceData: this.listResources(resources),
    };
  }

  componentWillReceiveProps(props:IProps) {
    const { schema, uiSchema, formData, resource, resources } = props;

    // HACK: the form wouldn't update without this
    this.setState({
      action: Actions.Render,
      schema,
      mySchema: this.cloneSchema(schema, resources),
      uiSchema,
      formData,
      myFormData: this.cloneFormData(formData),
      resource,
      resources,
    }, () => {
      this.setState({
        action: Actions.Overview,
        resourceData: this.listResources(resources),
      });
    })
  }

  // this takes a prop and converts to enum choices
  createChoices = (prop:any, options:string[]) => {
    prop.type = 'string';
    prop.enum = options;

    delete prop.properties;
    delete prop.additionalProperties;
    delete prop.propertyOrder;
    delete prop.required;
  }

  // this takes a prop and converts to an array of enum choices
  createArrayChoices = (prop:any, options:string[]) => {
    prop.type = 'array';
    prop.items = {
      enum: options,
    };

    delete prop.properties;
    delete prop.additionalProperties;
    delete prop.propertyOrder;
    delete prop.required;
  }

  cloneSchema = (schema:ISchema, resources:string) => {
    const mySchema = Object.assign({}, schema);
    mySchema.title = schema.description;

    // check for linkings
    Object.keys(mySchema.properties).forEach((key) => {
      const prop = mySchema.properties[key];
      if (prop.description) {

        // check for linking
        if (prop.description.includes('@link')) {
          const found = prop.description.match(/\@link\:(\w+)\[?\]?/gi);
          if (found.length > 0) {
            const link:string = found[0].replace('@link:', '');
            const rawLink:string = link.replace('[]', '');
            let linkedResources:string = resources;

            // get linked resource if it's not itself
            if (rawLink !== 'ILinkResource') linkedResources = linkedMapping[rawLink];

            // get the options
            const options = this.listResources(linkedResources).map((linkedResource) => {
              return linkedResource.name;
            });

            // handle as array
            if (link.includes('[]')) {
              this.createArrayChoices(prop, options);
            } else {
              this.createChoices(prop, options);
            }
          }
        }
      }
    });

    return mySchema;
  }

  cloneFormData = (formData:any) => {
    const myFormData = Object.assign({}, formData);
    myFormData.uuid = uuidv1();
    myFormData.version = pinfo.version;

    return myFormData;
  }

  listResources = (resources:string):IResourceLink[] => {
    const folder = `${settings.get('dataFolder')}/${resources}`;
    if (!fs.existsSync(folder)) fs.mkdirSync(folder);
    const rootPath = `${folder}/${resources}.json`;
    if (!fs.existsSync(rootPath)) fs.writeFileSync(rootPath, JSON.stringify({}));
    const root:IResources = JSON.parse(fs.readFileSync(rootPath, 'utf-8'));
    const resourceData = Object.keys(root).map(key => root[key]);

    return resourceData;
  }

  handleCancel = () => {
    this.setState({
      action: Actions.Overview,
    });
  }

  handleSubmit = (data:IMUIForm) => {
    const { formData:myFormData } = data;
    const { resources } = this.state;
    const folder = `${settings.get('dataFolder')}/${resources}`;
    const rootPath = `${folder}/${resources}.json`;
    const filepath = `${folder}/${myFormData.uuid}.json`;
    let valid = true;

    // TODO: revisit valid / error checking
    // check for top-level required fields
    // schema.required.forEach((required) => {
    //   if (!myFormData[required]) valid = false;
    // });

    if (valid) {
      // get the root path and write
      if (!fs.existsSync(rootPath)) fs.writeFileSync(rootPath, JSON.stringify({}));
      const root = JSON.parse(fs.readFileSync(rootPath, 'utf-8'));
      root[myFormData.uuid] = {
        uuid: myFormData.uuid,
        name: myFormData.name,
      };
      fs.writeFileSync(rootPath, JSON.stringify(root));

      // write the individual file
      fs.writeFileSync(filepath, JSON.stringify(myFormData));

      // update state
      this.setState({
        action: Actions.Overview,
        resourceData: this.listResources(resources),
      });
    }
  }
  
  handleChange = (data:IMUIForm) => {
    const { formData:myFormData } = data;
    this.setState({
      myFormData,
    });
  }

  handleNew = () => {
    const { formData } = this.state;
    this.setState({
      action: Actions.New,
      myFormData: this.cloneFormData(formData),
    })
  }

  handleModify = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const { resources } = this.state;
    const folder = `${settings.get('dataFolder')}/${resources}`;
    const uuid = e.target.value;
    const filepath = `${folder}/${uuid}.json`;

    // load the file if we have it
    if (fs.existsSync(filepath)) {
      const myFormData = JSON.parse(fs.readFileSync(filepath));
      
      this.setState({
        myFormData,
        action: Actions.Modify,
      });
    }
  }

  handleDelete = () => {
    const { myFormData, resources } = this.state;
    const folder = `${settings.get('dataFolder')}/${resources}`;
    const { uuid } = myFormData;
    const filepath = `${folder}/${uuid}.json`;
    const rootPath = `${folder}/${resources}.json`;

    // get the root path and write
    if (!fs.existsSync(rootPath)) fs.writeFileSync(rootPath, JSON.stringify({}));
    const root = JSON.parse(fs.readFileSync(rootPath, 'utf-8'));
    delete root[uuid];
    fs.writeFileSync(rootPath, JSON.stringify(root));

    // delete the file if we have it
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);

      this.setState({
        resourceData: this.listResources(resources),
        action: Actions.Overview,
      });
    }
  }

  render() {
    const { schema, mySchema, uiSchema, myFormData, action, resource, resources, resourceData } = this.state;

    return (
      <div>
        {(() => {
          switch(action) {
            case Actions.New:
              return (
                <div>
                  <Typography variant="h6" color="inherit">{`${action} ${schema.title}`}</Typography>
                  <div id="mui-form">
                    <MUIForm
                      schema={mySchema}
                      uiSchema={uiSchema}
                      formData={myFormData}
                      onCancel={this.handleCancel}
                      onSubmit={this.handleSubmit}
                      onChange={this.handleChange}
                      classes={this.props.classes}
                    />
                  </div>
                </div>
              );

            case Actions.Modify:
              return (
                <div>
                  <div className="pull-right">
                    <Button 
                      variant="contained"
                      color="secondary"
                      onClick={this.handleDelete}
                    >
                      Delete
                    </Button>
                  </div>
                  <Typography variant="h6" color="inherit">{`${action} ${schema.title}`}</Typography>
                  <div id="mui-form">
                    <MUIForm
                      schema={mySchema}
                      uiSchema={uiSchema}
                      formData={myFormData}
                      onCancel={this.handleCancel}
                      onSubmit={this.handleSubmit}
                      onChange={this.handleChange}
                      classes={this.props.classes}
                    />
                  </div>
                </div>
              );
            
            case Actions.Overview:
              return (
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNew}
                  >
                    {`${Actions.New} ${resource}`}
                  </Button>
                  <Paper className="Paper">
                    {
                      (resourceData.length > 0) ? (
                        <TextField
                          select
                          label={`Select ${resource}`}
                          onChange={this.handleModify}
                          value=""
                          margin="normal"
                          fullWidth
                        >
                          {resourceData.map(option => (
                            <MenuItem key={option.uuid} value={option.uuid}>
                              {option.name}
                            </MenuItem>
                          ))}
                        </TextField>
                      ) : (
                        <Typography>
                          {`No ${resources} have been created yet`}
                        </Typography>
                      )
                    }
                  </Paper>
                </div>
              );

            default:
              return (<div></div>);
          }
        })()}
      </div>
    );
  }
}

export default withStyles(styles)(Form);
