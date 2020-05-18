import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const style = StyleSheet.create({
    title: {
        color: '#000000',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20
    },
    container2: {
        width: '50%',
        aspectRatio: 1,
        borderRadius: 10,
        padding: 2
    },
    view1: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

function MenuItem({ onPress, image, title }) {
    return (
        <TouchableOpacity onPress={onPress} style={style.container2}>
            <View style={style.view1}>
                {React.isValidElement(image)
                    ? image
                    : image && (
                        <Image
                              resizeMode="cover"
                              style={{
                                  width: 60,
                                  height: 60,
                                  resizeMode: 'contain',
                                  alignSelf: 'center'
                              }}
                              source={image}
                        />
                    )}
                <Text style={style.title}> {title} </Text>
            </View>
        </TouchableOpacity>
    )
}

MenuItem.propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.any
}

MenuItem.defaultProps = {
    image: null
}

export default MenuItem
