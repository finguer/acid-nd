
import { EntityManager, getManager } from 'typeorm';

import {
  Controller,
  Model, __, Log, Post, DbSettings, ReadOnly, Get, Authentication, PxpError,Patch, Delete,Route
} from '@pxp-nd/core';

import PersonModel from './../entity/Person'
@Model('acid/Person')
class Person extends Controller {

  @Get()
  @DbSettings('Orm')
  @ReadOnly(true)
  async read(params: Record<string, unknown>): Promise<any> {
    const [data, count] = await getManager().findAndCount(PersonModel);
    return { data, count };
  }

  @Post()
  @DbSettings('Orm')
  @ReadOnly(false)
  @Log(true)
  async create(params: any, manager: EntityManager): Promise<unknown> {

    const person:any = await manager.save(PersonModel, {
      ...params
    });

   return {success: true, msg:"persona agregada correctamente", person}

  }

  @Patch('/update/:id')
  @DbSettings('Orm')
  @ReadOnly(true)
  async update(params: any): Promise<any> {
    const id = params.id;
    delete params.id;
    await getManager().update(PersonModel, id, {
      ...params
    });

    const person = await getManager().findOne(PersonModel, {
      where: { personId: id }
    });

    return {success: true, msg:"persona cambiada correctamente", person}

  }


  @Delete('/remove/:id')
  @DbSettings('Orm')
  @ReadOnly(true)
  async remove(params: any): Promise<any> {
    const person = await getManager().delete(PersonModel, {
      personId: params.id
    });
    return {success: true, msg:"persona eliminada correctamente", person}

  }




}

export default Person;
