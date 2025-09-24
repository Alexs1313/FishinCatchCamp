import { createStackNavigator } from '@react-navigation/stack';
import Fishincatchtb from '../fishincatchnav/Fishincatchtb';
import Fishincatchgddtls from '../fishincatchscrns/fishincatchstack/Fishincatchgddtls';
import Fishincatchadvdtls from '../fishincatchscrns/fishincatchstack/Fishincatchadvdtls';
import Fishincatcheditset from '../fishincatchscrns/fishincatchstack/Fishincatcheditset';
import Fishincatchplnrdtls from '../fishincatchscrns/fishincatchstack/Fishincatchplnrdtls';

const FishincatchStackNav = createStackNavigator();

const Fishincatchstck = () => {
  return (
    <FishincatchStackNav.Navigator screenOptions={{ headerShown: false }}>
      <FishincatchStackNav.Screen
        name="Fishincatchtb"
        component={Fishincatchtb}
      />
      <FishincatchStackNav.Screen
        name="Fishincatchgddtls"
        component={Fishincatchgddtls}
      />
      <FishincatchStackNav.Screen
        name="Fishincatchadvdtls"
        component={Fishincatchadvdtls}
      />
      <FishincatchStackNav.Screen
        name="Fishincatcheditset"
        component={Fishincatcheditset}
      />
      <FishincatchStackNav.Screen
        name="Fishincatchplnrdtls"
        component={Fishincatchplnrdtls}
      />
    </FishincatchStackNav.Navigator>
  );
};

export default Fishincatchstck;
