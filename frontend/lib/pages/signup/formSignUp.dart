import 'package:flutter/material.dart';
import 'package:frontSmsPitangWeb/pages/signin/buttonFieldFacebook.dart';
import 'package:frontSmsPitangWeb/pages/signin/buttonFieldGoogle.dart';
import 'package:frontSmsPitangWeb/pages/signin/buttonFieldLogin.dart';
import 'package:frontSmsPitangWeb/pages/signin/checkboxField.dart';
import 'package:frontSmsPitangWeb/pages/signin/txtFormField.dart';

class FormSignUp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(
                top:15,
                left: 20,
                right: 20,
                bottom: 20,
              ),
      child: ListView(
            children: <Widget>[
              Container(
                child: Text('SIGN UP', 
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
                child: TxtFormField('Username', false),
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
              Padding(
                padding: const EdgeInsets.only(
                  top: 8.0,
                  bottom: 8,
                  ),
                child: TxtFormField('Confirmação de Senha', true),
              ),
              CheckboxField(),
              // Row(
              //   mainAxisAlignment: MainAxisAlignment.spaceBetween,
              //   children: <Widget>[
              //     CheckboxField(),
              //     ButtonFieldPass(),

              //   ],
              //   ),
              ButtonFieldLogin(),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  ButtonFieldFacebook(),
                  ButtonFieldGoogle(),

                ],
                ),
              
              
            ],
          
        ),
      
    );
  }
}