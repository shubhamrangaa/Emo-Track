import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:testing/components/rounded_button.dart';
import 'package:testing/screens/login_screen.dart';
import 'package:testing/screens/registration_screen.dart';
import 'package:flutter/material.dart';

class WelcomeScreen extends StatefulWidget {
  // It is used for routes and initial routes.
  static const String id = "welcome_screen";

  @override
  _WelcomeScreenState createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Padding(
        padding: EdgeInsets.symmetric(horizontal: 24.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Hero(
              tag: "logo",
              child: Container(
                child: Image.asset('images/logo.png'),
                height: 200.0,

              ),
            ),
            Row(
              children: <Widget>[

                TypewriterAnimatedTextKit(
                  text: ["How You Doin?"],
                  textStyle: TextStyle(
                      fontSize: 45.0,
                      fontWeight: FontWeight.w900,
                      color: Colors.black),
                  isRepeatingAnimation: true,
                  speed: Duration(milliseconds: 200),
                ),
              ],
            ),
            SizedBox(
              height: 48.0,
            ),
            RoundedButton(
              color: Color(0xFFFF96AD),
              borderRadius: 30.0,
              elevation: 5.0,
              onPressed: () {
                Navigator.pushNamed(context, LoginScreen.id);
              },
              title: "Log In",
            ),
            RoundedButton(
              color: Color(0xFFFF96AD),
              borderRadius: 30.0,
              elevation: 5.0,
              onPressed: () {
                Navigator.pushNamed(context, RegistrationScreen.id);
              },
              title: "Register",
            ),
          ],
        ),
      ),
    );
  }
}
