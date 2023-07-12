import { View, SafeAreaView, FlatList, Image, Text } from "react-native"
import { CircleButton, RectButton } from '../components/Button'
import { SIZES, assets } from "../constants"
import { SubInfo } from '../components/SubInfo'
import { DetailsDesc, DetailsBid } from '../components'
import React from "react"
import { useNavigation } from "@react-navigation/native"

const DetailsHeader = ({data}) => {
  const navigation = useNavigation()
  return (
    <View style={{
      width: "100%",
      height: 300
    }} >
        <Image source={data.image} style={{
          width: "100%",
          height: 250
        }} />
        <CircleButton handlePress={() => navigation.goBack()} img={assets.left} top={10} left={10} />
        <CircleButton img={assets.heart} top={10} right={10} />
        <SubInfo />
    </View>
  )
}

const Details = ({route}) => {
  const { data } = route.params
  return (
    <SafeAreaView>
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center'
      }} >
        <RectButton minWidth={170} />
      </View>
        <FlatList
         data={data.bids}
         renderItem={({item}) => <DetailsBid bid={item} />}
         ListHeaderComponent={() => (
          <React.Fragment>
              <DetailsHeader data={data} />
              <DetailsDesc data={data} />
              <View style={{
                  width: '100%',
                  padding: SIZES.font
              }} >
                {data.bids.length > 0 && (
                <Text>
                  Current Bids
                </Text>
                  )}
              </View>
          </React.Fragment>
         )}
         />
    </SafeAreaView>
  )
}

export default Details