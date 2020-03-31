import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:frontWeb/pages/users/users_model.dart';
import 'package:frontWeb/widgets/text_field.dart';

class ListViewLogin extends StatelessWidget {

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
                      labelText: "Email",
                      
                      

                    ),
                    );

                  } 
              ),
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
                    Text('Remember me')
                    ],
              ),
              SizedBox(height: 20,),

              Observer(
                builder: (_){
                return RaisedButton(
        
                  padding: EdgeInsets.all(16),
                  onPressed: () => controller.login(context),
                  child: Text("SIGN IN",
                    style: TextStyle(
                      fontSize: 18,
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    )
                  ),
                  color: Colors.green,
                );

              }),
              SizedBox(height: 10,),
              _buttonSignup(),

              ],
          );
  }

  

  RaisedButton _buttonSignup() {

    return RaisedButton(

      padding: EdgeInsets.all(16),
      onPressed: (){},
      child: Text("SIGN UP",
        style: TextStyle(
          fontSize: 18,
          color: Colors.grey,
          fontWeight: FontWeight.bold,
        )
      ),
      color: Colors.white,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(0.0),
        side: BorderSide(color: Colors.grey)

      ),
      );
  }

 

  Text _textLogin() {
    return Text(
      "Login",
      style: TextStyle(
        color: Color(0xffffc801),
        fontSize: 25,
        fontWeight: FontWeight.w600,
      )
    );
  } 

  
}