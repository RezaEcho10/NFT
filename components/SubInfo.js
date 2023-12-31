import { View, Image, Text } from 'react-native'
import { assets, SIZES, COLORS, SHADOWS, FONTS } from '../constants';

export const NFTTitle = ({title, subTitle, titleSize, subTitleSize}) => {
    return (
        <View>
            <Text style={{ fontSize: titleSize, fontFamily: FONTS.semiBold }} >{title}</Text>
            <Text style={{ fontSize: subTitleSize, fontFamily: FONTS.regular }} >{subTitle}</Text>
        </View>
    )
}

export const EthPrice = ({img, price}) => {
    return (
        <View style={{
            flexDirection: "row",
        }} >
            <Image source={img} style={{ width: 24, height: 24 }} />
            <Text>{price}</Text>
        </View>
    )
}

const ImageCmp = ({ imgUrl, index }) => {
    return (
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
          marginLeft: index === 0 ? 0 : -SIZES.font,
        }}
      />
    );
  };

export const People = () => {
    return (
        <View style={{ flexDirection: "row" }}>
          {[assets.person02, assets.person03, assets.person04].map(
            (imgUrl, index) => (
              <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
            )
          )}
        </View>
      );    
}

export const EndDate = () => {
    return (
        <View
          style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            justifyContent: "center",
            alignItems: "center",
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: "50%",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: COLORS.primary,
            }}
          >
            Ending in
          </Text>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.medium,
              color: COLORS.primary,
            }}
          >
            12h 30m
          </Text>
        </View>
      );
}

export const SubInfo = () => {


  return (
    <View style={{
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row"
    }} >
        <People />
        <EndDate />
    </View>
  )
}
