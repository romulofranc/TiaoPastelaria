import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Video, ResizeMode } from "expo-av";

import Sob from "./componentes/sobre";
import styles from "./estilo";

export default function Index({ detalhes }) {
    const video = React.useRef(null);
    return <>
        <FlatList
            ListHeaderComponent={() => {
                return <>
                    <Sob {...detalhes} />
                    <View style={styles.Backgroud}>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                                uri: 'https://videos.pexels.com/video-files/5090807/5090807-hd_1920_1080_30fps.mp4',
                            }}
                            useNativeControls
                            resizeMode={ResizeMode.CONTAIN}
                            isLooping
                        />
                    </View>
                </>
            }}

        />
    </>
}

