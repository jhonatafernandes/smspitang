// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'users_model.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$UsersModel on UsersModelBase, Store {
  Computed<bool> _$checkComputed;

  @override
  bool get check =>
      (_$checkComputed ??= Computed<bool>(() => super.check)).value;
  Computed<String> _$getEmailComputed;

  @override
  String get getEmail =>
      (_$getEmailComputed ??= Computed<String>(() => super.getEmail)).value;
  Computed<String> _$getUsernameComputed;

  @override
  String get getUsername =>
      (_$getUsernameComputed ??= Computed<String>(() => super.getUsername))
          .value;
  Computed<String> _$passComputed;

  @override
  String get pass =>
      (_$passComputed ??= Computed<String>(() => super.pass)).value;
  Computed<String> _$confirmPassComputed;

  @override
  String get confirmPass =>
      (_$confirmPassComputed ??= Computed<String>(() => super.confirmPass))
          .value;
  Computed<String> _$getErrorTextComputed;

  @override
  String get getErrorText =>
      (_$getErrorTextComputed ??= Computed<String>(() => super.getErrorText))
          .value;

  final _$responseAtom = Atom(name: 'UsersModelBase.response');

  @override
  ApiResponse<dynamic> get response {
    _$responseAtom.context.enforceReadPolicy(_$responseAtom);
    _$responseAtom.reportObserved();
    return super.response;
  }

  @override
  set response(ApiResponse<dynamic> value) {
    _$responseAtom.context.conditionallyRunInAction(() {
      super.response = value;
      _$responseAtom.reportChanged();
    }, _$responseAtom, name: '${_$responseAtom.name}_set');
  }

  final _$checboxValueAtom = Atom(name: 'UsersModelBase.checboxValue');

  @override
  bool get checboxValue {
    _$checboxValueAtom.context.enforceReadPolicy(_$checboxValueAtom);
    _$checboxValueAtom.reportObserved();
    return super.checboxValue;
  }

  @override
  set checboxValue(bool value) {
    _$checboxValueAtom.context.conditionallyRunInAction(() {
      super.checboxValue = value;
      _$checboxValueAtom.reportChanged();
    }, _$checboxValueAtom, name: '${_$checboxValueAtom.name}_set');
  }

  final _$emailAtom = Atom(name: 'UsersModelBase.email');

  @override
  String get email {
    _$emailAtom.context.enforceReadPolicy(_$emailAtom);
    _$emailAtom.reportObserved();
    return super.email;
  }

  @override
  set email(String value) {
    _$emailAtom.context.conditionallyRunInAction(() {
      super.email = value;
      _$emailAtom.reportChanged();
    }, _$emailAtom, name: '${_$emailAtom.name}_set');
  }

  final _$usernameAtom = Atom(name: 'UsersModelBase.username');

  @override
  String get username {
    _$usernameAtom.context.enforceReadPolicy(_$usernameAtom);
    _$usernameAtom.reportObserved();
    return super.username;
  }

  @override
  set username(String value) {
    _$usernameAtom.context.conditionallyRunInAction(() {
      super.username = value;
      _$usernameAtom.reportChanged();
    }, _$usernameAtom, name: '${_$usernameAtom.name}_set');
  }

  final _$passwordAtom = Atom(name: 'UsersModelBase.password');

  @override
  String get password {
    _$passwordAtom.context.enforceReadPolicy(_$passwordAtom);
    _$passwordAtom.reportObserved();
    return super.password;
  }

  @override
  set password(String value) {
    _$passwordAtom.context.conditionallyRunInAction(() {
      super.password = value;
      _$passwordAtom.reportChanged();
    }, _$passwordAtom, name: '${_$passwordAtom.name}_set');
  }

  final _$confirmPasswordAtom = Atom(name: 'UsersModelBase.confirmPassword');

  @override
  String get confirmPassword {
    _$confirmPasswordAtom.context.enforceReadPolicy(_$confirmPasswordAtom);
    _$confirmPasswordAtom.reportObserved();
    return super.confirmPassword;
  }

  @override
  set confirmPassword(String value) {
    _$confirmPasswordAtom.context.conditionallyRunInAction(() {
      super.confirmPassword = value;
      _$confirmPasswordAtom.reportChanged();
    }, _$confirmPasswordAtom, name: '${_$confirmPasswordAtom.name}_set');
  }

  final _$errorAtom = Atom(name: 'UsersModelBase.error');

  @override
  Exception get error {
    _$errorAtom.context.enforceReadPolicy(_$errorAtom);
    _$errorAtom.reportObserved();
    return super.error;
  }

  @override
  set error(Exception value) {
    _$errorAtom.context.conditionallyRunInAction(() {
      super.error = value;
      _$errorAtom.reportChanged();
    }, _$errorAtom, name: '${_$errorAtom.name}_set');
  }

  final _$errorTextAtom = Atom(name: 'UsersModelBase.errorText');

  @override
  String get errorText {
    _$errorTextAtom.context.enforceReadPolicy(_$errorTextAtom);
    _$errorTextAtom.reportObserved();
    return super.errorText;
  }

  @override
  set errorText(String value) {
    _$errorTextAtom.context.conditionallyRunInAction(() {
      super.errorText = value;
      _$errorTextAtom.reportChanged();
    }, _$errorTextAtom, name: '${_$errorTextAtom.name}_set');
  }

  final _$loginAsyncAction = AsyncAction('login');

  @override
  Future login(BuildContext context) {
    return _$loginAsyncAction.run(() => super.login(context));
  }

  final _$signupAsyncAction = AsyncAction('signup');

  @override
  Future signup(BuildContext context) {
    return _$signupAsyncAction.run(() => super.signup(context));
  }

  final _$UsersModelBaseActionController =
      ActionController(name: 'UsersModelBase');

  @override
  dynamic changeValue(bool value) {
    final _$actionInfo = _$UsersModelBaseActionController.startAction();
    try {
      return super.changeValue(value);
    } finally {
      _$UsersModelBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  dynamic changeEmail(String value) {
    final _$actionInfo = _$UsersModelBaseActionController.startAction();
    try {
      return super.changeEmail(value);
    } finally {
      _$UsersModelBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  dynamic changeUsername(String value) {
    final _$actionInfo = _$UsersModelBaseActionController.startAction();
    try {
      return super.changeUsername(value);
    } finally {
      _$UsersModelBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  dynamic changePassword(String value) {
    final _$actionInfo = _$UsersModelBaseActionController.startAction();
    try {
      return super.changePassword(value);
    } finally {
      _$UsersModelBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  dynamic changeConfirmPassword(String value) {
    final _$actionInfo = _$UsersModelBaseActionController.startAction();
    try {
      return super.changeConfirmPassword(value);
    } finally {
      _$UsersModelBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    final string =
        'response: ${response.toString()},checboxValue: ${checboxValue.toString()},email: ${email.toString()},username: ${username.toString()},password: ${password.toString()},confirmPassword: ${confirmPassword.toString()},error: ${error.toString()},errorText: ${errorText.toString()},check: ${check.toString()},getEmail: ${getEmail.toString()},getUsername: ${getUsername.toString()},pass: ${pass.toString()},confirmPass: ${confirmPass.toString()},getErrorText: ${getErrorText.toString()}';
    return '{$string}';
  }
}
