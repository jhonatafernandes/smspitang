import 'package:flutter/material.dart';
import 'package:frontSmsPitangWeb/pages/principal.dart/principalPage.dart';
import 'package:frontSmsPitangWeb/pages/signup/signUpPage.dart';
import 'pages/signin/loginPage.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sms Pitang',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.red,
        ),
        // Start the app with the "/" named route. In this case, the app starts
        // on the FirstScreen widget.
        initialRoute: '/',
        routes: {
          // When navigating to the "/" route, build the FirstScreen widget.
          '/': (context) => LoginPage(),
          // When navigating to the "/second" route, build the SecondScreen widget.
          '/signup': (context) => SignUpPage(),
          '/home': (context) => PrincipalPage(),
        },
    );
  }
}