import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About({ }) {
    return (
        <MainLayout>
            <View>
                <Text>To Do List Task</Text>
                <Text>Created by: Yushu</Text>
                <Text>Version 0.1.215241</Text>
            </View>
        </MainLayout>
    );
}

export default About;