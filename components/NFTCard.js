import { View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from './Button'
import { EthPrice, NFTTitle, SubInfo } from './SubInfo'

const NFTCard = ({data}) => {

    const navigation = useNavigation()

  return (
    <View style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    }} >
        <View style={{ width: "100%", height: 250 }} >
            <Image 
                source={data.image}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: "100%",
                    borderTopLeftRadius: SIZES.font,
                    borderTopRightRadius: SIZES.font
                }}
                 />
            <CircleButton img={assets.heart} top={10} right={10} />
        </View>
        <SubInfo />
        <View style={{ width: "100%", padding: SIZES.font }} >
            <NFTTitle 
                title={data.name}
                subTitle={data.creator}
                titleSize={SIZES.large}
                subTitleSize={SIZES.small}
            />
        </View>
        <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: SIZES.font
        }} >
            <EthPrice img={assets.eth} price={data.price} />
            <RectButton
                minWidth={120}
                fontSize={SIZES.font}
                handlePress={() => navigation.navigate("Details" , { data })}
             />
        </View>
    </View>
  )
}

export default NFTCard