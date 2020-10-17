/** @format */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Header from './components/Header';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#f2f3f5',
          },
        }}>
        <Screen name='OrphanagesMap' component={OrphanagesMap} />
        <Screen name='OrphanageDetails' component={OrphanageDetails} />

        <Screen name='OrphanageData' component={OrphanageData} />
        <Screen
          name='SelectMapPosition'
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title='Orfanato' />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
