import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'electricityBill',
  connector: 'memory',
  localStorage: '',
  file: './data/electricity_bill_data.csv'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ElectricityBillDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'electricityBill';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.electricityBill', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
