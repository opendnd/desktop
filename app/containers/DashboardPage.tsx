import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Dashboard from '../components/Dashboard';

export class DashboardPage extends React.Component<RouteComponentProps<any>, void> {
  render() {
    return (
      <Dashboard />
    );
  }
}

export default (DashboardPage as any as React.StatelessComponent<RouteComponentProps<any>>);
