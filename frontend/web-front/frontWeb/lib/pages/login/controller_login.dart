import 'dart:js';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:frontWeb/utils/api_response.dart';
import 'package:frontWeb/pages/home/home_page.dart';
import 'package:frontWeb/pages/users/user.dart';
import 'package:frontWeb/pages/users/users_model.dart';
import 'package:frontWeb/utils/nav.dart';
import 'package:mobx/mobx.dart';

part 'controller_login.g.dart';

class controllerLogin = _controllerLoginBase with _$controllerLogin;

abstract class _controllerLoginBase with Store {
  final model = UsersModel();

  


  // String login(){
  //   if()
  // }

   
  // User user = _model.user;

  // if(_model.error != null){
  //   print(_model.error);

  // }

  // if(user != null){

  //   print(user);
  //   push(context, HomePage());
    
  // }else{
  //   print("DEU MERDA !!!");


  //   }
    
  // }

    
  
}