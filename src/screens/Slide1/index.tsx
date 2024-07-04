import { ImageBackground, Text, Image, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "./style"
import { ButtonSlide } from "../../components/ButtonSlide";
import { IPagina } from "../../../App";

export function Slide1({ setPageI }: IPagina) {
    const slide = require('../../assets/BackgroundImage.png')
    const logo = require('../../assets/coelhologo.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
                <View style={styles.main}>
                    <Image source={logo} ></Image>
                    <Text style={styles.text}>Coelho</Text>
                </View>

            <View style={styles.botao}>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={true} />
                </View>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={false} />
                </View>
            </View>
        </ImageBackground>
    )
}