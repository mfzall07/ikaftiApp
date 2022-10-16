import React from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView, Image } from 'react-native'
import { About1, About2, About3, IkaftiBlack } from '../../assets'
import { Gap } from '../../component'
import { colors } from '../../utils'

const About = () => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Gray} translucent = {false}/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.main}>
                <View>
                    <Text style={styles.title}>About Us</Text>
                    <Gap height={20}/>
                    <Image source={IkaftiBlack} style={{ width: 200, height: 100, resizeMode: 'stretch', alignSelf: 'center'}}/>
                    <Gap height={30}/>
                    <View style={{borderWidth: 1, padding: 16, borderRadius: 10, borderColor: colors.Gray}}>
                        <Text style={styles.text}>
                            Sejarah terbentuknya IKA FTI UMI, berdasar dari keingin bersama untuk menghimpun para alumni-alumni yang telah menyelesaikan Studi di fakultas Teknologi Industri Universitas Muslim Indonesia. 
                        </Text>
                        <Gap height={5}/>
                        <Text style={styles.text}>
                            Pada tahun 1994 terbentuk lah IKA FTI UMI, yang dimana telah dselengarakan dengan cara Musyawarah mufakat & terpilihlah Ir. Larisang selaku ketua umum pertama ika fti umi dengan masa kepengurusan 1994-1996. lalu dilanjutkan kembali oleh Ir. Wiyono sebagai ketua umum dengan masa kepengurusan Pada tahun 1996-1998, seiring berjalannya waktu kepengurusan ika fti umi sempat vakum sementara, lalu diangkat lah Ir. Suradi sebagai pejabat sementara ketua umum ika fti umi untuk kurung waktu yang tidak ditentukan. Lalu pada tahun 2017 bersamaan dengan diselengarakannya Silatnas IKA FTI UMI, digelar lah Musyawarah ke 2 IKA FTI UMI. Yg mn mendaulat Ir. Fahrudin Wahid sebagai ketua umum ika fti umi dengan masa periode 2017-2021. Lalu pada tahun 2022 terselengarahlah Musyawarah yg ke III dimana terpilihlah Ir Amran Wahid sbg ketua umum ika fti umi periode 2022-2026.
                        </Text>
                    </View>
                </View>
                <Gap height={20}/>
                <View style={styles.imageAbout}>
                    <Image source={About1} style={{ width: 100, height: 100, resizeMode: 'cover', borderRadius: 50}}/>
                    <Gap width={10}/>
                    <Image source={About2} style={{ width: 100, height: 100, resizeMode: 'cover', borderRadius: 50}}/>
                    <Gap width={10}/>
                    <Image source={About3} style={{ width: 100, height: 100, resizeMode: 'cover', borderRadius: 50}}/>
                </View>
                <Gap height={20}/>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white'
  },
  main: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: colors.Black,
    fontFamily: 'Poppins-Bold',
  },
  text: {
    textAlign: 'justify',
    color: colors.Black,
    fontFamily: 'Poppins',
    fontSize: 12
  },
  imageAbout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  }
})

export default About