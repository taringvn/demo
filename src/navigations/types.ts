import NavigatorMap from './NavigatorMap';

export type AppStackParamsList = {
  [NavigatorMap.UnAuthorizedStack]: undefined;
  [NavigatorMap.AuthorizedStack]: undefined;
};

export type UnAuthorizedStackParamsList = {
  [NavigatorMap.VerifyAccount]: undefined;
  [NavigatorMap.VerifyPassword]: undefined;
  [NavigatorMap.VerifyOTP]: undefined;
  [NavigatorMap.ForgotPassword]: undefined;

  /** those screens should be move to AuthorizedNavigator in the future */
  [NavigatorMap.Shops]: undefined;
  [NavigatorMap.SetUpAccount]: undefined;
};
