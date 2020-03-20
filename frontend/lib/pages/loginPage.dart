// import 'package:flutter_icons/flutter_icons.dart';

import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  bool _remember = false; 

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.only(
          top: 60,
          left: 40,
          right: 40,
        ),
        decoration: BoxDecoration(
      
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Colors.white, Colors.deepOrange],
            stops: [0.75, 0.75],
          )
        ),
        child: Center(
          child: ListView(
            children: <Widget>[
              SizedBox(
                width: 200,
                height: 68.62,
                child: Image.asset("/assets/pitang_logo.png")
              ),
              SizedBox(
                height: 10,
              ),
              Container(

                decoration: BoxDecoration(
                  color: Colors.white,
                  boxShadow: <BoxShadow>[
                            BoxShadow(
                              color: Colors.black,
                              offset: Offset(1.0, 1.0),
                              blurRadius: 1.0,
                            ),
                          ],
                ),
            
                
                margin: EdgeInsets.only(
                  top: 15,
                  left: 400,
                  right: 400,
                  bottom: 200,
                ),
                padding: EdgeInsets.only(
                  top: 10,
                  left:30,
                  right: 30,
                  bottom: 30,
                ),
                
                
                child: Center(
                  child: Column(
                    children: <Widget>[
                      Container(
                        child: Text('SIGN IN', style: TextStyle(
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
                      TextFormField(
                        autofocus: true,
                        keyboardType: TextInputType.emailAddress,
                        decoration: InputDecoration(
                          labelText: "Email",
                          labelStyle: TextStyle(
                            color: Colors.black,
                            fontWeight: FontWeight.w400,
                            fontSize: 14,
                          )
                        ),
                        style: TextStyle(
                          fontSize: 16,

                        ),
                      ),
                      TextFormField(
                        autofocus: true,
                        keyboardType: TextInputType.text,
                        obscureText: true,
                        decoration: InputDecoration(
                          labelText: "Password",
                          labelStyle: TextStyle(
                            color: Colors.black,
                            fontWeight: FontWeight.w400,
                            fontSize: 14,
                          )
                        ),
                        style: TextStyle(
                          fontSize: 16,

                        ),
                      ),
                      Container(
                        padding: EdgeInsets.only(
                          top: 10,
                        ),
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
                            ),)

                            ]
                        ),
                      ),
                    Container(
                      margin: EdgeInsets.only(
                        top:10,
                      ),
                      height: 45,
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
                                fontSize: 16,
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
                      
                    ),
                    Container(
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
                      child: SizedBox.expand(
                        child: FlatButton(
                          onPressed: () => {},
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Text('Login com Facebook',style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                                fontSize: 16,
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
                      
                    ),
                     Container(
                      margin: EdgeInsets.only(
                        top:10,
                      ),
                      height: 45,
                      alignment: Alignment.centerLeft,
                      decoration: BoxDecoration(
                        boxShadow: <BoxShadow>[
                              BoxShadow(
                                color: Colors.black,
                                offset: Offset(1.0, 1.0),
                                blurRadius: 1.0,
                              ),
                            ],
                        color: Colors.white,
                        borderRadius: BorderRadius.all(Radius.circular(5)
                        ),
                      ),
                      child: SizedBox.expand(
                        child: FlatButton(
                          onPressed: () => {},
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Text('Login com Google',style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Colors.red,
                                fontSize: 16,
                              ),
                              textAlign: TextAlign.left,),
                              Container(
                                child: SizedBox(
                                  child: Icon(Icons.email, color: Colors.black),
                                
                                  )
                                ),
                            ]
                          ,)
                        ,)
                      ),
                      
                    )


                    ],
                    ),
                )
              )
            ],
          ),
        ),
    );
  }
}