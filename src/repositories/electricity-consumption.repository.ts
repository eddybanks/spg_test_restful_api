import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ElectricityBillDataSource} from '../datasources';
import {
  ElectricityConsumption,
  ElectricityConsumptionRelations,
} from '../models';

export class ElectricityConsumptionRepository extends DefaultCrudRepository<
  ElectricityConsumption,
  typeof ElectricityConsumption.prototype.id,
  ElectricityConsumptionRelations
> {
  constructor(
    @inject('datasources.electricityBill')
    dataSource: ElectricityBillDataSource,
  ) {
    super(ElectricityConsumption, dataSource);
  }
}
