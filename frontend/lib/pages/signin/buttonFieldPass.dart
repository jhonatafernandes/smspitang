import 'package:flutter/material.dart';


class ButtonFieldPass extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FlatButton(
              onPressed: () => {},
              child: Text('Esqueci minha senha',style: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                    fontSize: 12,
                  ),
                  textAlign: TextAlign.right,)
    );
  }
}