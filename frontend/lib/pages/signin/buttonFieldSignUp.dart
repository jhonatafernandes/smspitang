import 'package:flutter/material.dart';

class ButtonFieldSignUp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
          margin: EdgeInsets.only(
            top:10,
          ),
          height: 35,
          alignment: Alignment.centerLeft,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.all(Radius.circular(5)),
            border: Border.all(
              width: 3,
              color: Colors.black38),
          ),
          child: SizedBox.expand(
            child: FlatButton(
              onPressed: () => {
                Navigator.pushNamed(context, '/signup')
              },
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text('Cadastre-se',style: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Colors.black54,
                    fontSize: 14,
                  ),
                  textAlign: TextAlign.center,),
    
                ]
              ,)
            ,)
          ),
          
        );
  }
}