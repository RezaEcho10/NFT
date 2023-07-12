import { TouchableOpacity, Image, Text } from "react-native"
import { COLORS, SIZES, SHADOWS } from "../constants"

export const CircleButton = ({handlePress,img, ...props}) => {
  return (
    <TouchableOpacity style={{
        width: 48,
        height: 48,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props
    }}
        onPress={handlePress}
     >
        <Image 
            source={img}
            resizeMode="cover"
            style={{
                width: 24, height: 24
            }}
             />
    </TouchableOpacity>
  )
}

export const RectButton = ({minWidth, handlePress}) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: COLORS.primary,
            minWidth: minWidth,
            borderRadius: SIZES.extraLarge,
            padding: SIZES.small,
            textAlign: 'center',
        }}
        onPress={handlePress}
         >
            <Text style={{
                color: COLORS.white,
            }} >Place a Bid</Text>
        </TouchableOpacity>
    )
}
