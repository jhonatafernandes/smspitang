// import 'package:flutter_icons/flutter_icons.dart';

import 'package:flutter/material.dart';
import 'package:frontSmsPitangWeb/pages/signup/formSignUp.dart';

class SignUpPage extends StatefulWidget {
  @override
  _SignUpPageState createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: <Widget> [
        Container(
        
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
                // : DecoratedBox(decoration: null),
                width: 450,
                height: 650,
                child: Card(
                  child: Container(
                    decoration: BoxDecoration(
                       border: Border(
                         top: BorderSide(width: 15.0, color: Colors.red),
                        ),
                    ),
                    child: FormSignUp(),
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