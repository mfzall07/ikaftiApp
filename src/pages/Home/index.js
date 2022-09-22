import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity} from "react-native"
import Api from "../../Api";
import { CardAgenda, CardAnnouncement, CardCareer, CardInformation, Gap } from "../../component/atoms";
import { colors } from "../../utils"
import moment from "moment";
import * as Progress from 'react-native-progress';

const Home = ({navigation}) => {

    const [announcement, setAnnouncement] = useState ('')
    const [information, setInformation] = useState ('')
    const [agenda, setAgenda] = useState ('')
    const [job, setJob] = useState ('')
    const [progress, setProgress] = useState('')
    
    const fetcData = async () => {
        try {
            const responseAnnouncement = await Api.indexAnnouncement()
            setAnnouncement(responseAnnouncement.data.data)

            const responseInformation = await Api.indexInformation()
            setInformation(responseInformation.data.data)

            const responseAgenda = await Api.indexAgenda()
            setAgenda(responseAgenda.data.data)

            const responseJob = await Api.indexJob()
            setJob(responseJob.data.data)

            const percentage = await Api.ProgressBar()
            setProgress(percentage.data)
            console.log(percentage.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetcData()
    }, [])
    

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.sectionAnnouncement}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                        { Object.values(announcement).map((data) => {
                            return (
                                <CardAnnouncement key={data.id}
                                    title={data.title}
                                    description={data.description}
                                    image={data.image}
                                />
                            )
                        }) }
                    </ScrollView>
                </View>
                <View style={styles.main}>
                    {/* <View style={styles.progress}>
                        <View style={{ alignItems: 'center' }}>
                            <Progress.Circle size={75} progress={progress.percentage1 / 100} showsText={true}/>
                            <Gap height={5}/>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: colors.Black }}>1987-1996</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Progress.Circle size={75} progress={progress.percentage2 / 100} showsText={true}/>
                            <Gap height={5}/>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: colors.Black }}>1997-2006</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Progress.Circle size={75} progress={progress.percentage3 / 100} showsText={true}/>
                            <Gap height={5}/>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: colors.Black }}>2007-2016</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Progress.Circle size={75} progress={progress.percentage4 / 100} showsText={true}/>
                            <Gap height={5}/>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: colors.Black }}>2017-2018</Text>
                        </View>
                    </View> */}
                    <Gap height={20}/>
                    <View style={styles.sectionInformation}>
                        <View style={styles.informationHeader}>
                            <Text style={styles.informationText}>Informations</Text>
                            <TouchableOpacity onPress={ () => navigation.navigate('InformationList') }>
                                <Text style={styles.see}>See all</Text>
                            </TouchableOpacity>
                        </View>
                        <Gap height={10} />
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                            {Object.values(information).map((data) => {
                                return(
                                    <CardInformation key={data.id}
                                        title={data.title}
                                        image={data.thumbnail}
                                        author={data.author}
                                        date={moment(data.created_at).format('DD MMM YYYY')}
                                        onPress={ () => navigation.navigate('InformationDetail') }
                                    />
                                )
                            })}
                        </ScrollView>
                    </View>
                    <Gap height={20}/>
                    <View style={styles.sectionAgenda}>
                        <View style={styles.agendaHeader}>
                            <Text style={styles.agendaText}>Agenda</Text>
                            <TouchableOpacity onPress={ () => navigation.navigate('AgendaList') }>
                                <Text style={styles.see}>See all</Text>
                            </TouchableOpacity>
                        </View>
                        <Gap height={10} />
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                            {Object.values(agenda).map((data) => {
                                const params = {
                                    id : data.id
                                }
                                return (
                                    <CardAgenda key={data.id}
                                        title={data.title}
                                        author={data.author}
                                        image={data.thumbnail}
                                        date={moment(data.created_at).format('DD MMM YYYY')}
                                        onPress={ () => navigation.navigate('AgendaDetail', params)}
                                    />
                                )
                            })}
                        </ScrollView>
                    </View>
                    <Gap height={20}/>
                    <View style={styles.sectionCareer}>
                        <View style={styles.careerHeader}>
                            <Text style={styles.careerText}>Careers</Text>
                            <TouchableOpacity onPress={ () => navigation.navigate('CareerList') }>
                                <Text style={styles.see}>See all</Text>
                            </TouchableOpacity>
                        </View>
                        <Gap height={10} />
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                            { Object.values(job).map((data) => {
                                return (
                                    <CardCareer key={data.id}
                                        title={data.title}
                                        description={data.description}
                                        salary={data.salary}
                                        typeJob={data.job_type}
                                        onPress={ () => navigation.navigate('CareerDetail') }
                                    />
                                )
                            }) }
                        </ScrollView>
                    </View>
                    <Gap height={10}/>
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    main: {
        padding: 16,
    },
    progress: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sectionInformation: {
        width: '100%',
        height: 225,
    },
    informationHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },  
    informationLine: {
        width: '50%',
        height: 2.5,
        backgroundColor: colors.Red
    },
    informationText: {
        width:'50%',
        fontSize: 20,
        textTransform: 'uppercase',
        color: colors.Black,
        fontFamily: 'Poppins-Bold',
    },
    sectionCareer: {
        width: '100%',
        height: 245,
    },
    careerHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },  
    careerLine: {
        width: '65%',
        height: 2,
        backgroundColor: colors.Red
    },
    careerText: {
        width:'35%',
        fontSize: 20,
        textTransform: 'uppercase',
        color: colors.Black,
        fontFamily: 'Poppins-Bold',
    },
    sectionAgenda: {
        width: '100%',
        height: 225,
    },
    agendaHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },  
    agendaLine: {
        width: '70%',
        height: 2.5,
        backgroundColor: colors.Red
    },
    agendaText: {
        width:'30%',
        fontSize: 20,
        textTransform: 'uppercase',
        color: colors.Black,
        fontFamily: 'Poppins-Bold',
    },
    see: {
        fontSize: 12,
        color: colors.Red,
        fontFamily: 'Poppins-Bold'
    }
})

export default Home;