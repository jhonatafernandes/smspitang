import 'package:flutter/material.dart';

class ButtonFieldLogin extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
          margin: EdgeInsets.only(
            top:10,
          ),
          height: 35,
          alignment: Alignment.centerLeft,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              stops: [0.3, 1],
              colors: [Color(0xFFF58524), Color(0XFFF92B7F)],
                ),
            borderRadius: BorderRadius.all(Radius.circular(5)
            ),
          ),
          child: SizedBox.expand(
            child: FlatButton(
              onPressed: () => {},
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Text('Login',style: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                    fontSize: 14,
                  ),
                  textAlign: TextAlign.left,),
                  Container(
                    child: SizedBox(
                      child: Icon(Icons.email, color: Colors.white),
                    
                      )
                    ),
                ]
              ,)
            ,)
          ),
          
        );
  }
}