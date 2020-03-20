import 'package:flutter/material.dart';
import 'pages/loginPage.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sms Pitang',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.deepOrange,
        ),
        home: Scaffold(
          body: LoginPage(),
        ),
    );
  }
}