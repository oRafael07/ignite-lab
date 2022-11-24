import { Controller, Get, UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql'
import { PrismaService } from '../database/prisma/prisma.service';
import { AuthorizationGuard } from './authorization/authorization.guard';

@Resolver('test')
export class TestResolver {
    constructor(
        private db: PrismaService
    ) { }

    @Query(() => String)
    @UseGuards(AuthorizationGuard)
    hello() {
        return 'Hello World'
    }
}
