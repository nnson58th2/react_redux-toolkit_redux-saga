import React, { useEffect } from 'react';
import cityApi from 'api/cityApi';
import { Route, Switch } from 'react-router-dom';

import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';

import LoginPage from 'features/auth/pages/LoginPage';

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => console.log(res));
  });

  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>

      <PrivateRoute path="/admin">
        <AdminLayout />
      </PrivateRoute>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
