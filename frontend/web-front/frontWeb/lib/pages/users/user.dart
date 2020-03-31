import 'dart:convert' as convert;

import 'package:frontWeb/utils/Prefs.dart';


class User {
  int id;
  String username;
  String email;
  bool admin;
  Null imageUrl;
  Null deletedAt;

  User(
      {this.id,
      this.username,
      this.email,
      this.admin,
      this.imageUrl,
      this.deletedAt});

  User.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    username = json['username'];
    email = json['email'];
    admin = json['admin'];
    imageUrl = json['imageUrl'];
    deletedAt = json['deletedAt'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['username'] = this.username;
    data['email'] = this.email;
    data['admin'] = this.admin;
    data['imageUrl'] = this.imageUrl;
    data['deletedAt'] = this.deletedAt;
    return data;
  }

  void save() {
    Map map = toJson();

    String json = convert.json.encode(map);

    Prefs.setString("user.prefs", json);
  }

  static Future<User> get() async {
    String json = await Prefs.getString("user.prefs");
    if(json.isEmpty){
      return null;
    }

    Map map = convert.json.decode(json);

    User user = User.fromJson(map);

    return user;
  }
}