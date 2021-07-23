import React from 'react';
import {
    View,
    StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Text
} from 'react-native';

import {connect} from 'react-redux'

import {HeaderBar} from "../components";
import {COLORS, SIZES, constants, icons, FONTS, dummyData, images} from "../constants";
import {toggleTheme} from "../stores/themeActions";

const Home = ({navigation, appTheme}) => {

    function renderAvailableRewards() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    height: 100
                }}
                onPress={() => navigation.navigate("Rewards")}
            >
                <View
                    style={{
                        width: 100,
                        height: "100%",
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.pink,
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                    }}
                >
                    <ImageBackground source={icons.reward_cup}
                                     resizeMode="contain"
                                     style={{
                                         width: 85,
                                         height: 85,
                                         marginLeft: 3,
                                         alignItems: 'center',
                                         justifyContent: 'center'
                                     }}
                    >
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.transparentBlack
                            }}
                        >
                            <Text
                                style={{
                                    color: COLORS.white,
                                    ...FONTS.h4
                                }}
                            >
                                280
                            </Text>
                        </View>
                    </ImageBackground>
                </View>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.lightPink,
                        marginLeft: -10,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.primary,
                            ...FONTS.h2,
                            fontSize: 20
                        }}
                    >
                        Available Rewards
                    </Text>

                    <View
                        style={{
                            marginTop: 5,
                            padding: SIZES.base,
                            borderRadius: SIZES.radius * 2,
                            backgroundColor: COLORS.primary
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                        >
                            150 points - $2.50 off
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <HeaderBar/>

            <ScrollView
                style={{
                    flex: 1,
                    marginTop: -25,
                    borderTopLeftRadius: SIZES.radius * 2,
                    borderTopRightRadius: SIZES.radius * 2,
                    backgroundColor: appTheme.backgroundColor
                }}
                contentContainerStyle={{
                    paddingBottom: 150
                }}
            >
                {renderAvailableRewards()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

