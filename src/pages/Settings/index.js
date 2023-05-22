import React, { useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Settings</Text>
        <Image style={styles.profilePicture}
          source={require('../../assets/img/picture-profile.png')}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.h2}>Account</Text>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.title}>Zaidan Luthfi</Text>
            <Text style={styles.subtitle}>1103204040</Text>
          </View>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.title}>Change profile picture</Text>
          </View>
          <Image style={styles.icon}
            source={require('../../assets/img/arrow_forward.png')}
          />
        </View>
        <View style={styles.divider}></View>

        <View style={styles.section}>
          <Text style={styles.h2}>About</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Help</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Follow us on Instagram</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Legal & Privacy</Text>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.section}>
          <Text style={styles.h2}>Version</Text>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.title}>My KTM Tracker 1.0.0.0</Text>
            <Text style={styles.subtitle}>Thank you for downloading. Enjoy!</Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <TouchableOpacity style={styles.button} onPress={() =>
          navigation.navigate('Login')
          }>
          <Text style={styles.logout}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Settings;

const styles = StyleSheet.create({
  //c
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },

  //d
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#CDC5C5',
  },

  //h
  h1: {
    color: '#372F2F',
    fontSize: 22,
    fontWeight: '500',
  },
  h2: {
    color: '#645D5D',
    fontSize: 20,
    fontWeight: '500',
  },
  header: {
    // backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingTop: 15,
    paddingBottom: 15,
  },

  //i
  icon: {
    height: 20,
    width: 20,
  },

  //l
  logout: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#EA5455'
  },

  //p
  profilePicture: {
    height: 32,
    width: 32,
  },

  //s
  section: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -1,
    paddingTop: 20,
    flexDirection: 'row',

  },
  subtitle: {
    color: '#7D7676',
    fontSize: 14,
  },

  //t
  title: {
    fontSize: 16,
    fontWeight: '500',
    color:'black'
  },
});
