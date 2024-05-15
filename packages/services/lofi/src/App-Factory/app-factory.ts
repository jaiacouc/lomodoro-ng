export class AppFactory {
  private readonly _s3BucketName: string = '';
  private readonly _ddbTableName: string = '';

  constructor() {
    const processEnv: NodeJS.ProcessEnv = process.env;

    this._s3BucketName = processEnv.S3_BUCKET_NAME;
    this._ddbTableName = processEnv.DDB_TABLE_NAME;
  }

  public getS3BucketName(): string {
    return this._s3BucketName;
  }

  public getDDBTableName(): string {
    return this._ddbTableName;
  }
}
