import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:testing/constants.dart';
import 'package:flutter/painting.dart';

final _firestore = FirebaseFirestore.instance;
final _auth = FirebaseAuth.instance;
User loggedInUser;

class ChatScreen extends StatefulWidget {
  // It is used for routes and initial routes.
  static const String id = "chat_screen";

  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  String messageText;

  final messageController = TextEditingController();

  // Get current user.
  void getUser() async {
    try {
      if (_auth != null) {
        loggedInUser = _auth.currentUser;
      }
    } catch (e) {
      print(e.toString());
    }
  }

  @override
  void initState() {
    super.initState();
    getUser();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(

      appBar: AppBar(
        leading: null,
        actions: <Widget>[
          IconButton(
              icon: Icon(Icons.close),
              onPressed: () async {
                await _auth.signOut();
                Navigator.pop(context);
              }),
        ],
        title: Text('How\'s Your Mood ?' ),
        backgroundColor: Color(0xFFFF96AD),
      ),
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            MessageStream(),
            Container(
              decoration: kMessageContainerDecoration,
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Expanded(
                    child: TextField(
                      controller: messageController,
                      onChanged: (value) {
                        messageText = value;
                      },
                      decoration: kMessageTextFieldDecoration,
                    ),
                  ),
                  FlatButton(
                    onPressed: () async {
                      messageController.clear();
                      await _firestore.collection("messages").add({
                        "text": messageText,
                        "user": loggedInUser.email,
                        "time": FieldValue.serverTimestamp(),
                      }).whenComplete(() => print("comleted"));
                    },
                    child: Text(
                      'Submit',
                      style: kSendButtonTextStyle,
                    ),

                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class MessageStream extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return StreamBuilder<QuerySnapshot>(
        stream: _firestore.collection("messages").snapshots(),
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return Center(
              child: CircularProgressIndicator(),
            );
          }

          var messages = snapshot.data.docs.reversed;
          List<MessageBubble> messageBubbles = [];
          for (var message in messages) {
            final String messageText = message["text"];
            final String messageSender = message["user"];
            final Timestamp messageTime = message["time"] as Timestamp;

            final currentUser = loggedInUser.email;

            final messageBubble = MessageBubble(
              messageText: messageText,
              messageSender: messageSender,
              isMe: currentUser == messageSender,
              time: messageTime,
            );
            messageBubbles.add(messageBubble);
            messageBubbles
                .sort((a, b) => b.time.toString().compareTo(a.time.toString()));
          }

          return Expanded(
              child: ListView(
            reverse: true,
            padding: EdgeInsets.symmetric(vertical: 20.0, horizontal: 10.0),
            children: messageBubbles,
          ));
        });
  }
}

class MessageBubble extends StatelessWidget {
  MessageBubble({this.messageText, this.messageSender, this.isMe, this.time});

  final String messageText;
  final String messageSender;
  final bool isMe;
  final Timestamp time;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(15.0),
      child: Column(
        crossAxisAlignment:
            isMe ? CrossAxisAlignment.end : CrossAxisAlignment.start,
        children: [
          // Text(
          //   messageSender,
          //   style: TextStyle(fontSize: 10.0),
          // ),

          Center(
            child: Material(
              shadowColor: Colors.black,
              elevation: 15.0,
              // borderRadius: BorderRadius.only(
              //   topLeft: Radius.circular(isMe ? 30.0 : 0.0),
              //   bottomLeft: Radius.circular(30.0),
              //   topRight: Radius.circular(isMe ? 0.0 : 30.0),
              //   bottomRight: Radius.circular(30.0),
              // ),

              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(20.0),
                bottomLeft: Radius.circular(20.0),
                topRight: Radius.circular(20.0),
                bottomRight: Radius.circular(20.0),
              ),
              color: isMe ? Color(0xFFFF96AD) : Colors.white,
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 10.0, horizontal: 20.0),
                child: Text(
                  messageText,
                  style: TextStyle(
                      color: isMe ? Colors.white : Colors.black, fontSize: 20.0),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
