import { View, Image, Text } from 'react-native'
import { EthPrice } from './SubInfo'
import { COLORS, FONTS, SIZES, assets } from '../constants'

const DetailsBid = ({bid}) => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: SIZES.font
    }} >
        <Image source={bid.image} style={{
            width: 48,
            height: 48
        }} />
        <View>
            <Text style={{
              fontFamily: FONTS.bold
            }} >Bid Placed By {bid.name}</Text>
            <Text style={{
              color: COLORS.gray
            }} >{bid.date}</Text>
        </View>
        <EthPrice img={assets.eth} price={bid.price} />
    </View>
  )
}

export default DetailsBid