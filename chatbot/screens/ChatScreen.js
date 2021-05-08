import React, { useState, useCallback, useEffect } from 'react'
import { Bubble, GiftedChat, SystemMessage, Time } from 'react-native-gifted-chat'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [storedmessages, setStoredMessages] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetch('https://kuliahstem.prasetiyamulya.ac.id/web-api/newkuliahbyfacultyname/permata')
      .then((response) => response.json())
      .then((json) => {
        setEvent(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (storedmessages[1] == undefined){
  }else{
    console.log(storedmessages[1]["text"])
  }

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: <FlatList
          data={event}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.event_name}</Text>
          )}
        />,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://akupintar.id/documents/20143/0/logo+Prasmul.png/c2ad45d2-db37-e3fd-52f5-ea86274d70b2?version=1.0&t=1605681243763&imageThumbnail=1',
        },
      },
    ]),
    setStoredMessages([
      {
        id: 'user'
      }
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    setStoredMessages(GiftedChat.append(messages));
  }, [])

  const renderBubble = (props) => {
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

  const renderTime = (props) => {
    return(
      <Time
      { ... props}
      timeTextStyle={{
        right:{
          color: '#b7b7b7'
        },
        left:{
          color: '#b7b7b7'
        }
      }}
      />
    )
  }

  const scrollToBottomComponent = () => {
    return(
      <EvilIcons name='arrow-down' size={40} color='black'/>
    )
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      renderBubble={renderBubble}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      renderTime={renderTime}
      user={{
        _id: 1,
      }}
    />
    </View>
    
  )
}

export default ChatScreen;