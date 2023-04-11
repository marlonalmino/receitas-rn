import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import { Entypo } from '@expo/vector-icons'

export function Detail() {
    const route = useRoute()
    const navigation = useNavigation()

    // Destructuring 'route'
    const { name } = route.params?.data


    useLayoutEffect( () => {
        navigation.setOptions({
            title: route.params?.data ? name : 'Detalhes da receita',
            headerRight: () => (
                <Pressable onPress={ () => console.log('testando')}>
                    <Entypo
                        name='heart'
                        size={28}
                        color='#FF4141'
                    />
                </Pressable>
            )
        })
    }, [navigation, route.params?.data])

    return(
        <View style={styles.container}>
            <Text>Página Detail!!!</Text>
            <Text>{route.params?.data.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue'
    }
})