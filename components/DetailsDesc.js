import { useState } from 'react'
import { View, Text } from 'react-native'
import { EthPrice, NFTTitle } from './SubInfo'
import { FONTS, SIZES, assets } from '../constants'

const DetailsDesc = ({data}) => {
    
    const [text, setText] = useState(data.description.slice(0,85))
    const [readMore, setReadMore] = useState(false)

  return (
    <View style={{
        padding: SIZES.font,
        width: '100%',
    }} >
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }} >
            <NFTTitle
                title={data.name}
                subTitle={data.creator}
                titleSize={SIZES.large}
                subTitleSize={SIZES.small}
            />
            <EthPrice img={assets.eth} price={data.price} />
        </View>
         <View style={{
            marginTop: SIZES.base,
         }} >
            <Text style={{
                fontFamily: FONTS.semiBold
            }} >Description</Text>
            <View style={{
                flexDirection: 'column'
            }} >
                <Text>{text}{!readMore && '...'}
                    <Text onPress={() => {
                        if(!readMore){
                            setText(data.description)
                            setReadMore(true)
                        }else{
                            setText(data.description.slice(0,85))
                            setReadMore(false)
                        }
                    }} >
                        {readMore ? "Show Less" : "Show More"}
                    </Text>
                </Text>
            </View>
         </View>
    </View>
  )
}

export default DetailsDesc