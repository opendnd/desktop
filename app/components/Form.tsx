import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { Person } from 'opendnd-core';
import { withStyles } from '@material-ui/core/styles';

const uuidv1 = require('uuid/v1');
const MUIForm = require('material-ui-jsonschema-form');

const styles = () => ({
  root: {},
});

export interface ISchema {
  title: string
  description: string
  type: string
  required: string[]
  properties: object
}

export interface IProps {
  schema: object
  uiSchema: object
  formData: object
  classes: object
}

export interface IState {
  schema: ISchema
  uiSchema: object
  formData: Person
  display: boolean
  action: string
}

class Form extends React.Component<IProps> {
  constructor(props:IProps) {
    super(props);

    const { schema, uiSchema, formData } = props;

    this.state = {
      schema,
      uiSchema,
      formData,
      display: true,
      action: 'New',
    }
  }

  componentWillReceiveProps(props:IProps) {
    const { schema, uiSchema, formData } = props;

    // HACK: the form wouldn't update without this
    this.setState({
      display: false,
    }, () => {
      this.setState({
        schema,
        uiSchema,
        formData,
        display: true,
      });
    })
  }

  handleCancel = () => {
    console.log('cancel!');
  }

  handleSubmit = () => {
    console.log('submit!');
  }
  
  handleChange = () => {
    console.log('change!');
  }

  render() {
    const { schema, uiSchema, formData, display, action } = this.state as IState;

    const mySchema = Object.assign({}, schema);
    mySchema.title = schema.description;

    // set defaults for a person
    formData.uuid = uuidv1();

    return (
      <div>
        {
          display ? (
            <div>
              <Typography variant="title" color="inherit">{`${action} ${schema.title}`}</Typography>
              <div id="mui-form">
                <MUIForm
                  schema={mySchema}
                  uiSchema={uiSchema}
                  formData={formData}
                  onCancel={this.handleCancel}
                  onSubmit={this.handleSubmit}
                  onChange={this.handleChange}
                  classes={this.props.classes}
                />
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default withStyles(styles)(Form);
