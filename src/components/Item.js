import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const style = StyleSheet.create({
    title: {
        color: '#000000',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    container2: {
        width: '50%',
        aspectRatio: 1,
        padding: 5
    },
    view1: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '35%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
    }
})

function Item({ onPress, image, title }) {
    return (
        <TouchableOpacity onPress={onPress} style={style.container2}>
            <View style={style.view1}>
                <Text style={style.title}> {title} </Text>
            </View>
        </TouchableOpacity>
    )
}

Item.propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.any
}

Item.defaultProps = {
    image: null
}

export default Item
