import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity} from "react-native"
import Api from "../../Api";
import { CardAgenda, CardAnnouncement, CardCareer, CardInformation, Gap } from "../../component/atoms";
import { colors } from "../../utils"

const Home = ({navigation}) => {
    const [career, setCareer] = useState([
        {
            id: 35327,
            company_name: "",
            description: "",
            image: "",
            job_type: "",
            phone: "",
            placement: "",
            salary: "",
            title: ""
        },
    ])
    const getCareer = async () => {
        const response = await Api.indexCareer('1|kV4fgvQsmGXJ65APqDbY4E1sW0mhgYgX4SdaCP13');
        setCareer(response.data.data)
        // console.log(career[0]['title'])
    }
    useEffect(() => {
        getCareer()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.sectionAnnouncement}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                        <CardAnnouncement
                            title={'Lorem Ipsum is simply dummy text'}
                            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
                            onPress={ () => navigation.navigate('CareerDetail') }
                        />
                        <CardAnnouncement
                            title={'Lorem Ipsum is simply dummy text'}
                            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
                        />
                        <CardAnnouncement
                            title={'Lorem Ipsum is simply dummy text'}
                            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
                        />
                        <CardAnnouncement
                            title={'Lorem Ipsum is simply dummy text'}
                            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
                        />
                    </ScrollView>
                </View>
                <View style={styles.main}>
                    <View style={styles.sectionInformation}>
                        <View style={styles.informationHeader}>
                            <Text style={styles.informationText}>Informations</Text>
                            <TouchableOpacity onPress={ () => navigation.navigate('InformationList') }>
                                <Text style={styles.see}>See all</Text>
                            </TouchableOpacity>
                        </View>
                        <Gap height={10} />
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                            <CardInformation
                                title={'Lorem Ipsum is simply dummy text'}
                                onPress={ () => navigation.navigate('InformationDetail') }
                            />
                            <Gap width={10}/>
                            <CardInformation
                                title={'Lorem Ipsum is simply dummy text'}
                                onPress={ () => navigation.navigate('InformationDetail') }
                            />
                            <Gap width={10}/>
                            <CardInformation
                                title={'Lorem Ipsum is simply dummy text'}
                                onPress={ () => navigation.navigate('InformationDetail') }
                            />
                            <Gap width={10}/>
                            <CardInformation
                                title={'Lorem Ipsum is simply dummy text'}
                                description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
                            />
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
                            <CardAgenda
                                title={'Lorem Ipsum is simply dummy text'}
                                author={'Muh Faizal'}
                                date={'22 May 2022'}
                                onPress={ () => navigation.navigate('AgendaDetail') }
                            />
                            <Gap width={10}/>
                            <CardAgenda
                                title={'Lorem Ipsum is simply dummy text'}
                                author={'Muh Faizal'}
                                date={'22 May 2022'}
                                onPress={ () => navigation.navigate('AgendaDetail') }
                            />
                            <Gap width={10}/>
                            <CardAgenda
                                title={'Lorem Ipsum is simply dummy text'}
                                author={'Muh Faizal'}
                                date={'22 May 2022'}
                                onPress={ () => navigation.navigate('AgendaDetail') }
                            />
                            <Gap width={10}/>
                            <CardAgenda
                                title={'Lorem Ipsum is simply dummy text'}
                                author={'Muh Faizal'}
                                date={'22 May 2022'}
                                onPress={ () => navigation.navigate('AgendaDetail') }
                            />
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
                        {career.map(data => {
                                const params = {
                                    id: data.id,
                                    company_name: data.company_name,
                                    description: data.description,
                                    image: data.image,
                                    job_type: data.job_type,
                                    phone: data.phone,
                                    placement: data.placement,
                                    salary: data.salary,
                                    title: data.title
                                }
                                return (
                                    // <ListLead key={data.id} advertiser={data.advertiser} operator={data.operator} customer_name={data.customer_name} customer_whatsapp={data.customer_whatsapp} product={data.product} status={data.status} created_at={data.created_at} onPress={() => gotoModalDetailLead(params)} />
                                    <CardCareer
                                        key={data.id}
                                        title={data.title}
                                        description={data.description}
                                        typeJob={data.job_type}
                                        salary={data.salary}
                                        onPress={ () => navigation.navigate('CareerDetail') }
                                    />
                                )
                            })}
                            {/* <CardCareer
                                title={'Lorem Ipsum is simply dummy text'}
                                description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
                                onPress={ () => navigation.navigate('CareerDetail') }
                            /> */}
                            {/* <Gap width={10}/>
                            <CardCareer
                                title={'Lorem Ipsum is simply dummy text'}
                                description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
                                onPress={ () => navigation.navigate('CareerDetail') }
                            />
                            <Gap width={10}/>
                            <CardCareer
                                title={'Lorem Ipsum is simply dummy text'}
                                description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
                                onPress={ () => navigation.navigate('CareerDetail') }
                            />
                            <Gap width={10}/>
                            <CardCareer
                                title={'Lorem Ipsum is simply dummy text'}
                                description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
                                onPress={ () => navigation.navigate('CareerDetail') }
                            /> */}
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