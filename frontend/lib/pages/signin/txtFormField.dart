import 'package:flutter/material.dart';

class TxtFormField extends StatelessWidget {
  final String txt;
  final bool obscure;

  TxtFormField(this.txt, this.obscure);
  
  @override
  Widget build(BuildContext context) {
    return TextFormField(
            
            autofocus: true,
            keyboardType: TextInputType.emailAddress,
            obscureText: obscure,
            decoration: InputDecoration(
              labelText: txt,
              labelStyle: TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.w400,
                fontSize: 10,
                )
              ),
            style: TextStyle(
              fontSize: 10
            ),
    );
  }
}