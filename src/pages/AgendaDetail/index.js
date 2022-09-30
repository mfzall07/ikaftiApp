import React, {useState, useEffect} from 'react'
import moment from 'moment'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../component'
import { colors } from '../../utils'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Api from '../../Api'
import axios from 'axios'
import RenderHTML from 'react-native-render-html'

const AgendaDetail = ({navigation, route}) => {

  const { id } = route.params
  const [showAgenda, setShowAgenda] = useState('')
  
  const fetcData = async () => {
    try {
        const responseAgenda = await Api.showAgenda(id)
        setShowAgenda(responseAgenda.data.data)
    } catch (error) {
        console.log(error)
    }
  }

  const source = {
    html: showAgenda.body
  };

  console.log(source)
  

  useEffect(() => {
      fetcData()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Gray} translucent = {false}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={ () => navigation.goBack()}>
              <Icons name="arrow-circle-left" size={20} color={ colors.Black }/>
              <Gap width={10}/>
              <Text style={{ fontFamily: 'Poppins-Bold', color: colors.Black, top: 2}}>
                  Back
              </Text>
          </TouchableOpacity>
          <Gap height={10}/>
          <View>
              <Text style={styles.headerTitle} numberOfLines={2}>{showAgenda.title}</Text>
              <View style={styles.line}></View>
              <Gap height={10}/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.info}>Author</Text>
              <Gap width={5}/>
              <Text style={styles.infos}>{showAgenda.author}</Text>
            </View>
            <Gap width={15}/>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.info}>Date</Text>
              <Gap width={5}/>
              <Text style={styles.infos}>{moment(showAgenda.created_at).format('DD MMM YYYY')}</Text>
            </View>
            <Gap height={30}/>
          </View>
          <View>
            <Image source={{ uri: showAgenda.thumbnail }} resizeMode='cover' style={{ width: '100%', height: 150, borderRadius: 20 }}/>
          </View>
          <View>
            {/* <Text style={styles.content} >
              {showAgenda.body}
            </Text> */}
            <RenderHTML baseStyle={{color: colors.Black, textAlign: 'justify'}} source={source}/>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors.White,
  },
  main: {
      padding: 16
  },
  headerTitle: {
      fontFamily: 'Poppins-Bold', 
      color: colors.Black, 
      fontSize: 24
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headersTitle: {
      fontFamily: 'Poppins-Bold', 
      color: colors.Black, 
      fontSize: 10
  },
  headerSubTitle: {
      fontFamily: 'Poppins', 
      color: colors.Gray, 
      fontSize: 10, 
  },
  line: {
    width: '65%',
    height: 2,
    backgroundColor: colors.Red
  },
  content: {
    textAlign: 'justify',
    color: colors.Black,
    fontFamily: 'Poppins'
  },
  info: {
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
    color: colors.Black
  },
  infos: {
    fontFamily: 'Poppins',
    fontSize: 10,
    color: colors.Black
  }
})

export default AgendaDetail