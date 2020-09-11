export class PhotoModel {

  constructor(public id: string,
              public transactionId: string,
              public userId: string,
              public type: string,
              public name: string,
              public imageByte: any) {
  }

}
