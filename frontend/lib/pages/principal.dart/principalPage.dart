// import 'package:flutter_icons/flutter_icons.dart';

import 'package:flutter/material.dart';


class PrincipalPage extends StatefulWidget {
  @override
  _PrincipalPageState createState() => _PrincipalPageState();
}

class _PrincipalPageState extends State<PrincipalPage> {

  @override
  Widget build(BuildContext context) {
    return Container(
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
          child: Container(
            decoration: BoxDecoration(
              color: Colors.white
              ),
              child: SizedBox(
                width: 1300,
                height: 950,
                child: Card(
                  child: Container(
                    // color: Colors.black,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: <Widget>[
                        Column(
                          children: <Widget>[
                            SizedBox(
                              width: 500,
                              height: 40,
                              child: Container(
                                color: Colors.grey[700],
                                child: Row(
                                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                    children: <Widget>[
                                      Text("kkk"),
                                      Text("1"),
                                      Text("2"),
                                      Text("3")
                                      
                                    ],
                                  ),
                              )
                            )
                            
                          ]
                        ),
                        Column(
                          children: <Widget>[
                            SizedBox(
                              width: 750,
                              height: 40,
                              child: Container(
                                color: Colors.grey[700],
                                child: Row(
                                    mainAxisAlignment: MainAxisAlignment.end,
                                    children: <Widget>[
                                      Text("kkk"),
                                      
                                      
                                    ],
                                  ),
                              )
                            )
                          ]
                        ),
                      ],)
                      ,
                    ),
                ),
              )


          )
        )
        );
  }
}