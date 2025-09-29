import { NavigationContainer } from '@react-navigation/native';
import { FishinCatchCntxProvider } from './fishinCatchAppSrc/fishinCatchStore/Fishincatchcntx';
import { createStackNavigator } from '@react-navigation/stack';
import Fishincatchtb from './fishinCatchAppSrc/fishinCatchTabNavigation/Fishincatchtb';
import Fishincatchgddtls from './fishinCatchAppSrc/fishinCatchScreens/fishinCatchStackScreens/Fishincatchgddtls';
import Fishincatchadvdtls from './fishinCatchAppSrc/fishinCatchScreens/fishinCatchStackScreens/Fishincatchadvdtls';
import Fishincatcheditset from './fishinCatchAppSrc/fishinCatchScreens/fishinCatchStackScreens/Fishincatcheditset';
import Fishincatchplnrdtls from './fishinCatchAppSrc/fishinCatchScreens/fishinCatchStackScreens/Fishincatchplnrdtls';
const FishinCatchNavigation = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <FishinCatchCntxProvider>
        <FishinCatchNavigation.Navigator screenOptions={{ headerShown: false }}>
          <FishinCatchNavigation.Screen
            name="Fishincatchtb"
            component={Fishincatchtb}
          />
          <FishinCatchNavigation.Screen
            name="Fishincatchgddtls"
            component={Fishincatchgddtls}
          />
          <FishinCatchNavigation.Screen
            name="Fishincatchadvdtls"
            component={Fishincatchadvdtls}
          />
          <FishinCatchNavigation.Screen
            name="Fishincatcheditset"
            component={Fishincatcheditset}
          />
          <FishinCatchNavigation.Screen
            name="Fishincatchplnrdtls"
            component={Fishincatchplnrdtls}
          />
        </FishinCatchNavigation.Navigator>
      </FishinCatchCntxProvider>
    </NavigationContainer>
  );
};

export default App;
