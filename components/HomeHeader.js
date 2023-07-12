import { View, Image, Text, TextInput } from "react-native"
import { assets, COLORS, FONTS, SIZES } from "../constants"

const HomeHeader = ({handleSearch}) => {
  return (
    <View style={{
        padding: SIZES.font
    }} >
        <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Image source={assets.logo} resizeMode="contain" style={{
                width: 90,
                height: 25,
            }}/>
            <View>
                <Image source={assets.person01} style={{
                    width: 48,
                    height: 48
                }} />
                <Image source={assets.badge} style={{
                    width: 15,
                    height: 15,
                    bottom: 0,
                    right: 0,
                    position: "absolute"
                }}/>
            </View>
        </View>
        <View>
            <Text style={{ color: COLORS.white , fontSize: SIZES.large / 2 }} >Hello Victoria 👋</Text>
            <Text style={{ color: COLORS.white, fontFamily: FONTS.bold, marginTop: SIZES.base}} >Let’s find masterpiece Art</Text>
        </View>
        <View style={{
            marginTop: 20
        }}>
           <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center"
           }} >
                <Image source={assets.search} resizeMode="contain" style={{
                        width: 20,
                        height: 20,
                        marginLeft: SIZES.base,
                        position: "absolute"
                }} />
                <TextInput placeholder="Search NFTs" style={{
                    backgroundColor: COLORS.gray,
                    height: 40,
                    flex: 1,
                    paddingHorizontal: SIZES.extraLarge * 1.4,
                }} 
                onChangeText={handleSearch}
                />
            </View> 
        </View>
    </View>
  )
}

export default HomeHeader