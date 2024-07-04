import { ImageBackground, Text, Image, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "./style"
import { ButtonSlide } from "../../components/ButtonSlide";
import { IPagina } from "../../../App";

export function Slide2({ setPageI }: IPagina) {
    const slide = require('../../assets/BackgroundImage2.png')
    const logo = require('../../assets/pandalogo.png')

    return (
        <ImageBackground source={slide} style={styleContainer.container}>
             <View style={styles.main}>
                    <Image source={logo} ></Image>
                    <Text style={styles.text}>Panda</Text>
             </View>
             <View style={styles.botao}>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={false} />
                </View>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={true} />
                </View>
            </View>
        </ImageBackground>
    )
}