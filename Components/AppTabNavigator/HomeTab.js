import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {
    Icon,
    Container,
    Content,
    Thumbnail,
    Header,
    Left,
    Right,
    Body
} from 'native-base';
import CardComponent from '../CardComponent';
import { ScrollView } from "react-native-gesture-handler";

class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor })=> (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }

    render() {
        const images = {
            "1": require('../../assets/StoriesHeaderThumbnails/1.jpg'),
            "2": require('../../assets/StoriesHeaderThumbnails/2.jpg')
        };
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Icon
                            name="camera"
                            style={{ paddingLeft: 10 }}
                        ></Icon>
                    </Left>
                    <Body><Text>Instagram</Text></Body>
                    <Right>
                        <Icon
                            name="paper-plane"
                            style={{ paddingLeft: 10 }}
                        ></Icon>
                    </Right>
                </Header>
                <Content>
                    <View style={{ height: 100 }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 7
                        }}>
                            <Text style={{ fontWeight: 'bold'}}>
                                Stories
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="md-play" style={{ fontSize: 14 }}></Icon>
                                <Text style={{ fontWeight: 'bold'}}>
                                    Watch All
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 3 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}
                            >
                                <Thumbnail
                                    source= {images["1"]}
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                />
                                <Thumbnail
                                    source= {images["2"]}
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                />
                                <Thumbnail
                                    source= {images["1"]}
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                />
                                <Thumbnail
                                    source= {images["2"]}
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                />
                                <Thumbnail
                                    source= {images["1"]}
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                />
                                <Thumbnail
                                    source= {images["2"]}
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                />
                                <Thumbnail
                                    source= {images["1"]}
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                />
                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="101" />
                    <CardComponent imageSource="3" likes="101" />
                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});