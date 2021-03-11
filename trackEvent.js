/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

import analytics from '@segment/analytics-react-native';
import firebase from '@segment/analytics-react-native-firebase';

export default class TrackEvent extends React.Component{
  constructor(props){
    super(props);

    this.state={
      userId:'userId',
      eventName:'Event Name',
      property: 'Property',
      value: 'Value',
      props: { property: ['null']}
    }
  }


onChangeEventName = (val) => {
  this.setState({eventName: val})
  // console.log(this.state)
}

onChangeProperty = (val) => {
  this.setState({property: val})
  // console.log(this.state)
}

onChangeValue = (val) => {
  this.setState({value: val})
  // console.log(this.state)
}


onSubmitEditingEventName = (val) => {
  this.setState({eventName: val})
  // console.log(this.state)
}

onSubmitEditingProperty = (val) => {
  this.setState({property: val})
  // console.log(this.state)
}

onSubmitEditingValue = (val) => {
  this.setState({value: val})
  // console.log(this.state)
}

onSendEvent = async() => {
  let name = this.state.eventName
  let properties = this.state.props
  // await analytics.track(name, properties, {context: {ip:'0.0.0'}});
  await analytics.track('Order Completed', {
      "base_price": "",
      "cart_id": "myTruck_41450-00097",
      "checkout_id": "200017685",
      "currency": "USD",
      "deals": [],
      "delivery_date": "03/03/2021",
      "discount": 20.2,
      "is_suggested": "",
      "order_id": "200017685",
      "payment_method": "CREDIT",
      "points_earned": "",
      "points_redeemed": "",
      "products": [
        {
          "base_price": null,
          "brand": "Bottle",
          "category": "Container",
          "currency": "USD",
          "daily_deal_redeemed": null,
          "daily_limit": null,
          "deal_description": null,
          "deal_id": null,
          "deal_type": null,
          "image_url": "https://images.vtinfo.com/b_white/companies/anb/item-catalog/items/00796030814914_9878927_2q3x7e7k.png",
          "is_promotion": null,
          "is_redemption": null,
          "is_reorder": 0,
          "is_suggested": null,
          "monthly_deal_redeemed": null,
          "monthly_limit": null,
          "name": "Kona Hanalei Island IPA 4x 6 Pack (12 oz Bottles)",
          "original_price": 0,
          "original_quantity": null,
          "packaging": "12oz ",
          "points_earned": null,
          "points_redeemed": null,
          "position": 0,
          "price": 29.5,
          "product_id": "004967-C-00097",
          "promotion_type": null,
          "quantity": 1,
          "recommendation_id": "41450-00097-20210302T194248",
          "recommendation_type": "ERP_REGULARS",
          "recommended_quantity": 1,
          "sku": "004967-C-00097",
          "sku_type": "",
          "url": null,
          "variant": "",
          "volume_hectoliters": null
        },
      ],
      "promotion_type": "",
      "referrer": "Submit Order",
      "revenue": 746.66,
      "shipping": 0,
      "tax": 0,
      "total": 746.66,
      "volume_hectoliters": ""
    });
    await analytics.flush()
}

onPress = async() => {
  const propertyName = this.state.property
  const value = this.state.value
  let propsObj =  {...this.state.props, [propertyName]:value}
  await this.setState({props: propsObj})
  // console.log(this.state)
  await this.setState({property: 'Property', value:'Value'})
}

  render(){
    let props = JSON.stringify(this.state.props)
    return(
      <View style={styles.trackBody}>
        <Text style={{color: '#49b48c',  fontSize:16, fontWeight:'800'}}>Track Event</Text>
        <View style={styles.eventData}>
          <TextInput
            style={{ height: 40, width: 220, borderColor: 'gray', borderWidth: 1, backgroundColor:'#fff', marginTop:5, paddingLeft:10, color: '#49b48c' }}
            onChangeText={text => this.onChangeEventName(text)}
            value={this.state.eventName}
            onSubmitEditing={text => this.onSubmitEditingEventName(text)}
            // onFocus={ () => this.setState({eventName:''})}
            placeholder='placeholder'
          />
        </View>
        <View style={styles.eventProps}>
          <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1, backgroundColor:'#fff', marginTop:5, paddingLeft:10, color: '#49b48c' }}
            onChangeText={text => this.onChangeProperty(text)}
            value={this.state.property}
            onSubmitEditing={text => this.onSubmitEditingProperty(text)}
            onFocus={ () => this.setState({property:''})}
          />
          <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1, backgroundColor:'#fff', marginTop:5, marginLeft: 20, paddingLeft:10, color: '#49b48c' }}
            onChangeText={text => this.onChangeValue(text)}
            value={this.state.value}
            onSubmitEditing={text => this.onSubmitEditingValue(text)}
            onFocus={ () => this.setState({value:''})}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onPress()}
        >
          <Text style={styles.buttonTitle}>Add Property</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onSendEvent()}
        >
          <Text style={styles.buttonTitle}>Send Event</Text>
        </TouchableOpacity>
        <ScrollView>
          <Text style={styles.traitText}>Current Properties:</Text>
          <Text style={styles.traitText}>{props}</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    height:40,
    width: 200,
    backgroundColor:'#49b48c',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#49b48c',
    borderBottomWidth: 0,
    shadowColor: '#fff',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
    marginTop: 15
  },
  buttonTitle:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600'
  },
  trackBody:{
    backgroundColor: '#1e1c2b',
    height: 800,
    marginTop: 18,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 35
  },
  eventData:{
    flexDirection: 'row'
  },
  eventProps:{
    flexDirection:'row'
  },
  eventTypeButtonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:25
  },
  eventTypeContainer:{
    marginTop: 30,
    alignItems:'center'
  },
  eventTypeTitle:{
    fontSize: 16,
    color:'#49b48c',
    fontWeight:'600'
  },
  traitText: {
    color: '#fff',
    fontSize: 20
  },
  traitContainer: {
    flexDirection: 'column',
    width: 200
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight:'600',
  },
  titleContainer:{
    justifyContent: 'space-evenly'
  }
});
