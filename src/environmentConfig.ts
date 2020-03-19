export class EnvironmentConfig {
  private static readonly LOCALHOST = 'http://localhost:8080/';
  private static readonly HEROKU = 'https://interview-prep-app.herokuapp.com/';

  public static readonly basePath = EnvironmentConfig.HEROKU;

}
