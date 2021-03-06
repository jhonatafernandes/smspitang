
import 'dart:convert';
import 'package:frontWeb/pages/users/user.dart';
import 'package:frontWeb/utils/api_response.dart';
import 'package:frontWeb/pages/users/user.dart';
import 'package:http/http.dart' as http;


class LoginApi {
  static Future<ApiResponse<dynamic>> login(String email, String password) async {
    try{
      var url = 'http://localhost:3000/signin';

      Map<String, String> headers = {
        "Content-Type": "application/json"
      };
      
      Map params = {
        'email': email, 
        'password': password
        };

      String paramsJson = json.encode(params);

      var response = await http.post(url, body: paramsJson, headers: headers);
      print('Response status: ${response.statusCode}');
      print('Response body: ${response.body}');

      Map jsonResponse = json.decode(response.body);

      if(response.statusCode==200){
          final user = User.fromJson(jsonResponse);

          user.save();

          User user1 = await User.get();

          print("user: ${user1.email}");
        

          return ApiResponse.ok(user);
          // return ApiResponse.ok(user);
      }
      if(response.statusCode == 400){
        return ApiResponse.error(jsonResponse["error"]);
      }
     

    }catch(error, exception){
      print("Erro no login");

      return ApiResponse.error("Erro inesperado!");
    }


    
  }

  static Future<ApiResponse<dynamic>> signup(String username, String email, String password, String confirmPassword) async {
    try{
      var url = 'http://localhost:3000/users';

      Map<String, String> headers = {
        "Content-Type": "application/json"
      };
      
      Map params = {
        'username': username,
        'email': email, 
        'password': password,
        'confirmPassword': confirmPassword
        };

      String paramsJson = json.encode(params);

      var response = await http.post(url, body: paramsJson, headers: headers);

      print('Response status: ${response.statusCode}');
      print('Response body: ${response.body}');

      Map jsonResponse = json.decode(response.body);

      if(response.statusCode==201){
      

          print("respostastatusCode: ${response.statusCode}");
          print("respostaBody: ${response.body}");
        

          return ApiResponse.ok('Usuário cadastrado com sucesso!');
          // return ApiResponse.ok(user);
      }
      if(response.statusCode == 400){
        return ApiResponse.error(jsonResponse["error"]);
      }
      
      return ApiResponse.error("Erro inesperado!");
     

    }catch(error, exception){
      print("Erro no login");

      return ApiResponse.error("Erro inesperado!");
    }


    
  }
}