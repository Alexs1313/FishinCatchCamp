import { NavigationContainer as FishinCatchNavigation } from '@react-navigation/native';
import Fishincatchstck from './FishinCatchCamp/fishincatchnav/Fishincatchstck';
import { FishinCatchCntxProvider } from './FishinCatchCamp/fishincatchstore/Fishincatchcntx';

const App = () => {
  return (
    <FishinCatchNavigation>
      <FishinCatchCntxProvider>
        <Fishincatchstck />
      </FishinCatchCntxProvider>
    </FishinCatchNavigation>
  );
};

export default App;
