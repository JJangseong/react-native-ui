import React from 'react';
import {
    View,
    Text,
    StyleSheet, FlatList
} from 'react-native';

import {dummyData, COLORS, FONTS, SIZES, icons} from '../constants'

import {connect} from 'react-redux'
import {HeaderBar} from "../components";

const Rewards = ({navigation, appTheme}) => {
    function renderRewardPointSection() {
        return (
            <View
                sylte={{
                    alignItems: 'center',
                    marginVertical: SIZES.padding
                }}
            >
               <Text
                style={{
                    color: COLORS.primary,
                    ...FONTS.h1,
                    fontSize:35
                }}
               >
                   Rewards
               </Text>

                <Text
                    style={{
                        marginTop:10,
                        color: appTheme.textColor,
                        width: SIZES.width * 0.6,
                        textAlign: 'center',
                        ...FONTS.h3,
                        lineHeight: 18
                    }}
                >
                    You are 60 points away from your next reward
                </Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderBar/>

            <FlatList
                style={{
                    marginTop: -25,
                    borderTopLeftRadius: SIZES.radius * 2,
                    borderTopRightRadius: SIZES.radius * 2,
                    backgroundColor: appTheme.backgroundColor
                }}
                data={dummyData.availableRewards}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderRewardPointSection()}
                    </View>
                }
                renderItem={({item}) => {
                    return (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: "center",
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.base,
                                paddingVertical: SIZES.base,
                                borderRadius: 20,
                                backgroundColor: item.eligible ? COLORS.yellow : COLORS.gray2
                            }}
                        >
                            <Text style={{
                                color: item.eligible ? COLORS.black : COLORS.lightGray2,
                                ...FONTS.body3
                            }}>
                                {item.title}
                            </Text>
                        </View>
                    )
                }}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default connect(mapStateToProps, mapDispatchToProps)(Rewards)
