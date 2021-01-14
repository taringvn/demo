import {makeAutoObservable} from 'mobx';

type NotiType = 'success' | 'warning' | 'loading';

export default class NotiStore {
  constructor() {
    makeAutoObservable(this);
  }

  variant: NotiType = 'success';

  message: string = '';

  showNoti = (variant: NotiType, message: string) => {
    this.variant = variant;
    this.message = message;
  };

  closeNoti = () => {
    this.message = '';
  };
}
