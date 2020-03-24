// import 'package:flutter_icons/flutter_icons.dart';

import 'package:flutter/material.dart';
import 'package:frontSmsPitangWeb/pages/signin/txtFormField.dart';


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
                              height: 55,
                              child: Container(
                                color: Colors.grey[700],
                                child: Row(
                                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                    children: <Widget>[
                                      Container(
                                        margin: EdgeInsets.symmetric(
                                          horizontal: 10,
                                          vertical: 10,
                                        ),
                                        width: 40.0,
                                        height: 40.0,
                                        decoration: BoxDecoration(
                                            shape: BoxShape.circle,
                                            image: DecorationImage(
                                                fit: BoxFit.fill,
                                                image: new NetworkImage(
                                                    "https://i.imgur.com/BoN9kdC.png")
                                            )
                                        )),
                                      Container(
                                        child: Row(
                                          children: <Widget>[
                                            Container(
                                              padding: const EdgeInsets.only(
                                                left: 8.0,
                                                right: 8.0),
                                              child: SizedBox(
                                                child: Icon(Icons.party_mode, color: Colors.white),

                                              )
                                            ),
                                            Container(
                                              padding: const EdgeInsets.only(
                                                left: 8.0,
                                                right: 8.0),
                                              child: SizedBox(
                                                child: Icon(Icons.chat, color: Colors.white),

                                              )
                                            ),
                                            Container(
                                              padding: const EdgeInsets.only(
                                                left: 8.0,
                                                right: 8.0),
                                              child: SizedBox(
                                                child: Icon(Icons.more_vert, color: Colors.white),

                                              )
                                            ),

                                          ],
                                        )
                                      )
                                      
                                    ],
                                  ),
                              )
                            ),
                            Container(
                              color: Colors.red,
                              width: 500,
                              height: 40,
                              child: SizedBox.expand(
                                child: Container(
                                  color: Colors.black,
                                  margin: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                                  child: Row(
                                    children: <Widget>[
                                      Container(
                                        padding: const EdgeInsets.only(
                                          left: 8.0,
                                          right: 8.0),
                                        child: SizedBox(
                                          child: Icon(Icons.more_vert, color: Colors.white),

                                        )
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.only(
                                          top: 8.0,
                                          bottom: 8,
                                          ),
                                        child: TxtFormField('Email', false),
                                      ),

                                    ],
                                    
                                  ),
                                )
                              ))
                            
                          ]
                        ),
                        Column(
                          children: <Widget>[
                            SizedBox(
                              width: 750,
                              height: 55,
                              child: Container(
                                color: Colors.grey[700],
                                child: Row(
                                    mainAxisAlignment: MainAxisAlignment.end,
                                    children: <Widget>[
                                      Container(
                                              padding: const EdgeInsets.only(
                                                left: 8.0,
                                                right: 8.0),
                                              child: SizedBox(
                                                child: Icon(Icons.more_vert, color: Colors.white),

                                              )
                                            ),
                                      
                                      
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