import { Slide1 } from "./src/screens/Slide1";
import { Slide2 } from "./src/screens/Slide2";
import { useFonts, JacquesFrancoisShadow_400Regular } from '@expo-google-fonts/jacques-francois-shadow';
import { Dispatch, SetStateAction, useState } from 'react'

export interface IPagina {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)
  const [fontsLoaded] = useFonts({
    JacquesFrancoisShadow_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }

  if (page == 1) {
    return <Slide1 setPageI={setPage} />
  } else if (page == 2) {
    return <Slide2 setPageI={setPage} />
  }
}