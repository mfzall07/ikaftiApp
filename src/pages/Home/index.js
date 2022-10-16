import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity} from "react-native"
import Api from "../../Api";
import { CardAgenda, CardAnnouncement, CardCareer, CardInformation, CardPartner, Gap } from "../../component/atoms";
import { colors } from "../../utils"
import moment from "moment";
import * as Progress from 'react-native-progress';
import { exampleContent } from "../../assets";

const Home = ({navigation}) => {

    const [announcement, setAnnouncement] = useState ('')
    const [information, setInformation] = useState ('')
    const [agenda, setAgenda] = useState ('')
    const [job, setJob] = useState ('')
    const [progress1, setProgress1] = useState('')
    const [progress2, setProgress2] = useState('')
    const [progress3, setProgress3] = useState('')
    const [progress4, setProgress4] = useState('')
    const [limit, setLimit] = useState(6)
    
    const fetcData = async () => {
        try {
            const responseAnnouncement = await Api.indexAnnouncement(limit)
            setAnnouncement(responseAnnouncement.data.data)

            const responseInformation = await Api.indexInformation(limit)
            setInformation(responseInformation.data.data)

            const responseAgenda = await Api.indexAgenda(limit)
            setAgenda(responseAgenda.data.data)

            const responseJob = await Api.indexJob(limit)
            setJob(responseJob.data.data)
            console.log(responseJob.data.data)

            const percentage = await Api.ProgressBar()
            setProgress1(percentage.data.percentage1)
            setProgress2(percentage.data.percentage2)
            setProgress3(percentage.data.percentage3)
            setProgress4(percentage.data.percentage4)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetcData()
    }, [])
    

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Gray} translucent = {false}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Gap height={20}/>
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
                    {/* <Text style={styles.progressText}>Percentage Alumni</Text> */}
                    <Gap height={10}/>
                    <View style={styles.progress}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{position:'relative', justifyContent: 'center', alignItems: 'center'}}>
                                <Progress.Circle size={60} progress={progress1.bar2} color={colors.Red}/>
                                <Text style={{position: 'absolute', color: colors.Red, fontSize: 12}}>{progress1.bar1}%</Text>
                            </View>
                            <Gap height={5}/>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 10, color: colors.Black }}>1987-1996</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{position:'relative', justifyContent: 'center', alignItems: 'center'}}>
                                <Progress.Circle size={60} progress={progress2.bar2} color={colors.Red}/>
                                <Text style={{position: 'absolute', color: colors.Red, fontSize: 12}}>{progress2.bar1}%</Text>
                            </View>
                            <Gap height={5}/>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 10, color: colors.Black }}>1997-2006</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{position:'relative', justifyContent: 'center', alignItems: 'center'}}>
                                <Progress.Circle size={60} progress={progress3.bar2} color={colors.Red}/>
                                <Text style={{position: 'absolute', color: colors.Red, fontSize: 12}}>{progress3.bar1}%</Text>
                            </View>
                            <Gap height={5}/>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 10, color: colors.Black }}>2007-2016</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{position:'relative', justifyContent: 'center', alignItems: 'center'}}>
                                <Progress.Circle size={60} progress={progress4.bar2} color={colors.Red}/>
                                <Text style={{position: 'absolute', color: colors.Red, fontSize: 12}}>{progress4.bar1}%</Text>
                            </View>
                            <Gap height={5}/>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 10, color: colors.Black }}>2017-2018</Text>
                        </View>
                    </View>
                    <Gap height={30}/>
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
                                const params = {
                                    id : data.id
                                }
                                return(
                                    <CardInformation key={data.id}
                                        title={data.title}
                                        image={data.thumbnail}
                                        author={data.author}
                                        date={moment(data.created_at).format('DD MMM YYYY')}
                                        onPress={ () => navigation.navigate('InformationDetail', params) }
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
                                const params = {
                                    id : data.id
                                }
                                return (
                                    <CardCareer key={data.id}
                                        image={data.image}
                                        title={data.title}
                                        description={data.description}
                                        salary={data.salary}
                                        typeJob={data.job_type}
                                        onPress={ () => navigation.navigate('CareerDetail', params) }
                                    />
                                )
                            }) }
                        </ScrollView>
                    </View>
                    <Gap height={20}/>
                    <View style={styles.sectionPartner}>
                        <View style={styles.partnerHeader}>
                            <Text style={styles.partnerText}>Our Partner</Text>
                        </View>
                        <Gap height={10} />
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                            <CardPartner source={exampleContent} title={'My Partnership'}/>
                            <Gap width={10}/>
                            <CardPartner source={exampleContent} title={'My Partnership'}/>
                            <Gap width={10}/>
                            <CardPartner source={exampleContent} title={'My Partnership'}/>
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
    progressText: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: colors.Black,
        fontFamily: 'Poppins-Bold',
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
    sectionPartner: {
        width: '100%',
        height: 170,
    },
    partnerHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },  
    partnerText: {
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