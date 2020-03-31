import 'package:flutter/material.dart';
import 'package:frontWeb/pages/login/listViw_login.dart';

class PageLogin extends StatelessWidget {

  List<Color> _colors = [Colors.white, Color(0xffff8c7a)];
  
  List<double> _stops = [0.5,0.5];

  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      body: _body(size),);
  }

  _body(Size size){
    
    return Form(
      key: _formKey ,
      child: Container(
        
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: _colors,
            stops: _stops
          )
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              // Image(
              //   image: AssetImage('assets/images/logo__pitang.png'),
              //   height: 80,
              //   width: 200,
              // ),
              Card(
                
                child: Container(
                  decoration: BoxDecoration(
                    color: Colors.white,
                    border: Border(
                      top: BorderSide(
                        color: Colors.red,
                        width: 15
                      )
                    )
                  ),
                  // color: Colors.white,
                  padding: EdgeInsets.all(16),
                  width: size.width > 500 ? 450 : 400,
                  height: size.height > 500 ? 450 : 350,
                  child: ListViewLogin(),
                ),
              )

              ],
          )

        )
      ),
    );
  }
}