import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:frontWeb/pages/users/users_model.dart';
import 'package:frontWeb/widgets/text_field.dart';

class ListViewSignup extends StatelessWidget {

  bool remember = false;

  final controller = UsersModel();
  
  @override
  Widget build(BuildContext context) {
    return ListView(
            children: <Widget>[
              _textLogin(),
              SizedBox(height: 20,),
              Observer(
                  builder: (_){
                    return  TextField(
                    onChanged: controller.changeEmail,
                    decoration: InputDecoration(
                      labelText: "Username",
                      
                      

                    ),
                    );

                  } 
              ),
              SizedBox(height: 10,),
              Observer(
                  builder: (_){
                    return  TextField(
                    onChanged: controller.changeEmail,
                    decoration: InputDecoration(
                      labelText: "Email",
                      
                      

                    ),
                    );

                  } 
              ),
              SizedBox(height: 10,),
               Observer(
                  builder: (_){
                    return  TextField(
                    onChanged: controller.changePassword,
                    obscureText: true,
                    decoration: InputDecoration(
                      labelText: "Password",
                      errorText: controller.getErrorText,
                      
                      

                    ),
                    );

                  } 
              ),
              SizedBox(height: 10,),
              Observer(
                  builder: (_){
                    return  TextField(
                    onChanged: controller.changePassword,
                    obscureText: true,
                    decoration: InputDecoration(
                      labelText: "Confirm Password",
                      errorText: controller.getErrorText,

                    ),
                    );

                  } 
              ),
              SizedBox(height: 10,),
              Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    
                    Observer(
                     builder: (_){
                       return Checkbox(
                        value: controller.check,
                        onChanged: (bool value) {
                          this.controller.changeValue(value);
                        }
                      );
                     }
                    ),
                    Text('Accept the terms of service')
                    ],
              ),
              SizedBox(height: 20,),

              Observer(
                builder: (_){
                return RaisedButton(
        
                  padding: EdgeInsets.all(16),
                  onPressed: () => controller.signup(context),
                  child: Text("SIGN UP",
                    style: TextStyle(
                      fontSize: 18,
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    )
                  ),
                  color: Colors.green,
                );

              })

              ],
          );
  }
 

  Text _textLogin() {
    return Text(
      "SIGN UP",
      style: TextStyle(
        color: Color(0xffffc801),
        fontSize: 25,
        fontWeight: FontWeight.w600,
      )
    );
  } 

  
}