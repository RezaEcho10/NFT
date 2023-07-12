import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native'
import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader } from '../components'

const Home = () => {
  const [nftSearch , setNFTSearch] = useState(NFTData)

  const handleSearch = (value) => {
    const filteredData = NFTData.filter((item) => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))

    if(filteredData.length){
      setNFTSearch(filteredData)
    }else{
      setNFTSearch(NFTData)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1}}>
            <View style={{ zIndex: 0}}>
                <FlatList 
                    data={nftSearch}
                    renderItem={({item}) => <NFTCard data={item} /> }
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={<HomeHeader handleSearch={handleSearch} />}
                 />
            </View>
            <View style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1
            }} >
              <View style={{ height: 300, backgroundColor: COLORS.primary }} />
              <View style={{ flex: 1, backgroundColor: COLORS.white }} />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home