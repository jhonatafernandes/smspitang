// import 'package:flutter_icons/flutter_icons.dart';

import 'package:flutter/material.dart';
import 'package:frontSmsPitangWeb/pages/signin/formLogin.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: <Widget> [
        Container(
        padding: EdgeInsets.all(50),
        decoration: BoxDecoration(
      
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Colors.white, Colors.red],
            stops: [0.75, 0.75],
          )
        ),
        child: Center(
          child: Column(
            children: <Widget>[
            
            Padding(
              padding: const EdgeInsets.only(
                top: 18.0),
              child: Image(
                width: 200,
                height: 68.62,
                image: AssetImage('images/logo__pitang.png')),
            ),

            Container(
              decoration: BoxDecoration(
              ),
              child: SizedBox(
                width: 450,
                height: 500,
                child: Card(
                  child: Container(
                    decoration: BoxDecoration(
                       border: Border(
                         top: BorderSide(width: 15.0, color: Colors.red),
                        ),
                    ),
                    child: FormLogin(),
                  )
                ),
                        
                ),
            ),
            ],
          ),
          ),
        )
      ]
    );
  }
}