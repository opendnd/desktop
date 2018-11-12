import * as React from 'react';
import Form from '../components/Form';

export interface IProps {
  schema: object
  uiSchema: object
  formData: object
  resource: string
  resources: string
}

export class FormPage extends React.Component<IProps> {
  render() {
    return (
      <Form {...this.props} />
    );
  }
}

export default FormPage;
