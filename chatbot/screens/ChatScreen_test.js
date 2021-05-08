import React, { useState, useCallback, useEffect, Component } from 'react'
import { Bubble, GiftedChat, SystemMessage, Time } from 'react-native-gifted-chat'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { Dialogflow_V2 } from 'react-native-dialogflow'
import { dialogflowConfig } from './env'

const BOT = {
  _id: 2,
  name: 'Mr.Bot',
  avatar: 'https://akupintar.id/documents/20143/0/logo+Prasmul.png/c2ad45d2-db37-e3fd-52f5-ea86274d70b2?version=1.0&t=1605681243763&imageThumbnail=1',
}

export default class ChatScreen_test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      messages: [{_id: 2, text: 'Data apa yang ingin dicari ?', createdAt: new Date(), user: BOT},
      {_id: 1, text: 'Halo', createdAt: new Date(), user: BOT}],
      id: 1,
      name: '',
    }
  }
  
  componentDidMount(){
    fetch('https://kuliahstem.prasetiyamulya.ac.id/web-api/newkuliah/')
    
    .then((response) => response.json())
    .then((json) => {
      this.setState({ data: json });
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });
    
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }

  handleGoogleResponse(result){
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];

    this.sendBotResponse(text);
  }

  sendBotResponse(text){
    let msg;
    
    const { data, isLoading } = this.state

    
    let testing_data = [];

    for (var i = 0; i < data.length; i++) {
      testing_data.push('jadwal ' + data[i].faculty_name.split(' ').slice(1).join(' ').toLowerCase())
    }

    var testing_data_filtered = [];

    var testing_data_filtered = testing_data.filter(function (elem, pos) {
      return testing_data.indexOf(elem) == pos;
    });

    var testing_data_filtered_2 = testing_data_filtered

    // --------------------------------------------- untuk intent dialogflow bluk import (kalo punya botflo premium)
    // var testing_data_filtered = [];
    
    // console.log(testing_data)

    // var testing_data_filtered = testing_data.filter(function (elem, pos) {
    //   return testing_data.indexOf(elem) == pos;
    // });

    // var testing_data_filtered_2 = testing_data_filtered
    // var intent_dialogflow = [];

    // var intent_dialogflow =  testing_data_filtered_2.reduce(function(result, field, index) {
    //   result[testing_data_filtered[index]] = field;
    //   return result;
    // }, {})

    // var intent_dialogflow_separate = Object.entries(intent_dialogflow)

    let filtered_data = [];

    var filter_text_name = text;
    var tarik_nama = filter_text_name.split(" ")
    for (let i = 0; i < data.length; i++){
      if(data[i].faculty_name.toLowerCase().includes(tarik_nama[1])){
        filtered_data.push(data[i])
      }
    }

    let listofdata = [];
    var i;
    for(i = 0; i < filtered_data.length; i++){
      listofdata.push(filtered_data[i].event_name  + '\n' + 'Time: ' + filtered_data[i].start_time + ' - ' + filtered_data[i].end_time + ' ' + '(' + filtered_data[i].day + ')');
    }

    var filtered_listofdata = listofdata.filter(function (elem, pos) {
      return listofdata.indexOf(elem) == pos;
    });
    
    var output_data = ""
    var x;
    for(x = 0; x < filtered_listofdata.length; x++){
      if(x == filtered_listofdata.length - 1){
        output_data += filtered_listofdata[x]
      }else {
        output_data += filtered_listofdata[x] + '\n\n'
      };
    }

    if(testing_data_filtered_2.includes(text)) {
      msg = {
        _id: this.state.messages.length + 1,
        text: output_data,
        createdAt: new Date(),
        user: BOT
      }
    }else if (text == 'cantik') {
      msg = {
        _id: this.state.messages.length + 1,
        text: 'iya dong emangnya kamu ?',
        createdAt: new Date(),
        user: BOT
      }
    }else{
      msg = {
        _id: this.state.messages.length + 1,
        text: 'Maaf, data tidak ditemukan',
        createdAt: new Date(),
        user: BOT
      }
    }

    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.
      messages, [msg]),
    }))
  }

  onSend(messages = []){
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.
      messages, messages)
    }))

    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error)
    )
  }

  onQuickReply(quickReply){
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.
      messages, quickReply)
    }))

    let message = quickReply[0].value;

    Dialogflow_V2.requestQuery(
      message,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error)
    )
  }

  renderBubble = (props) => {
    return(
      <Bubble
      { ... props}
      wrapperStyle={{
        right: {
          backgroundColor: '#c3f69d'
        },
        left: {
          backgroundColor: '#efefef'
        }
      }}
      textStyle={{
        right: {
          color: 'black'
        }
      }}
    />
    )
  }

  renderTime = (props) => {
    return(
      <Time
      { ... props}
      timeTextStyle={{
        right:{
          color: '#b7b7b7',
        },
        left:{
          color: '#b7b7b7'
        }
      }}
      />
    )
  }

  scrollToBottomComponent = () => {
    return(
      <EvilIcons name='arrow-down' size={40} color='black'/>
    )
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          onQuickReply={(onQuickReply) => this.onQuickReply(onQuickReply)}
          user={{ _id: 1 }}
          renderBubble={this.renderBubble}
          scrollToBottom
          scrollToBottomComponent={this.scrollToBottomComponent}
          renderTime={this.renderTime}
          user={{
            _id: 1,
          }}
        />
      </View>
    )
  }

}

