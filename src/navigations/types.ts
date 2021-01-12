import NavigatorMap from './NavigatorMap';

export type AppStackParamsList = {
  [NavigatorMap.UnAuthorizedStack]: undefined;
  [NavigatorMap.AuthorizedStack]: undefined;
};

export type UnAuthorizedStackParamsList = {
  [NavigatorMap.Login]: undefined;
  [NavigatorMap.Register]: undefined;
  [NavigatorMap.ForgotPassword]: undefined;
};
