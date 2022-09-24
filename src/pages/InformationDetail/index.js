import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../component'
import { colors } from '../../utils'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Api from '../../Api'
import RenderHTML from 'react-native-render-html'

const InformationDetail = ({navigation, route}) => {
    const { id } = route.params
    const [showInformation, setShowInformation] = useState('')
    
    const fetcData = async () => {
      try {
          const responseInformation = await Api.ShowInformation(id)
          console.log(responseInformation.data.data)
          setShowInformation(responseInformation.data.data)
      } catch (error) {
          console.log(error)
      }
    }

    const source = {
      html: showInformation.body
    };

    console.log(source)
    

    useEffect(() => {
        fetcData()
    }, [])
    return (
      <View style={styles.container}>
        <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
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
                <Text style={styles.headerTitle}>{showInformation.title}</Text>
                <View style={styles.line}></View>
                <Gap height={10}/>
                <View style={styles.subHeader}>
                  <Text style={styles.headersTitle} numberOfLines={1}>{showInformation.author}</Text>
                  <Text style={styles.headerSubTitle}>{moment(showInformation.created_at).format('DD MMM YYYY')}</Text>
                </View>
                <Gap height={30}/>
            </View>
            <View>
              <RenderHTML baseStyle={{color: colors.Black}} source={source}/>
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
    flexWrap: 'wrap'
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
  }
})

export default InformationDetail