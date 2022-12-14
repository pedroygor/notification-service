import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async list() {
    const list = await this.prismaService.notification.findMany();
    return list;
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, category, content } = body;

    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
