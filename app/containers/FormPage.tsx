import * as React from 'react';
import Form from '../components/Form';

export interface IProps {
  schema: object
  uiSchema: object
  formData: object
}

export class FormPage extends React.Component<IProps> {
  render() {
    const { schema, uiSchema, formData } = this.props;

    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
      />
    );
  }
}

export default FormPage;
