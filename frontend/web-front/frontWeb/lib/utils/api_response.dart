
class ApiResponse<T>{
  String msg;
  bool ok;
  T result;

  ApiResponse.ok(this.result){
    ok = true;
  }

  ApiResponse.error(this.msg){
    ok = false;
  }
}