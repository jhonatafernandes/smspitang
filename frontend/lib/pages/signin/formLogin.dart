import 'package:flutter/material.dart';
import 'package:frontSmsPitangWeb/pages/signin/buttonFieldFacebook.dart';
import 'package:frontSmsPitangWeb/pages/signin/buttonFieldGoogle.dart';
import 'package:frontSmsPitangWeb/pages/signin/buttonFieldLogin.dart';
import 'package:frontSmsPitangWeb/pages/signin/buttonFieldPass.dart';
import 'package:frontSmsPitangWeb/pages/signin/buttonFieldSignUp.dart';
import 'package:frontSmsPitangWeb/pages/signin/checkboxField.dart';
import 'package:frontSmsPitangWeb/pages/signin/txtFormField.dart';

class FormLogin extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(
                top:15,
                left: 20,
                right: 20,
                bottom: 20,
              ),
      child: Column(
            children: <Widget>[
              Container(
                child: Text('SIGN IN', 
                style: TextStyle(
                  fontSize: 20,
                  color: new Color(0xFFFFC801),
                  fontWeight: FontWeight.w700,
                    ),
                ),
                alignment: Alignment.bottomLeft,
                padding: EdgeInsets.only(
                  top: 15,
                  bottom: 5,
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(
                  top: 8.0,
                  bottom: 8,
                  ),
                child: TxtFormField('Email', false),
              ),
              Padding(
                padding: const EdgeInsets.only(
                  top: 8.0,
                  bottom: 8,
                  ),
                child: TxtFormField('Senha', true),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  CheckboxField(),
                  ButtonFieldPass(),

                ],
                ),
              ButtonFieldLogin(),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  ButtonFieldFacebook(),
                  ButtonFieldGoogle(),

                ],
                ),
              Container(
                padding: EdgeInsets.only(
                    top: 30,
                    bottom: 2,
                  ),
                child: Text('Ainda não tem uma conta?',
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                    color: Colors.black,

                  ))
                
              ),
              ButtonFieldSignUp(),
            ],
          
        ),
      
    );
  }
}