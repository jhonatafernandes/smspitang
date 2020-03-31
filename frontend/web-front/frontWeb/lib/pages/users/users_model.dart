import 'package:flutter/material.dart';
import 'package:frontWeb/utils/api_response.dart';
import 'package:frontWeb/pages/home/home_page.dart';
import 'package:frontWeb/pages/login/login_api.dart';
import 'package:frontWeb/pages/users/user.dart';
import 'package:frontWeb/utils/nav.dart';
import 'package:mobx/mobx.dart';
part 'users_model.g.dart';

class UsersModel = UsersModelBase with _$UsersModel;

abstract  class UsersModelBase with Store{

  @observable
  ApiResponse<dynamic> response;

  @observable
  bool checboxValue=false;
  @action
  changeValue(bool value){
    this.checboxValue = value;
  }
  @computed
  bool get check => checboxValue;

  @observable
  String email;
  @action
  changeEmail(String value) {
    email = value;
    print(email);
  }
  @computed
   String get getEmail => email;

  @observable
  String username;
  @action
  changeUsername(String value) {
    username = value;
    print(username);
  }
  @computed
   String get getUsername => username;

  @observable
  String password;
  @action
  changePassword(String value){
    password = value;
    print(password);
  }
  @computed
  String get pass => password;

  @observable
  String confirmPassword;
  @action
  changeConfirmPassword(String value){
    confirmPassword = value;
    print(confirmPassword);
  }
  @computed
  String get confirmPass => confirmPassword;

  @observable
  Exception error;

  @observable
  String errorText = null;
  @computed
  String get getErrorText => errorText;

  @action
  login(BuildContext context) async{

    errorText = null;
     try{

      if(validatePassword() != null){
        return errorText = validatePassword();
      }

      response = await LoginApi.login(getEmail, pass);

      if(response.ok){
        return push(context, HomePage());
      }
      if(response.msg != null){
        return _alert(context, response.msg);

      }

    }catch(e){
      error = e;
      return response.msg;
    }
  }


  @action
  signup(BuildContext context) async{

    
     try{

      if(validatePassword() != null){
        return errorText = validatePassword();
      } 

      if( validateConfirmPassword() != null){
        return errorText = validateConfirmPassword();
      }

      response = await LoginApi.signup(username, getEmail, pass, confirmPass);

      if(response.ok){
        return push(context, HomePage());
      }
      if(response.msg != null){
        return _alert(context, response.msg);

      }

    }catch(e){
      error = e;
      return response.msg;
    }
  }

  String validateEmail(){
    print("kkkkk");
    if (email== null || email.isEmpty) {
      print("kkkkk");
      return "Este campo é obrigatório";
    }
    return null;
  }


  String validatePassword(){
    if (password.isEmpty || password == null ) {
      return "Digite a senha";
    }
    if (password.length < 8) {
      return "A senha precisa ter pelo menos 8 dígitos";
    }
    return null;
  }

  String validateConfirmPassword(){
    if (confirmPassword.isEmpty || confirmPassword == null ) {
      return "Digite a confirmação de senha";
    }
    if (password != confirmPassword) {
      return "As senhas precisam ser iguais";
    }
    return null;
  }



  _alert(BuildContext context, String responseMsg){
    return showDialog<void>(
    context: context,
    barrierDismissible: false, // user must tap button!
    builder: (BuildContext context) {
      return AlertDialog(
        title: Text('ACESSO NEGADO'),
        content: SingleChildScrollView(
          child: ListBody(
            children: <Widget>[
              Text(responseMsg),
            ],
          ),
        ),
        actions: <Widget>[
          FlatButton(
            child: Text('Tentar novamente'),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
        ],
      );
    }
    );
  }

}