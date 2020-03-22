import 'package:flutter/material.dart';

class CheckboxField extends StatefulWidget {

  @override
  _CheckboxFieldState createState() => _CheckboxFieldState();
}

class _CheckboxFieldState extends State<CheckboxField> {
  bool _remember = false;

  @override
  Widget build(BuildContext context) {
    return Container(
            
            child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget> [
                    Checkbox(
                    activeColor: new Color(0xFFFFC801),
                    onChanged: (bool resp)
                      {
                        setState(() {
                          _remember = resp;
                          });

                      },
                    value: _remember,
                
                ),
                Text('Remember me', style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w300,
                ),
                )

                ]
            ),
        );
  }
}