import 'package:flutter/material.dart';

class ButtonFieldFacebook extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
          margin: EdgeInsets.only(
            top:10,
          ),
          height: 45,
          alignment: Alignment.centerLeft,
          decoration: BoxDecoration(
            
            color: Color(0xFF365A99),
            borderRadius: BorderRadius.all(Radius.circular(5)
            ),
          ),
          child: FlatButton(
              onPressed: () => {},
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(' Facebook ',style: TextStyle(
                      
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                      fontSize: 14,
                    ),
                    textAlign: TextAlign.left,),
                  ),
                  Container(
                    padding: const EdgeInsets.only(
                      left: 8.0,
                      right: 8.0),
                    child: SizedBox(
                      child: Icon(Icons.email, color: Colors.white),
                    
                      )
                    ),
                ]
              ,)
            ,)
          );
  }
}